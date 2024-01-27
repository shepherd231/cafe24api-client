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
   * 애플아이디 로그인(Socials apple)은 쇼핑몰 이용 고객의 애플아이디 로그인에 관한 기능입니다.
   * 애플아이디 로그인 설정을 사용하기 위해서는 먼저 애플의 개발자 계정에서 Sign in with Apple 앱 설정을 완료하여야 합니다.
   */
  export interface SocialsApple {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 애플 로그인 사용
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_apple_login: any;
    /**
      * @description
      * client id
      * 
      * 
      */ 
    client_id: any;
    /**
      * @description
      * Team ID
      * 
      * 
      */ 
    team_id: any;
    /**
      * @description
      * Key ID
      * 
      * 
      */ 
    key_id: any;
    /**
      * @description
      * Auth Key 파일명
      * 
      * 
      */ 
    auth_key_file_name: any;
    /**
      * @description
      * 애플 로그인 본인인증
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_certification: any;
  }

  export interface AppleLoginSyncDetailsInput {
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

  export interface AppleLoginSyncDetailsOutput {
    apple: { 
    shop_no: number;
    use_apple_login: Cafe24Enum;
    client_id: string;
    team_id: string;
    key_id: string;
    auth_key_file_name: string;
    use_certification: Cafe24Enum;
    };
  }
  export interface AppleLoginSyncSettingsInput {
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
      * 애플 로그인 사용
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_apple_login?: any;
    /**
      * @description
      * Client ID
      * 
      * 애플 개발자 센터의 Service ID 생성 시 설정한 Identifier
      * 
      * 최대글자수 : [300자]
      */ 
    client_id?: any;
    /**
      * @description
      * Team ID
      * 
      * 애플 개발자 센터의 App ID Prefix
      * 
      * 최대글자수 : [300자]
      */ 
    team_id?: any;
    /**
      * @description
      * Key ID
      * 
      * 애플 개발자 센터의 Key ID
      * 
      * 최대글자수 : [300자]
      */ 
    key_id?: any;
    /**
      * @description
      * Auth Key 파일명
      * 
      * App ID의 Key파일로 .p8파일만 가능
      * 
      * 최대글자수 : [30자]
      */ 
    auth_key_file_name?: any;
    /**
      * @description
      * Auth Key 파일 내용
      * 
      * .p8파일을 텍스트 파일로 열어 줄바꿈 없이 값을 작성
      * 
      * 최대글자수 : [300자]
      */ 
    auth_key_file_contents?: any;
    /**
      * @description
      * 애플 로그인 본인인증
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_certification?: any;
  }

  export interface AppleLoginSyncSettingsOutput {
    apple: { 
    shop_no: number;
    use_apple_login: Cafe24Enum;
    client_id: string;
    team_id: string;
    key_id: string;
    auth_key_file_name: string;
    use_certification: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰 이용 고객의 애플 로그인 연동정보를 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#apple-login-sync-details
     *
     * @example 응답 예시
     * ```json
     * {
     *     "apple": {
     *         "shop_no": 1,
     *         "use_apple_login": "T",
     *         "client_id": "wpv6z7snuJiDYfSsN9ea",
     *         "team_id": "T3VC5A6A2E",
     *         "key_id": "N2Q4JKNZSM",
     *         "auth_key_file_name": "AuthKey_N2Q4JKNZSM.p8",
     *         "use_certification": "T"
     *     }
     * }
     * ```
     */
    appleLoginSyncDetails(
      input: AppleLoginSyncDetailsInput,
      options?: AdminRequestOptions<AppleLoginSyncDetailsOutput['apple']>,
    ): Promise<AxiosResponse<AppleLoginSyncDetailsOutput>>;
    /**
     * @description
     * 쇼핑몰 이용 고객의 애플 로그인 연동정보를 수정합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#apple-login-sync-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "apple": {
     *         "shop_no": 1,
     *         "use_apple_login": "T",
     *         "client_id": "wpv6z7snuJiDYfSsN9ea",
     *         "team_id": "T3VC5A6A2E",
     *         "key_id": "N2Q4JKNZSM",
     *         "auth_key_file_name": "AuthKey_N2Q4JKNZSM.p8",
     *         "use_certification": "T"
     *     }
     * }
     * ```
     */
    appleLoginSyncSettings(
      input: AppleLoginSyncSettingsInput,
      options?: AdminRequestOptions<AppleLoginSyncSettingsOutput['apple']>,
    ): Promise<AxiosResponse<AppleLoginSyncSettingsOutput>>;
  }
}
