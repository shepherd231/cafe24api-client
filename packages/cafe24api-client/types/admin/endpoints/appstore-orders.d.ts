import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 앱스토어 주문(Appstore orders)은 앱에서 사용 금액이나 기타 금액을 쇼핑몰 운영자에게 부과하기 위한 주문입니다.
   * 앱스토어 주문 생성을 통해 쇼핑몰 운영자에게 결제 필요한 금액을 부과할 수 있으며, 생성된 주문을 조회할 수 있습니다.
   */
  export interface AppstoreOrders {
    /**
     * @description
     * 주문아이디
     *
     * 앱스토어 주문의 주문 ID
     *
     *
     */
    order_id: any;
    /**
     * @description
     * 주문명
     *
     * 앱스토어 주문의 주문 이름. 주문 생성시 지정이 가능하며, 사용자가 결제시 해당 결제의 내용이 무엇인지 알 수 있는 내용이어야 함.
     *
     *
     */
    order_name: any;
    /**
     * @description
     * 주문금액
     *
     * 앱스토어 주문 생성시 결제 요청한 주문 금액
     *
     *
     */
    order_amount: any;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     * PHP : ₱ 페소
     *
     *
     */
    currency: any;
    /**
     * @description
     * Return Url
     *
     * 사용자가 결제 후 이동해야하는 페이지.
     *
     *
     */
    return_url: any;
    /**
     * @description
     * 정기과금 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * 최대글자수 : [1자]
     */
    automatic_payment: any;
    /**
     * @description
     * 주문 생성일
     *
     *
     */
    created_date: any;
    /**
     * @description
     * 결제 Url
     *
     * 사용자가 결제하기 위해 자동으로 이동하는 페이지 주소
     *
     *
     */
    confirmation_url: any;
  }

  export interface RetreiveACafe24StoreOrderInput {
    /**
     * @description
     * 주문번호
     *
     * 조회하고자하는 앱스토어 주문 번호
     *
     *
     */
    order_id?: any;
  }

  export interface RetreiveACafe24StoreOrderOutput {
    order: {
      order_id: string;
      order_name: string;
      order_amount: Cafe24Datetime;
      currency: string;
      return_url: string;
      automatic_payment: Cafe24Enum;
      created_date: Cafe24Datetime;
    };
  }
  export interface CreateACafe24StoreOrderInput {
    /**
     * @description
     * 주문명
     *
     * 앱스토어 주문의 주문 이름. 주문 생성시 지정이 가능하며, 사용자가 결제시 해당 결제의 내용이 무엇인지 알 수 있는 내용이어야 함.
     *
     * @required
     *
     * 최대글자수 : [100자]
     */
    order_name: any;
    /**
     * @description
     * 주문금액
     *
     * 사용자에게 결제 받고자 하는 주문 금액 입력
     *
     * @required
     */
    order_amount: any;
    /**
     * @description
     * Return Url
     *
     * 사용자가 결제 후 이동해야하는 페이지. 결제 완료 페이지 주소를 입력한다.
     *
     * @required
     *
     * 최대글자수 : [250자]
     */
    return_url: any;
    /**
     * @description
     * 정기과금 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     * 최대글자수 : [1자]
     */
    automatic_payment?: any;
  }

  export interface CreateACafe24StoreOrderOutput {
    order: {
      order_id: string;
      order_name: string;
      order_amount: Cafe24Datetime;
      currency: string;
      return_url: string;
      automatic_payment: Cafe24Enum;
      confirmation_url: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 생성된 앱스토어 주문을 조회할 수 있습니다.
     * 주문명, 주문금액, 정기과금 여부 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retreive-a-cafe24-store-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "order": {
     *         "order_id": "cafe24-20180704-100000000",
     *         "order_name": "App Name_Appstore Order Name",
     *         "order_amount": "1000.00",
     *         "currency": "KRW",
     *         "return_url": "https://sample_shop.cafe24.com",
     *         "automatic_payment": "F",
     *         "created_date": "2018-07-04T13:52:49+09:00"
     *     }
     * }
     * ```
     */
    retreiveACafe24StoreOrder(
      input: RetreiveACafe24StoreOrderInput,
      options?: RequestOptions<RetreiveACafe24StoreOrderInput>,
    ): Promise<AxiosResponse<RetreiveACafe24StoreOrderOutput>>;
    /**
     * @description
     * 앱스토어 주문을 생성할 수 있습니다.
     * 앱스토어 주문을 생성하면 앱 사용자(쇼핑몰 운영자)에게 사용 요금을 부과할 수 있습니다.
     * 또한 정기과금으로 부과할지 선택도 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-cafe24-store-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "order": {
     *         "order_id": "cafe24-20180704-100000000",
     *         "order_name": "Appstore Order Name",
     *         "order_amount": "1000.00",
     *         "currency": "KRW",
     *         "return_url": "https://sample_shop.cafe24.com",
     *         "automatic_payment": "F",
     *         "confirmation_url": "https://samplemall.cafe24.com/disp/common/myapps/order?signature=BAhpBBMxojw%3D--d1c0134218f0ff3c0f57cb3b57bcc34e6f170727"
     *     }
     * }
     * ```
     */
    createACafe24StoreOrder(
      input: CreateACafe24StoreOrderInput,
      options?: RequestOptions<CreateACafe24StoreOrderInput>,
    ): Promise<AxiosResponse<CreateACafe24StoreOrderOutput>>;
  }
}
