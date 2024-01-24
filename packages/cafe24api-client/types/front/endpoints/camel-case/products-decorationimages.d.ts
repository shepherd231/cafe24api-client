import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 꾸미기 이미지(Decorationimages)는 쇼핑몰에 진열된 상품에 등록되어있는 꾸미기 이미지를 조회할 수 있습니다.
   * 꾸미기 이미지는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   */
  export interface ProductsDecorationimages {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 표시기간 사용 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useShowDate: any;
    /**
     * @description
     * 표시기간 시작 일자
     *
     *
     */
    showStartDate: any;
    /**
     * @description
     * 표시기간 종료 일자
     *
     *
     */
    showEndDate: any;
    /**
     * @description
     * 꾸미기 이미지 리스트
     *
     * 수평위치(image_horizontal_position)
     * L : 왼쪽
     * C : 가운데
     * R : 오른쪽
     *
     * 수직위치(image_vertical_position)
     * T : 상단
     * C : 중단
     * B : 하단
     *
     *
     */
    imageList: any;
  }

  export interface RetrieveAListOfProductDecorationImagesInput {
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
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     * @required
     */
    productNo: any;
  }

  export interface RetrieveAListOfProductDecorationImagesOutput {
    decorationimage: {
      useShowDate: Cafe24Enum;
      showStartDate: Cafe24Datetime;
      showEndDate: Cafe24Datetime;
      imageList: {
        code: string;
        path: string;
        imageVerticalPosition: Cafe24Enum;
        imageHorizontalPosition: Cafe24Enum;
      }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 상품에 등록되어 있는 꾸미기 이미지를 목록으로 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-product-decoration-images
     *
     * @example 응답 예시
     * ```json
     * {
     *     "decorationimage": {
     *         "use_show_date": "T",
     *         "show_start_date": "2017-10-30T09:00:00+09:00",
     *         "show_end_date": "2017-11-02T16:00:00+09:00",
     *         "image_list": [
     *             {
     *                 "code": "image_custom_4",
     *                 "path": "https://{domain}/web/upload/image_custom_415421761806290.gif",
     *                 "image_vertical_position": "T",
     *                 "image_horizontal_position": "L"
     *             },
     *             {
     *                 "code": "image_custom_3",
     *                 "path": "https://{domain}/web/upload/image_custom_615421761805558.gif",
     *                 "image_vertical_position": "B",
     *                 "image_horizontal_position": "C"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAListOfProductDecorationImages(
      input: RetrieveAListOfProductDecorationImagesInput,
      options?: RequestOptions<
        RetrieveAListOfProductDecorationImagesOutput['decorationimage']
      >,
    ): Promise<AxiosResponse<RetrieveAListOfProductDecorationImagesOutput>>;
  }
}
