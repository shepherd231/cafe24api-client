import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 꾸미기 이미지(Decorationimages)는 쇼핑몰에 진열된 상품 이미지 위에 추가하여 상품에 포인트를 줄 수 있는 기능입니다.
   * 쇼핑몰에 등록되어있는 꾸미기 이미지를 조회하여 상품별로 꾸미기 이미지를 지정하거나, 상품에 등록되어있는 꾸미기 이미지를 조회할 수 있습니다.
   * 꾸미기 이미지는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   */
  export interface ProductsDecorationimages {
    /**
     * @description
     * 꾸미기 이미지 코드
     *
     *
     */
    code: any;
    /**
     * @description
     * 꾸미기 이미지 URL
     *
     *
     */
    path: any;
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

  export interface RetrieveAListOfDecorationImagesInput {}

  export interface RetrieveAListOfDecorationImagesOutput {
    decorationimages: {
      code: string;
      path: string;
    }[];
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
  export interface SetDecorationImagesForAProductInput {
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
     * @required
     */
    productNo: any;
    /**
     * @description
     * 표시기간 사용 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useShowDate?: any;
    /**
     * @description
     * 표시기간 시작 일자
     *
     * 날짜
     */
    showStartDate?: any;
    /**
     * @description
     * 표시기간 종료 일자
     *
     * 날짜
     */
    showEndDate?: any;
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
     * @required
     */
    imageList: {
      /**
       * @description
       * 꾸미기 이미지 코드
       *
       *
       */
      code?: any;
      /**
       * @description
       * 꾸미기 이미지 경로
       *
       *
       */
      path?: any;
      /**
       * @description
       * 꾸미기 이미지 수평값
       *
       *
       */
      imageHorizontalPosition?: any;
      /**
       * @description
       * 꾸미기 이미지 수직값
       *
       *
       */
      imageVerticalPosition?: any;
    };
  }

  export interface SetDecorationImagesForAProductOutput {
    decorationimage: {
      shopNo: number;
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
  export interface UpdateProductDecorationImagesInput {
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
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 표시기간 사용 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useShowDate?: any;
    /**
     * @description
     * 표시기간 시작 일자
     *
     * 날짜
     */
    showStartDate?: any;
    /**
     * @description
     * 표시기간 종료 일자
     *
     * 날짜
     */
    showEndDate?: any;
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
     * @required
     */
    imageList: {
      /**
       * @description
       * 꾸미기 이미지 코드
       *
       *
       */
      code?: any;
      /**
       * @description
       * 꾸미기 이미지 경로
       *
       *
       */
      path?: any;
      /**
       * @description
       * 꾸미기 이미지 수평값
       *
       *
       */
      imageHorizontalPosition?: any;
      /**
       * @description
       * 꾸미기 이미지 수직값
       *
       *
       */
      imageVerticalPosition?: any;
    };
  }

  export interface UpdateProductDecorationImagesOutput {
    decorationimage: {
      shopNo: number;
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
  export interface RemoveAProductDecorationImageInput {
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
     * 꾸미기 이미지 코드
     *
     * @required
     */
    code: any;
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

  export interface RemoveAProductDecorationImageOutput {
    decorationimage: {
      shopNo: number;
      code: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록되어있는 꾸미기 이미지를 목록으로 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-decoration-images
     *
     * @example 응답 예시
     * ```json
     * {
     *     "decorationimages": [
     *         {
     *             "code": "imageicon_28_02",
     *             "path": "https://img.echosting.cafe24.com/skin/admin_ko_KR/product/ico_thumb_recommend2.png"
     *         },
     *         {
     *             "code": "imageicon_27_01",
     *             "path": "https://img.echosting.cafe24.com/skin/admin_ko_KR/product/ico_thumb_plan1.png"
     *         },
     *         {
     *             "code": "imageicon_26_02",
     *             "path": "https://img.echosting.cafe24.com/skin/admin_ko_KR/product/ico_thumb_own2.png"
     *         },
     *         {
     *             "code": "image_custom_3",
     *             "path": "https://{domain}/web/upload/image_custom_615421761805558.gif"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfDecorationImages(
      input: RetrieveAListOfDecorationImagesInput,
      options?: RequestOptions<RetrieveAListOfDecorationImagesInput>,
    ): Promise<AxiosResponse<RetrieveAListOfDecorationImagesOutput>>;
    /**
     * @description
     * 특정 상품에 등록되어 있는 꾸미기 이미지를 목록으로 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-product-decoration-images
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
      options?: RequestOptions<RetrieveAListOfProductDecorationImagesInput>,
    ): Promise<AxiosResponse<RetrieveAListOfProductDecorationImagesOutput>>;
    /**
     * @description
     * 꾸미기 이미지를 상품에 추가할 수 있습니다.
     * 꾸미기 이미지 추가시 표시 기간과 꾸미기 이미지의 위치 등을 설정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#set-decoration-images-for-a-product
     *
     * @example 응답 예시
     * ```json
     * {
     *     "decorationimage": {
     *         "shop_no": 1,
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
    setDecorationImagesForAProduct(
      input: SetDecorationImagesForAProductInput,
      options?: RequestOptions<SetDecorationImagesForAProductInput>,
    ): Promise<AxiosResponse<SetDecorationImagesForAProductOutput>>;
    /**
     * @description
     * 상품번호를 이용하여 해당 상품의 꾸미기 이미지를 수정할 수 있습니다.
     * 표시기간 사용 여부, 표시기간 시작 일자, 종료 일자 등을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-product-decoration-images
     *
     * @example 응답 예시
     * ```json
     * {
     *     "decorationimage": {
     *         "shop_no": 1,
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
    updateProductDecorationImages(
      input: UpdateProductDecorationImagesInput,
      options?: RequestOptions<UpdateProductDecorationImagesInput>,
    ): Promise<AxiosResponse<UpdateProductDecorationImagesOutput>>;
    /**
     * @description
     * 상품에 등록된 꾸미기 이미지를 삭제합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#remove-a-product-decoration-image
     *
     * @example 응답 예시
     * ```json
     * {
     *     "decorationimage": {
     *         "shop_no": 1,
     *         "code": "icon_02_01"
     *     }
     * }
     * ```
     */
    removeAProductDecorationImage(
      input: RemoveAProductDecorationImageInput,
      options?: RequestOptions<RemoveAProductDecorationImageInput>,
    ): Promise<AxiosResponse<RemoveAProductDecorationImageOutput>>;
  }
}
