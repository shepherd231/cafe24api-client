import axios, { AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import urlJoin from 'url-join';

type HTTPVerb = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Endpoint = ((cls: Function) => void) & {
  $i?: boolean;
};

export interface RequestOptions<Input extends Record<string, any>> {
  fields?: (keyof Input)[];
  headers?: RawAxiosRequestHeaders;
}

export interface Cafe24APIClientOptions {
  mallId: string;
}

export abstract class Cafe24APIClient {
  private readonly mallId: string;
  private readonly url: string;

  constructor(options: Cafe24APIClientOptions) {
    this.mallId = options.mallId;
    this.url = `https://${this.mallId}.cafe24api.com`;
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
    const url = urlJoin(this.url, path);
    const fields = options?.fields?.join(',');
    const headers = options?.headers ?? this.createHeaders();
    if (['GET', 'DELETE'].includes(method)) {
      let fetcher;
      switch (method) {
        case 'GET':
          fetcher = axios.get;
          break;
        case 'DELETE':
          fetcher = axios.delete;
          break;
        default:
          throw new Error(`Unknown method: ${method}`);
      }
      return fetcher(url, {
        params: this.createParams(payload, fields),
        headers,
      });
    } else {
      let fetcher;
      switch (method) {
        case 'POST':
          fetcher = axios.post;
          break;
        case 'PUT':
          fetcher = axios.put;
          break;
        case 'PATCH':
          fetcher = axios.patch;
          break;
        default:
          throw new Error(`Unknown method: ${method}`);
      }
      return fetcher(url, this.createBody(payload, fields), {
        headers,
      });
    }
  }
}
