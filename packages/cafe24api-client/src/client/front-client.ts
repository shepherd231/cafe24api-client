import { RawAxiosRequestHeaders } from 'axios';
import { Cafe24APIClient, Cafe24APIClientOptions, Endpoint } from './client';

export interface Cafe24FrontAPIClientOptions extends Cafe24APIClientOptions {
  clientId?: string;
}

export class Cafe24FrontAPIClient extends Cafe24APIClient {
  private clientId: string;

  constructor(options: Cafe24FrontAPIClientOptions) {
    super(options);
    this.clientId = options.clientId;
  }

  setClientId(clientId: string) {
    this.clientId = clientId;
  }

  protected createHeaders(
    headers?: RawAxiosRequestHeaders,
  ): RawAxiosRequestHeaders {
    return {
      'Content-Type': 'application/json',
      'X-Cafe24-Client-Id': this.clientId,
      ...headers,
    };
  }

  static use(endpoint: Endpoint) {
    // See: https://github1s.com/iamkun/dayjs/blob/HEAD/src/index.js
    if (!endpoint.$i) {
      endpoint(Cafe24FrontAPIClient);
      endpoint.$i = true;
    }
  }
}
