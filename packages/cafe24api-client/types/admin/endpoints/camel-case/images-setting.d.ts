import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

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
    shopNo: any;
    /**
     * @description
     * 상품 이미지 사이즈 설정값
     *
     *
     */
    productImageSize: any;
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
    shopNo?: any;
  }

  export interface RetrieveProductImageSizeSettingsOutput {
    image: {
      shopNo: number;
      productImageSize: {
        detailImageWidth: number;
        detailImageHeight: number;
        listImageWidth: number;
        listImageHeight: number;
        tinyImageWidth: number;
        tinyImageHeight: number;
        zoomImageWidth: number;
        zoomImageHeight: number;
        smallImageWidth: number;
        smallImageHeight: number;
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
    shopNo?: any;
    /**
     * @description
     * 상품 이미지 사이즈 설정값
     *
     * @required
     */
    productImageSize: {
      /**
       * @description
       * 상세 이미지 가로
       *
       *
       */
      detailImageWidth?: any;
      /**
       * @description
       * 상세이미지 세로
       *
       *
       */
      detailImageHeight?: any;
      /**
       * @description
       * 목록 이미지 가로
       *
       *
       */
      listImageWidth?: any;
      /**
       * @description
       * 목록 이미지 세로
       *
       *
       */
      listImageHeight?: any;
      /**
       * @description
       * 작은 목록 이미지 가로
       *
       *
       */
      tinyImageWidth?: any;
      /**
       * @description
       * 작은 목록 이미지 세로
       *
       *
       */
      tinyImageHeight?: any;
      /**
       * @description
       * 확대 이미지 가로
       *
       *
       */
      zoomImageWidth?: any;
      /**
       * @description
       * 확대 이미지 세로
       *
       *
       */
      zoomImageHeight?: any;
      /**
       * @description
       * 축소 이미지 가로
       *
       *
       */
      smallImageWidth?: any;
      /**
       * @description
       * 축소 이미지 세로
       *
       *
       */
      smallImageHeight?: any;
    };
  }

  export interface UpdateProductImageSizeSettingsOutput {
    image: {
      shopNo: number;
      productImageSize: {
        detailImageWidth: number;
        detailImageHeight: number;
        listImageWidth: number;
        listImageHeight: number;
        tinyImageWidth: number;
        tinyImageHeight: number;
        zoomImageWidth: number;
        zoomImageHeight: number;
        smallImageWidth: number;
        smallImageHeight: number;
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
      options?: RequestOptions<RetrieveProductImageSizeSettingsInput>,
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
      options?: RequestOptions<UpdateProductImageSizeSettingsInput>,
    ): Promise<AxiosResponse<UpdateProductImageSizeSettingsOutput>>;
  }
}
