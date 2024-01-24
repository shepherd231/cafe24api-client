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
      * 추가입력 옵션
      * 
      * 
      */ 
    additionalOptions: any;
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
      options?: RequestOptions<UpdateAnOrderItemOutput['item']>,
    ): Promise<AxiosResponse<UpdateAnOrderItemOutput>>;
  }
}
