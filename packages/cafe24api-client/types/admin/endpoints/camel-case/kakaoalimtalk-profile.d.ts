import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 상점의 카카오채널 프로필키 등록여부를 확인할 수 있는 리소스입니다.
   */
  export interface KakaoalimtalkProfile {
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
      * 카카오 채널 발신 프로필 키
      * 
      * 
      */ 
    kakaoSenderkey: any;
  }

  export interface RetrieveAKakaoChannelSenderProfileKeyInput {
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

  export interface RetrieveAKakaoChannelSenderProfileKeyOutput {
    kakaoprofile: { 
    shopNo: number;
    kakaoSenderkey: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 카카오채널 발신 프로필키(senderkey)를 조회할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-kakao-channel-sender-profile-key
     *
     * @example 응답 예시
     * ```json
     * {
     *     "kakaoprofile": {
     *         "shop_no": 1,
     *         "kakao_senderkey": "e04b7660a7aedcc7916840e1e0add842b1608525"
     *     }
     * }
     * ```
     */
    retrieveAKakaoChannelSenderProfileKey(
      input: RetrieveAKakaoChannelSenderProfileKeyInput,
      options?: RequestOptions<RetrieveAKakaoChannelSenderProfileKeyOutput['kakaoprofile']>,
    ): Promise<AxiosResponse<RetrieveAKakaoChannelSenderProfileKeyOutput>>;
  }
}
