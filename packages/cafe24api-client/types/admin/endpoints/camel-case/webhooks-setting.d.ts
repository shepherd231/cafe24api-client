import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 쇼핑몰이 웹훅 사용에 동의(실시간 정보 조회 권한 동의)에 대해 조회할 수 있습니다.
   */
  export interface WebhooksSetting {
    /**
     * @description
     * 실시간 정보제공 권한
     *
     *
     */
    scopes: any;
  }

  export interface RetrieveWebhookSettingsInput {}

  export interface RetrieveWebhookSettingsOutput {
    webhook: {
      scopes: string[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰이 웹훅 사용에 동의(실시간 정보 조회 권한 동의)에 대해 조회합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-webhook-settings
     *
     * @example 응답 예시
     * ```json
     * {
     *     "webhook": {
     *         "scopes": [
     *             "mall.read_application",
     *             "mall.read_product"
     *         ]
     *     }
     * }
     * ```
     */
    retrieveWebhookSettings(
      input?: RetrieveWebhookSettingsInput,
      options?: RequestOptions<RetrieveWebhookSettingsOutput['webhook']>,
    ): Promise<AxiosResponse<RetrieveWebhookSettingsOutput>>;
  }
}
