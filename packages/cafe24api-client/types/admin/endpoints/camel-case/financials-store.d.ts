import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

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
    shopNo: any;
    /**
      * @description
      * 최초 결제일
      * 
      * 
      */ 
    firstPaymentDate: any;
    /**
      * @description
      * PG 이름
      * 
      * 
      */ 
    paymentGatewayName: any;
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
    shopNo?: any;
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
    paymentMethod: any;
  }

  export interface RetrieveTheTransactionInformationOfAStoreOutput {
    store: { 
    shopNo: number;
    firstPaymentDate: Cafe24Date;
    paymentGatewayName: string;
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
      options?: RequestOptions<RetrieveTheTransactionInformationOfAStoreOutput['store']>,
    ): Promise<AxiosResponse<RetrieveTheTransactionInformationOfAStoreOutput>>;
  }
}
