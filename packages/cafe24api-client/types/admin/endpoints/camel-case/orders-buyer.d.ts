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
   * 주문자(Buyer)는 쇼핑몰의 상품을 주문한 사람을 나타냅니다.
   * 주문자 리소스를 통해 특정 주문의 주문자의 이름, 주소, 전화번호, 이메일 등의 정보를 조회하거나 수정할 수 있습니다.
   */
  export interface OrdersBuyer {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
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
     * 주문당시 주문자 회원 등급 번호
     *
     *
     */
    memberGroupNo: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    name: any;
    /**
     * @description
     * 주문자 이름 후리가나
     *
     *
     */
    namesFurigana: any;
    /**
     * @description
     * 주문자 이메일
     *
     * 해당 회원의 이메일
     *
     *
     */
    email: any;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    phone: any;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    cellphone: any;
    /**
     * @description
     * 고객 알림
     *
     * 고객에게 알릴 문구
     *
     *
     */
    customerNotification: any;
    /**
     * @description
     * 수정일
     *
     *
     */
    updatedDate: any;
    /**
     * @description
     * 주문자 수정자 ID
     *
     * 주문자정보를 수정한 사람의 ID
     *
     *
     */
    userId: any;
    /**
     * @description
     * 주문자 수정자 명
     *
     * 주문자정보를 수정한 사람의 이름
     *
     *
     */
    userName: any;
    /**
     * @description
     * 상호명
     *
     *
     */
    companyName: any;
    /**
     * @description
     * 사업자등록번호
     *
     *
     */
    companyRegistrationNo: any;
    /**
     * @description
     * 주문자 우편번호
     *
     *
     */
    buyerZipcode: any;
    /**
     * @description
     * 주문자 기본주소
     *
     *
     */
    buyerAddress1: any;
    /**
     * @description
     * 주문자 상세주소
     *
     *
     */
    buyerAddress2: any;
    /**
     * @description
     * 주문번호
     *
     * 주문번호
     */
    orderId: any;
  }

  export interface RetrieveCustomerDetailsOfAnOrderInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
  }

  export interface RetrieveCustomerDetailsOfAnOrderOutput {
    buyer: {
      shopNo: number;
      memberId: string;
      memberGroupNo: number;
      name: string;
      namesFurigana: string;
      email: string;
      phone: string;
      cellphone: string;
      customerNotification: string;
      updatedDate: Cafe24Datetime;
      userId: string;
      userName: string;
      companyName: string;
      companyRegistrationNo: string;
      buyerZipcode: Cafe24Datetime;
      buyerAddress1: string;
      buyerAddress2: Cafe24Datetime;
    };
  }
  export interface UpdateCustomerInformationOfAnOrderInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    name?: any;
    /**
     * @description
     * 주문자 이메일
     *
     * 해당 회원의 이메일
     *
     * 이메일
     */
    email?: any;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    phone?: any;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    cellphone?: any;
    /**
     * @description
     * 고객 알림
     *
     * 고객에게 알릴 문구
     *
     *
     */
    customerNotification?: any;
  }

  export interface UpdateCustomerInformationOfAnOrderOutput {
    buyer: {
      shopNo: number;
      orderId: string;
      name: string;
      email: string;
      phone: string;
      cellphone: string;
      customerNotification: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문의 주문자 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-customer-details-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "buyer": {
     *         "shop_no": 1,
     *         "member_id": "sampleid",
     *         "member_group_no": 1,
     *         "name": "Floyd Mayweather",
     *         "names_furigana": "John Doe",
     *         "email": "sample@gmail.com",
     *         "phone": "02-0000-0000",
     *         "cellphone": "010-0000-0000",
     *         "customer_notification": "Customer Notify Sample",
     *         "updated_date": "2018-09-03T17:20:49+09:00",
     *         "user_id": "sampleid",
     *         "user_name": "John Doe",
     *         "company_name": "sample business name",
     *         "company_registration_no": "123-45-67890",
     *         "buyer_zipcode": "01234",
     *         "buyer_address1": "sample street New York",
     *         "buyer_address2": "34"
     *     }
     * }
     * ```
     */
    retrieveCustomerDetailsOfAnOrder(
      input: RetrieveCustomerDetailsOfAnOrderInput,
      options?: AdminRequestOptions<
        RetrieveCustomerDetailsOfAnOrderOutput['buyer']
      >,
    ): Promise<AxiosResponse<RetrieveCustomerDetailsOfAnOrderOutput>>;
    /**
     * @description
     * 특정 주문의 주문자 정보를 수정할 수 있습니다.
     * 주문자명, 주문자 휴대 전화 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-customer-information-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "buyer": {
     *         "shop_no": 1,
     *         "order_id": "20180903-0000243",
     *         "name": "Floyd Mayweather",
     *         "email": "sample@gmail.com",
     *         "phone": "02-0000-0000",
     *         "cellphone": "010-0000-0000",
     *         "customer_notification": "Customer Notify Sample"
     *     }
     * }
     * ```
     */
    updateCustomerInformationOfAnOrder(
      input: UpdateCustomerInformationOfAnOrderInput,
      options?: AdminRequestOptions<
        UpdateCustomerInformationOfAnOrderOutput['buyer']
      >,
    ): Promise<AxiosResponse<UpdateCustomerInformationOfAnOrderOutput>>;
  }
}
