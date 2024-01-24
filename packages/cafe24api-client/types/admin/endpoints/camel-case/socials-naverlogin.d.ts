import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 네이버 로그인 설정정보를 조회하고 설정정보를 변경하는 리소스입니다.
   */
  export interface SocialsNaverlogin {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 네이버 로그인 사용여부
      * 
      * 
      */ 
    useNaverlogin: any;
    /**
      * @description
      * 클라이언트 아이디
      * 
      * 
      */ 
    clientId: any;
    /**
      * @description
      * 클라이언트 시크릿 키
      * 
      * 
      */ 
    clientSecret: any;
  }

  export interface NaverLoginDetailsInput {
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

  export interface NaverLoginDetailsOutput {
    naverlogin: { 
    shopNo: number;
    useNaverlogin: Cafe24Enum;
    clientId: string;
    clientSecret: string;
    };
  }
  export interface UpdateNaverLoginSettingsInput {
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
      * 네이버 로그인 사용여부
      * 
      * T:사용함
      * F:사용안함
      * 
      * @required
      */ 
    useNaverlogin: any;
    /**
      * @description
      * 클라이언트 아이디
      * 
      * 형식 : [a-zA-Z0-9_-]
      * 최대글자수 : [255자]
      */ 
    clientId?: any;
    /**
      * @description
      * 클라이언트 시크릿 키
      * 
      * 형식 : [a-zA-Z0-9_-]
      * 최대글자수 : [255자]
      */ 
    clientSecret?: any;
  }

  export interface UpdateNaverLoginSettingsOutput {
    naverlogin: { 
    shopNo: number;
    useNaverlogin: Cafe24Enum;
    clientId: string;
    clientSecret: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 네이버 로그인 설정여부를 조회할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#naver-login-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "naverlogin": {
     *         "shop_no": 1,
     *         "use_naverlogin": "T",
     *         "client_id": "d3t09cT11SNX22U5swHK",
     *         "client_secret": "XxT3QPuMkU"
     *     }
     * }
     * ```
     */
    naverLoginDetails(
      input: NaverLoginDetailsInput,
      options?: RequestOptions<NaverLoginDetailsOutput['naverlogin']>,
    ): Promise<AxiosResponse<NaverLoginDetailsOutput>>;
    /**
     * @description
     * 쇼핑몰에 설정된 네이버 로그인 정보를 수정할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-naver-login-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "naverlogin": {
     *         "shop_no": 1,
     *         "use_naverlogin": "T",
     *         "client_id": "d3t09cT11SNX22U5swHK",
     *         "client_secret": "XxT3QPuMkU"
     *     }
     * }
     * ```
     */
    updateNaverLoginSettings(
      input: UpdateNaverLoginSettingsInput,
      options?: RequestOptions<UpdateNaverLoginSettingsOutput['naverlogin']>,
    ): Promise<AxiosResponse<UpdateNaverLoginSettingsOutput>>;
  }
}
