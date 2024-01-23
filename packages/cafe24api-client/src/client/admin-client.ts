import { RawAxiosRequestHeaders } from 'axios';
import { Cafe24APIClient, Cafe24APIClientOptions, Endpoint } from './client';

export interface Cafe24AdminAPIClientOptions extends Cafe24APIClientOptions {
  accessToken?: string;
}

export class Cafe24AdminAPIClient extends Cafe24APIClient {
  private accessToken: string;

  constructor(options: Cafe24AdminAPIClientOptions) {
    super(options);
    this.accessToken = options.accessToken;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  protected createHeaders(
    headers?: RawAxiosRequestHeaders,
  ): RawAxiosRequestHeaders {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
      ...headers,
    };
  }

  static use(endpoint: Endpoint) {
    // See: https://github1s.com/iamkun/dayjs/blob/HEAD/src/index.js
    if (!endpoint.$i) {
      endpoint(Cafe24AdminAPIClient);
      endpoint.$i = true;
    }
  }
}
