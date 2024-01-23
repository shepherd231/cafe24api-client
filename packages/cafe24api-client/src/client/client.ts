import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import { merge } from 'merge';
import urlJoin from 'url-join';
import { TaskQueue, TaskQueueOptions } from '../task-queue';

export interface Cafe24APIClientOptions {
  mallId: string;
  taskQueue?: TaskQueueOptions;
}

export abstract class Cafe24APIClient {
  public readonly mallId: string;
  public readonly url: string;
  private readonly taskQueue?: TaskQueue;
  private isDisposed: boolean;

  constructor(options: Cafe24APIClientOptions) {
    this.mallId = options.mallId;
    this.url = `https://${this.mallId}.cafe24api.com`;

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

    // If the task queue is not enabled, just fetch
    if (!this.taskQueueEnabled) {
      return fetcher({
        url: urlJoin(this.url, path),
        payload,
        fields: options?.fields?.join(','),
        headers: options?.headers ?? this.createHeaders(),
      });
    }

    // If the task queue is enabled, add the task to the queue
    // and wait for the task to be executed
    return this.taskQueue.enqueue(() =>
      fetcher({
        url: urlJoin(this.url, path),
        payload,
        fields: options?.fields?.join(','),
        headers: options?.headers ?? this.createHeaders(),
      }),
    );
  }

  protected createFetcher(method: HTTPVerb): Fetcher {
    let fetcher: Fetcher;
    switch (method) {
      case 'GET':
        fetcher = ({ url, payload, fields, headers, options }) =>
          axios.get(
            url,
            merge(
              true,
              { params: this.createParams(payload, fields), headers },
              options,
            ),
          );
        break;
      case 'DELETE':
        fetcher = ({ url, payload, fields, headers, options }) =>
          axios.delete(
            url,
            merge(
              true,
              { params: this.createParams(payload, fields), headers },
              options,
            ),
          );
        break;
      case 'POST':
        fetcher = ({ url, payload, fields, headers, options }) =>
          axios.post(
            url,
            this.createBody(payload, fields),
            merge(true, { headers }, options),
          );
        break;
      case 'PUT':
        fetcher = ({ url, payload, fields, headers, options }) =>
          axios.put(
            url,
            this.createBody(payload, fields),
            merge(true, { headers }, options),
          );
        break;
      case 'PATCH':
        fetcher = ({ url, payload, fields, headers, options }) =>
          axios.patch(
            url,
            this.createBody(payload, fields),
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
  fields?: (keyof Input)[];
  headers?: RawAxiosRequestHeaders;
}
