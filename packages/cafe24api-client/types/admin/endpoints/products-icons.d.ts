import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

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
      * 상품 아이콘 코드
      * 
      * 
      */ 
    code: any;
    /**
      * @description
      * 아이콘 URL
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

  export interface RetrieveAListOfIconsInput {
  }

  export interface RetrieveAListOfIconsOutput {
    icons: { 
    code: string;
    path: string;
    }[];
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
  export interface SetIconsForAProductInput {
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
    /**
      * @description
      * 상품 아이콘 리스트
      * 
      * @required
      * 
      * 배열 최대사이즈: [5]
      */ 
    image_list: { 
    /**
      * @description
      * 상품 아이콘 코드
      * 
      * 
      */ 
    code: any;
    };
  }

  export interface SetIconsForAProductOutput {
    icon: { 
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
  export interface UpdateProductIconsInput {
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
    /**
      * @description
      * 표시기간 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_show_date?: any;
    /**
      * @description
      * 표시기간 시작 일자
      * 
      * 날짜
      */ 
    show_start_date?: any;
    /**
      * @description
      * 표시기간 종료 일자
      * 
      * 날짜
      */ 
    show_end_date?: any;
    /**
      * @description
      * 상품 아이콘 리스트
      * 
      * 배열 최대사이즈: [5]
      */ 
    image_list?: { 
    /**
      * @description
      * 상품 아이콘 코드
      * 
      * 
      */ 
    code: any;
    };
  }

  export interface UpdateProductIconsOutput {
    icon: { 
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
  export interface RemoveAProductIconInput {
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
    /**
      * @description
      * 상품 아이콘 코드
      * 
      * @required
      */ 
    code: any;
  }

  export interface RemoveAProductIconOutput {
    icon: { 
    shop_no: number;
    code: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품에 등록된 모든 아이콘을 조회할 수 있습니다.
     * 현재 특정 상품에 어떤 아이콘들이 등록되어 있는지 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-icons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "icons": [
     *         {
     *             "code": "icon_01_01",
     *             "path": "https://img.echosting.cafe24.com/icon/product/ko_KR/icon_01_01.gif"
     *         },
     *         {
     *             "code": "icon_02_01",
     *             "path": "https://img.echosting.cafe24.com/icon/product/ko_KR/icon_02_01.gif"
     *         },
     *         {
     *             "code": "icon_05_01",
     *             "path": "https://img.echosting.cafe24.com/icon/product/ko_KR/icon_05_01.gif"
     *         },
     *         {
     *             "code": "custom_1",
     *             "path": "https://{domain}/web/upload/custom_115855429954932.gif"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfIcons(
      input?: RetrieveAListOfIconsInput,
      options?: RequestOptions<RetrieveAListOfIconsOutput['icons'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfIconsOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-product-icons
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
    /**
     * @description
     * 상품 아이콘을 상품에 등록할 수 있습니다.
     * 아이콘을 상품에 등록하기 전에 우선 List all icons 를 통해 아이콘의 코드를 확인해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#set-icons-for-a-product
     *
     * @example 응답 예시
     * ```json
     * {
     *     "icon": {
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
    setIconsForAProduct(
      input: SetIconsForAProductInput,
      options?: RequestOptions<SetIconsForAProductOutput['icon']>,
    ): Promise<AxiosResponse<SetIconsForAProductOutput>>;
    /**
     * @description
     * 상품에 등록한 상품 아이콘을 수정할 수 있습니다.
     * 아이콘의 표시여부, 표시기간 등을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-product-icons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "icon": {
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
    updateProductIcons(
      input: UpdateProductIconsInput,
      options?: RequestOptions<UpdateProductIconsOutput['icon']>,
    ): Promise<AxiosResponse<UpdateProductIconsOutput>>;
    /**
     * @description
     * 상품에 등록된 상품 아이콘을 삭제(등록해제) 할 수 있습니다.
     * 아이콘 자체는 삭제되지 않으며 상품에 등록된 상태만 해제됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#remove-a-product-icon
     *
     * @example 응답 예시
     * ```json
     * {
     *     "icon": {
     *         "shop_no": 1,
     *         "code": "custom_1"
     *     }
     * }
     * ```
     */
    removeAProductIcon(
      input: RemoveAProductIconInput,
      options?: RequestOptions<RemoveAProductIconOutput['icon']>,
    ): Promise<AxiosResponse<RemoveAProductIconOutput>>;
  }
}
