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
   * SMS 설정(Sms setting)은 쇼핑몰의 SMS 설정에 관한 기능입니다.
   * SMS API를 사용하기 위해서는 먼저 쇼핑몰에서 SMS 발송 서비스를 사용하고 있는지 확인이 필요합니다.
   */
  export interface SmsSetting {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * SMS 사용 여부
      * 
      * T: 사용함
      * F: 사용안함
      * 
      * 
      */ 
    useSms: any;
    /**
      * @description
      * 수신거부자 제외 발송 여부
      * 
      * T : 제외
      * F : 포함
      * 
      * 
      */ 
    excludeUnsubscriber: any;
    /**
      * @description
      * 기본 발신번호
      * 
      * 
      */ 
    defaultSender: any;
    /**
      * @description
      * 무료 수신거부 전화번호
      * 
      * 
      */ 
    unsubscribePhone: any;
    /**
      * @description
      * SMS 발송방법
      * 
      * S: 단문 분할발송
      * L: 장문발송(3건 차감)
      * 
      * 
      */ 
    sendMethod: any;
  }

  export interface RetrieveSmsSettingsInput {
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

  export interface RetrieveSmsSettingsOutput {
    sms: { 
    shopNo: number;
    useSms: Cafe24Enum;
    excludeUnsubscriber: Cafe24Enum;
    defaultSender: Cafe24Datetime;
    unsubscribePhone: Cafe24Datetime;
    sendMethod: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰의 SMS 설정을 조회할 수 있습니다.
     * **해당 API는 한국어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-sms-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "sms": {
     *         "shop_no": 1,
     *         "use_sms": "F",
     *         "exclude_unsubscriber": "T",
     *         "default_sender": "01012345678",
     *         "unsubscribe_phone": "01012345678",
     *         "send_method": "S"
     *     }
     * }
     * ```
     */
    retrieveSmsSettings(
      input: RetrieveSmsSettingsInput,
      options?: AdminRequestOptions<RetrieveSmsSettingsOutput['sms']>,
    ): Promise<AxiosResponse<RetrieveSmsSettingsOutput>>;
  }
}
