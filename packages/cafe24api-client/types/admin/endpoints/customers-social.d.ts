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
  /**
   * @description
   * 회원의 SNS(Customers social)는 특정 회원에게 연동된 SNS 계정의 정보를 조회할 수 있는 기능입니다.
   */
  export interface CustomersSocial {
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
     * 연동 된 SNS명
     *
     *
     */
    social_name: any;
    /**
     * @description
     * 연동 된 SNS 제공코드
     *
     *
     */
    social_member_code: any;
    /**
     * @description
     * 연동 날짜
     *
     *
     */
    linked_date: any;
  }

  export interface RetrieveACustomerSSocialAccountInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * 회원아이디
     *
     * @required
     */
    member_id: any;
  }

  export interface RetrieveACustomerSSocialAccountOutput {
    social: {
      shop_no: number;
      member_id: string;
      social_name: string;
      social_member_code: string;
      linked_date: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 회원에게 연동된 SNS 계정의 정보를 목록으로 조회할 수 있습니다.
     * 연동 된 SNS명과 연동 날짜 등을 조회할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-customer-s-social-account
     *
     * @example 응답 예시
     * ```json
     * {
     *     "social": {
     *         "shop_no": 1,
     *         "member_id": "sampleid",
     *         "social_name": "line",
     *         "social_member_code": "U1e0014229a08c2f95e12ee29904da597",
     *         "linked_date": "2019-02-18T13:03:11+09:00"
     *     }
     * }
     * ```
     */
    retrieveACustomerSSocialAccount(
      input: RetrieveACustomerSSocialAccountInput,
      options?: AdminRequestOptions<
        RetrieveACustomerSSocialAccountOutput['social']
      >,
    ): Promise<AxiosResponse<RetrieveACustomerSSocialAccountOutput>>;
  }
}
