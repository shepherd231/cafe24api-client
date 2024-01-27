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
   * 네이버페이 설정(Naverpay Setting)은 쇼핑몰의 네이버페이 공통인증키를 조회하거나 수정할 수 있는 기능입니다.
   */
  export interface NaverpaySetting {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 네이버 공통 인증키
     *
     *
     */
    authentication_key: any;
    /**
     * @description
     * 네이버페이 연동버전
     *
     *
     */
    naverpay_version: any;
    /**
     * @description
     * 페이센터 ID
     *
     *
     */
    shop_id: any;
    /**
     * @description
     * 네이버페이 구매 버튼 노출
     *
     *
     */
    is_button_show: any;
    /**
     * @description
     * 네이버 주문연동
     *
     *
     */
    is_used_order: any;
    /**
     * @description
     * 네이버 구매평연동
     *
     *
     */
    is_used_review: any;
    /**
     * @description
     * 네이버 구매평노출
     *
     *
     */
    is_show_review: any;
    /**
     * @description
     * 네이버페이 구매 버튼 클릭 시 페이지 이동
     *
     *
     */
    is_order_page: any;
    /**
     * @description
     * 네이버 가맹점 인증키
     *
     *
     */
    certi_key: any;
    /**
     * @description
     * 네이버 버튼 인증키
     *
     *
     */
    image_key: any;
    /**
     * @description
     * 네이버 버튼 디자인 : PC 상품상세페이지
     *
     *
     */
    naver_button_pc_product: any;
    /**
     * @description
     * 네이버 버튼 디자인 : PC 장바구니페이지
     *
     *
     */
    naver_button_pc_basket: any;
    /**
     * @description
     * 네이버 버튼 디자인 : Mobile 상품상세페이지
     *
     *
     */
    naver_button_mobile_product: any;
    /**
     * @description
     * 네이버 버튼 디자인 : Mobile 장바구니페이지
     *
     *
     */
    naver_button_mobile_basket: any;
  }

  export interface RetrieveNaverPaySettingsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shop_no?: any;
  }

  export interface RetrieveNaverPaySettingsOutput {
    naverpay: {
      shop_no: Cafe24Datetime;
      authentication_key: string;
      naverpay_version: Cafe24Datetime;
      shop_id: string;
      is_button_show: Cafe24Enum;
      is_used_order: Cafe24Enum;
      is_used_review: Cafe24Enum;
      is_show_review: Cafe24Enum;
      s_order_page: Cafe24Enum;
      certi_key: string;
      image_key: string;
      naver_button_pc_product: string;
      naver_button_pc_basket: string;
      naver_button_mobile_product: string;
      naver_button_mobile_basket: string;
    };
  }
  export interface CreateNaverPaySettingsInput {
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
     * 네이버 공통 인증키
     *
     * 형식 : [a-zA-Z0-9_-]
     * 최대글자수 : [50자]
     */
    authentication_key?: any;
    /**
     * @description
     * 네이버페이 연동버전
     *
     * @default 2.1
     *
     *
     */
    naverpay_version?: any;
    /**
     * @description
     * 페이센터 ID
     *
     * @required
     */
    shop_id: any;
    /**
     * @description
     * 네이버페이 구매 버튼 노출
     *
     * @default T
     *
     *
     */
    is_button_show?: any;
    /**
     * @description
     * 네이버 주문연동
     *
     * @default T
     *
     *
     */
    is_used_order?: any;
    /**
     * @description
     * 네이버 구매평연동
     *
     * @default T
     *
     *
     */
    is_used_review?: any;
    /**
     * @description
     * 네이버 구매평노출
     *
     * @default T
     *
     *
     */
    is_show_review?: any;
    /**
     * @description
     * 네이버페이 구매 버튼 클릭 시 페이지 이동
     *
     * @default N
     *
     *
     */
    is_order_page?: any;
    /**
     * @description
     * 네이버 가맹점 인증키
     *
     * @required
     */
    certi_key: any;
    /**
     * @description
     * 네이버 버튼 인증키
     *
     * @required
     */
    image_key: any;
    /**
     * @description
     * 네이버 버튼 디자인 : PC 상품상세페이지
     *
     * @default A|1|2
     *
     *
     */
    naver_button_pc_product?: any;
    /**
     * @description
     * 네이버 버튼 디자인 : PC 장바구니페이지
     *
     * @default A|1|1
     *
     *
     */
    naver_button_pc_basket?: any;
    /**
     * @description
     * 네이버 버튼 디자인 : Mobile 상품상세페이지
     *
     * @default MA|1|2
     *
     *
     */
    naver_button_mobile_product?: any;
    /**
     * @description
     * 네이버 버튼 디자인 : Mobile 장바구니페이지
     *
     * @default MA|1|1
     *
     *
     */
    naver_button_mobile_basket?: any;
  }

  export interface CreateNaverPaySettingsOutput {
    naverpay: {
      authentication_key: string;
      naverpay_version: Cafe24Datetime;
      shop_id: string;
      is_button_show: Cafe24Enum;
      is_used_order: Cafe24Enum;
      is_used_review: Cafe24Enum;
      is_show_review: Cafe24Enum;
      s_order_page: Cafe24Enum;
      certi_key: string;
      image_key: string;
      naver_button_pc_product: string;
      naver_button_pc_basket: string;
      naver_button_mobile_product: string;
      naver_button_mobile_basket: string;
    };
  }
  export interface UpdateNaverPaySettingsInput {
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
     * 네이버 공통 인증키
     *
     * 형식 : [a-zA-Z0-9_-]
     * 최대글자수 : [50자]
     */
    authentication_key?: any;
  }

  export interface UpdateNaverPaySettingsOutput {
    naverpay: {
      shop_no: number;
      authentication_key: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 네이버페이 공통인증키를 조회합니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-naver-pay-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "naverpay": {
     *         "shop_no": "1",
     *         "authentication_key": "s_abcdefg",
     *         "naverpay_version": "2.1",
     *         "shop_id": "c_abcdefg",
     *         "is_button_show": "T",
     *         "is_used_order": "T",
     *         "is_used_review": "T",
     *         "is_show_review": "T",
     *         "s_order_page": "N",
     *         "certi_key": "ABC1234A-1A1A-1A23-1234-A12345A1A12A",
     *         "image_key": "ABC1234A-1A1A-1A23-1234-A12345A1A12A",
     *         "naver_button_pc_product": "A|1|2",
     *         "naver_button_pc_basket": "A|1|1",
     *         "naver_button_mobile_product": "MA|1|2",
     *         "naver_button_mobile_basket": "MA|1|1"
     *     }
     * }
     * ```
     */
    retrieveNaverPaySettings(
      input: RetrieveNaverPaySettingsInput,
      options?: AdminRequestOptions<RetrieveNaverPaySettingsOutput['naverpay']>,
    ): Promise<AxiosResponse<RetrieveNaverPaySettingsOutput>>;
    /**
     * @description
     * 네이버페이 가맹 시 네이버에서 발급한 공통인증키를 쇼핑몰 어드민에 등록할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-naver-pay-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "naverpay": {
     *         "authentication_key": "s_abcdefg",
     *         "naverpay_version": "2.1",
     *         "shop_id": "c_abcdefg",
     *         "is_button_show": "T",
     *         "is_used_order": "T",
     *         "is_used_review": "T",
     *         "is_show_review": "T",
     *         "s_order_page": "N",
     *         "certi_key": "ABC1234A-1A1A-1A23-1234-A12345A1A12A",
     *         "image_key": "ABC1234A-1A1A-1A23-1234-A12345A1A12A",
     *         "naver_button_pc_product": "A|1|2",
     *         "naver_button_pc_basket": "A|1|1",
     *         "naver_button_mobile_product": "MA|1|2",
     *         "naver_button_mobile_basket": "MA|1|1"
     *     }
     * }
     * ```
     */
    createNaverPaySettings(
      input: CreateNaverPaySettingsInput,
      options?: AdminRequestOptions<CreateNaverPaySettingsOutput['naverpay']>,
    ): Promise<AxiosResponse<CreateNaverPaySettingsOutput>>;
    /**
     * @description
     * 쇼핑몰의 네이버페이 공통인증키를 수정합니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-naver-pay-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "naverpay": {
     *         "shop_no": 1,
     *         "authentication_key": "s_abcdefg"
     *     }
     * }
     * ```
     */
    updateNaverPaySettings(
      input: UpdateNaverPaySettingsInput,
      options?: AdminRequestOptions<UpdateNaverPaySettingsOutput['naverpay']>,
    ): Promise<AxiosResponse<UpdateNaverPaySettingsOutput>>;
  }
}
