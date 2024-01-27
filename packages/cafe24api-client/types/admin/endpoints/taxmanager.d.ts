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
   * 세금 관리자(MSA)의 활성화 정보 관련 기능입니다.
   */
  export interface Taxmanager {
    /**
      * @description
      * 세금 관리자 활성화 정보
      * 
      * 
      */ 
    use: any;
  }

  export interface RetrieveActivationInformationForTaxManagerInput {
  }

  export interface RetrieveActivationInformationForTaxManagerOutput {
    taxmanager: { 
    use: Cafe24Enum;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 세금 관리자의 사용 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-activation-information-for-tax-manager
     *
     * @example 응답 예시
     * ```json
     * {
     *     "taxmanager": {
     *         "use": "T"
     *     }
     * }
     * ```
     */
    retrieveActivationInformationForTaxManager(
      input?: RetrieveActivationInformationForTaxManagerInput,
      options?: AdminRequestOptions<RetrieveActivationInformationForTaxManagerOutput['taxmanager']>,
    ): Promise<AxiosResponse<RetrieveActivationInformationForTaxManagerOutput>>;
  }
}
