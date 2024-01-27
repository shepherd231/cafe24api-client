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
   * 상품 이미지 사이즈 설정 값을 조회하거나 수정할 수 있습니다.
   */
  export interface ImagesSetting {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 상품 이미지 사이즈 설정값
     *
     *
     */
    product_image_size: any;
  }

  export interface RetrieveProductImageSizeSettingsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shop_no?: any;
  }

  export interface RetrieveProductImageSizeSettingsOutput {
    image: {
      shop_no: number;
      product_image_size: {
        detail_image_width: number;
        detail_image_height: number;
        list_image_width: number;
        list_image_height: number;
        tiny_image_width: number;
        tiny_image_height: number;
        zoom_image_width: number;
        zoom_image_height: number;
        small_image_width: number;
        small_image_height: number;
      };
    };
  }
  export interface UpdateProductImageSizeSettingsInput {
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
     * 상품 이미지 사이즈 설정값
     *
     * @required
     */
    product_image_size: {
      /**
       * @description
       * 상세 이미지 가로
       *
       *
       */
      detail_image_width?: any;
      /**
       * @description
       * 상세이미지 세로
       *
       *
       */
      detail_image_height?: any;
      /**
       * @description
       * 목록 이미지 가로
       *
       *
       */
      list_image_width?: any;
      /**
       * @description
       * 목록 이미지 세로
       *
       *
       */
      list_image_height?: any;
      /**
       * @description
       * 작은 목록 이미지 가로
       *
       *
       */
      tiny_image_width?: any;
      /**
       * @description
       * 작은 목록 이미지 세로
       *
       *
       */
      tiny_image_height?: any;
      /**
       * @description
       * 확대 이미지 가로
       *
       *
       */
      zoom_image_width?: any;
      /**
       * @description
       * 확대 이미지 세로
       *
       *
       */
      zoom_image_height?: any;
      /**
       * @description
       * 축소 이미지 가로
       *
       *
       */
      small_image_width?: any;
      /**
       * @description
       * 축소 이미지 세로
       *
       *
       */
      small_image_height?: any;
    };
  }

  export interface UpdateProductImageSizeSettingsOutput {
    image: {
      shop_no: number;
      product_image_size: {
        detail_image_width: number;
        detail_image_height: number;
        list_image_width: number;
        list_image_height: number;
        tiny_image_width: number;
        tiny_image_height: number;
        zoom_image_width: number;
        zoom_image_height: number;
        small_image_width: number;
        small_image_height: number;
      };
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품 이미지 사이즈 설정 값을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-product-image-size-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "image": {
     *         "shop_no": 1,
     *         "product_image_size": {
     *             "detail_image_width": 500,
     *             "detail_image_height": 500,
     *             "list_image_width": 300,
     *             "list_image_height": 300,
     *             "tiny_image_width": 220,
     *             "tiny_image_height": 220,
     *             "zoom_image_width": 500,
     *             "zoom_image_height": 500,
     *             "small_image_width": 100,
     *             "small_image_height": 100
     *         }
     *     }
     * }
     * ```
     */
    retrieveProductImageSizeSettings(
      input: RetrieveProductImageSizeSettingsInput,
      options?: AdminRequestOptions<
        RetrieveProductImageSizeSettingsOutput['image']
      >,
    ): Promise<AxiosResponse<RetrieveProductImageSizeSettingsOutput>>;
    /**
     * @description
     * 상품 이미지 사이즈 설정 값을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-product-image-size-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "image": {
     *         "shop_no": 1,
     *         "product_image_size": {
     *             "detail_image_width": 500,
     *             "detail_image_height": 500,
     *             "list_image_width": 300,
     *             "list_image_height": 300,
     *             "tiny_image_width": 220,
     *             "tiny_image_height": 220,
     *             "zoom_image_width": 500,
     *             "zoom_image_height": 500,
     *             "small_image_width": 100,
     *             "small_image_height": 100
     *         }
     *     }
     * }
     * ```
     */
    updateProductImageSizeSettings(
      input: UpdateProductImageSizeSettingsInput,
      options?: AdminRequestOptions<
        UpdateProductImageSizeSettingsOutput['image']
      >,
    ): Promise<AxiosResponse<UpdateProductImageSizeSettingsOutput>>;
  }
}
