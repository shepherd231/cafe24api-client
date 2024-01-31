import { AxiosResponse } from 'axios';
import Case from 'case';
import { Cafe24AdminAPIClient } from '../../../src/client/index';
import Auth from '../../../src/admin/endpoints/auth/index';
import { TEST_CLIENT_MALL_ID } from '../values';

describe('Auth', () => {
  /**
   * @type {Cafe24AdminAPIClient}
   */
  let client;
  it('should have newly added methods', () => {
    Cafe24AdminAPIClient.use(Auth);

    client = new Cafe24AdminAPIClient({
      mallId: TEST_CLIENT_MALL_ID,
      accessToken: 'test-access-token',
    });

    expect(typeof client.getAuthenticationCode).toEqual('function');
    expect(typeof client.getAccessToken).toEqual('function');
    expect(typeof client.getAccessTokenUsingRefreshToken).toEqual('function');
  });

  describe('getAccessToken', () => {
    it('should return 200 (with options.fields)', async () => {
      const response: AxiosResponse = await client.getAccessToken(
        {
          client_id: 'test-client-id',
          client_secret: 'test-client-secret',
          code: 'test-code',
          redirect_uri: 'https://test.com',
        },
        { fields: ['mall_id', 'access_token', 'refresh_token'] },
      );
      expect(response.config.headers['Content-Type']).toEqual(
        'application/x-www-form-urlencoded',
      );
      expect(
        response.config.headers['Authorization'].toString().split(' ').shift(),
      ).toEqual('Basic');
      expect(response.status).toEqual(200);
      Object.keys(response.data).forEach((key) => {
        expect(key).toEqual(Case.snake(key));
      });
    });
  });

  describe('getAccessTokenUsingRefreshToken', () => {
    it('should return 200', async () => {
      const response: AxiosResponse =
        await client.getAccessTokenUsingRefreshToken({
          client_id: 'test-client-id',
          client_secret: 'test-client-secret',
          refresh_token: 'test-refresh-token',
        });
      expect(response.status).toEqual(200);
      expect(response.config.headers['Content-Type']).toEqual(
        'application/x-www-form-urlencoded',
      );
      expect(
        response.config.headers['Authorization'].toString().split(' ').shift(),
      ).toEqual('Basic');
      Object.keys(response.data).forEach((key) => {
        expect(key).toEqual(Case.snake(key));
      });
    });
  });
});
