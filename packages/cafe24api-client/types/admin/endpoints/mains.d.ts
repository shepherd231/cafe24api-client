import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 메인분류(Mains)는 쇼핑몰의 상품을 메인화면에 진열할 수 있는 기능입니다.
   */
  export interface Mains {
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
     * 모듈 코드
     *
     * 각 메인분류에 지정된 모듈 코드
     *
     *
     */
    module_code: any;
    /**
     * @description
     * 메인분류 번호
     *
     *
     */
    display_group: any;
    /**
     * @description
     * 메인분류 명
     *
     * 메인분류 생성 당시 지정한 분류명
     *
     *
     */
    group_name: any;
    /**
     * @description
     * 품절상품진열
     *
     * 품절상품을 진열할 위치
     *
     * B : 품절상품 맨 뒤로
     * N : 품절상품 상관없음
     *
     *
     */
    soldout_sort_type: any;
  }

  export interface RetrieveAListOfMainCategoriesInput {}

  export interface RetrieveAListOfMainCategoriesOutput {
    mains: {
      shop_no: number;
      module_code: string;
      display_group: number;
      group_name: string;
      soldout_sort_type: Cafe24Enum;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 진열된 메인분류들의 정보를 조회할 수 있습니다.
     * 메인분류 번호, 메인분류 명, 품절상품진열 설정을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-main-categories
     *
     * @example 응답 예시
     * ```json
     * {
     *     "mains": [
     *         {
     *             "shop_no": 1,
     *             "module_code": "product_listmain_1",
     *             "display_group": 2,
     *             "group_name": "Main Recommendations",
     *             "soldout_sort_type": "B"
     *         },
     *         {
     *             "shop_no": 1,
     *             "module_code": "product_listmain_2",
     *             "display_group": 3,
     *             "group_name": "New Arrival",
     *             "soldout_sort_type": "N"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfMainCategories(
      input: RetrieveAListOfMainCategoriesInput,
      options?: RequestOptions<RetrieveAListOfMainCategoriesInput>,
    ): Promise<AxiosResponse<RetrieveAListOfMainCategoriesOutput>>;
  }
}
