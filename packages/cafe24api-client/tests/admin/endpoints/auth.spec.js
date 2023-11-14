import axios from 'axios';
import { snakeCase } from 'change-case';
import { Cafe24AdminAPIClient } from '../../../src/admin-client';
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
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({
          status: 302,
          headers: {
            location: '{redirect_uri}?code={authorize_code}&state={state}',
          },
        }),
      );
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
      axios.post.mockImplementationOnce(() =>
        Promise.resolve({
          status: 200,
          data: {
            access_token: '21EZes0dGSfN..........',
            expires_at: '2021-03-01T15:50:00.000',
            refresh_token: 'xLlhWztQHBik............',
            refresh_token_expires_at: '2021-03-15T13:50:00.000',
            client_id: 'BrIfqEKoPxeE..........',
            mall_id: 'yourmall',
            user_id: 'test',
            scopes: [
              'mall.read_order',
              'mall.read_product',
              'mall.read_store',
              '...etc...',
            ],
            issued_at: '2021-03-01T13:50:00.000',
          },
        }),
      );
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
        expect(key).toEqual(snakeCase(key));
      });
    });
  });

  describe('getAccessTokenUsingRefreshToken', () => {
    it('should return 200', async () => {
      axios.post.mockImplementationOnce(() =>
        Promise.resolve({
          status: 200,
          data: {
            access_token: '21EZes0dGSfN..........',
            expires_at: '2021-03-01T15:50:00.000',
            refresh_token: 'xLlhWztQHBik............',
            refresh_token_expires_at: '2021-03-15T13:50:00.000',
            client_id: 'BrIfqEKoPxeE..........',
            mall_id: 'yourmall',
            user_id: 'test',
            scopes: [
              'mall.read_order',
              'mall.read_product',
              'mall.read_store',
              '...etc...',
            ],
            issued_at: '2021-03-01T13:50:00.000',
          },
        }),
      );
      const response = await client.getAccessTokenUsingRefreshToken({
        client_id: 'test-client-id',
        client_secret: 'test-client-secret',
        refresh_token: 'test-refresh-token',
      });
      expect(response.status).toEqual(200);
      Object.keys(response.data).forEach((key) => {
        expect(key).toEqual(snakeCase(key));
      });
    });
  });
});
