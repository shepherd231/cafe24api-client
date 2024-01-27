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
   * SMS 발신자(Sms senders)는 SMS를 발송할 발신번호를 나타냅니다. SMS 발신자의 발신번호는 반드시 본인인증이 되어있어야 합니다.
   * SMS 발신자는 SMS에 속해있는 하위 리소스입니다.
   */
  export interface SmsSenders {
    /**
     * @description
     * 발신자 아이디
     *
     * 발신자의 고유한 일련번호
     *
     *
     */
    sender_no: any;
    /**
     * @description
     * 발신자 번호
     *
     * 발신자의 전화번호
     *
     *
     */
    sender: any;
    /**
     * @description
     * 인증 상태
     *
     * 발신자의 전화번호의 인증 상태.
     * 인증완료 상태인 발신자로만 SMS 를 발송할 수 있다.
     *
     * 00 : 삭제
     * 10 : 등록
     * 20 : 심사중
     * 30 : 인증완료
     * 40 : 반려
     *
     *
     */
    auth_status: any;
  }

  export interface RetrieveAListOfSmsSendersInput {
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfSmsSendersOutput {
    senders: {
      sender_no: number;
      sender: string;
      auth_status: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 SMS 발신자를 목록으로 조회할 수 있습니다.
     * 해당 API는 한국어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-sms-senders
     *
     * @example 응답 예시
     * ```json
     * {
     *     "senders": [
     *         {
     *             "sender_no": 3,
     *             "sender": "010-1234-5678",
     *             "auth_status": "30"
     *         },
     *         {
     *             "sender_no": 2,
     *             "sender": "01012345678",
     *             "auth_status": "20"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfSmsSenders(
      input: RetrieveAListOfSmsSendersInput,
      options?: AdminRequestOptions<
        RetrieveAListOfSmsSendersOutput['senders'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfSmsSendersOutput>>;
  }
}
