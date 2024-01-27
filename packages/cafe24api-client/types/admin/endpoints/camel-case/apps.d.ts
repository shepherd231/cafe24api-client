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
   * 앱(Apps)는 앱의 정보를 조회하고 수정할 수 있는 리소스입니다.
   * 해당 정보는 앱의 정보이므로, 서로 다른 쇼핑몰에서 호출해도 동일한 정보가 조회되는게 특징입니다.
   * 앱의 버전 정보를 조회하거나 앱의 버전을 API를 통해 수정할 수 있습니다.
   */
  export interface Apps {
    /**
     * @description
     * 버전
     *
     *
     */
    version: any;
    /**
     * @description
     * 버전 만료일
     *
     *
     */
    versionExpirationDate: any;
    /**
     * @description
     * 최초 버전
     *
     *
     */
    initialVersion: any;
    /**
     * @description
     * 이전 버전
     *
     *
     */
    previousVersion: any;
    /**
     * @description
     * 확장 타입
     *
     * section : 섹션(쇼핑몰 프론트에 html 삽입이 필요한 앱 타입)
     * embedded : 임베디드(쇼핑몰 프론트에 임베디드되어 자동으로 구동되는 앱 타입)
     *
     *
     */
    extensionType: any;
  }

  export interface RetrieveAnAppInformationInput {}

  export interface RetrieveAnAppInformationOutput {
    app: {
      version: Cafe24Date;
      versionExpirationDate: any;
      initialVersion: Cafe24Date;
      previousVersion: Cafe24Date;
      extensionType: string;
    };
  }
  export interface UpdateAnAppInformationInput {
    /**
     * @description
     * 버전
     *
     *
     */
    version?: any;
    /**
     * @description
     * 확장 타입
     *
     * section : 섹션(쇼핑몰 프론트에 html 삽입이 필요한 앱 타입)
     * embedded : 임베디드(쇼핑몰 프론트에 임베디드되어 자동으로 구동되는 앱 타입)
     *
     *
     */
    extensionType?: any;
  }

  export interface UpdateAnAppInformationOutput {
    app: {
      version: Cafe24Date;
      extensionType: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 해당 앱의 버전을 조회할 수 있습니다.
     * 현재 사용 중인 버전의 정보와 버전 만료일, 이전에 사용하던 버전 정보를 확인할 수 있습니다.
     * 해당 정보는 앱의 정보이기 때문에 어떤 쇼핑몰에서 조회해도 동일한 결과가 응답됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-an-app-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "app": {
     *         "version": "2020-03-01",
     *         "version_expiration_date": null,
     *         "initial_version": "2019-06-26",
     *         "previous_version": "2019-12-11",
     *         "extension_type": "section"
     *     }
     * }
     * ```
     */
    retrieveAnAppInformation(
      input?: RetrieveAnAppInformationInput,
      options?: AdminRequestOptions<RetrieveAnAppInformationOutput['app']>,
    ): Promise<AxiosResponse<RetrieveAnAppInformationOutput>>;
    /**
     * @description
     * 해당 앱의 버전을 변경할 수 있습니다.
     * 앱 버전 변경시 최초 버전(initial_version)보다 이전 버전으로 변경은 불가능합니다.
     * 해당 정보는 앱의 정보이기 때문에 어떤 쇼핑몰에서 호출해도 모든 쇼핑몰의 API 버전 정보가 변경됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-app-information
     *
     * @example 응답 예시
     * ```json
     * {
     *     "app": {
     *         "version": "2019-12-11",
     *         "extension_type": "section"
     *     }
     * }
     * ```
     */
    updateAnAppInformation(
      input: UpdateAnAppInformationInput,
      options?: AdminRequestOptions<UpdateAnAppInformationOutput['app']>,
    ): Promise<AxiosResponse<UpdateAnAppInformationOutput>>;
  }
}
