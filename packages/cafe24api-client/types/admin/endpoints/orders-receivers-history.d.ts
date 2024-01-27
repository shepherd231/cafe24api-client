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
    shop_no: any;
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
    address_state: any;
    /**
     * @description
     * 시/군/도시
     *
     *
     */
    address_city: any;
    /**
     * @description
     * 도로명
     *
     *
     */
    address_street: any;
    /**
     * @description
     * 전체주소
     *
     *
     */
    address_full: any;
    /**
     * @description
     * 수령자명 (영문)
     *
     *
     */
    name_en: any;
    /**
     * @description
     * 수령자 도시 (영문)
     *
     *
     */
    city_en: any;
    /**
     * @description
     * 수령자 주 (영문)
     *
     *
     */
    state_en: any;
    /**
     * @description
     * 수령자 주소 (영문)
     *
     *
     */
    street_en: any;
    /**
     * @description
     * 국가코드
     *
     *
     */
    country_code: any;
    /**
     * @description
     * 국가명
     *
     *
     */
    country_name: any;
    /**
     * @description
     * 국가명 (영문)
     *
     *
     */
    country_name_en: any;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shipping_message: any;
    /**
     * @description
     * 수정일
     *
     *
     */
    updated_date: any;
    /**
     * @description
     * 주문자 수정자 ID
     *
     *
     */
    user_id: any;
    /**
     * @description
     * 주문자 수정자 명
     *
     *
     */
    user_name: any;
    /**
     * @description
     * 배송번호
     *
     *
     */
    shipping_code: any;
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
    shop_no?: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    order_id: any;
  }

  export interface RetrieveAListOfRecipientHistoryOfAnOrderOutput {
    history: {
      shop_no: number;
      name: string;
      phone: string;
      cellphone: string;
      zipcode: Cafe24Datetime;
      address1: string;
      address2: string;
      address_state: string;
      address_city: string;
      address_street: string;
      address_full: string;
      name_en: any;
      city_en: any;
      state_en: any;
      street_en: any;
      country_code: string;
      country_name: any;
      country_name_en: any;
      shipping_message: string;
      updated_date: Cafe24Datetime;
      user_id: string;
      user_name: string;
      shipping_code: string;
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
