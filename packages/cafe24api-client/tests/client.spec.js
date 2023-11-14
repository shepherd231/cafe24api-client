import { Cafe24APIClient } from '../src/client';
import { Cafe24AdminAPIClient } from '../src/admin-client';
import { Cafe24FrontAPIClient } from '../src/front-client';

describe('Cafe24APIClient', () => {
  describe('constructor', () => {
    /**
     * @type {Cafe24APIClient}
     */
    let client;
    it('should create instance', () => {
      client = new Cafe24APIClient({ mallId: 'test' });
      expect(client).toBeInstanceOf(Cafe24APIClient);
    });

    it('should have mallId', () => {
      expect(client.mallId).toEqual('test');
    });

    it('should have url', () => {
      expect(client.url).toEqual('https://test.cafe24api.com');
    });
  });

  describe('createBody', () => {
    it('should create body with default shop_no', () => {
      const client = new Cafe24APIClient({ mallId: 'test' });
      const body = client.createBody({ foo: 'bar' }, ['foo']);
      expect(body).toEqual({
        shop_no: 1,
        fields: ['foo'],
        request: {
          foo: 'bar',
        },
      });
    });

    it('should create body with custom shop_no', () => {
      const client = new Cafe24APIClient({ mallId: 'test' });
      const body = client.createBody({ foo: 'bar', shop_no: 2 }, ['foo']);
      expect(body).toEqual({
        shop_no: 2,
        fields: ['foo'],
        request: {
          foo: 'bar',
        },
      });
    });
  });

  describe('createParams', () => {
    it('should create params', () => {
      const client = new Cafe24APIClient({ mallId: 'test' });
      const params = client.createParams({ foo: 'bar' }, ['foo']);
      expect(params).toEqual({
        foo: 'bar',
        fields: ['foo'],
      });
    });
  });

  describe('createHeaders', () => {
    it('should throw error', () => {
      const client = new Cafe24APIClient({ mallId: 'test' });
      expect(() => client.createHeaders()).toThrow('Not implemented');
    });
  });
});

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
      const headers = client.createHeaders({});
      expect(headers).toEqual({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      });
    });

    it('should create headers with authorization', () => {
      const client = new Cafe24AdminAPIClient({ mallId: 'test' });
      const authorization = 'test-auth';
      const headers = client.createHeaders({ authorization });
      expect(headers).toEqual({
        'Content-Type': 'application/json',
        Authorization: authorization,
      });
    });

    it('should throw error if no accessToken is set', () => {
      const client = new Cafe24AdminAPIClient({ mallId: 'test' });
      expect(() => client.createHeaders()).toThrow(
        '[Cafe24AdminAPIClient] accessToken is required',
      );
    });
  });
});

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
      const headers = client.createHeaders();
      expect(headers).toEqual({
        'Content-Type': 'application/json',
        'X-Cafe24-Client-Id': 'test-client-id',
      });
    });

    it('should throw error if no clientId is set', () => {
      const client = new Cafe24FrontAPIClient({ mallId: 'test' });
      expect(() => client.createHeaders()).toThrow(
        '[Cafe24FrontAPIClient] clientId is required',
      );
    });
  });
});
