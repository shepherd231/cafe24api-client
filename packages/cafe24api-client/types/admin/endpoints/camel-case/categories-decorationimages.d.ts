import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 카테고리 꾸미기 이미지(Categories decorationimages)는 특정 카테고리의 꾸미기 이미지에 관한 기능입니다.
   * 특정 카테고리에 설정된 꾸미기 이미지를 조회하거나 수정할 수 있습니다.
   */
  export interface CategoriesDecorationimages {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 분류 번호
     *
     *
     */
    categoryNo: any;
    /**
     * @description
     * 분류 PC 메뉴 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useMenuImagePc: any;
    /**
     * @description
     * 분류 PC 메뉴 기본 이미지
     *
     *
     */
    menuImagePc: any;
    /**
     * @description
     * 분류 PC 메뉴 오버 이미지
     *
     *
     */
    menuOverImagePc: any;
    /**
     * @description
     * 분류 PC 상단 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useTopImagePc: any;
    /**
     * @description
     * 분류 PC 상단 이미지
     *
     *
     */
    topImagesPc: any;
    /**
     * @description
     * 분류 PC 타이틀 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useTitleImagePc: any;
    /**
     * @description
     * 분류 PC 타이틀 이미지
     *
     *
     */
    titleImagePc: any;
    /**
     * @description
     * 분류 모바일 메뉴 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useMenuImageMobile: any;
    /**
     * @description
     * 분류 모바일 메뉴 기본 이미지
     *
     *
     */
    menuImageMobile: any;
    /**
     * @description
     * 분류 모바일 상단 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useTopImageMobile: any;
    /**
     * @description
     * 분류 모바일 상단 이미지
     *
     * 배열 최대사이즈: [3]
     */
    topImagesMobile: any;
    /**
     * @description
     * 분류 모바일 타이틀 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useTitleImageMobile: any;
    /**
     * @description
     * 분류 모바일 타이틀 이미지
     *
     *
     */
    titleImageMobile: any;
  }

  export interface RetrieveDecorationImageSettingsByCategoryInput {
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
     * 분류 번호
     *
     * @required
     */
    categoryNo: any;
  }

  export interface RetrieveDecorationImageSettingsByCategoryOutput {
    decorationimage: {
      shopNo: number;
      categoryNo: number;
      useMenuImagePc: Cafe24Enum;
      menuImagePc: string;
      menuOverImagePc: string;
      useTopImagePc: Cafe24Enum;
      topImagesPc: string[];
      useTitleImagePc: Cafe24Enum;
      titleImagePc: string;
      useMenuImageMobile: Cafe24Enum;
      menuImageMobile: any;
      useTopImageMobile: Cafe24Enum;
      topImagesMobile: any;
      useTitleImageMobile: Cafe24Enum;
      titleImageMobile: any;
    };
  }
  export interface UpdateDecorationImagesOfAProductCategoryInput {
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
     * 분류 번호
     *
     * @required
     */
    categoryNo: any;
    /**
     * @description
     * 분류 PC 메뉴 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useMenuImagePc?: any;
    /**
     * @description
     * 분류 PC 메뉴 기본 이미지
     *
     *
     */
    menuImagePc?: any;
    /**
     * @description
     * 분류 PC 메뉴 오버 이미지
     *
     *
     */
    menuOverImagePc?: any;
    /**
     * @description
     * 분류 PC 상단 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useTopImagePc?: any;
    /**
     * @description
     * 분류 PC 상단 이미지
     *
     * 배열 최대사이즈: [3]
     */
    topImagesPc?: any;
    /**
     * @description
     * 분류 PC 타이틀 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useTitleImagePc?: any;
    /**
     * @description
     * 분류 PC 타이틀 이미지
     *
     *
     */
    titleImagePc?: any;
    /**
     * @description
     * 분류 모바일 메뉴 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useMenuImageMobile?: any;
    /**
     * @description
     * 분류 모바일 메뉴 기본 이미지
     *
     *
     */
    menuImageMobile?: any;
    /**
     * @description
     * 분류 모바일 상단 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useTopImageMobile?: any;
    /**
     * @description
     * 분류 모바일 상단 이미지
     *
     * 배열 최대사이즈: [3]
     */
    topImagesMobile?: any;
    /**
     * @description
     * 분류 모바일 타이틀 이미지 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useTitleImageMobile?: any;
    /**
     * @description
     * 분류 모바일 타이틀 이미지
     *
     *
     */
    titleImageMobile?: any;
  }

  export interface UpdateDecorationImagesOfAProductCategoryOutput {
    decorationimage: {
      shopNo: number;
      categoryNo: number;
      useMenuImagePc: Cafe24Enum;
      menuImagePc: string;
      menuOverImagePc: string;
      useTopImagePc: Cafe24Enum;
      topImagesPc: string[];
      useTitleImagePc: Cafe24Enum;
      titleImagePc: string;
      useMenuImageMobile: Cafe24Enum;
      menuImageMobile: any;
      useTopImageMobile: Cafe24Enum;
      topImagesMobile: any;
      useTitleImageMobile: Cafe24Enum;
      titleImageMobile: any;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 분류번호를 이용하여 해당 분류의 꾸미기 정보를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-decoration-image-settings-by-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "decorationimage": {
     *         "shop_no": 1,
     *         "category_no": 24,
     *         "use_menu_image_pc": "T",
     *         "menu_image_pc": "https://{domain}/web/upload/category/738e283772bedd59cd658f8bfe20ff89.png",
     *         "menu_over_image_pc": "https://{domain}/web/upload/category/80fe9c1862ca96d40455de20e9e4c167.png",
     *         "use_top_image_pc": "T",
     *         "top_images_pc": [
     *             "https://{domain}/web/upload/category/374757e4828de2946ce112fb6082464f.png",
     *             "https://{domain}/web/upload/category/2b818101423db9eee825048c2decc5f0.png"
     *         ],
     *         "use_title_image_pc": "T",
     *         "title_image_pc": "https://{domain}/web/upload/category/d6a4cfa8d5d15e14bc03e42d95faaa56.png",
     *         "use_menu_image_mobile": "F",
     *         "menu_image_mobile": null,
     *         "use_top_image_mobile": "F",
     *         "top_images_mobile": null,
     *         "use_title_image_mobile": "F",
     *         "title_image_mobile": null
     *     }
     * }
     * ```
     */
    retrieveDecorationImageSettingsByCategory(
      input: RetrieveDecorationImageSettingsByCategoryInput,
      options?: RequestOptions<
        RetrieveDecorationImageSettingsByCategoryOutput['decorationimage']
      >,
    ): Promise<AxiosResponse<RetrieveDecorationImageSettingsByCategoryOutput>>;
    /**
     * @description
     * 분류번호를 이용하여 해당 분류의 꾸미기 정보를 수정합니다.
     * 분류 PC 메뉴 이미지 사용여부, 기본이미지 등을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-decoration-images-of-a-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "decorationimage": {
     *         "shop_no": 1,
     *         "category_no": 24,
     *         "use_menu_image_pc": "T",
     *         "menu_image_pc": "https://{domain}/web/upload/category/738e283772bedd59cd658f8bfe20ff89.png",
     *         "menu_over_image_pc": "https://{domain}/web/upload/category/80fe9c1862ca96d40455de20e9e4c167.png",
     *         "use_top_image_pc": "T",
     *         "top_images_pc": [
     *             "https://{domain}/web/upload/category/374757e4828de2946ce112fb6082464f.png",
     *             "https://{domain}/web/upload/category/2b818101423db9eee825048c2decc5f0.png"
     *         ],
     *         "use_title_image_pc": "T",
     *         "title_image_pc": "https://{domain}/web/upload/category/d6a4cfa8d5d15e14bc03e42d95faaa56.png",
     *         "use_menu_image_mobile": "F",
     *         "menu_image_mobile": null,
     *         "use_top_image_mobile": "F",
     *         "top_images_mobile": null,
     *         "use_title_image_mobile": "F",
     *         "title_image_mobile": null
     *     }
     * }
     * ```
     */
    updateDecorationImagesOfAProductCategory(
      input: UpdateDecorationImagesOfAProductCategoryInput,
      options?: RequestOptions<
        UpdateDecorationImagesOfAProductCategoryOutput['decorationimage']
      >,
    ): Promise<AxiosResponse<UpdateDecorationImagesOfAProductCategoryOutput>>;
  }
}
