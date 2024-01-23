import { Cafe24AdminAPIClient } from '../index';

describe('Cafe24AdminAPIClient', () => {
  describe('constructor', () => {
    /**
     * @type {Cafe24AdminAPIClient}
     */
    let client;
    it('should create instance', () => {
      client = new Cafe24AdminAPIClient({ mallId: 'test' });
      expect(client).toBeInstanceOf(Cafe24AdminAPIClient);
    });

    it('should have mallId', () => {
      expect(client.mallId).toEqual('test');
    });

    it('should have url', () => {
      expect(client.url).toEqual('https://test.cafe24api.com');
    });
  });

  describe('createHeaders', () => {
    it('should create headers with accessToken', () => {
      const client = new Cafe24AdminAPIClient({ mallId: 'test' });
      const accessToken = 'test-access-token';
      client.setAccessToken(accessToken);
      // @ts-ignore
      const headers = client.createHeaders({});
      expect(headers).toEqual({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      });
    });

    it('should create headers with authorization', () => {
      const client = new Cafe24AdminAPIClient({ mallId: 'test' });
      const auth = 'test-auth';
      // @ts-ignore
      const headers = client.createHeaders({ Authorization: auth });
      expect(headers).toEqual({
        'Content-Type': 'application/json',
        Authorization: auth,
      });
    });
  });
});
