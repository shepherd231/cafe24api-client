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
   * 상품의 설정(Products setting)은 상품의 판매가 등의 설정값에 대한 기능입니다.
   */
  export interface ProductsSetting {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 판매가 계산 기준
     *
     * S : 공급가 대비 마진율
     * A : 판매가 대비 마진율
     * P : 기본몰 판매가
     * B : 상품가
     *
     *
     */
    calculate_price_based_on: any;
    /**
     * @description
     * 판매가 계산 절사 단위
     *
     * F : 절사안함
     * -2 : 0.01단위
     * -1 : 0.1단위
     * 0 : 1단위
     * 1 : 10단위
     * 2 : 100단위
     * 3 : 1000단위
     *
     *
     */
    price_rounding_unit: any;
    /**
     * @description
     * 판매가 계산 절사 방법
     *
     * L : 내림
     * U : 반올림
     * C : 올림
     *
     *
     */
    price_rounding_rule: any;
  }

  export interface RetrieveProductSettingsInput {
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

  export interface RetrieveProductSettingsOutput {
    product: {
      shop_no: number;
      calculate_price_based_on: Cafe24Enum;
      price_rounding_unit: Cafe24Datetime;
      price_rounding_rule: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품의 판매가에 대한 설정값을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-product-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "calculate_price_based_on": "P",
     *         "price_rounding_unit": "1",
     *         "price_rounding_rule": "U"
     *     }
     * }
     * ```
     */
    retrieveProductSettings(
      input: RetrieveProductSettingsInput,
      options?: AdminRequestOptions<RetrieveProductSettingsOutput['product']>,
    ): Promise<AxiosResponse<RetrieveProductSettingsOutput>>;
  }
}
