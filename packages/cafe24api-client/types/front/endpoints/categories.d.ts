import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 상품분류(Categories)는 쇼핑몰에 노출할 카테고리를 설정하는 기능입니다.
   * 상품분류는 대분류 하위에 중분류, 소분류, 상세 분류까지 세분화해서 설정할 수 있습니다.
   * 상품분류 리소스를 사용하면 쇼핑몰의 분류들을 조회하거나 분류를 생성, 수정, 삭제할 수 있습니다.
   */
  export interface Categories {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 분류 번호
     *
     * 상품분류의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품분류 번호는 중복되지 않음.
     *
     *
     */
    category_no: any;
    /**
     * @description
     * 분류 Depth
     *
     * 해당 상품분류가 하위 몇 차 상품분류에 있는 카테고리인지 표시함. 1~4차까지 상품분류가 존재한다.
     *
     * 최소: [1]~최대: [4]
     */
    category_depth: any;
    /**
     * @description
     * 부모 분류 번호
     *
     * 해당 상품분류가 2차(중분류), 3차(소분류), 4차(세분류)일 경우 상위에 있는 상품분류의 번호를 표시함.
     *
     * parent_category_no = 1일 경우 해당 분류는 대분류를 의미한다.
     *
     *
     */
    parent_category_no: any;
    /**
     * @description
     * 분류명
     *
     * 해당 상품분류의 이름을 나타낸다.
     *
     * 최대글자수 : [50자]
     */
    category_name: any;
    /**
     * @description
     * 분류 전체 이름
     *
     * 해당 상품분류가 속해있는 상위 상품분류의 이름을 모두 표시.
     *
     *
     */
    full_category_name: any;
    /**
     * @description
     * 분류 전체 번호
     *
     * 해당 상품분류가 속해있는 상위 상품분류의 번호를 모두 표시.
     *
     *
     */
    full_category_no: any;
    /**
     * @description
     * 최상위 분류 번호
     *
     * 해당 상품분류가 속해있는 최상위 상품분류의 분류 번호 표시.
     *
     *
     */
    root_category_no: any;
    /**
     * @description
     * 표시상태
     *
     * 해당 상품분류의 표시 여부. 표시안함 일 경우 해당 상품분류에 접근할 수 없다.
     *
     * 해당 설정은 멀티쇼핑몰별로 설정할 수 없으며 모든 쇼핑몰에 적용된다.
     *
     * T : 표시함
     * F : 표시안함
     *
     *
     */
    use_display: any;
    /**
     * @description
     * 진열 순서
     *
     * 상품분류를 쇼핑몰 운영자가 배치한 순서.
     *
     *
     */
    display_order: any;
    /**
     * @description
     * 쇼핑 큐레이션 해시태그
     *
     * 해당 상품분류의 해시태그 목록
     *
     * ※ 해당 기능은 쇼핑 큐레이션 서비스를 사용하는 경우에만 사용 가능하다.
     *
     *
     */
    hash_tags: any;
  }

  export interface RetrieveAListOfProductCategoriesInput {
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
    shop_no?: any;
    /**
     * @description
     * 분류 Depth
     *
     * 조회하고자 하는 상품분류의 차수 검색
     *
     * 최소: [1]~최대: [4]
     */
    category_depth?: any;
    /**
     * @description
     * 분류 번호
     *
     * 조회하고자 하는 상품분류의 번호
     *
     *
     */
    category_no?: any;
    /**
     * @description
     * 부모 분류 번호
     *
     * 조회하고자 하는 상품분류의 부모 상품분류 번호 검색
     *
     * 대분류만 검색하고자 할 경우 parent_category_no =1 로 검색한다.
     *
     *
     */
    parent_category_no?: any;
    /**
     * @description
     * 분류명
     *
     * 검색어를 분류명에 포함하고 있는 상품분류 검색(대소문자 구분 없음)
     *
     *
     */
    category_name?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
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
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfProductCategoriesOutput {
    categories: {
      shop_no: number;
      category_no: number;
      category_depth: number;
      parent_category_no: number;
      category_name: string;
      full_category_name: {
        1: string;
        2: any;
        3: any;
        4: any;
      };
      full_category_no: {
        1: string;
        2: any;
        3: any;
        4: any;
      };
      root_category_no: number;
      use_display: Cafe24Enum;
      display_order: number;
      hash_tags: string[];
    }[];
  }
  export interface RetrieveACountOfProductCategoriesInput {
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
    shop_no?: any;
    /**
     * @description
     * 분류 Depth
     *
     * 조회하고자 하는 상품분류의 차수 검색
     *
     * 최소: [1]~최대: [4]
     */
    category_depth?: any;
    /**
     * @description
     * 분류 번호
     *
     * 조회하고자 하는 상품분류의 번호
     *
     *
     */
    category_no?: any;
    /**
     * @description
     * 부모 분류 번호
     *
     * 조회하고자 하는 상품분류의 부모 상품분류 번호 검색
     *
     * 대분류만 검색하고자 할 경우 parent_category_no =1 로 검색한다.
     *
     *
     */
    parent_category_no?: any;
    /**
     * @description
     * 분류명
     *
     * 검색어를 분류명에 포함하고 있는 상품분류 검색(대소문자 구분 없음)
     *
     *
     */
    category_name?: any;
  }

  export interface RetrieveACountOfProductCategoriesOutput {
    count: number;
  }
  export interface RetrieveAProductCategoryInput {
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
    shop_no?: any;
    /**
     * @description
     * 분류 번호
     *
     * 조회하고자 하는 상품분류의 번호
     *
     * @required
     */
    category_no: any;
  }

  export interface RetrieveAProductCategoryOutput {
    category: {
      shop_no: number;
      category_no: number;
      category_depth: number;
      parent_category_no: number;
      category_name: string;
      full_category_no: {
        1: string;
        2: string;
        3: string;
        4: Cafe24Datetime;
      };
      full_category_name: {
        1: string;
        2: string;
        3: string;
        4: string;
      };
      use_display: Cafe24Enum;
      display_order: number;
      hash_tags: string[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 분류를 목록으로 조회합니다.
     * 분류의 분류번호와 분류명 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-product-categories
     *
     * @example 응답 예시
     * ```json
     * {
     *     "categories": [
     *         {
     *             "shop_no": 1,
     *             "category_no": 27,
     *             "category_depth": 1,
     *             "parent_category_no": 1,
     *             "category_name": "(large scale classification) Bottoms",
     *             "full_category_name": {
     *                 "1": "(large scale classification) Bottoms",
     *                 "2": null,
     *                 "3": null,
     *                 "4": null
     *             },
     *             "full_category_no": {
     *                 "1": "27",
     *                 "2": null,
     *                 "3": null,
     *                 "4": null
     *             },
     *             "root_category_no": 27,
     *             "use_display": "T",
     *             "display_order": 0,
     *             "hash_tags": [
     *                 "tag1",
     *                 "tag2"
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "category_no": 28,
     *             "category_depth": 1,
     *             "parent_category_no": 1,
     *             "category_name": "(large scale classification) Accessories",
     *             "full_category_name": {
     *                 "1": "(large scale classification) Accessories",
     *                 "2": null,
     *                 "3": null,
     *                 "4": null
     *             },
     *             "full_category_no": {
     *                 "1": "28",
     *                 "2": null,
     *                 "3": null,
     *                 "4": null
     *             },
     *             "root_category_no": 28,
     *             "use_display": "T",
     *             "display_order": 0,
     *             "hash_tags": [
     *                 "tag1",
     *                 "tag2"
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductCategories(
      input: RetrieveAListOfProductCategoriesInput,
      options?: RequestOptions<
        RetrieveAListOfProductCategoriesOutput['categories'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfProductCategoriesOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 분류의 수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-product-categories
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfProductCategories(
      input: RetrieveACountOfProductCategoriesInput,
      options?: RequestOptions<
        RetrieveACountOfProductCategoriesOutput['count']
      >,
    ): Promise<AxiosResponse<RetrieveACountOfProductCategoriesOutput>>;
    /**
     * @description
     * 분류번호를 이용하여 해당 분류에 대해 상세조회합니다.
     * 분류 Depth, 부모 분류 번호, 분류명 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "category": {
     *         "shop_no": 1,
     *         "category_no": 40,
     *         "category_depth": 4,
     *         "parent_category_no": 37,
     *         "category_name": "(Detailed Category) Cropped",
     *         "full_category_no": {
     *             "1": "25",
     *             "2": "28",
     *             "3": "30",
     *             "4": "40"
     *         },
     *         "full_category_name": {
     *             "1": "(Main Category) Tops",
     *             "2": "(Middle Category) Tees",
     *             "3": "(Small Category) Long Sleeve",
     *             "4": "(Detailed Category) Cropped"
     *         },
     *         "use_display": "T",
     *         "display_order": 0,
     *         "hash_tags": [
     *             "tag1",
     *             "tag2"
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAProductCategory(
      input: RetrieveAProductCategoryInput,
      options?: RequestOptions<RetrieveAProductCategoryOutput['category']>,
    ): Promise<AxiosResponse<RetrieveAProductCategoryOutput>>;
  }
}
