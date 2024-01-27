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
   * 
   * 
   * 쇼핑몰에 설정된 결제수단의 정보를 조회하거나 결제수단의 노출여부를 수정할 수 있습니다.
   */
  export interface PaymentmethodsPaymentproviders {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * PG 이름
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 결제수단 노출여부
      * 
      * T : 노출함
      * F : 노출안함
      * 
      * 
      */ 
    display: any;
  }

  export interface RetrieveAListOfProvidersByPaymentMethodInput {
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
      * @required
      */ 
    code: any;
    /**
      * @description
      * PG 이름
      * 
      * 
      */ 
    name?: any;
    /**
      * @description
      * 결제수단 노출여부
      * 
      * T : 노출함
      * F : 노출안함
      * 
      * 
      */ 
    display?: any;
  }

  export interface RetrieveAListOfProvidersByPaymentMethodOutput {
    paymentproviders: { 
    shop_no: number;
    name: string;
    display: Cafe24Enum;
    }[];
  }
  export interface UpdateTheDisplayStatusOfAPaymentMethodInput {
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
      * @required
      */ 
    code: any;
    /**
      * @description
      * PG 이름
      * 
      * @required
      */ 
    name: any;
    /**
      * @description
      * 결제수단 노출여부
      * 
      * T : 노출함
      * F : 노출안함
      * 
      * @required
      */ 
    display: any;
  }

  export interface UpdateTheDisplayStatusOfAPaymentMethodOutput {
    paymentprovider: { 
    shop_no: number;
    display: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 설정된 결제수단의 정보를 조회합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-providers-by-payment-method
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentproviders": [
     *         {
     *             "shop_no": 1,
     *             "name": "bank",
     *             "display": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "name": "deferpay",
     *             "display": "T"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProvidersByPaymentMethod(
      input: RetrieveAListOfProvidersByPaymentMethodInput,
      options?: AdminRequestOptions<RetrieveAListOfProvidersByPaymentMethodOutput['paymentproviders'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfProvidersByPaymentMethodOutput>>;
    /**
     * @description
     * 쇼핑몰에 설정된 결제수단의 노출여부를 수정합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-the-display-status-of-a-payment-method
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentprovider": {
     *         "shop_no": 1,
     *         "display": "T"
     *     }
     * }
     * ```
     */
    updateTheDisplayStatusOfAPaymentMethod(
      input: UpdateTheDisplayStatusOfAPaymentMethodInput,
      options?: AdminRequestOptions<UpdateTheDisplayStatusOfAPaymentMethodOutput['paymentprovider']>,
    ): Promise<AxiosResponse<UpdateTheDisplayStatusOfAPaymentMethodOutput>>;
  }
}
