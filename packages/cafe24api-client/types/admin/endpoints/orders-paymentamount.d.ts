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
   * 주문의 실결제금액(Orders paymentamount)은 특정 주문의 실제 결제금액에 대한 기능입니다.
   * 1개 혹은 여러 개의 품주에 대한 실제 결제금액과 관련된 정보를 조회할 수 있습니다.
   */
  export interface OrdersPaymentamount {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    order_item_code: any;
    /**
      * @description
      * 품목 정보
      * 
      * 
      */ 
    items: any;
    /**
      * @description
      * 상품구매금액
      * 
      * 
      */ 
    order_price_amount: any;
    /**
      * @description
      * 주문 할인금액
      * 
      * 
      */ 
    order_discount_amount: any;
    /**
      * @description
      * 상품 할인금액
      * 
      * 
      */ 
    item_discount_amount: any;
    /**
      * @description
      * 보조 결제금액
      * 
      * 
      */ 
    additional_payment_amount: any;
    /**
      * @description
      * 품목별 결제금액
      * 
      * 
      */ 
    payment_amount: any;
  }

  export interface RetrieveAPaymentAmountInput {
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
      * 품주코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * @required
      */ 
    order_item_code: any;
  }

  export interface RetrieveAPaymentAmountOutput {
    paymentamount: { 
    shop_no: number;
    order_item_code: string;
    items: { 
    product_price: Cafe24Datetime;
    option_price: Cafe24Datetime;
    quantity: number;
    };
    order_price_amount: Cafe24Datetime;
    order_discount_amount: { 
    membership_discount_amount: string;
    coupon_discount_price: string;
    app_discount_amount: string;
    };
    item_discount_amount: { 
    additional_discount_price: string;
    coupon_discount_price: string;
    app_discount_amount: string;
    };
    additional_payment_amount: string;
    payment_amount: Cafe24Datetime;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 주문에 포함된 1개 혹은 여러 개의 품주에 대한 실제 결제금액과 관련된 정보를 목록으로 조회할 수 있습니다.
     * 상품구매금액, 상품할인금액 등의 값을 조회할 수 있습니다.
     * **할인금액 자동계산을 사용하지 않는 품주는 조회할 수 없습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-payment-amount
     *
     * @example 응답 예시
     * ```json
     * {
     *     "paymentamount": [
     *         {
     *             "shop_no": 1,
     *             "order_item_code": "20210511-0000011-01",
     *             "items": {
     *                 "product_price": "9000.00",
     *                 "option_price": "1000.00",
     *                 "quantity": 1
     *             },
     *             "order_price_amount": "10000.00",
     *             "order_discount_amount": {
     *                 "membership_discount_amount": "0.00",
     *                 "coupon_discount_price": "0.00",
     *                 "app_discount_amount": "0.00"
     *             },
     *             "item_discount_amount": {
     *                 "additional_discount_price": "300.00",
     *                 "coupon_discount_price": "0.00",
     *                 "app_discount_amount": "0.00"
     *             },
     *             "additional_payment_amount": "200.00",
     *             "payment_amount": "9500.00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "order_item_code": "20210511-0000022-01",
     *             "items": {
     *                 "product_price": "5000.00",
     *                 "option_price": "0.00",
     *                 "quantity": 1
     *             },
     *             "order_price_amount": "5000.00",
     *             "order_discount_amount": {
     *                 "membership_discount_amount": "0.00",
     *                 "coupon_discount_price": "0.00",
     *                 "app_discount_amount": "0.00"
     *             },
     *             "item_discount_amount": {
     *                 "additional_discount_price": "200.00",
     *                 "coupon_discount_price": "0.00",
     *                 "app_discount_amount": "0.00"
     *             },
     *             "additional_payment_amount": "100.00",
     *             "payment_amount": "4700.00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAPaymentAmount(
      input: RetrieveAPaymentAmountInput,
      options?: AdminRequestOptions<RetrieveAPaymentAmountOutput['paymentamount'][number]>,
    ): Promise<AxiosResponse<RetrieveAPaymentAmountOutput>>;
  }
}
