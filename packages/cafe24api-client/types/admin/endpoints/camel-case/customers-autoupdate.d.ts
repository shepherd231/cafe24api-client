import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

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
    shopNo: any;
    /**
      * @description
      * 회원아이디
      * 
      * 
      */ 
    memberId: any;
    /**
      * @description
      * 다음 예상 등급
      * 
      * 
      */ 
    nextGrade: any;
    /**
      * @description
      * 등급 산정 기간 내 누적 사용 금액
      * 
      * 
      */ 
    totalPurchaseAmount: any;
    /**
      * @description
      * 등급 산정 기간 내 누적 사용 건수
      * 
      * 
      */ 
    totalPurchaseCount: any;
    /**
      * @description
      * 다음 등급까지 필요 금액
      * 
      * 
      */ 
    requiredPurchaseAmount: any;
    /**
      * @description
      * 다음 등급까지 필요 건수
      * 
      * 
      */ 
    requiredPurchaseCount: any;
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
    shopNo?: any;
    /**
      * @description
      * 회원아이디
      * 
      * @required
      * 
      * 최대글자수 : [20자]
      */ 
    memberId: any;
  }

  export interface RetrieveCustomerTierAutoUpdateDetailsOutput {
    autoupdate: { 
    shopNo: number;
    memberId: string;
    nextGrade: string;
    totalPurchaseAmount: number;
    totalPurchaseCount: number;
    requiredPurchaseAmount: number;
    requiredPurchaseCount: number;
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
      options?: RequestOptions<RetrieveCustomerTierAutoUpdateDetailsOutput['autoupdate']>,
    ): Promise<AxiosResponse<RetrieveCustomerTierAutoUpdateDetailsOutput>>;
  }
}
