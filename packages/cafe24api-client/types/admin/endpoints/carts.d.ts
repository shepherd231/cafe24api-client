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
  /**
   * @description
   * 장바구니(Carts)는 상품을 주문하기 전 한번에 주문할 수 있도록 상품을 미리 담아두는 기능입니다.
   * 장바구니 리소스에서는 Front API를 사용하여 특정 상품을 장바구니에 담을 수 있고 Admin API에서는 특정 회원의 장바구니를 조회할 수 있습니다.
   */
  export interface Carts {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 장바구니 상품번호
     *
     *
     */
    basket_product_no: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    member_id: any;
    /**
     * @description
     * 담은일자
     *
     *
     */
    created_date: any;
    /**
     * @description
     * 상품번호
     *
     *
     */
    product_no: any;
    /**
     * @description
     * 추가입력 옵션
     *
     *
     */
    additional_option_values: any;
    /**
     * @description
     * 상품 품목 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [12자]~최대: [12자]
     */
    variant_code: any;
    /**
     * @description
     * 수량
     *
     *
     */
    quantity: any;
    /**
     * @description
     * 상품 판매가
     *
     *
     */
    product_price: any;
    /**
     * @description
     * 옵션 추가 가격
     *
     *
     */
    option_price: any;
    /**
     * @description
     * 세트상품 여부
     *
     * T : 세트상품
     * F : 세트상품 아님
     *
     *
     */
    product_bundle: any;
    /**
     * @description
     * 배송 유형
     *
     * A : 국내
     * B : 해외
     *
     *
     */
    shipping_type: any;
    /**
     * @description
     * 분류 번호
     *
     *
     */
    category_no: any;
  }

  export interface RetrieveAShoppingCartInput {
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
     * 회원아이디
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * @required
     */
    member_id: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [10000]
     */
    offset?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAShoppingCartOutput {
    carts: {
      shop_no: number;
      basket_product_no: number;
      member_id: string;
      created_date: Cafe24Datetime;
      product_no: number;
      additional_option_values: {
        key: string;
        type: string;
        value: string;
        name: string;
      }[];
      variant_code: string;
      quantity: number;
      product_price: Cafe24Datetime;
      option_price: Cafe24Datetime;
      product_bundle: Cafe24Enum;
      shipping_type: Cafe24Enum;
      category_no: number;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 회원 장바구니에 담긴 상품을 조회할 수 있습니다.
     * 한번에 여러 회원의 장바구니를 조회할 수 있습니다.
     * 회원아이디, 담은일자, 상품번호 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-shopping-cart
     *
     * @example 응답 예시
     * ```json
     * {
     *     "carts": [
     *         {
     *             "shop_no": 1,
     *             "basket_product_no": 5,
     *             "member_id": "sampleid",
     *             "created_date": "2019-08-09T10:49:11+09:00",
     *             "product_no": 9,
     *             "additional_option_values": [
     *                 {
     *                     "key": "item_option_add",
     *                     "type": "text",
     *                     "value": "Custom Option",
     *                     "name": "Custom Option Value"
     *                 },
     *                 {
     *                     "key": "file_option",
     *                     "type": "url",
     *                     "value": "http://sample.com/api/product/fileupload/?cmd=download&path=b%2Fe%2Fbee9c3eb338e6161886c8e6fefedbd4a5c170bac0dfc4&filename=35_shop1_123081.gif",
     *                     "name": "Attached File"
     *                 }
     *             ],
     *             "variant_code": "P000000R000C",
     *             "quantity": 2,
     *             "product_price": "5000.00",
     *             "option_price": "5000.00",
     *             "product_bundle": "F",
     *             "shipping_type": "A",
     *             "category_no": 1
     *         },
     *         {
     *             "shop_no": 1,
     *             "basket_product_no": 6,
     *             "member_id": "sampleid2",
     *             "created_date": "2019-08-08T10:26:05+09:00",
     *             "product_no": 10,
     *             "additional_option_values": [],
     *             "variant_code": "P000000J000A",
     *             "quantity": 1,
     *             "product_price": "10000.00",
     *             "option_price": "0.00",
     *             "product_bundle": "F",
     *             "shipping_type": "A",
     *             "category_no": 1
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAShoppingCart(
      input: RetrieveAShoppingCartInput,
      options?: AdminRequestOptions<
        RetrieveAShoppingCartOutput['carts'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAShoppingCartOutput>>;
  }
}
