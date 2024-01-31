import Case from 'case';
import { Cafe24AdminAPIClient } from '../../../../src/client/index';
import Auth from '../../../../src/admin/endpoints/camel-case/auth/index';
import { TEST_CLIENT_MALL_ID } from '../../values';

describe('Auth (camelCased I/O fields)', () => {
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
      const response = await client.getAccessToken(
        {
          clientId: 'test-client-id',
          clientSecret: 'test-client-secret',
          code: 'test-code',
          redirectUri: 'https://test.com',
        },
        { fields: ['mallId', 'accessToken', 'refreshToken'] },
      );
      expect(response.status).toEqual(200);
      Object.keys(response.data).forEach((key) => {
        expect(key).toEqual(Case.camel(key));
      });
    });
  });

  describe('getAccessTokenUsingRefreshToken', () => {
    it('should return 200', async () => {
      const response = await client.getAccessTokenUsingRefreshToken({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        refreshToken: 'test-refresh-token',
      });
      expect(response.status).toEqual(200);
      Object.keys(response.data).forEach((key) => {
        expect(key).toEqual(Case.camel(key));
      });
    });
  });
});
