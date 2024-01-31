import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import { merge } from 'merge';
import { TaskQueue, TaskQueueOptions } from '../task-queue';

/**
 * @description
 * Error policy for API requests.
 *
 * - `none`: If error occurs, throw an error.
 * - `all`: If error occurs, return the error response.
 *          Note that this option returns the error response
 *          only if the error is an AxiosError.
 *          Otherwise, it throws an error.
 */
export type ErrorPolicy = 'none' | 'all';

/**
 * @description
 * Fetch policy for API requests.
 *
 * - `none`: Execute the request immediately.
 * - `queue`: The request will be queued to {@link TaskQueue}.
 *            You should provide {@link Cafe24APIClientOptions.taskQueue} option
 *            when creating a client to use this option.
 */
export type FetchPolicy = 'none' | 'queue';

export interface Cafe24APIClientOptions {
  mallId: string;
  taskQueue?: TaskQueueOptions;
  /** @default 'none' */
  errorPolicy?: ErrorPolicy;
  /** @default 'none' */
  fetchPolicy?: FetchPolicy;
}

export abstract class Cafe24APIClient {
  public readonly mallId: string;
  public readonly url: string;
  private readonly taskQueue?: TaskQueue;
  private readonly errorPolicy?: ErrorPolicy;
  private readonly fetchPolicy?: FetchPolicy;
  private isDisposed: boolean;

  constructor(options: Cafe24APIClientOptions) {
    this.mallId = options.mallId;
    this.url = `https://${this.mallId}.cafe24api.com`;
    this.errorPolicy = options?.errorPolicy ?? 'none';
    this.fetchPolicy = options?.fetchPolicy ?? 'none';

    const taskQueueOptions = options?.taskQueue;
    this.taskQueue = taskQueueOptions && new TaskQueue(taskQueueOptions);
    this.taskQueue?.startRunning();

    this.isDisposed = false;
  }

  public get taskQueueEnabled(): boolean {
    return !!this.taskQueue;
  }

  public get disposed(): boolean {
    return this.isDisposed;
  }

  public dispose(): void {
    this.taskQueue?.stopRunning();
    this.isDisposed = true;
  }

  /**
   * @description
   * Create a request body for those APIs
   * that require a request body. (i.e. POST, PUT)
   *
   * @param data
   * @param fields Comma-separated list of fields to include in the response.
   */
  protected createBody(
    data: Record<string, any>,
    fields?: string,
  ): Record<string, any> {
    const { shop_no = 1, ...rest } = data ?? {};
    return {
      shop_no,
      fields,
      request: rest ?? {},
    };
  }

  /**
   * @description
   * Create a request params for those APIs
   * that require a request params. (i.e. GET, DELETE)
   *
   * @param data
   * @param fields Comma-separated list of fields to include in the response.
   */
  protected createParams(
    data: Record<string, any>,
    fields?: string,
  ): Record<string, any> {
    return {
      ...data,
      fields,
    };
  }

  /**
   * @description
   * Create a request headers for API requests.
   */
  protected abstract createHeaders(
    headers?: RawAxiosRequestHeaders,
  ): RawAxiosRequestHeaders;

  protected async createRequest<T extends Record<string, any>>(
    method: HTTPVerb,
    path: string,
    payload: Record<string, any>,
    options: RequestOptions<T>,
  ): Promise<AxiosResponse<T>> {
    // If the client is disposed, throw an error
    if (this.isDisposed) {
      throw new Error('The client is disposed. Create a new client for use.');
    }

    // Get the fetcher for the given method
    const fetcher = this.createFetcher(method);

    // Construct the fetch options
    const fetchOptions = {
      url: this.url + path,
      payload,
      useRawPayload: options?.useRawPayload,
      fields: options?.fields?.join(','),
      headers: options?.headers ?? this.createHeaders(),
      options: options?.requestConfig,
    };

    // Construct the task according to the error policy
    const task: () => Promise<AxiosResponse<T>> =
      (options?.errorPolicy ?? this.errorPolicy) === 'all'
        ? async () => {
            try {
              return await fetcher(fetchOptions);
            } catch (error: any) {
              if (axios.isAxiosError(error)) {
                return error.response;
              }
              throw error;
            }
          }
        : () => fetcher(fetchOptions);

    if (
      this.taskQueueEnabled &&
      (options?.fetchPolicy ?? this.fetchPolicy) === 'queue'
    ) {
      // If the task queue is enabled, add the task to the queue
      // and wait for the task to be executed
      return this.taskQueue.enqueue(task);
    }

    // Else, execute the task immediately
    return task();
  }

  protected createFetcher(method: HTTPVerb): Fetcher {
    let fetcher: Fetcher;
    switch (method) {
      case 'GET':
        fetcher = ({ url, payload, fields, headers, options, useRawPayload }) =>
          axios.get(
            url,
            merge(
              true,
              {
                params: useRawPayload
                  ? payload
                  : this.createParams(payload, fields),
                headers,
              },
              options,
            ),
          );
        break;
      case 'DELETE':
        fetcher = ({ url, payload, fields, headers, options, useRawPayload }) =>
          axios.delete(
            url,
            merge(
              true,
              {
                params: useRawPayload
                  ? payload
                  : this.createParams(payload, fields),
                headers,
              },
              options,
            ),
          );
        break;
      case 'POST':
        fetcher = ({ url, payload, fields, headers, options, useRawPayload }) =>
          axios.post(
            url,
            useRawPayload ? payload : this.createBody(payload, fields),
            merge(true, { headers }, options),
          );
        break;
      case 'PUT':
        fetcher = ({ url, payload, fields, headers, options, useRawPayload }) =>
          axios.put(
            url,
            useRawPayload ? payload : this.createBody(payload, fields),
            merge(true, { headers }, options),
          );
        break;
      case 'PATCH':
        fetcher = ({ url, payload, fields, headers, options, useRawPayload }) =>
          axios.patch(
            url,
            useRawPayload ? payload : this.createBody(payload, fields),
            merge(true, { headers }, options),
          );
        break;
      default:
        throw new Error(`Unknown method: ${method}`);
    }
    return fetcher;
  }
}

export type HTTPVerb = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchOptions<D = any> {
  url: string;
  payload: D;
  fields: string;
  headers: RawAxiosRequestHeaders;
  useRawPayload?: boolean;
  options?: AxiosRequestConfig<D>;
}

type Fetcher = <T = any, R = AxiosResponse<T>, D = any>(
  options: FetchOptions<D>,
) => Promise<R>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Endpoint = ((cls: Function) => void) & {
  $i?: boolean;
};

export interface RequestOptions<Input extends Record<string, any>> {
  /**
   * @description
   * List of fields to include in the response.
   */
  fields?: (keyof Input)[];
  /**
   * @description
   * Additional headers to be included in the request.
   */
  headers?: RawAxiosRequestHeaders;
  /**
   * @description
   * Additional request configurations.
   */
  requestConfig?: AxiosRequestConfig<Input>;
  fetchPolicy?: FetchPolicy;
  errorPolicy?: ErrorPolicy;
  /**
   * @description
   * If true, the payload will be sent as is.
   *
   * INTERNAL USE ONLY
   */
  useRawPayload?: boolean;
}

export interface AdminRequestOptions<Input extends Record<string, any>>
  extends RequestOptions<Input> {
  accessToken?: string;
}
