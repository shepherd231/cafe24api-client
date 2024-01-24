import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 회원 관심상품(Customers wishlist)은 회원의 관심상품을 조회할 수 있는 관계형 리소스입니다.
   */
  export interface CustomersWishlist {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 관심상품번호
      * 
      * 
      */ 
    wishlistNo: any;
    /**
      * @description
      * 상품번호
      * 
      * 
      */ 
    productNo: any;
    /**
      * @description
      * 품목코드
      * 
      * 시스템이 품목에 부여한 코드. 해당 쇼핑몰 내에서 품목 코드는 중복되지 않음.
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [12자]~최대: [12자]
      */ 
    variantCode: any;
    /**
      * @description
      * 추가입력 옵션
      * 
      * 
      */ 
    additionalOption: any;
    /**
      * @description
      * 파일 첨부 옵션
      * 
      * 
      */ 
    attachedFileOption: any;
    /**
      * @description
      * 상품 판매가
      * 
      * 상품의 판매 가격. 쿠폰 및 혜택을 적용하기 전의 가격.
      * 상품 등록시엔 모든 멀티 쇼핑몰에 동일한 가격으로 등록하며, 멀티쇼핑몰별로 다른 가격을 입력하고자 할 경우 상품 수정을 통해 가격을 다르게 입력할 수 있다.
      * ※ 판매가 = [ 공급가 + (공급가 * 마진율) + 추가금액 ]
      * 
      * 
      */ 
    price: any;
    /**
      * @description
      * 세트상품 여부
      * 
      * 
      */ 
    productBundle: any;
    /**
      * @description
      * 담은일자
      * 
      * 관심상품을 담은 일자
      * 
      * 
      */ 
    createdDate: any;
    /**
      * @description
      * 판매가 대체문구
      * 
      * 최대글자수 : [20자]
      */ 
    priceContent: any;
  }

  export interface RetrieveACountOfProductsInCustomerWishlistInput {
    /**
      * @description
      * 회원아이디
      * 
      * @required
      */ 
    memberId: any;
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
  }

  export interface RetrieveACountOfProductsInCustomerWishlistOutput {
    count: number;
  }
  export interface RetrieveAListOfProductsInCustomerWishlistInput {
    /**
      * @description
      * 회원아이디
      * 
      * @required
      */ 
    memberId: any;
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shopNo?: any;
  }

  export interface RetrieveAListOfProductsInCustomerWishlistOutput {
    wishlist: { 
    shopNo: number;
    wishlistNo: number;
    productNo: number;
    variantCode: string;
    additionalOption: { 
    optionName: string;
    optionValue: string;
    }[];
    attachedFileOption: { 
    filePath: string;
    }[];
    price: Cafe24Datetime;
    productBundle: Cafe24Enum;
    createdDate: Cafe24Datetime;
    priceContent: any;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 회원이 관심상품으로 등록한 상품 갯수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-products-in-customer-wishlist
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfProductsInCustomerWishlist(
      input: RetrieveACountOfProductsInCustomerWishlistInput,
      options?: RequestOptions<RetrieveACountOfProductsInCustomerWishlistOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfProductsInCustomerWishlistOutput>>;
    /**
     * @description
     * 특정 회원이 관심상품으로 등록한 상품을 목록으로 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-products-in-customer-wishlist
     *
     * @example 응답 예시
     * ```json
     * {
     *     "wishlist": [
     *         {
     *             "shop_no": 1,
     *             "wishlist_no": 1,
     *             "product_no": 3,
     *             "variant_code": "P000000R000C",
     *             "additional_option": [
     *                 {
     *                     "option_name": "Custom Option",
     *                     "option_value": "Custom Option Value"
     *                 }
     *             ],
     *             "attached_file_option": [
     *                 {
     *                     "file_path": "https://{domain}/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif"
     *                 }
     *             ],
     *             "price": "10000.00",
     *             "product_bundle": "F",
     *             "created_date": "2018-12-17T11:36:28+09:00",
     *             "price_content": null
     *         },
     *         {
     *             "shop_no": 1,
     *             "wishlist_no": 2,
     *             "product_no": 5,
     *             "variant_code": "P000000S000D",
     *             "additional_option": null,
     *             "attached_file_option": null,
     *             "price": "20000.00",
     *             "product_bundle": "F",
     *             "created_date": "2018-11-17T14:36:28+09:00",
     *             "price_content": null
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductsInCustomerWishlist(
      input: RetrieveAListOfProductsInCustomerWishlistInput,
      options?: RequestOptions<RetrieveAListOfProductsInCustomerWishlistOutput['wishlist'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfProductsInCustomerWishlistOutput>>;
  }
}
