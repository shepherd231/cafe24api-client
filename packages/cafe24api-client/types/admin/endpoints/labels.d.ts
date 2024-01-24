import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  export interface Labels {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 주문 라벨명
      * 
      * 
      */ 
    names: any;
    /**
      * @description
      * 주문 라벨명
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 품주코드
      * 
      * 
      */ 
    order_item_code: any;
  }

  export interface RetrieveOrderLabelsInput {
    /**
      * @description
      * 조회결과 최대건수
      * 
      * @default 100
      * 
      * 최소: [1]~최대: [1000]
      */ 
    limit?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [15000]
      */ 
    offset?: any;
  }

  export interface RetrieveOrderLabelsOutput {
    labels: { 
    shop_no: number;
    names: string[];
    };
    links: { 
    rel: string;
    href: string;
    }[];
  }
  export interface CreateMultipleOrderLabelsInput {
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
      * 주문 라벨명
      * 
      * @required
      */ 
    name: any;
    /**
      * @description
      * 품주코드
      * 
      * @required
      */ 
    order_item_code: any;
  }

  export interface CreateMultipleOrderLabelsOutput {
    labels: { 
    shop_no: number;
    name: string;
    order_item_code: string[];
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-order-labels
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
     *     },
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/labels?limit=100&offset=100"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveOrderLabels(
      input: RetrieveOrderLabelsInput,
      options?: RequestOptions<RetrieveOrderLabelsOutput['labels']>,
    ): Promise<AxiosResponse<RetrieveOrderLabelsOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#create-multiple-order-labels
     *
     * @example 응답 예시
     * ```json
     * {
     *     "labels": [
     *         {
     *             "shop_no": 1,
     *             "name": "label_1",
     *             "order_item_code": [
     *                 "20220928-0000013-01",
     *                 "20220928-0000030-01"
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "name": "label_2",
     *             "order_item_code": [
     *                 "20220928-0000013-01",
     *                 "20220928-0000030-01"
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    createMultipleOrderLabels(
      input: CreateMultipleOrderLabelsInput,
      options?: RequestOptions<CreateMultipleOrderLabelsOutput['labels'][number]>,
    ): Promise<AxiosResponse<CreateMultipleOrderLabelsOutput>>;
  }
}
