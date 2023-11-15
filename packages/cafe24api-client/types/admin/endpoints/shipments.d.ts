import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 배송(Shipments)은 주문의 하위리소스인 주문의 배송(Orders shipments)과 다르게 여러 주문의 배송 정보를 한번에 등록하거나 수정할 수 있습니다.
   * 배송 정보에는 송장번호와 배송사 정보, 배송 상태 등이 있습니다.
   */
  export interface Shipments {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 송장번호
     *
     *
     */
    tracking_no: any;
    /**
     * @description
     * 배송업체 코드
     *
     * shipping_company_code
     *
     *
     */
    shipping_company_code: any;
    /**
     * @description
     * 주문상태
     *
     * standby : 배송대기
     * shipping : 배송중
     * shipped : 배송완료
     *
     *
     */
    status: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id: any;
    /**
     * @description
     * 배송번호
     *
     *
     */
    shipping_code: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    order_item_code: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrier_id: any;
    /**
     * @description
     * 주문상태 추가정보
     *
     *
     */
    status_additional_info: any;
  }

  export interface CreateShippingInformationForMultipleOrdersInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * 송장번호
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    tracking_no: any;
    /**
     * @description
     * 배송업체 코드
     *
     * shipping_company_code
     *
     * @required
     */
    shipping_company_code: any;
    /**
     * @description
     * 주문상태
     *
     * standby : 배송대기
     * shipping : 배송중
     *
     * @required
     */
    status: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id?: any;
    /**
     * @description
     * 배송번호
     *
     *
     */
    shipping_code?: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    order_item_code?: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrier_id?: any;
  }

  export interface CreateShippingInformationForMultipleOrdersOutput {
    shipments: {
      shop_no: number;
      tracking_no: Cafe24Datetime;
      shipping_company_code: Cafe24Datetime;
      status: string;
      order_id: string;
      shipping_code: string;
      order_item_code: string[];
      carrier_id: number;
    }[];
  }
  export interface UpdateMultipleOrderShippingsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * 배송번호
     *
     * @required
     */
    shipping_code: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id?: any;
    /**
     * @description
     * 주문상태
     *
     * status 사용하여 배송상태 수정시 tracking_no, shipping_company_code는 사용 불가
     *
     * standby : 배송대기
     * shipping : 배송중
     * shipped : 배송완료
     *
     *
     */
    status?: any;
    /**
     * @description
     * 주문상태 추가정보
     *
     * 최대글자수 : [30자]
     */
    status_additional_info?: any;
    /**
     * @description
     * 송장번호
     *
     * tracking_no 사용시 shipping_company_code를 함께 사용해야 하며, 송장번호 수정시 status는 사용 불가
     *
     * 최대글자수 : [40자]
     */
    tracking_no?: any;
    /**
     * @description
     * 배송업체 코드
     *
     * 해당 주문의 송장번호와 함께 배송사를 변경할 수 있다.
     *
     * shipping_company_code
     *
     * tracking_no 사용시 shipping_company_code를 함께 사용해야 하며, 송장번호 수정시 status는 사용 불가
     *
     *
     */
    shipping_company_code?: any;
  }

  export interface UpdateMultipleOrderShippingsOutput {
    shipments: {
      shop_no: number;
      shipping_code: string;
      order_id: string;
      status: string;
      status_additional_info: string;
      tracking_no: any;
      shipping_company_code: any;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 복수의 주문에 대하여 송장번호를 등록하여 배송대기나 배송중 상태로 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-shipping-information-for-multiple-orders
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipments": [
     *         {
     *             "shop_no": 1,
     *             "tracking_no": "101080903",
     *             "shipping_company_code": "0001",
     *             "status": "shipping",
     *             "order_id": "20190320-0000024",
     *             "shipping_code": "D-20190320-0000024-00",
     *             "order_item_code": [
     *                 "20190320-0000024-01",
     *                 "20190320-0000024-02"
     *             ],
     *             "carrier_id": 1
     *         },
     *         {
     *             "shop_no": 1,
     *             "tracking_no": "101080904",
     *             "shipping_company_code": "0001",
     *             "status": "shipping",
     *             "order_id": "20190320-0000019",
     *             "shipping_code": "D-20190320-0000019-01",
     *             "order_item_code": [
     *                 "20190320-0000019-01",
     *                 "20190320-0000019-02"
     *             ],
     *             "carrier_id": 1
     *         }
     *     ]
     * }
     * ```
     */
    createShippingInformationForMultipleOrders(
      input: CreateShippingInformationForMultipleOrdersInput,
      options?: RequestOptions<CreateShippingInformationForMultipleOrdersInput>,
    ): Promise<AxiosResponse<CreateShippingInformationForMultipleOrdersOutput>>;
    /**
     * @description
     * 복수의 배송번호에 대하여 주문상태를 변경하거나 송장번호 등을 수정할 수 있습니다.
     * 배송번호는 Create shipments 를 통해 송장번호를 등록해야만 발급받을 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-multiple-order-shippings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipments": [
     *         {
     *             "shop_no": 1,
     *             "shipping_code": "D-20190108-0000791-00",
     *             "order_id": "20190108-0000791",
     *             "status": "shipped",
     *             "status_additional_info": "Arrived at Sorting Hub",
     *             "tracking_no": null,
     *             "shipping_company_code": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "shipping_code": "D-20190108-0000801-00",
     *             "order_id": "20190108-0000801",
     *             "status": "shipped",
     *             "status_additional_info": "Arrived at Sorting Hub",
     *             "tracking_no": null,
     *             "shipping_company_code": null
     *         }
     *     ]
     * }
     * ```
     */
    updateMultipleOrderShippings(
      input: UpdateMultipleOrderShippingsInput,
      options?: RequestOptions<UpdateMultipleOrderShippingsInput>,
    ): Promise<AxiosResponse<UpdateMultipleOrderShippingsOutput>>;
  }
}
