import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  export interface GetAuthenticationCodeInput {
    /**
     * @description
     * 개발자 센터에서 생성한 앱의 client_id를 입력합니다.
     */
    clientId: string;
    /**
     * @description
     * 위변조 방지를 위해 입력하는 값으로 코드 반환시 같은 값이 반환됩니다.
     */
    redirectUri: string;
    /**
     * @description
     * 위변조 방지를 위해 입력하는 값으로 코드 반환시 같은 값이 반환됩니다.
     */
    state: string;
    /**
     * @description
     * 해당 접근 토큰으로 접근할 리소스 서버의 권한을 입력할 수 있습니다.
     */
    scope: string;
  }

  export interface GetAccessTokenInput {
    /**
     * @description
     * 개발자 센터에서 생성한 앱의 client_id를 입력합니다.
     */
    clientId: string;
    /**
     * @description
     * 개발자 센터에서 생성한 앱의 client_secret을 입력합니다.
     */
    clientSecret: string;
    /**
     * @description
     * 발급받은 코드를 입력합니다.
     */
    code: string;
    /**
     * 개발자 센터에서 생성한 앱의 Redirect URL을 입력합니다.
     */
    redirectUri: string;
  }

  export interface GetAccessTokenOutput {
    accessToken: string;
    expiresAt: Cafe24Datetime;
    refreshToken: string;
    refreshTokenExpiresAt: Cafe24Datetime;
    clientId: string;
    mallId: string;
    userId: string;
    scopes: string[];
    issuedAt: Cafe24Datetime;
  }

  export interface GetAccessTokenUsingRefreshTokenInput {
    /**
     * @description
     * 개발자 센터에서 생성한 앱의 client_id를 입력합니다.
     */
    clientId: string;
    /**
     * @description
     * 개발자 센터에서 생성한 앱의 client_secret을 입력합니다.
     */
    clientSecret: string;
    /**
     * @description
     * 토큰 발급시 받은 refresh_token을 입력합니다.
     */
    refreshToken: string;
  }

  export interface GetAccessTokenUsingRefreshTokenInput
    extends GetAccessTokenOutput {}

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 토큰발급 요청시 사용된 code는 재사용할 수 없으며 코드 발급 후 1분이 경과하면 만료됩니다.
     *
     * 접근 토큰을 발급 받으려면 면저 접근 코드를 요청해야 합니다. 접근 코드는 클라이언트가 웹 애플리케이션 형태일 경우
     * 코드 요청은 cURL이 아닌 웹브라우저에서 진행하셔야 합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#get-authentication-code
     *
     * @example 응답 예시
     * ```bash
     * HTTP/1.1 302 Found
     * Location: {redirect_uri}?code={authorize_code}&state={state}
     * ```
     */
    getAuthenticationCode: (
      input: GetAuthenticationCodeInput,
      options?: RequestOptions<GetAuthenticationCodeInput>,
    ) => Promise<AxiosResponse>;

    /**
     * @description
     * 발급 받은 인증 코드를 사용하여 실제로 API를 호출할 수 있는
     * 사용자 토큰(Access Token, Refresh Token)을 받아 올 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#get-access-token
     *
     * @example 응답 예시
     * ```json
     * {
     *   "accessToken": "0iqR5nM5EJIq..........",
     *   "expiresAt": "2021-03-01T14:00:00.000",
     *   "refreshToken": "JeTJ7XpnFC0P..........",
     *   "refreshTokenExpiresAt": "2021-03-15T12:00:00.000",
     *   "clientId": "BrIfqEKoPxeE..........",
     *   "mallId": "yourmall",
     *   "userId": "test",
     *   "scopes": [
     *     "mall.read_order",
     *     "mall.read_product",
     *     "mall.read_store",
     *     "...etc...",
     *   ],
     *   "issuedAt": "2021-03-01T12:00:00.000"
     * }
     * ```
     */
    getAccessToken: (
      input: GetAccessTokenInput,
      options?: RequestOptions<GetAccessTokenInput>,
    ) => Promise<AxiosResponse<GetAccessTokenOutput>>;

    /**
     * @description
     * 접근 토큰은 발급 받은 후 2시간이 지나면 사용할 수 없습니다.
     * 접근 토큰이 만료된 후 다시 재발급을 받아야 리소스 서버에 접근할 수 있습니다.
     * 이미 접근 토큰을 발급 받았다면 refresh_token를 사용하여 접근 토큰을 재발급 받을수 있습니다.
     *
     * refresh token은 2주간 유효하며,
     * refresh token 만료전에 요청을 하면 갱신된 access token과 갱신된 refresh token이 함께 반환됩니다.
     * 기존 refresh token은 만료처리되어 사용할 수 없습니다.
     *
     * 발급 받은 인증 코드를 사용하여 실제로 API를 호출할 수 있는
     * 사용자 토큰(Access Token, Refresh Token)을 받아 올 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#get-access-token-using-refresh-token
     *
     * @example 응답 예시
     * ```json
     * {
     *   "accessToken": "21EZes0dGSfN..........",
     *   "expiresAt": "2021-03-01T15:50:00.000",
     *   "refreshToken": "xLlhWztQHBik............",
     *   "refreshTokenExpiresAt": "2021-03-15T13:50:00.000",
     *   "clientId": "BrIfqEKoPxeE..........",
     *   "mallId": "yourmall",
     *   "userId": "test",
     *   "scopes": [
     *     "mall.read_order",
     *     "mall.read_product",
     *     "mall.read_store",
     *     "...etc...",
     *   ],
     *   "issuedAt": "2021-03-01T13:50:00.000"
     * }
     * ```
     */
    getAccessTokenUsingRefreshToken: (
      input: GetAccessTokenUsingRefreshTokenInput,
      options?: RequestOptions<GetAccessTokenUsingRefreshTokenInput>,
    ) => Promise<AxiosResponse<GetAccessTokenUsingRefreshTokenOutput>>;
  }
}
