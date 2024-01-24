import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 주문의 결제타임라인(Orders paymenttimeline)은 특정 주문의 결제에 대한 시간적인 연대표에 대한 기능입니다.
   */
  export interface OrdersPaymenttimeline {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 결제번호
     *
     *
     */
    payment_no: any;
    /**
     * @description
     * 결제유형
     *
     * O : 최초결제
     * R : 추가결제
     * P : 환불
     *
     *
     */
    payment_settle_type: any;
    /**
     * @description
     * 주문금액
     *
     *
     */
    order_amount: any;
    /**
     * @description
     * 보조 결제금액
     *
     *
     */
    additional_payment_amount: any;
    /**
     * @description
     * 결제금액
     *
     *
     */
    paid_amount: any;
    /**
     * @description
     * 결제수단
     *
     *
     */
    payment_methods: any;
    /**
     * @description
     * 결제일
     *
     *
     */
    payment_datetime: any;
    /**
     * @description
     * 입력일
     *
     *
     */
    created_datetime: any;
    /**
     * @description
     * 취소/교환/반품 번호
     *
     *
     */
    claim_code: any;
    /**
     * @description
     * 결제수단별 결제금액
     *
     * payment_method_detail code
     *
     *
     */
    payment_method_detail: any;
    /**
     * @description
     * 주문금액 상세
     *
     * order_amount_detail code
     *
     *
     */
    order_amount_detail: any;
  }

  export interface RetrievePaymentHistoryOfAnOrderInput {
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
     * 검색 시작일
     *
     * 날짜
     */
    start_date?: any;
    /**
     * @description
     * 검색 종료일
     *
     * 날짜
     */
    end_date?: any;
    /**
     * @description
     * 검색날짜 유형
     *
     * 시작일과 종료일 기준으로 기간 검색시 date_type 미입력시 created_datetime 기준으로 검색 진행
     *
     * created_datetime : 입력일
     * payment_datetime : 결제일
     *
     *
     */
    date_type?: any;
  }

  export interface RetrievePaymentHistoryOfAnOrderOutput {
    paymenttimeline: {
      shop_no: number;
      payment_no: number;
      payment_settle_type: Cafe24Enum;
      payment_methods: string[];
      order_amount: Cafe24Datetime;
      additional_payment_amount: Cafe24Datetime;
      paid_amount: Cafe24Datetime;
      payment_datetime: Cafe24Datetime;
      created_datetime: Cafe24Datetime;
      claim_code: any;
    }[];
  }
  export interface RetrievePaymentDetailsOfAnOrderInput {
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
     * 결제번호
     *
     * @required
     *
     * 최소값: [1]
     */
    payment_no: any;
  }

  export interface RetrievePaymentDetailsOfAnOrderOutput {
    paymenttimeline: {
      shop_no: number;
      payment_no: number;
      payment_settle_type: Cafe24Enum;
      order_amount: Cafe24Datetime;
      additional_payment_amount: Cafe24Datetime;
      paid_amount: Cafe24Datetime;
      payment_method_detail: {
        code: number;
        name: string;
        amount: Cafe24Datetime;
      }[];
      order_amount_detail: {
        code: number;
        name: string;
        order_item_code: string;
        supplier_code: string;
        unit_price: Cafe24Datetime;
        quantity: number;
        amount: Cafe24Datetime;
      }[];
      payment_datetime: Cafe24Datetime;
      created_datetime: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문의 전체 결제타임라인을 조회할 수 있습니다.
     * 결제유형, 주문금액, 결제일 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-payment-history-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymenttimeline": [
     *         {
     *             "shop_no": 1,
     *             "payment_no": 4,
     *             "payment_settle_type": "O",
     *             "payment_methods": [
     *                 "cash",
     *                 "point"
     *             ],
     *             "order_amount": "13500.00",
     *             "additional_payment_amount": "3000.00",
     *             "paid_amount": "10500.00",
     *             "payment_datetime": "2020-09-05 21:57:30",
     *             "created_datetime": "2020-09-05 21:53:37",
     *             "claim_code": null
     *         },
     *         {
     *             "payment_no": 7,
     *             "payment_settle_type": "P",
     *             "payment_methods": [
     *                 "point",
     *                 "credit"
     *             ],
     *             "order_amount": "-1000.00",
     *             "additional_payment_amount": "-1000.00",
     *             "paid_amount": "0.00",
     *             "payment_datetime": "2020-09-06 20:29:50",
     *             "created_datetime": "2020-09-06 20:25:23",
     *             "claim_code": "B20221228-0000199"
     *         }
     *     ]
     * }
     * ```
     */
    retrievePaymentHistoryOfAnOrder(
      input: RetrievePaymentHistoryOfAnOrderInput,
      options?: RequestOptions<
        RetrievePaymentHistoryOfAnOrderOutput['paymenttimeline'][number]
      >,
    ): Promise<AxiosResponse<RetrievePaymentHistoryOfAnOrderOutput>>;
    /**
     * @description
     * 특정 주문의 결제번호 1건에 대한 결제타임라인을 조회할 수 있습니다.
     * 결제유형, 주문금액, 결제금액 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-payment-details-of-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymenttimeline": {
     *         "shop_no": 1,
     *         "payment_no": 155,
     *         "payment_settle_type": "O",
     *         "order_amount": "12500.00",
     *         "additional_payment_amount": "2000.00",
     *         "paid_amount": "10500.00",
     *         "payment_method_detail": [
     *             {
     *                 "code": 10100,
     *                 "name": "cash",
     *                 "amount": "10500.00"
     *             },
     *             {
     *                 "code": 10200,
     *                 "name": "point",
     *                 "amount": "2000.00"
     *             }
     *         ],
     *         "order_amount_detail": [
     *             {
     *                 "code": 1101,
     *                 "name": "Item price",
     *                 "order_item_code": "20200905-0000015-01",
     *                 "supplier_code": "SC000001",
     *                 "unit_price": "5000.00",
     *                 "quantity": 2,
     *                 "amount": "10000.00"
     *             },
     *             {
     *                 "code": 5101,
     *                 "name": "Default shipping fee",
     *                 "order_item_code": null,
     *                 "supplier_code": "SC000000",
     *                 "unit_price": "2500.00",
     *                 "quantity": 1,
     *                 "amount": "2500.00"
     *             }
     *         ],
     *         "payment_datetime": "2020-09-05 21:57:30",
     *         "created_datetime": "2020-09-05 21:53:37"
     *     }
     * }
     * ```
     */
    retrievePaymentDetailsOfAnOrder(
      input: RetrievePaymentDetailsOfAnOrderInput,
      options?: RequestOptions<
        RetrievePaymentDetailsOfAnOrderOutput['paymenttimeline']
      >,
    ): Promise<AxiosResponse<RetrievePaymentDetailsOfAnOrderOutput>>;
  }
}
