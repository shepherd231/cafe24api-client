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
  export interface OrdersItemsOptions {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id: any;
    /**
     * @description
     * 품주코드
     *
     *
     */
    order_item_code: any;
    /**
     * @description
     * 세트상품 여부
     *
     *
     */
    product_bundle: any;
    /**
     * @description
     * 추가입력 옵션
     *
     *
     */
    additional_options: any;
    /**
     * @description
     * 세트상품 추가입력 옵션
     *
     *
     */
    bundle_additional_options: any;
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
    /**
     * @description
     * 품주코드
     *
     * @required
     */
    order_item_code: any;
    /**
     * @description
     * 세트상품 여부
     *
     * @required
     */
    product_bundle: any;
    /**
     * @description
     * 추가입력 옵션
     *
     *
     */
    additional_options?: {
      /**
       * @description
       * 추가입력옵션명
       *
       *
       */
      additional_option_name: any;
      /**
       * @description
       * 추가입력 옵션 값
       *
       *
       */
      additional_option_value: any;
    };
    /**
     * @description
     * 세트상품 추가입력 옵션
     *
     *
     */
    bundle_additional_options?: {
      /**
       * @description
       * 품목코드
       *
       *
       */
      variant_code: any;
      additional_options?: any[];
    };
  }

  export interface CreateOrderItemOptionsOutput {
    item: {
      shop_no: number;
      order_id: string;
      order_item_code: string;
      product_bundle: Cafe24Enum;
      additional_options: {
        additional_option_name: string;
        additional_option_value: string;
      }[];
      bundle_additional_options: any;
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
    /**
     * @description
     * 품주코드
     *
     * @required
     */
    order_item_code: any;
    /**
     * @description
     * 추가입력 옵션
     *
     *
     */
    additional_options?: {
      /**
       * @description
       * 추가입력옵션명
       *
       *
       */
      additional_option_name: any;
      /**
       * @description
       * 추가입력 옵션 값
       *
       *
       */
      additional_option_value: any;
    };
  }

  export interface UpdateAnOrderItemOutput {
    item: {
      shop_no: number;
      order_id: string;
      order_item_code: string;
      additional_options: {
        additional_option_name: string;
        additional_option_value: string;
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
    order_id: any;
    /**
     * @description
     * 품주코드
     *
     * @required
     */
    order_item_code: any;
  }

  export interface DeleteOrderItemOptionsOutput {
    item: {
      shop_no: number;
      order_id: string;
      order_item_code: string;
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
      options?: AdminRequestOptions<CreateOrderItemOptionsOutput['item']>,
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
      options?: AdminRequestOptions<UpdateAnOrderItemOutput['item']>,
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
      options?: AdminRequestOptions<DeleteOrderItemOptionsOutput['item']>,
    ): Promise<AxiosResponse<DeleteOrderItemOptionsOutput>>;
  }
}
