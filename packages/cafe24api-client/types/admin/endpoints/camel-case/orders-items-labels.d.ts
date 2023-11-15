import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  export interface OrdersItemsLabels {
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
     * 주문 라벨명
     *
     *
     */
    names: any;
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
     * 주문 라벨명
     *
     *
     */
    name: any;
  }

  export interface RetrieveAnOrderLabelInput {
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
  }

  export interface RetrieveAnOrderLabelOutput {
    labels: {
      shopNo: number;
      names: string[];
    };
  }
  export interface CreateAnOrderLabelInput {
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
     * 주문 라벨명
     *
     * @required
     */
    names: any;
  }

  export interface CreateAnOrderLabelOutput {
    label: {
      shopNo: number;
      orderId: string;
      orderItemCode: string;
      names: string[];
    };
  }
  export interface UpdateAnOrderLabelInput {
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
     * 주문 라벨명
     *
     * @required
     */
    names: any;
  }

  export interface UpdateAnOrderLabelOutput {
    label: {
      shopNo: number;
      names: string[];
    };
  }
  export interface DeleteAnOrderLabelInput {
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
     * 주문 라벨명
     *
     * @required
     */
    name: any;
  }

  export interface DeleteAnOrderLabelOutput {
    label: {
      shopNo: number;
      orderId: string;
      orderItemCode: string;
      name: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-an-order-label
     *
     * @example 응답 예시
     * ```json
     * {
     *     "labels": {
     *         "shop_no": 1,
     *         "names": [
     *             "label_1",
     *             "label_2"
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAnOrderLabel(
      input: RetrieveAnOrderLabelInput,
      options?: RequestOptions<RetrieveAnOrderLabelInput>,
    ): Promise<AxiosResponse<RetrieveAnOrderLabelOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-label
     *
     * @example 응답 예시
     * ```json
     * {
     *     "label": {
     *         "shop_no": 1,
     *         "order_id": "20220928-0000013",
     *         "order_item_code": "20220928-0000013-01",
     *         "names": [
     *             "label_1",
     *             "label_2"
     *         ]
     *     }
     * }
     * ```
     */
    createAnOrderLabel(
      input: CreateAnOrderLabelInput,
      options?: RequestOptions<CreateAnOrderLabelInput>,
    ): Promise<AxiosResponse<CreateAnOrderLabelOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-label
     *
     * @example 응답 예시
     * ```json
     * {
     *     "label": {
     *         "shop_no": 1,
     *         "names": [
     *             "label_1",
     *             "label_2"
     *         ]
     *     }
     * }
     * ```
     */
    updateAnOrderLabel(
      input: UpdateAnOrderLabelInput,
      options?: RequestOptions<UpdateAnOrderLabelInput>,
    ): Promise<AxiosResponse<UpdateAnOrderLabelOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#delete-an-order-label
     *
     * @example 응답 예시
     * ```json
     * {
     *     "label": {
     *         "shop_no": 1,
     *         "order_id": "20220928-0000013",
     *         "order_item_code": "20220928-0000013-01",
     *         "name": "label_1"
     *     }
     * }
     * ```
     */
    deleteAnOrderLabel(
      input: DeleteAnOrderLabelInput,
      options?: RequestOptions<DeleteAnOrderLabelInput>,
    ): Promise<AxiosResponse<DeleteAnOrderLabelOutput>>;
  }
}
