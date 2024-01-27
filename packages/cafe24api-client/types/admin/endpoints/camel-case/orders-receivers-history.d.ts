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
   * 주문수령자 이력(Orders receivers history)은 특정 주문의 수령자 정보 변경이력에 대한 기능입니다.
   * 수정일(updated_date) 파라메터를 통해 언제 정보가 변경되었는지 확인할 수 있습니다.
   */
  export interface OrdersReceiversHistory {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 최소값: [1]
     */
    shopNo: any;
    /**
     * @description
     * 수령자명
     *
     *
     */
    name: any;
    /**
     * @description
     * 전화번호
     *
     *
     */
    phone: any;
    /**
     * @description
     * 수령자 휴대 전화
     *
     *
     */
    cellphone: any;
    /**
     * @description
     * 우편번호
     *
     *
     */
    zipcode: any;
    /**
     * @description
     * 기본 주소
     *
     *
     */
    address1: any;
    /**
     * @description
     * 상세 주소
     *
     *
     */
    address2: any;
    /**
     * @description
     * 주/도
     *
     *
     */
    addressState: any;
    /**
     * @description
     * 시/군/도시
     *
     *
     */
    addressCity: any;
    /**
     * @description
     * 도로명
     *
     *
     */
    addressStreet: any;
    /**
     * @description
     * 전체주소
     *
     *
     */
    addressFull: any;
    /**
     * @description
     * 수령자명 (영문)
     *
     *
     */
    nameEn: any;
    /**
     * @description
     * 수령자 도시 (영문)
     *
     *
     */
    cityEn: any;
    /**
     * @description
     * 수령자 주 (영문)
     *
     *
     */
    stateEn: any;
    /**
     * @description
     * 수령자 주소 (영문)
     *
     *
     */
    streetEn: any;
    /**
     * @description
     * 국가코드
     *
     *
     */
    countryCode: any;
    /**
     * @description
     * 국가명
     *
     *
     */
    countryName: any;
    /**
     * @description
     * 국가명 (영문)
     *
     *
     */
    countryNameEn: any;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: any;
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
     *
     */
    userId: any;
    /**
     * @description
     * 주문자 수정자 명
     *
     *
     */
    userName: any;
    /**
     * @description
     * 배송번호
     *
     *
     */
    shippingCode: any;
  }

  export interface RetrieveAListOfRecipientHistoryOfAnOrderInput {
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
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
  }

  export interface RetrieveAListOfRecipientHistoryOfAnOrderOutput {
    history: {
      shopNo: number;
      name: string;
      phone: string;
      cellphone: string;
      zipcode: Cafe24Datetime;
      address1: string;
      address2: string;
      addressState: string;
      addressCity: string;
      addressStreet: string;
      addressFull: string;
      nameEn: any;
      cityEn: any;
      stateEn: any;
      streetEn: any;
      countryCode: string;
      countryName: any;
      countryNameEn: any;
      shippingMessage: string;
      updatedDate: Cafe24Datetime;
      userId: string;
      userName: string;
      shippingCode: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문수령자가 변경된 이력과 그 내용을 조회할 수 있습니다.
     * 수령자명, 전화번호, 주소 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-recipient-history-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "history": [
     *         {
     *             "shop_no": 1,
     *             "name": "John Doe",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-0000-0000",
     *             "zipcode": "06258",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "address_state": "STATE",
     *             "address_city": "CITY",
     *             "address_street": "STREET",
     *             "address_full": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea Professional Construction Hall",
     *             "name_en": null,
     *             "city_en": null,
     *             "state_en": null,
     *             "street_en": null,
     *             "country_code": "",
     *             "country_name": null,
     *             "country_name_en": null,
     *             "shipping_message": "Sample shipping message",
     *             "updated_date": "2018-09-03T17:20:49+09:00",
     *             "user_id": "sampleid",
     *             "user_name": "John Doe",
     *             "shipping_code": "D-20180903-0000243-00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "name": "John Doe",
     *             "phone": "02-0000-0000",
     *             "cellphone": "010-0000-0000",
     *             "zipcode": "06258",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "address_state": "STATE",
     *             "address_city": "CITY",
     *             "address_street": "STREET",
     *             "address_full": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea Professional Construction Hall",
     *             "name_en": null,
     *             "city_en": null,
     *             "state_en": null,
     *             "street_en": null,
     *             "country_code": "",
     *             "country_name": null,
     *             "country_name_en": null,
     *             "shipping_message": "Sample shipping message",
     *             "updated_date": "2018-09-03T17:20:49+09:00",
     *             "user_id": "sampleid",
     *             "user_name": "John Doe 2",
     *             "shipping_code": "D-20180903-0000243-01"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfRecipientHistoryOfAnOrder(
      input: RetrieveAListOfRecipientHistoryOfAnOrderInput,
      options?: AdminRequestOptions<
        RetrieveAListOfRecipientHistoryOfAnOrderOutput['history'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfRecipientHistoryOfAnOrderOutput>>;
  }
}
