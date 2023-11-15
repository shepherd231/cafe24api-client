import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 상품 장바구니(Products carts)는 특정 상품을 장바구니에 담은 회원과 그 숫자를 조회할 수 있는 리소스입니다.
   * 특정 상품을 장바구니에 담은 회원의 ID, 담은날짜와 회원의 수 정보를 조회할 수 있습니다.
   */
  export interface ProductsCarts {}

  export interface RetrieveACountOfCartsContainingAProductInput {
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
    shopNo?: any;
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
  }

  export interface RetrieveACountOfCartsContainingAProductOutput {
    count: number;
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 상품을 장바구니에 담은 회원의 수를 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-carts-containing-a-product
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 7
     * }
     * ```
     */
    retrieveACountOfCartsContainingAProduct(
      input: RetrieveACountOfCartsContainingAProductInput,
      options?: RequestOptions<RetrieveACountOfCartsContainingAProductInput>,
    ): Promise<AxiosResponse<RetrieveACountOfCartsContainingAProductOutput>>;
  }
}
