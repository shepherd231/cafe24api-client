import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 상품을 관심상품으로 담은 회원(Products wishlist customers)은 상품을 관심상품으로 담은 회원을 조회할 수 있는 리소스입니다.
   */
  export interface ProductsWishlistCustomers {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 회원아이디
      * 
      * 
      */ 
    member_id: any;
  }

  export interface RetrieveAListOfCustomersWithAProductInWishlistInput {
    /**
      * @description
      * 상품번호
      * 
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
  }

  export interface RetrieveAListOfCustomersWithAProductInWishlistOutput {
    customers: { 
    shop_no: number;
    member_id: string;
    }[];
  }
  export interface RetrieveACountOfCustomersWithAProductInWishlistInput {
    /**
      * @description
      * 상품번호
      * 
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
  }

  export interface RetrieveACountOfCustomersWithAProductInWishlistOutput {
    count: number;
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 상품을 관심상품에 담은 회원의 목록을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-customers-with-a-product-in-wishlist
     *
     * @example 응답 예시
     * ```json
     * {
     *     "customers": [
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid"
     *         },
     *         {
     *             "shop_no": 1,
     *             "member_id": "sampleid2"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomersWithAProductInWishlist(
      input: RetrieveAListOfCustomersWithAProductInWishlistInput,
      options?: RequestOptions<RetrieveAListOfCustomersWithAProductInWishlistOutput['customers'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfCustomersWithAProductInWishlistOutput>>;
    /**
     * @description
     * 특정 상품을 관심상품에 담은 회원 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-customers-with-a-product-in-wishlist
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfCustomersWithAProductInWishlist(
      input: RetrieveACountOfCustomersWithAProductInWishlistInput,
      options?: RequestOptions<RetrieveACountOfCustomersWithAProductInWishlistOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfCustomersWithAProductInWishlistOutput>>;
  }
}
