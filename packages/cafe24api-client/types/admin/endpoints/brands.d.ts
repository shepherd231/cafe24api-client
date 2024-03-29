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
   * 브랜드(Brands)는 쇼핑몰 상품의 &#34;브랜드&#34;를 나타냅니다.
   * 브랜드는 쇼핑몰의 상품을 구분하는 판매분류의 하나로, 상품은 반드시 하나의 브랜드를 갖고 있습니다.
   * 브랜드가 미지정된 경우 &#34;자체브랜드&#34;를 사용합니다.
   */
  export interface Brands {
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
    shop_no: any;
    /**
     * @description
     * 브랜드 코드
     *
     *
     */
    brand_code: any;
    /**
     * @description
     * 브랜드 명
     *
     * 최대글자수 : [50자]
     */
    brand_name: any;
    /**
     * @description
     * 브랜드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_brand: any;
    /**
     * @description
     * 검색어 설정
     *
     * 최대글자수 : [200자]
     */
    search_keyword: any;
    /**
     * @description
     * 상품수
     *
     *
     */
    product_count: any;
    /**
     * @description
     * 생성일
     *
     *
     */
    created_date: any;
  }

  export interface RetrieveAListOfBrandsInput {
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
     * 브랜드 코드
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    brand_code?: any;
    /**
     * @description
     * 브랜드 명
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    brand_name?: any;
    /**
     * @description
     * 브랜드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_brand?: any;
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

  export interface RetrieveAListOfBrandsOutput {
    brands: {
      shop_no: number;
      brand_code: string;
      brand_name: string;
      use_brand: Cafe24Enum;
      search_keyword: string;
      product_count: number;
      created_date: Cafe24Datetime;
    }[];
  }
  export interface RetrieveACountOfBrandsInput {
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
     * 브랜드 코드
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    brand_code?: any;
    /**
     * @description
     * 브랜드 명
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    brand_name?: any;
    /**
     * @description
     * 브랜드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_brand?: any;
  }

  export interface RetrieveACountOfBrandsOutput {
    count: number;
  }
  export interface CreateABrandInput {
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
     * 브랜드 명
     *
     * @required
     */
    brand_name: any;
    /**
     * @description
     * 브랜드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    use_brand?: any;
    /**
     * @description
     * 검색어 설정
     *
     * 최대글자수 : [200자]
     */
    search_keyword?: any;
  }

  export interface CreateABrandOutput {
    brand: {
      shop_no: number;
      brand_code: string;
      brand_name: string;
      use_brand: Cafe24Enum;
      search_keyword: string;
      created_date: Cafe24Datetime;
    };
  }
  export interface UpdateABrandInput {
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
     * 브랜드 코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    brand_code: any;
    /**
     * @description
     * 브랜드 명
     *
     *
     */
    brand_name?: any;
    /**
     * @description
     * 브랜드 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default T
     *
     *
     */
    use_brand?: any;
    /**
     * @description
     * 검색어 설정
     *
     * 최대글자수 : [200자]
     */
    search_keyword?: any;
  }

  export interface UpdateABrandOutput {
    brand: {
      shop_no: number;
      brand_code: string;
      brand_name: string;
      use_brand: Cafe24Enum;
      search_keyword: string;
      created_date: Cafe24Datetime;
    };
  }
  export interface DeleteABrandInput {
    /**
     * @description
     * 브랜드 코드
     *
     * @required
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    brand_code: any;
  }

  export interface DeleteABrandOutput {
    brand: {
      brand_code: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 현재 쇼핑몰에 있는 브랜드를 조회할 수 있습니다.
     * 브랜드명, 브랜드 사용여부, 상품수 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-brands
     *
     * @example 응답 예시
     * ```json
     * {
     *     "brands": [
     *         {
     *             "shop_no": 1,
     *             "brand_code": "B0000000",
     *             "brand_name": "Default Brand",
     *             "use_brand": "T",
     *             "search_keyword": "keyword",
     *             "product_count": 2,
     *             "created_date": "2017-12-19T14:39:22+09:00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "brand_code": "B000000A",
     *             "brand_name": "Default Brand",
     *             "use_brand": "F",
     *             "search_keyword": "keyword",
     *             "product_count": 3,
     *             "created_date": "2017-12-19T14:39:22+09:00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfBrands(
      input: RetrieveAListOfBrandsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfBrandsOutput['brands'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfBrandsOutput>>;
    /**
     * @description
     * 현재 쇼핑몰에 있는 브랜드의 숫자를 카운트합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-brands
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfBrands(
      input: RetrieveACountOfBrandsInput,
      options?: AdminRequestOptions<RetrieveACountOfBrandsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfBrandsOutput>>;
    /**
     * @description
     * 브랜드를 생성합니다.
     * 브랜드 명과 브랜드 사용 여부 등을 설정할 수 있으며, 상품 검색시 해당 브랜드 상품이 검색될 수 있도록 검색어를 지정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-brand
     *
     * @example 응답 예시
     * ```json
     * {
     *     "brand": {
     *         "shop_no": 1,
     *         "brand_code": "B000000A",
     *         "brand_name": "Sample Brand",
     *         "use_brand": "T",
     *         "search_keyword": "keyword",
     *         "created_date": "2017-12-19T14:39:22+09:00"
     *     }
     * }
     * ```
     */
    createABrand(
      input: CreateABrandInput,
      options?: AdminRequestOptions<CreateABrandOutput['brand']>,
    ): Promise<AxiosResponse<CreateABrandOutput>>;
    /**
     * @description
     * 특정 브랜드의 정보를 수정할 수 있습니다.
     * 브랜드명, 브랜드 사용여부 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-brand
     *
     * @example 응답 예시
     * ```json
     * {
     *     "brand": {
     *         "shop_no": 1,
     *         "brand_code": "B000000A",
     *         "brand_name": "Sample Brand",
     *         "use_brand": "T",
     *         "search_keyword": "keyword",
     *         "created_date": "2017-12-19T14:39:22+09:00"
     *     }
     * }
     * ```
     */
    updateABrand(
      input: UpdateABrandInput,
      options?: AdminRequestOptions<UpdateABrandOutput['brand']>,
    ): Promise<AxiosResponse<UpdateABrandOutput>>;
    /**
     * @description
     * 특정 브랜드를 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-brand
     *
     * @example 응답 예시
     * ```json
     * {
     *     "brand": {
     *         "brand_code": "B000000A"
     *     }
     * }
     * ```
     */
    deleteABrand(
      input: DeleteABrandInput,
      options?: AdminRequestOptions<DeleteABrandOutput['brand']>,
    ): Promise<AxiosResponse<DeleteABrandOutput>>;
  }
}
