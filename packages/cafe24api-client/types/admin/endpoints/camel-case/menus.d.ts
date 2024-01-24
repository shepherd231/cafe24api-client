import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 메뉴(Menus)는 쇼핑몰의 메뉴 모드에 관한 기능입니다.
   * 쇼핑몰의 메뉴 모드와 경로 등을 조회할 수 있습니다.
   * 쇼핑몰의 메뉴 모드로는 프로모드, 스마트모드, 모바일 어드민이 있습니다.
   */
  export interface Menus {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 메뉴 모드
     *
     * new_pro: PC 어드민
     * mobile_admin : 모바일 어드민
     *
     *
     */
    mode: any;
    /**
     * @description
     * 메뉴 번호
     *
     *
     */
    menuNo: any;
    /**
     * @description
     * 메뉴명
     *
     *
     */
    name: any;
    /**
     * @description
     * 메뉴 경로
     *
     *
     */
    path: any;
    /**
     * @description
     * 앱 URL 포함 여부
     *
     * T : 포함
     * F : 미포함
     *
     *
     */
    containsAppUrl: any;
  }

  export interface RetrieveMenusInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shopNo?: any;
    /**
     * @description
     * 메뉴 모드
     *
     * new_pro: PC 어드민
     * mobile_admin : 모바일 어드민
     *
     * @default new_pro
     *
     *
     */
    mode?: any;
    /**
     * @description
     * 메뉴 번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    menuNo?: any;
    /**
     * @description
     * 앱 URL 포함 여부
     *
     * T : 포함
     * F : 미포함
     *
     *
     */
    containsAppUrl?: any;
  }

  export interface RetrieveMenusOutput {
    menus: {
      shopNo: number;
      mode: string;
      menuNo: Cafe24Datetime;
      name: string;
      path: string;
      containsAppUrl: Cafe24Enum;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 메뉴 모드와 경로 등을 목록으로 조회할 수 있습니다.
     * 메뉴 모드, 메뉴 번호, 앱 URL 포함 여부 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-menus
     *
     * @example 응답 예시
     * ```json
     * {
     *     "menus": [
     *         {
     *             "shop_no": 1,
     *             "mode": "new_pro",
     *             "menu_no": "2",
     *             "name": "Themes (PC)",
     *             "path": "https://sample.cafe24.com/disp/admin/shop1/Manage/Index",
     *             "contains_app_url": "F"
     *         },
     *         {
     *             "shop_no": 1,
     *             "mode": "new_pro",
     *             "menu_no": "78",
     *             "name": "Returns",
     *             "path": "https://sample.cafe24.com/admin/php/shop1/s_new/order_returns.php",
     *             "contains_app_url": "T"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveMenus(
      input: RetrieveMenusInput,
      options?: RequestOptions<RetrieveMenusOutput['menus'][number]>,
    ): Promise<AxiosResponse<RetrieveMenusOutput>>;
  }
}
