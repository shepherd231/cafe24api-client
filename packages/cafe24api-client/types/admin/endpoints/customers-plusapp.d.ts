import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  export interface CustomersPlusapp {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 최소값: [1]
      */ 
    shop_no: any;
    /**
      * @description
      * OS 타입
      * 
      * 
      */ 
    os_type: any;
    /**
      * @description
      * 설치일
      * 
      * 
      */ 
    install_date: any;
    /**
      * @description
      * 자동로그인 설정 여부
      * 
      * 
      */ 
    auto_login_flag: any;
    /**
      * @description
      * 알림 수신 여부
      * 
      * 
      */ 
    use_push_flag: any;
  }

  export interface RetrieveAppInstallationInformationInput {
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
      * 회원아이디
      * 
      * @required
      */ 
    member_id: any;
  }

  export interface RetrieveAppInstallationInformationOutput {
    plusapp: { 
    shop_no: number;
    os_type: string;
    install_date: Cafe24Datetime;
    auto_login_flag: Cafe24Enum;
    use_push_flag: Cafe24Enum;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-app-installation-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "plusapp": [
     *         {
     *             "shop_no": 1,
     *             "os_type": "ios",
     *             "install_date": "2018-01-18T11:19:27+09:00",
     *             "auto_login_flag": "T",
     *             "use_push_flag": "T"
     *         },
     *         {
     *             "shop_no": 1,
     *             "os_type": "android",
     *             "install_date": "2018-01-18T11:19:27+09:00",
     *             "auto_login_flag": "F",
     *             "use_push_flag": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAppInstallationInformation(
      input: RetrieveAppInstallationInformationInput,
      options?: RequestOptions<RetrieveAppInstallationInformationOutput['plusapp'][number]>,
    ): Promise<AxiosResponse<RetrieveAppInstallationInformationOutput>>;
  }
}
