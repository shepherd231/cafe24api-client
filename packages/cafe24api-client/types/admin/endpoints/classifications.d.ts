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
   * 자체분류(Classifications)는 상품등록시 사용할 자체분류에 입력하는 정보를 의미합니다.
   * 자체분류는 상품을 구분하는 판매분류의 하나이며, 상품은 반드시 하나의 자체분류를 가지고 있습니다.
   */
  export interface Classifications {
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
     * 자체분류 코드
     *
     * 형식 : [A-Z0-9]
     * 최소글자수 : [8자]
     * 최대글자수 : [8자]
     */
    classification_code: any;
    /**
     * @description
     * 자체분류 명
     *
     * 최대글자수 : [200자]
     */
    classification_name: any;
    /**
     * @description
     * 자체분류 설명
     *
     * 최대글자수 : [300자]
     */
    classification_description: any;
    /**
     * @description
     * 사용여부
     *
     *
     */
    use_classification: any;
    /**
     * @description
     * 생성일
     *
     *
     */
    created_date: any;
    /**
     * @description
     * 상품수
     *
     *
     */
    product_count: any;
  }

  export interface RetrieveAListOfCustomCategoriesInput {
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
     * 자체분류 코드
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    classification_code?: any;
    /**
     * @description
     * 자체분류 명
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    classification_name?: any;
    /**
     * @description
     * 사용여부
     *
     *
     */
    use_classification?: any;
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
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfCustomCategoriesOutput {
    classifications: {
      shop_no: number;
      classification_code: string;
      classification_name: string;
      classification_description: string;
      use_classification: Cafe24Enum;
      created_date: Cafe24Datetime;
      product_count: number;
    }[];
  }
  export interface RetrieveACountOfCustomCategoriesInput {
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
     * 자체분류 코드
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    classification_code?: any;
    /**
     * @description
     * 자체분류 명
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    classification_name?: any;
    /**
     * @description
     * 사용여부
     *
     *
     */
    use_classification?: any;
  }

  export interface RetrieveACountOfCustomCategoriesOutput {
    count: number;
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 자체분류를 목록으로 조회합니다.
     * 자체분류의 분류코드와 분류명 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-custom-categories
     *
     * @example 응답 예시
     * ```json
     * {
     *     "classifications": [
     *         {
     *             "shop_no": 1,
     *             "classification_code": "C000000A",
     *             "classification_name": "Default Classification",
     *             "classification_description": "Default Classification description",
     *             "use_classification": "T",
     *             "created_date": "2018-01-16T12:00:41+09:00",
     *             "product_count": 2
     *         },
     *         {
     *             "shop_no": 1,
     *             "classification_code": "C000000B",
     *             "classification_name": "Classification 1",
     *             "classification_description": "Classification 1 description",
     *             "use_classification": "T",
     *             "created_date": "2018-01-16T12:00:41+09:00",
     *             "product_count": 3
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomCategories(
      input: RetrieveAListOfCustomCategoriesInput,
      options?: AdminRequestOptions<
        RetrieveAListOfCustomCategoriesOutput['classifications'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfCustomCategoriesOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 자체분류의 수를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-custom-categories
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfCustomCategories(
      input: RetrieveACountOfCustomCategoriesInput,
      options?: AdminRequestOptions<
        RetrieveACountOfCustomCategoriesOutput['count']
      >,
    ): Promise<AxiosResponse<RetrieveACountOfCustomCategoriesOutput>>;
  }
}
