import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 쇼핑몰에 설정된 결제수단을 조회할 수 있습니다.
   */
  export interface Paymentmethods {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 결제수단 코드
      * 
      * 
      */ 
    code: any;
  }

  export interface RetrieveAListOfPaymentMethodsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
  }

  export interface RetrieveAListOfPaymentMethodsOutput {
    paymentmethods: { 
    shop_no: number;
    code: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 설정된 결제수단 목록을 조회합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-payment-methods
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentmethods": [
     *         {
     *             "shop_no": 1,
     *             "code": "cash"
     *         },
     *         {
     *             "shop_no": 1,
     *             "code": "cod"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfPaymentMethods(
      input: RetrieveAListOfPaymentMethodsInput,
      options?: RequestOptions<RetrieveAListOfPaymentMethodsOutput['paymentmethods'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfPaymentMethodsOutput>>;
  }
}
