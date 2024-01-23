import { Cafe24FrontAPIClient } from '../index';

describe('Cafe24FrontAPIClient', () => {
  describe('constructor', () => {
    /**
     * @type {Cafe24FrontAPIClient}
     */
    let client;
    it('should create instance', () => {
      client = new Cafe24FrontAPIClient({
        mallId: 'test',
        clientId: 'test-client-id',
      });
      expect(client).toBeInstanceOf(Cafe24FrontAPIClient);
    });

    it('should have mallId', () => {
      expect(client.mallId).toEqual('test');
    });

    it('should have url', () => {
      expect(client.url).toEqual('https://test.cafe24api.com');
    });

    it('should have clientId', () => {
      expect(client.clientId).toEqual('test-client-id');
    });
  });

  describe('createHeaders', () => {
    it('should create headers with clientId', () => {
      const client = new Cafe24FrontAPIClient({
        mallId: 'test',
        clientId: 'test-client-id',
      });
      // @ts-ignore
      const headers = client.createHeaders();
      expect(headers).toEqual({
        'Content-Type': 'application/json',
        'X-Cafe24-Client-Id': 'test-client-id',
      });
    });
  });
});
