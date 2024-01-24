import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 카카오싱크 SNS(Socials kakaosync)는 쇼핑몰의 카카오싱크에 대한 설정을 조회하거나 설정할 수 있는 기능입니다.
   */
  export interface SocialsKakaosync {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 카카오싱크 사용여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    use_kakaosync: any;
    /**
     * @description
     * REST API 키
     *
     *
     */
    rest_api_key: any;
    /**
     * @description
     * JavaScript 키
     *
     *
     */
    javascript_key: any;
    /**
     * @description
     * 자동 로그인 사용
     *
     * 카카오 웹브라우저로 쇼핑몰 이용시 카카오 아이디로 로그인 기능 사용 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    auto_login: any;
    /**
     * @description
     * 제3자 제공 동의 여부
     *
     * T : 동의함
     * F : 동의안함
     *
     *
     */
    thirdparty_agree: any;
    /**
     * @description
     * 제3자 제공 동의 날짜
     *
     *
     */
    thirdparty_agree_date: any;
    /**
     * @description
     * 쇼핑몰 가입 후 이동 페이지
     *
     * T : 가입 완료 페이지로 이동
     * F : 가입 완료 페이지 없이 즉시 가입
     *
     *
     */
    use_signup_result_page: any;
  }

  export interface KakaoSyncDetailsInput {
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

  export interface KakaoSyncDetailsOutput {
    kakaosync: {
      shop_no: number;
      use_kakaosync: Cafe24Enum;
      rest_api_key: string;
      javascript_key: string;
      auto_login: Cafe24Enum;
      thirdparty_agree: Cafe24Enum;
      thirdparty_agree_date: Cafe24Datetime;
      use_signup_result_page: Cafe24Enum;
    };
  }
  export interface KakaoSyncUpdatesInput {
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
     * REST API 키
     *
     * @required
     *
     * 형식 : [a-zA-Z0-9]
     * 최대글자수 : [255자]
     */
    rest_api_key: any;
    /**
     * @description
     * JavaScript 키
     *
     * @required
     *
     * 형식 : [a-zA-Z0-9]
     * 최대글자수 : [255자]
     */
    javascript_key: any;
    /**
     * @description
     * 자동 로그인 사용
     *
     * 카카오 웹브라우저로 쇼핑몰 이용시 카카오 아이디로 로그인 기능 사용 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    auto_login?: any;
    /**
     * @description
     * 쇼핑몰 가입 후 이동 페이지
     *
     * T : 가입 완료 페이지로 이동
     * F : 가입 완료 페이지 없이 즉시 가입
     *
     * @default F
     *
     *
     */
    use_signup_result_page?: any;
  }

  export interface KakaoSyncUpdatesOutput {
    kakaosync: {
      shop_no: number;
      rest_api_key: string;
      javascript_key: string;
      auto_login: Cafe24Enum;
      use_signup_result_page: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 카카오싱크에 대한 설정을 조회할 수 있습니다.
     * 카카오싱크 사용여부, 자동 로그인 사용여부 등을 조회할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#kakao-sync-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "kakaosync": {
     *         "shop_no": 1,
     *         "use_kakaosync": "T",
     *         "rest_api_key": "4acf565d122354e36b942c5a51dc129e",
     *         "javascript_key": "a201bef3340f797aac6b83de0b5c27a1",
     *         "auto_login": "T",
     *         "thirdparty_agree": "T",
     *         "thirdparty_agree_date": "2020-11-05T17:59:00+09:00",
     *         "use_signup_result_page": "T"
     *     }
     * }
     * ```
     */
    kakaoSyncDetails(
      input: KakaoSyncDetailsInput,
      options?: RequestOptions<KakaoSyncDetailsOutput['kakaosync']>,
    ): Promise<AxiosResponse<KakaoSyncDetailsOutput>>;
    /**
     * @description
     * 카카오 웹브라우져에 대한 자동 로그인 기능의 사용여부를 수정할 수 있습니다.
     *
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#kakao-sync-updates
     *
     * @example 응답 예시
     * ```json
     * {
     *     "kakaosync": {
     *         "shop_no": 1,
     *         "rest_api_key": "4acf565d122354e36b942c5a51dc129e",
     *         "javascript_key": "a201bef3340f797aac6b83de0b5c27a1",
     *         "auto_login": "T",
     *         "use_signup_result_page": "T"
     *     }
     * }
     * ```
     */
    kakaoSyncUpdates(
      input: KakaoSyncUpdatesInput,
      options?: RequestOptions<KakaoSyncUpdatesOutput['kakaosync']>,
    ): Promise<AxiosResponse<KakaoSyncUpdatesOutput>>;
  }
}
