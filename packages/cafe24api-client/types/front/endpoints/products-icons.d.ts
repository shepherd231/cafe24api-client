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
   * 상품 아이콘은 상품을 강조하기 위해 상품 옆에 추가할 수 있는 작은 이미지들입니다. 진열된 상품에 할인 정보, &#34;매진 임박&#34; 등의 메시지를 추가하여 상품을 강조할 수 있습니다.
   * 상품 아이콘는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   */
  export interface ProductsIcons {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 표시기간 사용 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_show_date: any;
    /**
     * @description
     * 표시기간 시작 일자
     *
     *
     */
    show_start_date: any;
    /**
     * @description
     * 표시기간 종료 일자
     *
     *
     */
    show_end_date: any;
    /**
     * @description
     * 상품 아이콘 리스트
     *
     *
     */
    image_list: any;
  }

  export interface RetrieveAListOfProductIconsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
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
     * @required
     */
    product_no: any;
  }

  export interface RetrieveAListOfProductIconsOutput {
    icons: {
      shop_no: number;
      use_show_date: Cafe24Enum;
      show_start_date: Cafe24Datetime;
      show_end_date: Cafe24Datetime;
      image_list: {
        code: string;
        path: string;
      }[];
    };
  }

  interface Cafe24FrontAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-product-icons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "icons": {
     *         "shop_no": 1,
     *         "use_show_date": "T",
     *         "show_start_date": "2017-10-30T09:00:00+09:00",
     *         "show_end_date": "2017-11-02T16:00:00+09:00",
     *         "image_list": [
     *             {
     *                 "code": "custom_1",
     *                 "path": "https://{domain}/web/upload/custom_115855429954932.gif"
     *             },
     *             {
     *                 "code": "custom_2",
     *                 "path": "https://{domain}/web/upload/custom_215855430928360.gif"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAListOfProductIcons(
      input: RetrieveAListOfProductIconsInput,
      options?: RequestOptions<RetrieveAListOfProductIconsOutput['icons']>,
    ): Promise<AxiosResponse<RetrieveAListOfProductIconsOutput>>;
  }
}
