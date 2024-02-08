import { AxiosResponse } from 'axios';
import {
  Endpoint,
  RequestOptions,
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
   * 상품 조회수(Hits)는 상품을 쇼핑몰 고객들이 얼마나 조회했는지를 나타내는 지표입니다.
   * 상품 조회수를 확인하면, 고객들이 어떤 상품을 가장 많이 조회하는지 알 수 있습니다.
   * 상품 조회수는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   */
  export interface ProductsHits {}

  export interface RetrieveACountOfProductViewsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shop_no?: any;
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    product_no: any;
  }

  export interface RetrieveACountOfProductViewsOutput {
    count: number;
  }

  interface Cafe24FrontAPIClient {
    /**
     * @description
     * 상품번호를 이용하여 해당 상품의 조회수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-product-views
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfProductViews(
      input: RetrieveACountOfProductViewsInput,
      options?: RequestOptions<RetrieveACountOfProductViewsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfProductViewsOutput>>;
  }
}
