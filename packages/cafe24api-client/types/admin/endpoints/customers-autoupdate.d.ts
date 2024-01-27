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
  export interface CustomersAutoupdate {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    member_id: any;
    /**
     * @description
     * 다음 예상 등급
     *
     *
     */
    next_grade: any;
    /**
     * @description
     * 등급 산정 기간 내 누적 사용 금액
     *
     *
     */
    total_purchase_amount: any;
    /**
     * @description
     * 등급 산정 기간 내 누적 사용 건수
     *
     *
     */
    total_purchase_count: any;
    /**
     * @description
     * 다음 등급까지 필요 금액
     *
     *
     */
    required_purchase_amount: any;
    /**
     * @description
     * 다음 등급까지 필요 건수
     *
     *
     */
    required_purchase_count: any;
  }

  export interface RetrieveCustomerTierAutoUpdateDetailsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shop_no?: any;
    /**
     * @description
     * 회원아이디
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    member_id: any;
  }

  export interface RetrieveCustomerTierAutoUpdateDetailsOutput {
    autoupdate: {
      shop_no: number;
      member_id: string;
      next_grade: string;
      total_purchase_amount: number;
      total_purchase_count: number;
      required_purchase_amount: number;
      required_purchase_count: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-customer-tier-auto-update-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "autoupdate": {
     *         "shop_no": 1,
     *         "member_id": "sampleid",
     *         "next_grade": "VIP",
     *         "total_purchase_amount": 20000,
     *         "total_purchase_count": 2,
     *         "required_purchase_amount": 50000,
     *         "required_purchase_count": 5
     *     }
     * }
     * ```
     */
    retrieveCustomerTierAutoUpdateDetails(
      input: RetrieveCustomerTierAutoUpdateDetailsInput,
      options?: AdminRequestOptions<
        RetrieveCustomerTierAutoUpdateDetailsOutput['autoupdate']
      >,
    ): Promise<AxiosResponse<RetrieveCustomerTierAutoUpdateDetailsOutput>>;
  }
}
