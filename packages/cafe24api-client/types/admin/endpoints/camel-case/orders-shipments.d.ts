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
   * 주문의 배송(Shipments)은 주문을 배송처리하기 위해 필요한 배송 정보를 의미합니다.
   * 주문의 배송 정보에는 송장번호와 배송사 정보, 배송 상태 등이 있습니다.
   * 주문의 배송 기능을 활용하여 주문을 배송대기 처리하거나 배송중 처리할 수 있으며 송장번호 등도 수정할 수 있습니다.
   */
  export interface OrdersShipments {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 배송번호
     *
     *
     */
    shippingCode: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: any;
    /**
     * @description
     * 송장번호
     *
     *
     */
    trackingNo: any;
    /**
     * @description
     * 송장번호입력일
     *
     *
     */
    trackingNoUpdatedDate: any;
    /**
     * @description
     * 배송업체 코드
     *
     * shipping_company_code
     *
     *
     */
    shippingCompanyCode: any;
    /**
     * @description
     * 품주 목록
     *
     *
     */
    items: any;
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
     * 품주코드
     *
     *
     */
    orderItemCode: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrierId: any;
    /**
     * @description
     * 주문상태 추가정보
     *
     *
     */
    statusAdditionalInfo: any;
  }

  export interface RetrieveAListOfShippingInformationOfAnOrderInput {
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

  export interface RetrieveAListOfShippingInformationOfAnOrderOutput {
    shipments: {
      shopNo: number;
      shippingCode: string;
      orderId: string;
      trackingNo: Cafe24Datetime;
      trackingNoUpdatedDate: Cafe24Datetime;
      shippingCompanyCode: Cafe24Datetime;
      items: {
        orderItemCode: string;
        status: string;
      }[];
    }[];
  }
  export interface CreateAnOrderShippingInformationInput {
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
     */
    orderId: any;
    /**
     * @description
     * 송장번호
     *
     * @required
     *
     * 최대글자수 : [40자]
     */
    trackingNo: any;
    /**
     * @description
     * 배송업체 코드
     *
     * shipping_company_code
     *
     * @required
     */
    shippingCompanyCode: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    orderItemCode?: any;
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
     * 배송번호
     *
     *
     */
    shippingCode?: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrierId?: any;
  }

  export interface CreateAnOrderShippingInformationOutput {
    shipments: {
      shopNo: number;
      shippingCode: string;
      orderId: string;
      status: string;
      trackingNo: Cafe24Datetime;
      shippingCompanyCode: Cafe24Datetime;
      orderItemCode: string[];
      carrierId: number;
    }[];
  }
  export interface UpdateAnOrderShippingInput {
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
     */
    orderId: any;
    /**
     * @description
     * 배송번호
     *
     * @required
     */
    shippingCode: any;
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
    statusAdditionalInfo?: any;
    /**
     * @description
     * 송장번호
     *
     * tracking_no 사용시 shipping_company_code를 함께 사용해야 하며, 송장번호 수정시 status는 사용 불가
     *
     * 최대글자수 : [40자]
     */
    trackingNo?: any;
    /**
     * @description
     * 배송업체 코드
     *
     * shipping_company_code
     *
     * tracking_no 사용시 shipping_company_code를 함께 사용해야 하며, 송장번호 수정시 status는 사용 불가
     *
     *
     */
    shippingCompanyCode?: any;
  }

  export interface UpdateAnOrderShippingOutput {
    shipment: {
      shopNo: number;
      status: string;
      statusAdditionalInfo: string;
      trackingNo: any;
      shippingCompanyCode: any;
    };
  }
  export interface DeleteAnOrderShippingInput {
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
     */
    orderId: any;
    /**
     * @description
     * 배송번호
     *
     * @required
     */
    shippingCode: any;
  }

  export interface DeleteAnOrderShippingOutput {
    shipment: {
      shopNo: number;
      orderId: string;
      shippingCode: string;
      orderItemCode: string[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 주문에 등록된 배송번호를 목록으로 조회할 수 있습니다.
     * 배송번호, 주문번호, 송장번호 등을 조회할 수 있습니다.
     * 부분배송으로 진행한 경우 주문1건에 배송번호는 여러개일 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-shipping-information-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipments": [
     *         {
     *             "shop_no": 1,
     *             "shipping_code": "D-20180627-0000017-00",
     *             "order_id": "20180627-0000017",
     *             "tracking_no": "101080903",
     *             "tracking_no_updated_date": "2018-09-03T17:20:49+09:00",
     *             "shipping_company_code": "0001",
     *             "items": [
     *                 {
     *                     "order_item_code": "20180627-0000017-01",
     *                     "status": "standby"
     *                 },
     *                 {
     *                     "order_item_code": "20180627-0000017-02",
     *                     "status": "shipping "
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "shipping_code": "D-20180627-0000017-01",
     *             "order_id": "20180627-0000017",
     *             "tracking_no": "101080904",
     *             "tracking_no_updated_date": "2018-09-05T17:20:49+09:00",
     *             "shipping_company_code": "0001",
     *             "items": [
     *                 {
     *                     "order_item_code": "20180627-0000017-03",
     *                     "status": "standby"
     *                 },
     *                 {
     *                     "order_item_code": "20180627-0000017-04",
     *                     "status": "shipping "
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfShippingInformationOfAnOrder(
      input: RetrieveAListOfShippingInformationOfAnOrderInput,
      options?: AdminRequestOptions<
        RetrieveAListOfShippingInformationOfAnOrderOutput['shipments'][number]
      >,
    ): Promise<
      AxiosResponse<RetrieveAListOfShippingInformationOfAnOrderOutput>
    >;
    /**
     * @description
     * 주문에 송장번호 등의 배송정보를 등록하여 주문을 배송대기 시키거나 배송중 처리할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-shipping-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipments": [
     *         {
     *             "shop_no": 1,
     *             "shipping_code": "D-20180627-0000017-00",
     *             "order_id": "20180627-0000017",
     *             "status": "shipping",
     *             "tracking_no": "101080903",
     *             "shipping_company_code": "0001",
     *             "order_item_code": [
     *                 "20180627-0000017-01",
     *                 "20180627-0000017-02"
     *             ],
     *             "carrier_id": 1
     *         }
     *     ]
     * }
     * ```
     */
    createAnOrderShippingInformation(
      input: CreateAnOrderShippingInformationInput,
      options?: AdminRequestOptions<
        CreateAnOrderShippingInformationOutput['shipments'][number]
      >,
    ): Promise<AxiosResponse<CreateAnOrderShippingInformationOutput>>;
    /**
     * @description
     * 주문에 등록된 배송번호의 배송 정보를 수정할 수 있습니다.
     * 주문상태, 배송업체 코드 등을 변경할 수 있습니다.
     * 부분배송으로 진행한 경우 주문1건에 배송번호는 여러개일 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-shipping
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipment": {
     *         "shop_no": 1,
     *         "status": "shipping",
     *         "status_additional_info": "Arrived at Sorting Hub",
     *         "tracking_no": null,
     *         "shipping_company_code": null
     *     }
     * }
     * ```
     */
    updateAnOrderShipping(
      input: UpdateAnOrderShippingInput,
      options?: AdminRequestOptions<UpdateAnOrderShippingOutput['shipment']>,
    ): Promise<AxiosResponse<UpdateAnOrderShippingOutput>>;
    /**
     * @description
     * 주문에 등록된 배송번호를 삭제할 수 있습니다.
     * 부분배송으로 진행한 경우 주문1건에 배송번호는 여러개일 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-an-order-shipping
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipment": {
     *         "shop_no": 1,
     *         "order_id": "20181203-0000021",
     *         "shipping_code": "D-20181203-0000021-00",
     *         "order_item_code": [
     *             "20181203-0000021-01",
     *             "20181203-0000021-02"
     *         ]
     *     }
     * }
     * ```
     */
    deleteAnOrderShipping(
      input: DeleteAnOrderShippingInput,
      options?: AdminRequestOptions<DeleteAnOrderShippingOutput['shipment']>,
    ): Promise<AxiosResponse<DeleteAnOrderShippingOutput>>;
  }
}
