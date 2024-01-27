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
   * 디자인 아이콘은 상품, 게시판, 이벤트, 카드, 결제수단 로고로 사용 중인 작은 이미지입니다.
   * PC 쇼핑몰과 모바일 쇼핑몰의 아이콘을 모두 확인할 수 있습니다.
   */
  export interface Icons {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 아이콘 아이디
     *
     *
     */
    id: any;
    /**
     * @description
     * 디자인 타입
     *
     * pc : PC
     * mobile : 모바일
     *
     *
     */
    type: any;
    /**
     * @description
     * 그룹 코드
     *
     * A : 상품 아이콘
     * B : 게시판 아이콘
     * C : 카드 아이콘
     * E : 이벤트 아이콘
     *
     *
     */
    groupCode: any;
    /**
     * @description
     * 아이콘 URL
     *
     *
     */
    path: any;
    /**
     * @description
     * 아이콘 노출여부
     *
     * T : 노출함
     * F : 노출안함
     *
     *
     */
    display: any;
    /**
     * @description
     * 아이콘 설명
     *
     *
     */
    description: any;
  }

  export interface RetrieveAListOfDesginIconsInput {
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
     * 디자인 타입
     *
     * pc : PC
     * mobile : 모바일
     *
     * @default pc
     *
     *
     */
    type?: any;
  }

  export interface RetrieveAListOfDesginIconsOutput {
    icons: {
      shopNo: number;
      id: number;
      type: string;
      groupCode: Cafe24Enum;
      path: string;
      display: Cafe24Enum;
      description: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * PC와 모바일 쇼핑몰에서 사용하는 아이콘을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-desgin-icons
     *
     * @example 응답 예시
     * ```json
     * {
     *     "icons": [
     *         {
     *             "shop_no": 1,
     *             "id": 2,
     *             "type": "pc",
     *             "group_code": "A",
     *             "path": "https://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_point.gif",
     *             "display": "T",
     *             "description": "Points for purchase"
     *         },
     *         {
     *             "shop_no": 1,
     *             "id": 8,
     *             "type": "pc",
     *             "group_code": "A",
     *             "path": "https://img.echosting.cafe24.com/design/skin/admin/ko_KR/btn_prd_zoom.gif",
     *             "display": "T",
     *             "description": "Zoom-in"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfDesginIcons(
      input: RetrieveAListOfDesginIconsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfDesginIconsOutput['icons'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfDesginIconsOutput>>;
  }
}
