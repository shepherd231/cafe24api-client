import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  export interface Fulfillments {
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
     * 송장번호
     *
     *
     */
    trackingNo: any;
    /**
     * @description
     * 배송업체 코드
     *
     *
     */
    shippingCompanyCode: any;
    /**
     * @description
     * 주문상태
     *
     * standby : 배송대기
     * shipping : 배송중
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
    orderId: any;
    /**
     * @description
     * 배송번호
     *
     *
     */
    shippingCode: any;
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
     * 우체국 택배연동
     *
     *
     */
    postExpressFlag: any;
  }

  export interface CreateShippingInformationForMultipleOrdersViaFulfillmentInput {
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
     * 송장번호
     *
     * @required
     *
     * 최대글자수 : [30자]
     */
    trackingNo: any;
    /**
     * @description
     * 배송업체 코드
     *
     * @required
     */
    shippingCompanyCode: any;
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
    orderId?: any;
    /**
     * @description
     * 배송번호
     *
     *
     */
    shippingCode?: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    orderItemCode?: any;
    /**
     * @description
     * 배송사 아이디
     *
     *
     */
    carrierId?: any;
    /**
     * @description
     * 우체국 택배연동
     *
     * S : 송장 전송 완료
     *
     *
     */
    postExpressFlag?: any;
  }

  export interface CreateShippingInformationForMultipleOrdersViaFulfillmentOutput {
    fulfillments: {
      shopNo: number;
      trackingNo: Cafe24Datetime;
      shippingCompanyCode: Cafe24Datetime;
      status: string;
      orderId: string;
      shippingCode: string;
      orderItemCode: string[];
      carrierId: number;
      postExpressFlag: Cafe24Enum;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-shipping-information-for-multiple-orders-via-fulfillment
     *
     * @example 응답 예시
     * ```json
     * {
     *     "fulfillments": [
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
     *             "carrier_id": 1,
     *             "post_express_flag": "S"
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
     *             "carrier_id": 1,
     *             "post_express_flag": "S"
     *         }
     *     ]
     * }
     * ```
     */
    createShippingInformationForMultipleOrdersViaFulfillment(
      input: CreateShippingInformationForMultipleOrdersViaFulfillmentInput,
      options?: RequestOptions<
        CreateShippingInformationForMultipleOrdersViaFulfillmentOutput['fulfillments'][number]
      >,
    ): Promise<
      AxiosResponse<CreateShippingInformationForMultipleOrdersViaFulfillmentOutput>
    >;
  }
}
