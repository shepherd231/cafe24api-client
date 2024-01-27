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
   *
   *
   * SMS를 통해 회원 혹은 특정 휴대전화 번호로 SMS메시지를 발송할 수 있습니다.
   * SMS API를 사용하기 위해서는 먼저 쇼핑몰에서 SMS 발송 서비스를 사용하고 있는지 확인이 필요합니다.
   */
  export interface Sms {
    /**
     * @description
     * 큐 코드
     *
     *
     */
    queueCode: any;
  }

  export interface SendASmsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 발신자 아이디
     *
     * 발신자의 고유한 일련번호
     *
     * @required
     */
    senderNo: any;
    /**
     * @description
     * 메시지
     *
     * @required
     */
    content: any;
    /**
     * @description
     * 수신자 전화번호
     *
     * 배열 최대사이즈: [100]
     */
    recipients?: any;
    /**
     * @description
     * 회원아이디
     *
     * 배열 최대사이즈: [100]
     */
    memberId?: any;
    /**
     * @description
     * 회원등급번호
     *
     * 0 : 전체 등급
     *
     *
     */
    groupNo?: any;
    /**
     * @description
     * 수신거부자 제외 발송 여부
     *
     * 수신거부자를 제외하고 발송할지 여부를 설정할 수 있음.
     *
     * T : 제외
     * F : 포함
     *
     * @default T
     *
     *
     */
    excludeUnsubscriber?: any;
    /**
     * @description
     * 발송 타입
     *
     * SMS 의 발송 타입.
     * SMS 는 1건당 최대 90byte 까지 입력 가능하고 90byte 초과 시 여러 개로 나눠서 발송한다.
     * LMS 는 1건당 최대 2000byte 까지 입력 가능하다.
     *
     * SMS : 단문
     * LMS : 장문
     *
     * @default SMS
     *
     *
     */
    type?: any;
    /**
     * @description
     * 제목
     *
     *
     */
    title?: any;
  }

  export interface SendASmsOutput {
    sms: {
      queueCode: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * SMS를 발송할 수 있습니다.
     * **해당 API는 한국어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#send-a-sms
     *
     * @example 응답 예시
     * ```json
     * {
     *     "sms": {
     *         "queue_code": "Q1810191529096VAeUD"
     *     }
     * }
     * ```
     */
    sendASms(
      input: SendASmsInput,
      options?: AdminRequestOptions<SendASmsOutput['sms']>,
    ): Promise<AxiosResponse<SendASmsOutput>>;
  }
}
