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
   * Financials store(상점의 거래정보)는 상점의 PG사별 거래정보를 제공합니다.
   */
  export interface FinancialsStore {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 최초 결제일
      * 
      * 
      */ 
    first_payment_date: any;
    /**
      * @description
      * PG 이름
      * 
      * 
      */ 
    payment_gateway_name: any;
  }

  export interface RetrieveTheTransactionInformationOfAStoreInput {
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
      * 결제수단 코드
      * 
      * card : 신용카드
      * tcash : 계좌이체
      * icash : 가상계좌
      * cell : 휴대폰
      * deferpay : 후불
      * cvs : 편의점
      * point : 선불금
      * etc : 기타
      * 
      * @required
      */ 
    payment_method: any;
  }

  export interface RetrieveTheTransactionInformationOfAStoreOutput {
    store: { 
    shop_no: number;
    first_payment_date: Cafe24Date;
    payment_gateway_name: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상점의 결제수단별 거래정보를 조회할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-the-transaction-information-of-a-store
     *
     * @example 응답 예시
     * ```json
     * {
     *     "store": {
     *         "shop_no": 1,
     *         "first_payment_date": "2020-01-01",
     *         "payment_gateway_name": "cafe24payTest"
     *     }
     * }
     * ```
     */
    retrieveTheTransactionInformationOfAStore(
      input: RetrieveTheTransactionInformationOfAStoreInput,
      options?: AdminRequestOptions<RetrieveTheTransactionInformationOfAStoreOutput['store']>,
    ): Promise<AxiosResponse<RetrieveTheTransactionInformationOfAStoreOutput>>;
  }
}
