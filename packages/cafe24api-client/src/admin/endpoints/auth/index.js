import axios from 'axios';
import urlJoin from 'url-join';
import { btoa } from 'abab';

export default (cls) => {
  cls.prototype.getAuthenticationCode = async function (input, options) {
    const url = urlJoin(this.url, '/api/v2/oauth/authorize');
    const fields = options?.fields?.join(',');
    return axios.get(url, {
      params: this.createParams(
        {
          client_id: input['client_id'],
          redirect_uri: input['redirect_uri'],
          response_type: 'code',
          state: input['state'],
          scope: input['scope'],
        },
        fields,
      ),
      // We don't need any authorization header for this request.
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  cls.prototype.getAccessToken = async function (input, options) {
    const url = urlJoin(this.url, '/api/v2/oauth/token');
    const fields = options?.fields?.join(',');
    const password = btoa(`${input['client_id']}:${input['client_secret']}`);
    return axios.post(
      url,
      this.createBody(
        {
          grant_type: 'authorization_code',
          code: input['code'],
          redirect_uri: input['redirect_uri'],
        },
        fields,
      ),
      {
        headers: this.createHeaders({
          contentType: 'application/x-www-form-urlencoded',
          authorization: `Basic ${password}`,
        }),
      },
    );
  };

  cls.prototype.getAccessTokenUsingRefreshToken = async function (
    input,
    options,
  ) {
    const url = urlJoin(this.url, '/api/v2/oauth/token');
    const fields = options?.fields?.join(',');
    const password = btoa(`${input['client_id']}:${input['client_secret']}`);
    return axios.post(
      url,
      this.createBody(
        {
          grant_type: 'authorization_code',
          refresh_token: input['refresh_token'],
        },
        fields,
      ),
      {
        headers: this.createHeaders({
          contentType: 'application/x-www-form-urlencoded',
          authorization: `Basic ${password}`,
        }),
      },
    );
  };
};
