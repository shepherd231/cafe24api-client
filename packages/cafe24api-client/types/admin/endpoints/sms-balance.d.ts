import { AxiosResponse } from 'axios';
import {
  Endpoint,
  AdminRequestOptions,
  Cafe24Datetime,
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  export interface SmsBalance {
    /**
     * @description
     * SMS 잔여 건수
     *
     *
     */
    balance: any;
    /**
     * @description
     * 단문(SMS) 발송 가능 건수
     *
     *
     */
    sms_count: any;
    /**
     * @description
     * 장문(LMS) 발송 가능 건수
     *
     *
     */
    lms_count: any;
  }

  export interface RetrieveTheSmsBalanceInput {}

  export interface RetrieveTheSmsBalanceOutput {
    sms: {
      balance: Cafe24Datetime;
      sms_count: number;
      lms_count: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-the-sms-balance
     *
     * @example 응답 예시
     * ```json
     * {
     *     "sms": {
     *         "balance": "10.3",
     *         "sms_count": 10,
     *         "lms_count": 3
     *     }
     * }
     * ```
     */
    retrieveTheSmsBalance(
      input?: RetrieveTheSmsBalanceInput,
      options?: AdminRequestOptions<RetrieveTheSmsBalanceOutput['sms']>,
    ): Promise<AxiosResponse<RetrieveTheSmsBalanceOutput>>;
  }
}
