import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 카카오알림톡 서비스(Kakaoalimtalk setting) 사용 여부를 조회하고 설정을 변경하는 리소스입니다.
   */
  export interface KakaoalimtalkSetting {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 카카오알림톡 사용 여부
     *
     * T: 사용함
     * F: 사용안함
     *
     *
     */
    useKakaoalimtalk: any;
  }

  export interface RetrieveTheKakaoInfoTalkSettingsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     * 최소값: [1]
     */
    shopNo?: any;
  }

  export interface RetrieveTheKakaoInfoTalkSettingsOutput {
    kakaoalimtalk: {
      shopNo: number;
      useKakaoalimtalk: Cafe24Enum;
    };
  }
  export interface UpdateTheKakaoInfoTalkSettingsInput {
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
     * 카카오알림톡 사용 여부
     *
     * T: 사용함
     * F: 사용안함
     *
     *
     */
    useKakaoalimtalk?: any;
  }

  export interface UpdateTheKakaoInfoTalkSettingsOutput {
    kakaoalimtalk: {
      shopNo: number;
      useKakaoalimtalk: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 카카오알림톡 서비스 발송설정 내역을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-the-kakao-info-talk-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "kakaoalimtalk": {
     *         "shop_no": 1,
     *         "use_kakaoalimtalk": "T"
     *     }
     * }
     * ```
     */
    retrieveTheKakaoInfoTalkSettings(
      input: RetrieveTheKakaoInfoTalkSettingsInput,
      options?: RequestOptions<
        RetrieveTheKakaoInfoTalkSettingsOutput['kakaoalimtalk']
      >,
    ): Promise<AxiosResponse<RetrieveTheKakaoInfoTalkSettingsOutput>>;
    /**
     * @description
     * 카카오알림톡 서비스 발송 설정내역을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-the-kakao-info-talk-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "kakaoalimtalk": {
     *         "shop_no": 1,
     *         "use_kakaoalimtalk": "T"
     *     }
     * }
     * ```
     */
    updateTheKakaoInfoTalkSettings(
      input: UpdateTheKakaoInfoTalkSettingsInput,
      options?: RequestOptions<
        UpdateTheKakaoInfoTalkSettingsOutput['kakaoalimtalk']
      >,
    ): Promise<AxiosResponse<UpdateTheKakaoInfoTalkSettingsOutput>>;
  }
}
