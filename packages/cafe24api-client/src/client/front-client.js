import { Cafe24APIClient } from './client';

export class Cafe24FrontAPIClient extends Cafe24APIClient {
  constructor(options) {
    super(options);
    this.clientId = options.clientId;
  }

  setClientId(clientId) {
    this.clientId = clientId;
  }

  /**
   * @protected
   */
  createHeaders(headers) {
    return {
      'Content-Type': 'application/json',
      'X-Cafe24-Client-Id': this.clientId,
      ...headers,
    };
  }

  static use(endpoint) {
    // See: https://github1s.com/iamkun/dayjs/blob/HEAD/src/index.js
    if (!endpoint.$1) {
      endpoint(Cafe24FrontAPIClient);
      endpoint.$1 = true;
    }
  }
}
