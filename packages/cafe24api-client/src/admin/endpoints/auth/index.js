import { btoa } from 'abab';

export default (cls) => {
  cls.prototype.getAuthenticationCode = async function (input, options = {}) {
    // We don't need any authorization header for this request.
    options.headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Create a request to get the authentication code.
    return this.createRequest(
      'GET',
      '/api/v2/oauth/authorize',
      {
        client_id: input['client_id'],
        redirect_uri: input['redirect_uri'],
        response_type: 'code',
        state: input['state'],
        scope: input['scope'],
      },
      options,
    );
  };

  cls.prototype.getAccessToken = async function (input, options = {}) {
    // Need authorization header for this request.
    const password = btoa(`${input['client_id']}:${input['client_secret']}`);
    options.headers = this.createHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${password}`,
      ...options.headers,
    });

    // Create a request to get the access token.
    return this.createRequest(
      'POST',
      '/api/v2/oauth/token',
      {
        grant_type: 'authorization_code',
        code: input['code'],
        redirect_uri: input['redirect_uri'],
      },
      options,
    );
  };

  cls.prototype.getAccessTokenUsingRefreshToken = async function (
    input,
    options = {},
  ) {
    // Need authorization header for this request.
    const password = btoa(`${input['client_id']}:${input['client_secret']}`);
    options.headers = this.createHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${password}`,
      ...options.headers,
    });

    // Create a request to get the access token.
    return this.createRequest(
      'POST',
      '/api/v2/oauth/token',
      {
        grant_type: 'refresh_token',
        refresh_token: input['refresh_token'],
      },
      options,
    );
  };
};
