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
   * 자동메시지 설정(Automessages setting)은 메시지 자동 발송 시 사용 중인 발송 수단을 확인 및 어떤 발송 수단으로 우선발송할 지 조회, 변경하는 리소스입니다.
   */
  export interface AutomessagesSetting {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * SMS 사용 여부
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_sms: any;
    /**
      * @description
      * 카카오알림톡 사용 여부
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_kakaoalimtalk: any;
    /**
      * @description
      * PUSH 사용 여부
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    use_push: any;
    /**
      * @description
      * 자동 발송 메시지 발송 방법
      * 
      * S: SMS
      * K: 카카오알림톡(발송 실패 시
      * SMS로 대체 발송)
      * 
      * 
      */ 
    send_method: any;
    /**
      * @description
      * 푸시 수신 대상에게 푸시 우선 발송 여부
      * 
      * T : 우선 발송함
      * F : 우선 발송 안함
      * 
      * 
      */ 
    send_method_push: any;
  }

  export interface RetrieveTheAutomatedMessageSettingsInput {
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

  export interface RetrieveTheAutomatedMessageSettingsOutput {
    automessages: { 
    shop_no: number;
    use_sms: Cafe24Enum;
    use_kakaoalimtalk: Cafe24Enum;
    use_push: Cafe24Enum;
    send_method: Cafe24Enum;
    send_method_push: Cafe24Enum;
    };
  }
  export interface UpdateAnAutomatedMessageInput {
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
      * 자동 발송 메시지 발송 방법
      * 
      * S: SMS
      * K: 카카오알림톡(발송 실패 시
      * SMS로 대체 발송)
      * 
      * @required
      */ 
    send_method: any;
    /**
      * @description
      * 푸시 수신 대상에게 푸시 우선 발송 여부
      * 
      * T : 우선 발송함
      * F : 우선 발송 안함
      * 
      * 
      */ 
    send_method_push?: any;
  }

  export interface UpdateAnAutomatedMessageOutput {
    automessages: { 
    shop_no: number;
    send_method: Cafe24Enum;
    send_method_push: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 자동메시지 발송 설정내역을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-the-automated-message-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "automessages": {
     *         "shop_no": 1,
     *         "use_sms": "T",
     *         "use_kakaoalimtalk": "T",
     *         "use_push": "T",
     *         "send_method": "S",
     *         "send_method_push": "F"
     *     }
     * }
     * ```
     */
    retrieveTheAutomatedMessageSettings(
      input: RetrieveTheAutomatedMessageSettingsInput,
      options?: AdminRequestOptions<RetrieveTheAutomatedMessageSettingsOutput['automessages']>,
    ): Promise<AxiosResponse<RetrieveTheAutomatedMessageSettingsOutput>>;
    /**
     * @description
     * 자동메시지 발송 설정내역을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-automated-message
     *
     * @example 응답 예시
     * ```json
     * {
     *     "automessages": {
     *         "shop_no": 1,
     *         "send_method": "S",
     *         "send_method_push": "F"
     *     }
     * }
     * ```
     */
    updateAnAutomatedMessage(
      input: UpdateAnAutomatedMessageInput,
      options?: AdminRequestOptions<UpdateAnAutomatedMessageOutput['automessages']>,
    ): Promise<AxiosResponse<UpdateAnAutomatedMessageOutput>>;
  }
}
