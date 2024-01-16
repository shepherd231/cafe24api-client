import axios from 'axios';
import urlJoin from '../utils/url-join';

/**
 * @abstract
 */
export class Cafe24APIClient {
  constructor(options) {
    this.mallId = options.mallId;
    this.url = `https://${this.mallId}.cafe24api.com`;
  }

  /**
   * @protected
   */
  createBody(data, fields) {
    const { shop_no = 1, ...rest } = data ?? {};
    return {
      shop_no,
      fields,
      request: rest ?? {},
    };
  }

  /**
   * @protected
   */
  createParams(data, fields) {
    return {
      ...data,
      fields,
    };
  }

  /**
   * @protected
   * @abstract
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createHeaders(headers) {
    throw new Error('Not implemented');
  }

  async createRequest(method, path, payload, options) {
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
