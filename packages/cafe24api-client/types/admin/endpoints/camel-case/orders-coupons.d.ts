import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 주문 쿠폰(Orders coupons)은 주문에 적용된 쿠폰에 관한 기능입니다.
   * 특정 주문에 대해 적용된 쿠폰의 정보를 조회할 수 있습니다.
   */
  export interface OrdersCoupons {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    orderItemCode: any;
    /**
     * @description
     * 쿠폰명
     *
     *
     */
    couponName: any;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponCode: any;
    /**
     * @description
     * 쿠폰 비율
     *
     *
     */
    couponPercent: any;
    /**
     * @description
     * 쿠폰 금액
     *
     *
     */
    couponValue: any;
    /**
     * @description
     * 최종 쿠폰 금액
     *
     *
     */
    couponValueFinal: any;
  }

  export interface RetrieveAListOfCouponsAppliedToAnOrderInput {
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
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [500]
     */
    limit?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
  }

  export interface RetrieveAListOfCouponsAppliedToAnOrderOutput {
    coupons: {
      shopNo: number;
      orderId: string;
      orderItemCode: string;
      couponName: string;
      couponCode: number;
      couponPercent: Cafe24Datetime;
      couponValue: string;
      couponValueFinal: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문에 대해 적용된 쿠폰의 정보를 목록으로 조회할 수 있습니다.
     * 쿠폰번호, 쿠폰비율, 쿠폰금액 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-coupons-applied-to-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "coupons": [
     *         {
     *             "shop_no": 1,
     *             "order_id": "20201005-0000011",
     *             "order_item_code": "20201005-0000011-01",
     *             "coupon_name": "coupon setting name",
     *             "coupon_code": 6069019282400000002,
     *             "coupon_percent": "1%",
     *             "coupon_value": "900.00",
     *             "coupon_value_final": "0.00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_id": "20201005-0000011",
     *             "order_item_code": "20201005-0000011-01",
     *             "coupon_name": "coupon setting name",
     *             "coupon_code": 6069019278500000001,
     *             "coupon_percent": null,
     *             "coupon_value": "500.00",
     *             "coupon_value_final": "0.00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCouponsAppliedToAnOrder(
      input: RetrieveAListOfCouponsAppliedToAnOrderInput,
      options?: RequestOptions<
        RetrieveAListOfCouponsAppliedToAnOrderOutput['coupons'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfCouponsAppliedToAnOrderOutput>>;
  }
}
