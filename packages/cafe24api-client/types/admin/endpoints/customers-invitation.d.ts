import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 회원 초대(invitation)는 계정을 활성화하기 위해 SMS, 이메일 등으로 초대 메시지를 발송하는 기능입니다.
   * 기존에 가입되어 있는 아이디가 있어야만 초대가 가능합니다.
   */
  export interface CustomersInvitation {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 최소값: [1]
     */
    shop_no: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [16자]
     */
    member_id: any;
  }

  export interface SendAnInvitationToActivateAccountInput {
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
     *
     * 최대글자수 : [16자]
     */
    member_id: any;
    /**
     * @description
     * 계정 활성화 초대 수단
     *
     * @required
     */
    invitation_type: any;
  }

  export interface SendAnInvitationToActivateAccountOutput {
    invitation: {
      shop_no: number;
      member_id: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * SMS, 이메일 등으로 고객의 계정을 활성화하기 위한 초대 메시지를 발송합니다.
     * 회원아이디, 계정 활성화 초대 수단을 필수로 입력합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#send-an-invitation-to-activate-account
     *
     * @example 응답 예시
     * ```json
     * {
     *     "invitation": {
     *         "shop_no": 1,
     *         "member_id": "sampleid"
     *     }
     * }
     * ```
     */
    sendAnInvitationToActivateAccount(
      input: SendAnInvitationToActivateAccountInput,
      options?: RequestOptions<SendAnInvitationToActivateAccountInput>,
    ): Promise<AxiosResponse<SendAnInvitationToActivateAccountOutput>>;
  }
}
