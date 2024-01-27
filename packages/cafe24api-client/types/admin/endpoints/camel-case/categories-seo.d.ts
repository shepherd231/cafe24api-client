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
   *
   *
   * 카테고리 SEO(Categories seo)는 특정 카테고리의 SEO 에 대한 설정과 설정값의 조회가 가능한 기능입니다.
   * SEO는 검색엔진 최적화(Search Engine Optimization)의 약자로서 본 기능을 활용하여 검색엔진에 카테고리나 쇼핑몰이 더 잘 검색될 수 있도록 할 수 있습니다.
   * 카테고리 SEO는 카테고리의의 하위 리소스로서 특정 카테고리의 검색엔진 최적화 설정을 할 수 있습니다.
   */
  export interface CategoriesSeo {
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
     * 검색 엔진 노출 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    searchEngineExposure: any;
    /**
     * @description
     * 브라우저 타이틀
     *
     *
     */
    metaTitle: any;
    /**
     * @description
     * 메타태그1 : Author
     *
     *
     */
    metaAuthor: any;
    /**
     * @description
     * 메타태그2 : Description
     *
     *
     */
    metaDescription: any;
    /**
     * @description
     * 메타태그3 : Keywords
     *
     *
     */
    metaKeywords: any;
  }

  export interface RetrieveSeoSettingsByCategoryInput {
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

  export interface RetrieveSeoSettingsByCategoryOutput {
    seo: {
      shopNo: number;
      categoryNo: number;
      searchEngineExposure: Cafe24Enum;
      metaTitle: string;
      metaAuthor: string;
      metaDescription: string;
      metaKeywords: string;
    };
  }
  export interface UpdateAProductCategorySeoInput {
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
     * 검색 엔진 노출 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    searchEngineExposure?: any;
    /**
     * @description
     * 브라우저 타이틀
     *
     *
     */
    metaTitle?: any;
    /**
     * @description
     * 메타태그1 : Author
     *
     *
     */
    metaAuthor?: any;
    /**
     * @description
     * 메타태그2 : Description
     *
     *
     */
    metaDescription?: any;
    /**
     * @description
     * 메타태그3 : Keywords
     *
     *
     */
    metaKeywords?: any;
  }

  export interface UpdateAProductCategorySeoOutput {
    seo: {
      shopNo: number;
      categoryNo: number;
      searchEngineExposure: Cafe24Enum;
      metaTitle: string;
      metaAuthor: string;
      metaDescription: string;
      metaKeywords: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 카테고리의 SEO 설정을 조회할 수 있습니다.
     * 검색 엔진 노출 설정, 브라우저 타이틀 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-seo-settings-by-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "seo": {
     *         "shop_no": 1,
     *         "category_no": 24,
     *         "search_engine_exposure": "T",
     *         "meta_title": "Browser Title",
     *         "meta_author": "Cafe24",
     *         "meta_description": "This is a sample product.",
     *         "meta_keywords": "sample keyword1,sample keyword2, sample keyword3, ..."
     *     }
     * }
     * ```
     */
    retrieveSeoSettingsByCategory(
      input: RetrieveSeoSettingsByCategoryInput,
      options?: AdminRequestOptions<RetrieveSeoSettingsByCategoryOutput['seo']>,
    ): Promise<AxiosResponse<RetrieveSeoSettingsByCategoryOutput>>;
    /**
     * @description
     * 특정 카테고리의 SEO 설정을 수정할 수 있습니다.
     * 검색 엔진 노출 설정, 브라우저 타이틀 등을 설정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-product-category-seo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "seo": {
     *         "shop_no": 1,
     *         "category_no": 24,
     *         "search_engine_exposure": "T",
     *         "meta_title": "Browser Title",
     *         "meta_author": "Cafe24",
     *         "meta_description": "This is a sample product.",
     *         "meta_keywords": "sample keyword1,sample keyword2, sample keyword3, ..."
     *     }
     * }
     * ```
     */
    updateAProductCategorySeo(
      input: UpdateAProductCategorySeoInput,
      options?: AdminRequestOptions<UpdateAProductCategorySeoOutput['seo']>,
    ): Promise<AxiosResponse<UpdateAProductCategorySeoOutput>>;
  }
}
