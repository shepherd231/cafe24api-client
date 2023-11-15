import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 정기배송 설정(Subscription shipments setting)은 정기결제를 통해 이루어지는 정기배송에 대한 기능입니다.
   * 정기배송 설정을 통해 쇼핑몰의 정기배송 상품을 설정하거나 정기배송 상품을 조회할 수 있습니다.
   * 정기배송 기능을 사용하기 위해서는 먼저 정기배송 서비스가 신청되어 있어야 합니다.
   * 정기배송 서비스의 신청은 어드민에서 가능합니다.
   */
  export interface SubscriptionShipmentsSetting {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 정기배송 상품설정 번호
     *
     *
     */
    subscription_no: any;
    /**
     * @description
     * 정기배송 상품설정 명
     *
     *
     */
    subscription_shipments_name: any;
    /**
     * @description
     * 정기배송 상품 설정
     *
     * A : 전체상품
     * P : 개별상품
     * C : 상품분류
     *
     *
     */
    product_binding_type: any;
    /**
     * @description
     * 1회구매 제공여부
     *
     * T : 제공함
     * F : 제공안함
     *
     *
     */
    one_time_purchase: any;
    /**
     * @description
     * 적용 상품
     *
     *
     */
    product_list: any;
    /**
     * @description
     * 적용 분류
     *
     *
     */
    category_list: any;
    /**
     * @description
     * 정기배송 할인 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_discount: any;
    /**
     * @description
     * 할인 기준
     *
     * P : 할인율
     * W : 할인 금액
     *
     *
     */
    discount_value_unit: any;
    /**
     * @description
     * 할인 값
     *
     *
     */
    discount_values: any;
    /**
     * @description
     * 구매수량 관계 여부
     *
     * T : 구매수량에 따라
     * F : 구매수량에 관계없이
     *
     *
     */
    related_purchase_quantity: any;
    /**
     * @description
     * 배송주기 제공여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    subscription_shipments_cycle_type: any;
    /**
     * @description
     * 배송주기
     *
     * 1W : 1주
     * 2W : 2주
     * 3W : 3주
     * 4W : 4주
     * 1M : 1개월
     * 2M : 2개월
     * 3M : 3개월
     * 4M : 4개월
     * 5M : 5개월
     * 6M : 6개월
     * 1Y : 1년
     *
     *
     */
    subscription_shipments_cycle: any;
    /**
     * @description
     * 혜택제공금액기준 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_order_price_condition: any;
    /**
     * @description
     * 혜택제공금액기준 제공 기준금액
     *
     *
     */
    order_price_greater_than: any;
    /**
     * @description
     * 지역별배송비 포함여부
     *
     * T : 포함
     * F : 미포함
     *
     *
     */
    include_regional_shipping_rate: any;
    /**
     * @description
     * 배송시작일 설정
     *
     * 최소값: [1]
     * 최대값: [30]
     */
    shipments_start_date: any;
  }

  export interface RetrieveAListOfSubscriptionProductsInput {
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
     * 정기배송 상품설정 번호
     *
     *
     */
    subscription_no?: any;
  }

  export interface RetrieveAListOfSubscriptionProductsOutput {
    shipments: {
      shop_no: number;
      subscription_no: number;
      subscription_shipments_name: string;
      product_binding_type: Cafe24Enum;
      one_time_purchase: Cafe24Enum;
      product_list: number[];
      category_list: any;
      use_discount: Cafe24Enum;
      discount_value_unit: Cafe24Enum;
      discount_values: string[];
      subscription_shipments_cycle_type: Cafe24Enum;
      subscription_shipments_cycle: string[];
      use_order_price_condition: Cafe24Enum;
      order_price_greater_than: Cafe24Datetime;
      include_regional_shipping_rate: Cafe24Enum;
      shipments_start_date: number;
    }[];
  }
  export interface CreateASubscriptionPaymentRuleInput {
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
     * 정기배송 상품설정 명
     *
     * @required
     *
     * 최대글자수 : [255자]
     */
    subscription_shipments_name: any;
    /**
     * @description
     * 정기배송 상품 설정
     *
     * A : 전체상품
     * P : 개별상품
     * C : 상품분류
     *
     * @required
     */
    product_binding_type: any;
    /**
     * @description
     * 1회구매 제공여부
     *
     * T : 제공함
     * F : 제공안함
     *
     * @default T
     *
     *
     */
    one_time_purchase?: any;
    /**
     * @description
     * 적용 상품
     *
     * 배열 최대사이즈: [10000]
     */
    product_list?: any;
    /**
     * @description
     * 적용 분류
     *
     * 배열 최대사이즈: [1000]
     */
    category_list?: any;
    /**
     * @description
     * 정기배송 할인 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @required
     */
    use_discount: any;
    /**
     * @description
     * 할인 기준
     *
     * P : 할인율
     * W : 할인 금액
     *
     *
     */
    discount_value_unit?: any;
    /**
     * @description
     * 할인 값
     *
     * discount_value_unit이 P일 경우 최대값 : 100
     * discount_value_unit이 W일 경우 최대값 : 99999999999999
     *
     * 배열 최대사이즈: [40]
     */
    discount_values?: any;
    /**
     * @description
     * 구매수량 관계 여부
     *
     * T : 구매수량에 따라
     * F : 구매수량에 관계없이
     *
     *
     */
    related_purchase_quantity?: any;
    /**
     * @description
     * 배송주기 제공여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @required
     */
    subscription_shipments_cycle_type: any;
    /**
     * @description
     * 배송주기
     *
     * 1W : 1주
     * 2W : 2주
     * 3W : 3주
     * 4W : 4주
     * 1M : 1개월
     * 2M : 2개월
     * 3M : 3개월
     * 4M : 4개월
     * 5M : 5개월
     * 6M : 6개월
     * 1Y : 1년
     *
     * @required
     */
    subscription_shipments_cycle: any;
    /**
     * @description
     * 혜택제공금액기준 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @required
     */
    use_order_price_condition: any;
    /**
     * @description
     * 혜택제공금액기준 제공 기준금액
     *
     * 최대값: [99999999999999]
     */
    order_price_greater_than?: any;
    /**
     * @description
     * 지역별배송비 포함여부
     *
     * T : 포함
     * F : 미포함
     *
     *
     */
    include_regional_shipping_rate?: any;
    /**
     * @description
     * 배송시작일 설정
     *
     * @default 3
     *
     * 최소값: [1]
     * 최대값: [30]
     */
    shipments_start_date?: any;
  }

  export interface CreateASubscriptionPaymentRuleOutput {
    shipment: {
      shop_no: number;
      subscription_no: number;
      subscription_shipments_name: string;
      product_binding_type: Cafe24Enum;
      one_time_purchase: Cafe24Enum;
      product_list: number[];
      category_list: any;
      use_discount: Cafe24Enum;
      discount_value_unit: Cafe24Enum;
      discount_values: string[];
      subscription_shipments_cycle_type: Cafe24Enum;
      subscription_shipments_cycle: string[];
      use_order_price_condition: Cafe24Enum;
      order_price_greater_than: Cafe24Datetime;
      include_regional_shipping_rate: Cafe24Enum;
      shipments_start_date: number;
    };
  }
  export interface UpdateSubscriptionProductsInput {
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
     * 정기배송 상품설정 번호
     *
     * @required
     */
    subscription_no: any;
    /**
     * @description
     * 정기배송 상품설정 명
     *
     * 최대글자수 : [255자]
     */
    subscription_shipments_name?: any;
    /**
     * @description
     * 정기배송 상품 설정
     *
     * A : 전체상품
     * P : 개별상품
     * C : 상품분류
     *
     *
     */
    product_binding_type?: any;
    /**
     * @description
     * 1회구매 제공여부
     *
     * T : 제공함
     * F : 제공안함
     *
     *
     */
    one_time_purchase?: any;
    /**
     * @description
     * 적용 상품
     *
     * 배열 최대사이즈: [10000]
     */
    product_list?: any;
    /**
     * @description
     * 적용 분류
     *
     * 배열 최대사이즈: [1000]
     */
    category_list?: any;
    /**
     * @description
     * 정기배송 할인 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_discount?: any;
    /**
     * @description
     * 할인 기준
     *
     * P : 할인율
     * W : 할인 금액
     *
     *
     */
    discount_value_unit?: any;
    /**
     * @description
     * 할인 값
     *
     * 배열 최대사이즈: [40]
     */
    discount_values?: any;
    /**
     * @description
     * 구매수량 관계 여부
     *
     * T : 구매수량에 따라
     * F : 구매수량에 관계없이
     *
     *
     */
    related_purchase_quantity?: any;
    /**
     * @description
     * 배송주기 제공여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    subscription_shipments_cycle_type?: any;
    /**
     * @description
     * 배송주기
     *
     * 1W : 1주
     * 2W : 2주
     * 3W : 3주
     * 4W : 4주
     * 1M : 1개월
     * 2M : 2개월
     * 3M : 3개월
     * 4M : 4개월
     * 5M : 5개월
     * 6M : 6개월
     * 1Y : 1년
     *
     *
     */
    subscription_shipments_cycle?: any;
    /**
     * @description
     * 혜택제공금액기준 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_order_price_condition?: any;
    /**
     * @description
     * 혜택제공금액기준 제공 기준금액
     *
     * 최대값: [99999999999999]
     */
    order_price_greater_than?: any;
    /**
     * @description
     * 지역별배송비 포함여부
     *
     * T : 포함
     * F : 미포함
     *
     *
     */
    include_regional_shipping_rate?: any;
    /**
     * @description
     * 배송시작일 설정
     *
     * 최소값: [1]
     * 최대값: [30]
     */
    shipments_start_date?: any;
  }

  export interface UpdateSubscriptionProductsOutput {
    shipment: {
      shop_no: number;
      subscription_no: number;
      subscription_shipments_name: string;
      product_binding_type: Cafe24Enum;
      one_time_purchase: Cafe24Enum;
      product_list: number[];
      use_discount: Cafe24Enum;
      discount_value_unit: Cafe24Enum;
      discount_values: string[];
      subscription_shipments_cycle_type: Cafe24Enum;
      subscription_shipments_cycle: string[];
      use_order_price_condition: Cafe24Enum;
      order_price_greater_than: Cafe24Datetime;
      include_regional_shipping_rate: Cafe24Enum;
      shipments_start_date: number;
    };
  }
  export interface DeleteSubscriptionProductsInput {
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
     * 정기배송 상품설정 번호
     *
     * @required
     */
    subscription_no: any;
  }

  export interface DeleteSubscriptionProductsOutput {
    shipment: {
      shop_no: number;
      subscription_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 설정된 정기배송 상품에 대한 정보를 목록으로 조회할 수 있습니다.
     * 정기배송 상품설정 번호, 설정 명, 설정값 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-subscription-products
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipments": [
     *         {
     *             "shop_no": 1,
     *             "subscription_no": 70,
     *             "subscription_shipments_name": "SHIRTS SUBSCRIPTION SHIPMENTS",
     *             "product_binding_type": "P",
     *             "one_time_purchase": "T",
     *             "product_list": [
     *                 11,
     *                 13
     *             ],
     *             "category_list": null,
     *             "use_discount": "T",
     *             "discount_value_unit": "P",
     *             "discount_values": [
     *                 "20.00",
     *                 "11.00"
     *             ],
     *             "subscription_shipments_cycle_type": "T",
     *             "subscription_shipments_cycle": [
     *                 "1M",
     *                 "2M"
     *             ],
     *             "use_order_price_condition": "T",
     *             "order_price_greater_than": "25000.00",
     *             "include_regional_shipping_rate": "F",
     *             "shipments_start_date": 3
     *         },
     *         {
     *             "shop_no": 1,
     *             "subscription_no": 71,
     *             "subscription_shipments_name": "SHIRTS SUBSCRIPTION SHIPMENTS",
     *             "product_binding_type": "P",
     *             "one_time_purchase": "T",
     *             "product_list": [
     *                 11,
     *                 13
     *             ],
     *             "category_list": null,
     *             "use_discount": "T",
     *             "discount_value_unit": "P",
     *             "discount_values": [
     *                 "20.00",
     *                 "11.00"
     *             ],
     *             "subscription_shipments_cycle_type": "T",
     *             "subscription_shipments_cycle": [
     *                 "1M",
     *                 "2M"
     *             ],
     *             "use_order_price_condition": "T",
     *             "order_price_greater_than": "25000.00",
     *             "include_regional_shipping_rate": "F",
     *             "shipments_start_date": 3
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfSubscriptionProducts(
      input: RetrieveAListOfSubscriptionProductsInput,
      options?: RequestOptions<RetrieveAListOfSubscriptionProductsInput>,
    ): Promise<AxiosResponse<RetrieveAListOfSubscriptionProductsOutput>>;
    /**
     * @description
     * 정기배송 상품을 설정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-subscription-payment-rule
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipment": {
     *         "shop_no": 1,
     *         "subscription_no": 70,
     *         "subscription_shipments_name": "SHIRTS SUBSCRIPTION SHIPMENTS",
     *         "product_binding_type": "P",
     *         "one_time_purchase": "T",
     *         "product_list": [
     *             11,
     *             13
     *         ],
     *         "category_list": null,
     *         "use_discount": "T",
     *         "discount_value_unit": "P",
     *         "discount_values": [
     *             "20.00",
     *             "11.00"
     *         ],
     *         "subscription_shipments_cycle_type": "T",
     *         "subscription_shipments_cycle": [
     *             "1M",
     *             "2M"
     *         ],
     *         "use_order_price_condition": "T",
     *         "order_price_greater_than": "25000.00",
     *         "include_regional_shipping_rate": "F",
     *         "shipments_start_date": 3
     *     }
     * }
     * ```
     */
    createASubscriptionPaymentRule(
      input: CreateASubscriptionPaymentRuleInput,
      options?: RequestOptions<CreateASubscriptionPaymentRuleInput>,
    ): Promise<AxiosResponse<CreateASubscriptionPaymentRuleOutput>>;
    /**
     * @description
     * 설정된 정기배송 상품의 정기배송 설정을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-subscription-products
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipment": {
     *         "shop_no": 1,
     *         "subscription_no": 72,
     *         "subscription_shipments_name": "SHIRTS SUBSCRIPTION SHIPMENTS MODIFY",
     *         "product_binding_type": "P",
     *         "one_time_purchase": "T",
     *         "product_list": [
     *             11,
     *             13
     *         ],
     *         "use_discount": "T",
     *         "discount_value_unit": "P",
     *         "discount_values": [
     *             "10.00",
     *             "20.00"
     *         ],
     *         "subscription_shipments_cycle_type": "T",
     *         "subscription_shipments_cycle": [
     *             "3M",
     *             "5M"
     *         ],
     *         "use_order_price_condition": "T",
     *         "order_price_greater_than": "30000.00",
     *         "include_regional_shipping_rate": "F",
     *         "shipments_start_date": 3
     *     }
     * }
     * ```
     */
    updateSubscriptionProducts(
      input: UpdateSubscriptionProductsInput,
      options?: RequestOptions<UpdateSubscriptionProductsInput>,
    ): Promise<AxiosResponse<UpdateSubscriptionProductsOutput>>;
    /**
     * @description
     * 설정된 정기배송 상품의 정기배송 설정을 해제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-subscription-products
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shipment": {
     *         "shop_no": 1,
     *         "subscription_no": 15
     *     }
     * }
     * ```
     */
    deleteSubscriptionProducts(
      input: DeleteSubscriptionProductsInput,
      options?: RequestOptions<DeleteSubscriptionProductsInput>,
    ): Promise<AxiosResponse<DeleteSubscriptionProductsOutput>>;
  }
}
