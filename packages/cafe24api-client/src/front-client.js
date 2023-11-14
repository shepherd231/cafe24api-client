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
  createHeaders(options) {
    if (!this.clientId) {
      throw new Error('[Cafe24FrontAPIClient] clientId is required');
    }
    return {
      'Content-Type': options?.contentType || 'application/json',
      'X-Cafe24-Client-Id': this.clientId,
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
