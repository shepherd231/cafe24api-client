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
     * 추가입력 옵션
     *
     *
     */
    additional_options: any;
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

  interface Cafe24AdminAPIClient {
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
      options?: RequestOptions<UpdateAnOrderItemInput>,
    ): Promise<AxiosResponse<UpdateAnOrderItemOutput>>;
  }
}
