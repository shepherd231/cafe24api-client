import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 메인분류 상품(Mains products)은 상품 메인진열의 순서에 관한 메인분류의 관계형 리소스입니다.
   */
  export interface MainsProducts {
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
      * 상품번호
      * 
      * 
      */ 
    product_no: any;
    /**
      * @description
      * 상품명
      * 
      * 
      */ 
    product_name: any;
    /**
      * @description
      * 고정 여부
      * 
      * 
      */ 
    fixed_sort: any;
  }

  export interface RetrieveAListOfProductsInMainCategoryInput {
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
      * 메인분류 번호
      * 
      * @required
      */ 
    display_group: any;
  }

  export interface RetrieveAListOfProductsInMainCategoryOutput {
    products: { 
    shop_no: number;
    product_no: number;
    product_name: string;
    fixed_sort: boolean;
    }[];
  }
  export interface RetrieveACountOfProductsInMainCategoryInput {
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
      * 메인분류 번호
      * 
      * @required
      */ 
    display_group: any;
  }

  export interface RetrieveACountOfProductsInMainCategoryOutput {
    count: number;
  }
  export interface SetMainCategoryProductsInput {
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
      * 메인분류 번호
      * 
      * @required
      */ 
    display_group: any;
    /**
      * @description
      * 상품번호
      * 
      * @required
      */ 
    product_no: any;
  }

  export interface SetMainCategoryProductsOutput {
    product: { 
    shop_no: number;
    product_no: number[];
    };
  }
  export interface UpdateFixedSortingOfProductsInMainCategoryInput {
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
      * 메인분류 번호
      * 
      * @required
      */ 
    display_group: any;
    /**
      * @description
      * 상품번호
      * 
      * 요청한 상품번호의 순서 대로 진열순위가 지정
      * 
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 진열순위 고정 상품번호
      * 
      * 진열순위를 고정하고자 하는 상품번호를 지정
      * 
      * 
      */ 
    fix_product_no?: any;
  }

  export interface UpdateFixedSortingOfProductsInMainCategoryOutput {
    product: { 
    shop_no: number;
    product_no: number[];
    };
  }
  export interface DeleteAProductInMainCategoryInput {
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
      * 메인분류 번호
      * 
      * @required
      */ 
    display_group: any;
    /**
      * @description
      * 상품번호
      * 
      * @required
      */ 
    product_no: any;
  }

  export interface DeleteAProductInMainCategoryOutput {
    product: { 
    shop_no: number;
    product_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 메인분류에 배정된 상품을 목록으로 조회할 수 있습니다.
     * 상품번호, 상품명, 고정 여부 등을 조회할 수 있습니다.
     * 상품은 동시에 여러 메인분류에 배정될 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-products-in-main-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "products": [
     *         {
     *             "shop_no": 1,
     *             "product_no": 7,
     *             "product_name": "product_name",
     *             "fixed_sort": false
     *         },
     *         {
     *             "shop_no": 1,
     *             "product_no": 8,
     *             "product_name": "product_name2",
     *             "fixed_sort": false
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductsInMainCategory(
      input: RetrieveAListOfProductsInMainCategoryInput,
      options?: RequestOptions<RetrieveAListOfProductsInMainCategoryOutput['products'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfProductsInMainCategoryOutput>>;
    /**
     * @description
     * 특정 메인분류에 배정된 상품의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-products-in-main-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfProductsInMainCategory(
      input: RetrieveACountOfProductsInMainCategoryInput,
      options?: RequestOptions<RetrieveACountOfProductsInMainCategoryOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfProductsInMainCategoryOutput>>;
    /**
     * @description
     * 특정 메인분류에 상품을 배정할 수 있습니다.
     * 상품은 동시에 여러 카테고리에 배정될 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#set-main-category-products
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": [
     *             7,
     *             8,
     *             9
     *         ]
     *     }
     * }
     * ```
     */
    setMainCategoryProducts(
      input: SetMainCategoryProductsInput,
      options?: RequestOptions<SetMainCategoryProductsOutput['product']>,
    ): Promise<AxiosResponse<SetMainCategoryProductsOutput>>;
    /**
     * @description
     * 특정 메인분류에 배정된 상품을 수정할 수 있습니다.
     * 상품 자체를 수정하는 것은 아니며 진열순위의 고정 등에 대한 설정값을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-fixed-sorting-of-products-in-main-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": [
     *             7,
     *             8,
     *             9
     *         ]
     *     }
     * }
     * ```
     */
    updateFixedSortingOfProductsInMainCategory(
      input: UpdateFixedSortingOfProductsInMainCategoryInput,
      options?: RequestOptions<UpdateFixedSortingOfProductsInMainCategoryOutput['product']>,
    ): Promise<AxiosResponse<UpdateFixedSortingOfProductsInMainCategoryOutput>>;
    /**
     * @description
     * 특정 메인분류에 배정된 상품을 삭제할 수 있습니다.
     * 해당 상품은 메인분류에서만 삭제될 뿐이고 실제로 상품 자체가 삭제되는것은 아닙니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-product-in-main-category
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": 7
     *     }
     * }
     * ```
     */
    deleteAProductInMainCategory(
      input: DeleteAProductInMainCategoryInput,
      options?: RequestOptions<DeleteAProductInMainCategoryOutput['product']>,
    ): Promise<AxiosResponse<DeleteAProductInMainCategoryOutput>>;
  }
}
