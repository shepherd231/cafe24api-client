import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 회원의 결제수단정보(Customers paymentinformation)는 회원이 결제한 결제수단에 대해 목록조회, 삭제가 가능합니다.
   */
  export interface CustomersPaymentinformation {
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
     * 최대글자수 : [20자]
     */
    memberId: any;
    /**
     * @description
     * 결제수단명
     *
     *
     */
    paymentMethod: any;
    /**
     * @description
     * PG 이름
     *
     *
     */
    paymentGateway: any;
    /**
     * @description
     * 생성일
     *
     *
     */
    createdDate: any;
  }

  export interface RetrieveACustomerSListOfPaymentMethodsInput {
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

  export interface RetrieveACustomerSListOfPaymentMethodsOutput {
    paymentinformation: {
      shopNo: number;
      memberId: string;
      paymentMethod: string;
      paymentGateway: string;
      createdDate: Cafe24Datetime;
    }[];
  }
  export interface DeleteCustomerSPaymentInformationInput {
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

  export interface DeleteCustomerSPaymentInformationOutput {
    paymentinformation: {
      shopNo: number;
      memberId: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 회원이 사용한 결제수단의 내역을 목록으로 조회할 수 있습니다.
     * 결제수단명, PG이름 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-customer-s-list-of-payment-methods
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentinformation": [
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid",
     *             "payment_method": "card",
     *             "payment_gateway": "inicis",
     *             "created_date": "2020-08-24T18:35:05+09:00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid",
     *             "payment_method": "tcash",
     *             "payment_gateway": "inicis",
     *             "created_date": "2020-08-25T18:35:05+09:00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveACustomerSListOfPaymentMethods(
      input: RetrieveACustomerSListOfPaymentMethodsInput,
      options?: RequestOptions<RetrieveACustomerSListOfPaymentMethodsInput>,
    ): Promise<AxiosResponse<RetrieveACustomerSListOfPaymentMethodsOutput>>;
    /**
     * @description
     * 특정 회원이 사용한 결제수단의 내역을 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-customer-s-payment-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentinformation": {
     *         "shop_no": 1,
     *         "member_id": "sampleid"
     *     }
     * }
     * ```
     */
    deleteCustomerSPaymentInformation(
      input: DeleteCustomerSPaymentInformationInput,
      options?: RequestOptions<DeleteCustomerSPaymentInformationInput>,
    ): Promise<AxiosResponse<DeleteCustomerSPaymentInformationOutput>>;
  }
}
