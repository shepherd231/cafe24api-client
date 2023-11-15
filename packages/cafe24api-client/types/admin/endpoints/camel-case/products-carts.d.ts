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
  export interface ProductsCarts {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    memberId: any;
    /**
     * @description
     * 담은일자
     *
     *
     */
    createdDate: any;
    /**
     * @description
     * 상품번호
     *
     *
     */
    productNo: any;
    /**
     * @description
     * 상품 품목 코드
     *
     *
     */
    variantCode: any;
    /**
     * @description
     * 수량
     *
     *
     */
    quantity: any;
    /**
     * @description
     * 세트상품 여부
     *
     * T : 세트상품
     * F : 세트상품 아님
     *
     *
     */
    productBundle: any;
  }

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
  export interface RetrieveAListOfCartsContainingAProductInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
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
     * @required
     */
    productNo: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [10000]
     */
    offset?: any;
  }

  export interface RetrieveAListOfCartsContainingAProductOutput {
    carts: {
      shopNo: number;
      memberId: string;
      createdDate: Cafe24Datetime;
      productNo: number;
      variantCode: string;
      quantity: number;
      productBundle: Cafe24Enum;
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 상품을 장바구니에 담은 회원의 수를 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-carts-containing-a-product
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
    /**
     * @description
     * 특정 상품을 장바구니에 담은 정보를 목록으로 확인합니다.
     * 회원아이디, 담은일자 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-carts-containing-a-product
     *
     * @example 응답 예시
     * ```json
     * {
     *     "carts": [
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid",
     *             "created_date": "2020-05-06T10:49:11+09:00",
     *             "product_no": 11,
     *             "variant_code": "P000000L000A",
     *             "quantity": 2,
     *             "product_bundle": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid2",
     *             "created_date": "2020-05-07T09:49:11+09:00",
     *             "product_no": 11,
     *             "variant_code": "P000000L000A",
     *             "quantity": 1,
     *             "product_bundle": "F"
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/products/11/carts?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCartsContainingAProduct(
      input: RetrieveAListOfCartsContainingAProductInput,
      options?: RequestOptions<RetrieveAListOfCartsContainingAProductInput>,
    ): Promise<AxiosResponse<RetrieveAListOfCartsContainingAProductOutput>>;
  }
}
