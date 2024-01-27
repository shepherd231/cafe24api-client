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
    shop_no: any;
    /**
      * @description
      * 배송번호
      * 
      * 
      */ 
    shipping_code: any;
    /**
      * @description
      * 주문번호
      * 
      * 
      */ 
    order_id: any;
    /**
      * @description
      * 송장번호
      * 
      * 
      */ 
    tracking_no: any;
    /**
      * @description
      * 송장번호입력일
      * 
      * 
      */ 
    tracking_no_updated_date: any;
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

  export interface RetrieveAListOfShippingInformationOfAnOrderInput {
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

  export interface RetrieveAListOfShippingInformationOfAnOrderOutput {
    shipments: { 
    shop_no: number;
    shipping_code: string;
    order_id: string;
    tracking_no: Cafe24Datetime;
    tracking_no_updated_date: Cafe24Datetime;
    shipping_company_code: Cafe24Datetime;
    items: { 
    order_item_code: string;
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
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      */ 
    order_id: any;
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
      * 품주코드
      * 
      * 
      */ 
    order_item_code?: any;
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
    shipping_code?: any;
    /**
      * @description
      * 배송사 아이디
      * 
      * 
      */ 
    carrier_id?: any;
  }

  export interface CreateAnOrderShippingInformationOutput {
    shipments: { 
    shop_no: number;
    shipping_code: string;
    order_id: string;
    status: string;
    tracking_no: Cafe24Datetime;
    shipping_company_code: Cafe24Datetime;
    order_item_code: string[];
    carrier_id: number;
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
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      */ 
    order_id: any;
    /**
      * @description
      * 배송번호
      * 
      * @required
      */ 
    shipping_code: any;
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
      * shipping_company_code 
      * 
      * tracking_no 사용시 shipping_company_code를 함께 사용해야 하며, 송장번호 수정시 status는 사용 불가
      * 
      * 
      */ 
    shipping_company_code?: any;
  }

  export interface UpdateAnOrderShippingOutput {
    shipment: { 
    shop_no: number;
    status: string;
    status_additional_info: string;
    tracking_no: any;
    shipping_company_code: any;
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
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      */ 
    order_id: any;
    /**
      * @description
      * 배송번호
      * 
      * @required
      */ 
    shipping_code: any;
  }

  export interface DeleteAnOrderShippingOutput {
    shipment: { 
    shop_no: number;
    order_id: string;
    shipping_code: string;
    order_item_code: string[];
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
      options?: AdminRequestOptions<RetrieveAListOfShippingInformationOfAnOrderOutput['shipments'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfShippingInformationOfAnOrderOutput>>;
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
      options?: AdminRequestOptions<CreateAnOrderShippingInformationOutput['shipments'][number]>,
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
