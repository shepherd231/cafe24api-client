import axios from 'axios';
import urlJoin from 'url-join';

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
      const fetcher = method === 'GET' ? axios.get : axios.delete;
      return fetcher(url, {
        params: this.createParams(payload, fields),
        headers,
      });
    } else {
      const fetcher = method === 'POST' ? axios.post : axios.put;
      return fetcher(url, this.createBody(payload, fields), {
        headers,
      });
    }
  }
}
