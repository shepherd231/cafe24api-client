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
   * 배송 관리자(Shippingmanager)는 배송 관리자 활성화 정보 관련 기능입니다.
   * 배송 관리자의 사용 정보를 조회할 수 있습니다.
   */
  export interface Shippingmanager {
    /**
     * @description
     * 배송 관리자 활성화 정보
     *
     *
     */
    use: any;
  }

  export interface RetrieveActivationInformationForShippingManagerInput {}

  export interface RetrieveActivationInformationForShippingManagerOutput {
    shippingmanager: {
      use: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 배송 관리자의 사용 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-activation-information-for-shipping-manager
     *
     * @example 응답 예시
     * ```json
     * {
     *     "shippingmanager": {
     *         "use": "T"
     *     }
     * }
     * ```
     */
    retrieveActivationInformationForShippingManager(
      input?: RetrieveActivationInformationForShippingManagerInput,
      options?: AdminRequestOptions<
        RetrieveActivationInformationForShippingManagerOutput['shippingmanager']
      >,
    ): Promise<
      AxiosResponse<RetrieveActivationInformationForShippingManagerOutput>
    >;
  }
}
