import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 상품 분류 번역 정보(Translations categories)는, 상품 분류의 번역 정보를 조회하거나 수정할 수 있는 기능입니다.
   */
  export interface TranslationsCategories {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 분류 번호
     *
     *
     */
    category_no: any;
    /**
     * @description
     * 번역 정보
     *
     *
     */
    translations: any;
  }

  export interface RetrieveAListOfProductCategoryTranslationsInput {
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
     * 분류 번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    category_no?: any;
    /**
     * @description
     * 언어 코드
     *
     * 번역 정보의 언어 코드에 해당되는 번역 정보를 검색
     * 언어별로 번역된 정보에서 검색하고자 하는 언어를 선택하면, 해당 언어에 대한 번역 내용을 확인할 수 있습니다.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    language_code?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfProductCategoryTranslationsOutput {
    categories: {
      shop_no: number;
      category_no: number;
      translations: {
        language_code: string;
        translated: Cafe24Enum;
        category_name: string;
        seo: {
          meta_title: string;
          meta_author: string;
          meta_description: string;
          meta_keywords: string;
        };
        updated_date: Cafe24Datetime;
      }[];
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }
  export interface UpdateProductCategoryTranslationInput {
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
     * 분류 번호
     *
     * @required
     */
    category_no: any;
    /**
     * @description
     * 번역 정보
     *
     *
     */
    translations?: {
      /**
       * @description
       * 언어 코드
       *
       *
       */
      language_code: any;
      /**
       * @description
       * 분류명
       *
       *
       */
      category_name?: any;
      seo?: any[];
    };
  }

  export interface UpdateProductCategoryTranslationOutput {
    category: {
      shop_no: number;
      category_no: number;
      translations: {
        language_code: string;
        translated: Cafe24Enum;
        category_name: string;
        seo: {
          meta_title: string;
          meta_author: string;
          meta_description: string;
          meta_keywords: string;
        };
        updated_date: Cafe24Datetime;
      }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 상품 분류의 번역 정보를 조회할 수 있습니다.
     * 언어 코드, 메타태그 등의 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-product-category-translations
     *
     * @example 응답 예시
     * ```json
     * {
     *     "categories": [
     *         {
     *             "shop_no": 1,
     *             "category_no": 27,
     *             "translations": [
     *                 {
     *                     "language_code": "en_US",
     *                     "translated": "T",
     *                     "category_name": "(Detailed Category) Cropped",
     *                     "seo": {
     *                         "meta_title": "Browser Title",
     *                         "meta_author": "Cafe24",
     *                         "meta_description": "This is a sample product.",
     *                         "meta_keywords": "sample keyword1,sample keyword2, sample keyword3, ..."
     *                     },
     *                     "updated_date": "2018-01-19T11:19:27+09:00"
     *                 },
     *                 {
     *                     "language_code": "es_ES",
     *                     "translated": "T",
     *                     "category_name": "(Detailed Category) Cropped",
     *                     "seo": {
     *                         "meta_title": "Browser Title",
     *                         "meta_author": "Cafe24",
     *                         "meta_description": "This is a sample product.",
     *                         "meta_keywords": "sample keyword1,sample keyword2, sample keyword3, ..."
     *                     },
     *                     "updated_date": "2018-01-19T11:19:27+09:00"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "category_no": 28,
     *             "translations": [
     *                 {
     *                     "language_code": "en_US",
     *                     "translated": "T",
     *                     "category_name": "(Detailed Category) Cropped",
     *                     "seo": {
     *                         "meta_title": "Browser Title",
     *                         "meta_author": "Cafe24",
     *                         "meta_description": "This is a sample product.",
     *                         "meta_keywords": "sample keyword1,sample keyword2, sample keyword3, ..."
     *                     },
     *                     "updated_date": "2018-01-19T11:19:27+09:00"
     *                 },
     *                 {
     *                     "language_code": "es_ES",
     *                     "translated": "T",
     *                     "category_name": "(Detailed Category) Cropped",
     *                     "seo": {
     *                         "meta_title": "Browser Title",
     *                         "meta_author": "Cafe24",
     *                         "meta_description": "This is a sample product.",
     *                         "meta_keywords": "sample keyword1,sample keyword2, sample keyword3, ..."
     *                     },
     *                     "updated_date": "2018-01-19T11:19:27+09:00"
     *                 }
     *             ]
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/translations/categories?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductCategoryTranslations(
      input: RetrieveAListOfProductCategoryTranslationsInput,
      options?: RequestOptions<RetrieveAListOfProductCategoryTranslationsInput>,
    ): Promise<AxiosResponse<RetrieveAListOfProductCategoryTranslationsOutput>>;
    /**
     * @description
     * 상품 분류의 번역 정보를 수정할 수 있습니다.
     * 번역정보 수정시, 언어 코드는 필수 입력 항목입니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-product-category-translation
     *
     * @example 응답 예시
     * ```json
     * {
     *     "category": {
     *         "shop_no": 1,
     *         "category_no": 27,
     *         "translations": [
     *             {
     *                 "language_code": "en_US",
     *                 "translated": "T",
     *                 "category_name": "(Detailed Category) Cropped",
     *                 "seo": {
     *                     "meta_title": "Browser Title",
     *                     "meta_author": "Cafe24",
     *                     "meta_description": "This is a sample product.",
     *                     "meta_keywords": "sample keyword1,sample keyword2, sample keyword3, ..."
     *                 },
     *                 "updated_date": "2018-01-19T11:19:27+09:00"
     *             },
     *             {
     *                 "language_code": "es_ES",
     *                 "category_name": "(Detailed Category) Cropped",
     *                 "seo": {
     *                     "meta_title": "Browser Title",
     *                     "meta_author": "Cafe24",
     *                     "meta_description": "This is a sample product.",
     *                     "meta_keywords": "sample keyword1,sample keyword2, sample keyword3, ..."
     *                 },
     *                 "updated_date": "2018-01-19T11:19:27+09:00"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateProductCategoryTranslation(
      input: UpdateProductCategoryTranslationInput,
      options?: RequestOptions<UpdateProductCategoryTranslationInput>,
    ): Promise<AxiosResponse<UpdateProductCategoryTranslationOutput>>;
  }
}
