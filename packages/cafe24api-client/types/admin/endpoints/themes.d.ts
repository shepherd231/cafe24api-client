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
   * 디자인(Themes)은 쇼핑몰에 사용하기 위해 구매하거나 혹은 직접 만든 디자인과 관련된 기능입니다.
   * PC 쇼핑몰과 모바일 쇼핑몰의 디자인을 모두 확인할 수 있습니다.
   * 디자인 목록에 있는 디자인 중 대표 디자인을 지정하면 쇼핑몰의 디자인이 해당 디자인으로 변경됩니다.
   *
   *
   */
  export interface Themes {
    /**
     * @description
     * 디자인 번호
     *
     * 최소값: [1]
     */
    skin_no: any;
    /**
     * @description
     * 디자인 코드
     *
     *
     */
    skin_code: any;
    /**
     * @description
     * 디자인명
     *
     * 최대글자수 : [100자]
     */
    skin_name: any;
    /**
     * @description
     * 디자인 썸네일 이미지 URL
     *
     * 최대글자수 : [255자]
     */
    skin_thumbnail_url: any;
    /**
     * @description
     * 디자인 용도 구분
     *
     * S : PC 기본스킨
     * C : PC 복사된 스킨
     * I : PC 상속된 스킨
     * M : 모바일 기본스킨/상속된 스킨
     * N : 모바일 복사된 스킨
     *
     *
     */
    usage_type: any;
    /**
     * @description
     * 에디터 타입
     *
     * H : 스마트 디자인 (HTML)
     * D : 에디봇 디자인 (Drag &amp; Drop)
     * W : 심플 디자인 (WYSIWYG)
     * E : 스마트디자인Easy
     *
     *
     */
    editor_type: any;
    /**
     * @description
     * 부모 디자인 번호
     *
     *
     */
    parent_skin_no: any;
    /**
     * @description
     * 판매자 디자인센터 아이디
     *
     *
     */
    seller_id: any;
    /**
     * @description
     * 판매자 디자인 코드
     *
     *
     */
    seller_skin_code: any;
    /**
     * @description
     * 디자인 구매 번호
     *
     * 최소값: [0]
     */
    design_purchase_no: any;
    /**
     * @description
     * 디자인센터 상품 코드
     *
     *
     */
    design_product_code: any;
    /**
     * @description
     * 언어 코드
     *
     * ko_KR : 국문
     * en_US : 영문
     * zh_CN : 중문(간체)
     * zh_TW : 중문(번체)
     * ja_JP : 일문
     * pt_PT : 포르투갈어
     * es_ES : 스페인어
     * vi_VN : 베트남어
     *
     * 최소글자수 : [5자]
     * 최대글자수 : [5자]
     */
    language_code: any;
    /**
     * @description
     * 대표디자인 설정 멀티쇼핑몰 번호
     *
     *
     */
    published_in: any;
    /**
     * @description
     * 생성일
     *
     * 날짜
     */
    created_date: any;
    /**
     * @description
     * 수정일
     *
     * 날짜
     */
    updated_date: any;
    /**
     * @description
     * 도메인 조회
     *
     *
     */
    preview_domain: any;
  }

  export interface RetrieveAListOfThemesInput {
    /**
     * @description
     * 디자인 타입
     *
     * pc : PC
     * mobile : 모바일
     *
     * @default pc
     *
     * @required
     */
    type: any;
  }

  export interface RetrieveAListOfThemesOutput {
    themes: {
      skin_no: number;
      skin_code: string;
      skin_name: string;
      skin_thumbnail_url: string;
      usage_type: Cafe24Enum;
      editor_type: Cafe24Enum;
      parent_skin_no: number;
      seller_id: any;
      seller_skin_code: any;
      design_purchase_no: number;
      design_product_code: any;
      language_code: string;
      published_in: string;
      created_date: Cafe24Datetime;
      updated_date: Cafe24Datetime;
      preview_domain: string[];
    }[];
  }
  export interface RetrieveACountOfThemesInput {
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

  export interface RetrieveACountOfThemesOutput {
    count: number;
  }
  export interface RetrieveAThemeInput {
    /**
     * @description
     * 디자인 번호
     *
     * 최소값: [1]
     */
    skin_no?: any;
  }

  export interface RetrieveAThemeOutput {
    theme: {
      skin_no: number;
      skin_code: string;
      skin_name: string;
      skin_thumbnail_url: string;
      usage_type: Cafe24Enum;
      editor_type: Cafe24Enum;
      parent_skin_no: any;
      seller_id: any;
      seller_skin_code: any;
      design_purchase_no: number;
      design_product_code: any;
      language_code: string;
      published_in: Cafe24Datetime;
      created_date: Cafe24Datetime;
      updated_date: any;
      preview_domain: string[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * PC 쇼핑몰 혹은 모바일 쇼핑몰의 전체 디자인들의 정보를 목록으로 조회할 수 있습니다.
     * 디자인코드, 디자인명, 언어코드 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-themes
     *
     * @example 응답 예시
     * ```json
     * {
     *     "themes": [
     *         {
     *             "skin_no": 3,
     *             "skin_code": "skin2",
     *             "skin_name": "My Shop Default Theme",
     *             "skin_thumbnail_url": "https://img.echosting.cafe24.com/smartAdmin/img/design/img_skin_default.jpg",
     *             "usage_type": "C",
     *             "editor_type": "H",
     *             "parent_skin_no": 1,
     *             "seller_id": null,
     *             "seller_skin_code": null,
     *             "design_purchase_no": 0,
     *             "design_product_code": null,
     *             "language_code": "ko_KR",
     *             "published_in": "unpublished",
     *             "created_date": "2017-12-20T17:03:24+09:00",
     *             "updated_date": "2017-12-20T17:03:24+09:00",
     *             "preview_domain": [
     *                 "https://myshop.cafe24.com/skin-skin2",
     *                 "https://myshop.cafe24.com/shop1/skin-skin2"
     *             ]
     *         },
     *         {
     *             "skin_no": 1,
     *             "skin_code": "skin1",
     *             "skin_name": "My Shop Old Theme",
     *             "skin_thumbnail_url": "https://img.echosting.cafe24.com/smartAdmin/img/design/img_skin_default.jpg",
     *             "usage_type": "S",
     *             "editor_type": "D",
     *             "parent_skin_no": null,
     *             "seller_id": null,
     *             "seller_skin_code": null,
     *             "design_purchase_no": 0,
     *             "design_product_code": null,
     *             "language_code": "ko_KR",
     *             "published_in": "1",
     *             "created_date": "2016-10-04T22:52:43+09:00",
     *             "updated_date": null,
     *             "preview_domain": [
     *                 "https://myshop.cafe24.com/skin-skin1",
     *                 "https://myshop.cafe24.com/shop1/skin-skin1"
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfThemes(
      input: RetrieveAListOfThemesInput,
      options?: AdminRequestOptions<
        RetrieveAListOfThemesOutput['themes'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfThemesOutput>>;
    /**
     * @description
     * 쇼핑몰의 디자인의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-themes
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 1
     * }
     * ```
     */
    retrieveACountOfThemes(
      input: RetrieveACountOfThemesInput,
      options?: AdminRequestOptions<RetrieveACountOfThemesOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfThemesOutput>>;
    /**
     * @description
     * 쇼핑몰의 특정 스킨번호(디자인 번호)의 정보를 조회할 수 있습니다.
     * 디자인코드, 디자인명 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-theme
     *
     * @example 응답 예시
     * ```json
     * {
     *     "theme": {
     *         "skin_no": 1,
     *         "skin_code": "skin1",
     *         "skin_name": "My Shop Default Theme",
     *         "skin_thumbnail_url": "https://img.echosting.cafe24.com/smartAdmin/img/design/img_skin_default.jpg",
     *         "usage_type": "S",
     *         "editor_type": "D",
     *         "parent_skin_no": null,
     *         "seller_id": null,
     *         "seller_skin_code": null,
     *         "design_purchase_no": 0,
     *         "design_product_code": null,
     *         "language_code": "ko_KR",
     *         "published_in": "1",
     *         "created_date": "2016-10-04T22:52:43+09:00",
     *         "updated_date": null,
     *         "preview_domain": [
     *             "https://myshop.cafe24.com/skin-skin1",
     *             "https://myshop.cafe24.com/shop1/skin-skin1"
     *         ]
     *     }
     * }
     * ```
     */
    retrieveATheme(
      input: RetrieveAThemeInput,
      options?: AdminRequestOptions<RetrieveAThemeOutput['theme']>,
    ): Promise<AxiosResponse<RetrieveAThemeOutput>>;
  }
}
