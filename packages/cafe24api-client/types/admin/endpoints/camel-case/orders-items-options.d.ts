import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  export interface OrdersItemsOptions {
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
     * 세트상품 여부
     *
     *
     */
    productBundle: any;
    /**
     * @description
     * 추가입력 옵션
     *
     *
     */
    additionalOptions: any;
    /**
     * @description
     * 세트상품 추가입력 옵션
     *
     *
     */
    bundleAdditionalOptions: any;
  }

  export interface CreateOrderItemOptionsInput {
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
    /**
     * @description
     * 품주코드
     *
     * @required
     */
    orderItemCode: any;
    /**
     * @description
     * 세트상품 여부
     *
     * @required
     */
    productBundle: any;
    /**
     * @description
     * 추가입력 옵션
     *
     *
     */
    additionalOptions?: {
      /**
       * @description
       * 추가입력옵션명
       *
       *
       */
      additionalOptionName: any;
      /**
       * @description
       * 추가입력 옵션 값
       *
       *
       */
      additionalOptionValue: any;
    };
    /**
     * @description
     * 세트상품 추가입력 옵션
     *
     *
     */
    bundleAdditionalOptions?: {
      /**
       * @description
       * 품목코드
       *
       *
       */
      variantCode: any;
      additionalOptions?: any[];
    };
  }

  export interface CreateOrderItemOptionsOutput {
    item: {
      shopNo: number;
      orderId: string;
      orderItemCode: string;
      productBundle: Cafe24Enum;
      additionalOptions: {
        additionalOptionName: string;
        additionalOptionValue: string;
      }[];
      bundleAdditionalOptions: any;
    };
  }
  export interface UpdateAnOrderItemInput {
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
    /**
     * @description
     * 품주코드
     *
     * @required
     */
    orderItemCode: any;
    /**
     * @description
     * 추가입력 옵션
     *
     *
     */
    additionalOptions?: {
      /**
       * @description
       * 추가입력옵션명
       *
       *
       */
      additionalOptionName: any;
      /**
       * @description
       * 추가입력 옵션 값
       *
       *
       */
      additionalOptionValue: any;
    };
  }

  export interface UpdateAnOrderItemOutput {
    item: {
      shopNo: number;
      orderId: string;
      orderItemCode: string;
      additionalOptions: {
        additionalOptionName: string;
        additionalOptionValue: string;
      }[];
    };
  }
  export interface DeleteOrderItemOptionsInput {
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
    /**
     * @description
     * 품주코드
     *
     * @required
     */
    orderItemCode: any;
  }

  export interface DeleteOrderItemOptionsOutput {
    item: {
      shopNo: number;
      orderId: string;
      orderItemCode: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#create-order-item-options
     *
     * @example 응답 예시
     * ```json
     * {
     *     "item": {
     *         "shop_no": 1,
     *         "order_id": "20230220-0000105",
     *         "order_item_code": "20230220-0000105-01",
     *         "product_bundle": "F",
     *         "additional_options": [
     *             {
     *                 "additional_option_name": "Pattern1",
     *                 "additional_option_value": "Flower"
     *             },
     *             {
     *                 "additional_option_name": "Pattern2",
     *                 "additional_option_value": "Dot Pattern"
     *             }
     *         ],
     *         "bundle_additional_options": null
     *     }
     * }
     * ```
     */
    createOrderItemOptions(
      input: CreateOrderItemOptionsInput,
      options?: RequestOptions<CreateOrderItemOptionsOutput['item']>,
    ): Promise<AxiosResponse<CreateOrderItemOptionsOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-item
     *
     * @example 응답 예시
     * ```json
     * {
     *     "item": {
     *         "shop_no": 1,
     *         "order_id": "20230220-0000105",
     *         "order_item_code": "20230220-0000105-01",
     *         "additional_options": [
     *             {
     *                 "additional_option_name": "Pattern1",
     *                 "additional_option_value": "Flower Pattern"
     *             },
     *             {
     *                 "additional_option_name": "Pattern2",
     *                 "additional_option_value": "Dot Pattern"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateAnOrderItem(
      input: UpdateAnOrderItemInput,
      options?: RequestOptions<UpdateAnOrderItemOutput['item']>,
    ): Promise<AxiosResponse<UpdateAnOrderItemOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#delete-order-item-options
     *
     * @example 응답 예시
     * ```json
     * {
     *     "item": {
     *         "shop_no": 1,
     *         "order_id": "20230220-0000105",
     *         "order_item_code": "20230220-0000105-01"
     *     }
     * }
     * ```
     */
    deleteOrderItemOptions(
      input: DeleteOrderItemOptionsInput,
      options?: RequestOptions<DeleteOrderItemOptionsOutput['item']>,
    ): Promise<AxiosResponse<DeleteOrderItemOptionsOutput>>;
  }
}
