import axios from 'axios';
import { MockAPICall } from './mocks/auth.mock';
import Case from 'case';
import { Cafe24AdminAPIClient } from '../../../src/client/index';
import Auth from '../../../src/admin/endpoints/auth/index';

// https://stackoverflow.com/questions/45016033/how-do-i-test-axios-in-jest
jest.mock('axios');

describe('Auth', () => {
  /**
   * @type {Cafe24AdminAPIClient}
   */
  let client;
  it('should have newly added methods', () => {
    Cafe24AdminAPIClient.use(Auth);

    client = new Cafe24AdminAPIClient({
      mallId: 'test',
      accessToken: 'test-access-token',
    });

    expect(typeof client.getAuthenticationCode).toEqual('function');
    expect(typeof client.getAccessToken).toEqual('function');
    expect(typeof client.getAccessTokenUsingRefreshToken).toEqual('function');
  });

  describe('getAuthenticationCode', () => {
    it('should return redirect response', async () => {
      axios.get.mockImplementationOnce(MockAPICall.getAuthenticationCode);
      const response = await client.getAuthenticationCode({
        client_id: 'test-client-id',
        redirect_uri: 'https://test.com',
        state: 'test-state',
        scope: 'mall.read_product',
      });
      expect(response.status).toEqual(302);
    });
  });

  describe('getAccessToken', () => {
    it('should return 200 (with options.fields)', async () => {
      axios.post.mockImplementationOnce(MockAPICall.getAccessToken);
      const response = await client.getAccessToken(
        {
          client_id: 'test-client-id',
          client_secret: 'test-client-secret',
          code: 'test-code',
          redirect_uri: 'https://test.com',
        },
        { fields: ['mall_id', 'access_token', 'refresh_token'] },
      );
      expect(response.status).toEqual(200);
      Object.keys(response.data).forEach((key) => {
        expect(key).toEqual(Case.snake(key));
      });
    });
  });

  describe('getAccessTokenUsingRefreshToken', () => {
    it('should return 200', async () => {
      axios.post.mockImplementationOnce(
        MockAPICall.getAccessTokenUsingRefreshToken,
      );
      const response = await client.getAccessTokenUsingRefreshToken({
        client_id: 'test-client-id',
        client_secret: 'test-client-secret',
        refresh_token: 'test-refresh-token',
      });
      expect(response.status).toEqual(200);
      Object.keys(response.data).forEach((key) => {
        expect(key).toEqual(Case.snake(key));
      });
    });
  });
});
