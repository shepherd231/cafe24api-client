import { Cafe24APIClient } from './client';

export class Cafe24AdminAPIClient extends Cafe24APIClient {
  constructor(options) {
    super(options);
    this.accessToken = options.accessToken;
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  /**
   * @protected
   */
  createHeaders(options) {
    if (!this.accessToken && options?.authorization === undefined) {
      throw new Error('[Cafe24AdminAPIClient] accessToken is required');
    }
    return {
      'Content-Type': options?.contentType || 'application/json',
      Authorization: options?.authorization || `Bearer ${this.accessToken}`,
    };
  }

  static use(endpoint) {
    // See: https://github1s.com/iamkun/dayjs/blob/HEAD/src/index.js
    if (!endpoint.$i) {
      endpoint(Cafe24AdminAPIClient);
      endpoint.$i = true;
    }
  }
}
