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
  createHeaders(headers) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
      ...headers,
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
