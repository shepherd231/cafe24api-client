import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 모바일 설정(Mobile setting)은 쇼핑몰의 모바일 쇼핑몰 설정에 관한 리소스입니다.
   * 모바일 쇼핑몰 사용 여부와 접속 주소 자동연결의 사용/사용안함 여부를 조회할 수 있습니다.
   */
  export interface MobileSetting {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 모바일 쇼핑몰 사용설정
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useMobilePage: any;
    /**
     * @description
     * 모바일 접속 주소 자동연결 설정
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    useMobileDomainRedirection: any;
  }

  export interface RetrieveMobileSettingsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
  }

  export interface RetrieveMobileSettingsOutput {
    mobile: {
      shopNo: number;
      useMobilePage: Cafe24Enum;
      useMobileDomainRedirection: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 모바일 설정을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-mobile-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "mobile": {
     *         "shop_no": 1,
     *         "use_mobile_page": "T",
     *         "use_mobile_domain_redirection": "T"
     *     }
     * }
     * ```
     */
    retrieveMobileSettings(
      input: RetrieveMobileSettingsInput,
      options?: RequestOptions<RetrieveMobileSettingsOutput['mobile']>,
    ): Promise<AxiosResponse<RetrieveMobileSettingsOutput>>;
  }
}
