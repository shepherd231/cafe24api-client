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
   * 상품 할인가(Discountprice)는 상품의 할인가격을 표시하는 리소스입니다. 혜택(Benefits)이 적용된 상품의 경우 상품의 할인가를 조회할 수 있습니다.
   * 상품 할인가는 하위 리소스로서 상품(Products) 하위에서만 사용가능하며, 상품 목록 조회시 Embed 파라메터로 호출가능합니다.
   */
  export interface ProductsDiscountprice {
    /**
     * @description
     * PC 할인 판매가
     *
     *
     */
    pcDiscountPrice: any;
    /**
     * @description
     * 모바일 할인 판매가
     *
     *
     */
    mobileDiscountPrice: any;
    /**
     * @description
     * 앱 할인 판매가
     *
     *
     */
    appDiscountPrice: any;
  }

  export interface RetrieveAProductDiscountedPriceInput {
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
  }

  export interface RetrieveAProductDiscountedPriceOutput {
    discountprice: {
      pcDiscountPrice: Cafe24Datetime;
      mobileDiscountPrice: Cafe24Datetime;
      appDiscountPrice: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품번호를 이용하여 해당 상품의 할인가를 조회합니다.
     * PC 할인 판매가, 모바일 할인 판매가를 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-product-discounted-price
     *
     * @example 응답 예시
     * ```json
     * {
     *     "discountprice": {
     *         "pc_discount_price": "7000.00",
     *         "mobile_discount_price": "6000.00",
     *         "app_discount_price": "5000.00"
     *     }
     * }
     * ```
     */
    retrieveAProductDiscountedPrice(
      input: RetrieveAProductDiscountedPriceInput,
      options?: RequestOptions<
        RetrieveAProductDiscountedPriceOutput['discountprice']
      >,
    ): Promise<AxiosResponse<RetrieveAProductDiscountedPriceOutput>>;
  }
}
