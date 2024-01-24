import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 카테고리 상품(Categories products)은 카테고리의 상품의 표시 순서, 고정 여부, 진열 영역 등을 조회, 수정할 수 있는 관계형 리소스입니다.
   */
  export interface CategoriesProducts {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 상품번호
     *
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     *
     */
    product_no: any;
    /**
     * @description
     * 표시 순서
     *
     *
     */
    sequence_no: any;
    /**
     * @description
     * 자동 정렬 여부
     *
     *
     */
    auto_sort: any;
    /**
     * @description
     * 품절여부
     *
     *
     */
    sold_out: any;
    /**
     * @description
     * 고정 여부
     *
     *
     */
    fixed_sort: any;
    /**
     * @description
     * 판매안함 여부
     *
     *
     */
    not_for_sale: any;
    /**
     * @description
     * 상세 상품분류
     *
     * 1 : 일반상품
     * 2 : 추천상품
     * 3 : 신상품
     *
     * @default 1
     *
     * 최소: [1]~최대: [3]
     */
    display_group: any;
    /**
     * @description
     * 진열 순서
     *
     * 최소: [1]~최대: [999998]
     */
    sequence: any;
  }

  export interface RetrieveAListOfProductsByCategoryInput {
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
     * 분류 번호
     *
     * @required
     */
    category_no: any;
    /**
     * @description
     * 상세 상품분류
     *
     * 1 : 일반상품
     * 2 : 추천상품
     * 3 : 신상품
     *
     * @required
     *
     * 최소: [1]~최대: [3]
     */
    display_group: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 50000
     *
     * 최소: [1]~최대: [50000]
     */
    limit?: any;
  }

  export interface RetrieveAListOfProductsByCategoryOutput {
    products: {
      shop_no: number;
      product_no: number;
      sequence_no: number;
      auto_sort: boolean;
      sold_out: boolean;
      fixed_sort: boolean;
      not_for_sale: boolean;
    }[];
  }
  export interface RetrieveACountOfProductsByCategoryInput {
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
     * 분류 번호
     *
     * @required
     */
    category_no: any;
    /**
     * @description
     * 상세 상품분류
     *
     * 1 : 일반상품
     * 2 : 추천상품
     * 3 : 신상품
     *
     * @required
     *
     * 최소: [1]~최대: [3]
     */
    display_group: any;
  }

  export interface RetrieveACountOfProductsByCategoryOutput {
    count: number;
  }
  export interface AddProductsToACategoryInput {
    /**
     * @description
     * 분류 번호
     *
     * @required
     */
    category_no: any;
    /**
     * @description
     * 상세 상품분류
     *
     * 1 : 일반상품
     * 2 : 추천상품
     * 3 : 신상품
     *
     * @default 1
     *
     * 최소: [1]~최대: [3]
     */
    display_group?: any;
    /**
     * @description
     * 상품번호
     *
     * @required
     */
    product_no: any;
  }

  export interface AddProductsToACategoryOutput {
    product: {
      display_group: number;
      product_no: number[];
    };
  }
  export interface UpdateAProductInProductCategoryInput {
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
     * 분류 번호
     *
     * @required
     */
    category_no: any;
    /**
     * @description
     * 상세 상품분류
     *
     * 1 : 일반상품
     * 2 : 추천상품
     * 3 : 신상품
     *
     * @required
     *
     * 최소: [1]~최대: [3]
     */
    display_group: any;
    /**
     * @description
     * 상품번호
     *
     * @required
     */
    product_no: any;
    /**
     * @description
     * 진열 순서
     *
     * 최소: [1]~최대: [999999]
     */
    sequence?: any;
    /**
     * @description
     * 자동 정렬 여부
     *
     * T : 자동 정렬 사용함
     * F : 자동 정렬 사용안함
     *
     *
     */
    auto_sort?: any;
    /**
     * @description
     * 고정 여부
     *
     * T : 진열순위 고정 사용함
     * F : 진열순위 고정 사용안함
     *
     *
     */
    fixed_sort?: any;
  }

  export interface UpdateAProductInProductCategoryOutput {
    product: {
      shop_no: number;
      product_no: number;
      sequence: number;
      auto_sort: Cafe24Enum;
      fixed_sort: Cafe24Enum;
    };
  }
  export interface DeleteAProductByCategoryInput {
    /**
     * @description
     * 분류 번호
     *
     * @required
     */
    category_no: any;
    /**
     * @description
     * 상품번호
     *
     * @required
     */
    product_no: any;
    /**
     * @description
     * 상세 상품분류
     *
     * 일반상품 영역에서 진열안함 처리 시, 추천상품/신상품 영역에서도 동시에 진열안함 처리된다.
     *
     * 1 : 일반상품
     * 2 : 추천상품
     * 3 : 신상품
     *
     * @default 1
     *
     * 최소: [1]~최대: [3]
     */
    display_group?: any;
  }

  export interface DeleteAProductByCategoryOutput {
    product: {
      display_group: number;
      product_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 카테고리에 배정된 상품을 목록으로 조회할 수 있습니다.
     * 상품은 동시에 여러 카테고리에 배정될 수 있습니다.
     * 상품번호, 표시 순서, 판매 여부 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-products-by-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "products": [
     *         {
     *             "shop_no": 1,
     *             "product_no": 10,
     *             "sequence_no": 1,
     *             "auto_sort": true,
     *             "sold_out": true,
     *             "fixed_sort": true,
     *             "not_for_sale": false
     *         },
     *         {
     *             "shop_no": 1,
     *             "product_no": 11,
     *             "sequence_no": 2,
     *             "auto_sort": true,
     *             "sold_out": false,
     *             "fixed_sort": true,
     *             "not_for_sale": true
     *         },
     *         {
     *             "shop_no": 1,
     *             "product_no": 12,
     *             "sequence_no": 3,
     *             "auto_sort": true,
     *             "sold_out": true,
     *             "fixed_sort": false,
     *             "not_for_sale": false
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductsByCategory(
      input: RetrieveAListOfProductsByCategoryInput,
      options?: RequestOptions<
        RetrieveAListOfProductsByCategoryOutput['products'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfProductsByCategoryOutput>>;
    /**
     * @description
     * 특정 카테고리에 배정된 상품의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-products-by-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 10
     * }
     * ```
     */
    retrieveACountOfProductsByCategory(
      input: RetrieveACountOfProductsByCategoryInput,
      options?: RequestOptions<
        RetrieveACountOfProductsByCategoryOutput['count']
      >,
    ): Promise<AxiosResponse<RetrieveACountOfProductsByCategoryOutput>>;
    /**
     * @description
     * 특정 카테고리에 상품을 배정할 수 있습니다.
     * 상품은 동시에 여러 카테고리에 배정될 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#add-products-to-a-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "display_group": 1,
     *         "product_no": [
     *             10,
     *             12,
     *             14
     *         ]
     *     }
     * }
     * ```
     */
    addProductsToACategory(
      input: AddProductsToACategoryInput,
      options?: RequestOptions<AddProductsToACategoryOutput['product']>,
    ): Promise<AxiosResponse<AddProductsToACategoryOutput>>;
    /**
     * @description
     * 특정 카테고리에 배정된 상품을 수정할 수 있습니다.
     * 상품 자체를 수정하는 것은 아니며 정렬과 고정 등에 대한 설정값을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-product-in-product-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": 58,
     *         "sequence": 3,
     *         "auto_sort": "F",
     *         "fixed_sort": "F"
     *     }
     * }
     * ```
     */
    updateAProductInProductCategory(
      input: UpdateAProductInProductCategoryInput,
      options?: RequestOptions<
        UpdateAProductInProductCategoryOutput['product']
      >,
    ): Promise<AxiosResponse<UpdateAProductInProductCategoryOutput>>;
    /**
     * @description
     * 특정 카테고리에 배정된 상품을 삭제할 수 있습니다.
     * 해당 상품은 카테고리에서만 삭제될 뿐이고 실제로 상품 자체가 삭제되는것은 아닙니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-product-by-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "display_group": 1,
     *         "product_no": 12
     *     }
     * }
     * ```
     */
    deleteAProductByCategory(
      input: DeleteAProductByCategoryInput,
      options?: RequestOptions<DeleteAProductByCategoryOutput['product']>,
    ): Promise<AxiosResponse<DeleteAProductByCategoryOutput>>;
  }
}
