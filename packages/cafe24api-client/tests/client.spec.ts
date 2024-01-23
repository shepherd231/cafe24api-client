import axios from 'axios';
import deepcopy from 'deepcopy';
import {
  Cafe24APIClient,
  Cafe24AdminAPIClient,
  Cafe24FrontAPIClient,
} from '../src/client/index';

jest.mock('axios');

const data = { foo: 'bar' };
const fields = ['foo', 'bar'];
const options = {
  fields,
  headers: { 'Content-Type': 'application/json' },
};
const response = { data };

const expectedUrl = 'https://test.cafe24api.com/test';
const expectedParams = {
  foo: 'bar',
  fields: 'foo,bar',
};
const expectedBody = {
  shop_no: 1,
  fields: 'foo,bar',
  request: {
    foo: 'bar',
  },
};

describe('Cafe24APIClient', () => {
  describe('constructor', () => {
    /**
     * @type {Cafe24APIClient}
     */
    let client;
    it('should create instance', () => {
      // @ts-ignore
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
      // @ts-ignore
      const client = new Cafe24APIClient({ mallId: 'test' });
      const body = client.createBody(data, fields);
      expect(body).toEqual({
        shop_no: 1,
        fields: deepcopy(fields),
        request: deepcopy(data),
      });
    });

    it('should create body with custom shop_no', () => {
      // @ts-ignore
      const client = new Cafe24APIClient({ mallId: 'test' });
      const body = client.createBody({ foo: 'bar', shop_no: 2 }, fields);
      expect(body).toEqual({
        shop_no: 2,
        fields: deepcopy(fields),
        request: deepcopy(data),
      });
    });
  });

  describe('createParams', () => {
    it('should create params', () => {
      // @ts-ignore
      const client = new Cafe24APIClient({ mallId: 'test' });
      const params = client.createParams(data, fields);
      expect(params).toEqual({
        ...deepcopy(data),
        fields: deepcopy(fields),
      });
    });
  });

  describe('createRequest', () => {
    it('should create request with GET method', async () => {
      // @ts-ignore
      const client = new Cafe24APIClient({ mallId: 'test' });
      // @ts-ignore
      axios.get.mockResolvedValue(response);
      const result = await client.createRequest('GET', '/test', data, options);
      expect(result).toEqual(deepcopy(response));
      expect(axios.get).toHaveBeenCalledWith(expectedUrl, {
        params: deepcopy(expectedParams),
        headers: deepcopy(options.headers),
      });
    });

    it('should create request with DELETE method', async () => {
      // @ts-ignore
      const client = new Cafe24APIClient({ mallId: 'test' });
      // @ts-ignore
      axios.delete.mockResolvedValue(response);
      const result = await client.createRequest(
        'DELETE',
        '/test',
        data,
        options,
      );
      expect(result).toEqual(deepcopy(response));
      expect(axios.delete).toHaveBeenCalledWith(expectedUrl, {
        params: deepcopy(expectedParams),
        headers: deepcopy(options.headers),
      });
    });

    it('should create request with POST method', async () => {
      // @ts-ignore
      const client = new Cafe24APIClient({ mallId: 'test' });
      // @ts-ignore
      axios.post.mockResolvedValue(response);
      const result = await client.createRequest('POST', '/test', data, options);
      expect(result).toEqual(deepcopy(response));
      expect(axios.post).toHaveBeenCalledWith(
        expectedUrl,
        deepcopy(expectedBody),
        {
          headers: deepcopy(options.headers),
        },
      );
    });

    it('should create request with PUT method', async () => {
      // @ts-ignore
      const client = new Cafe24APIClient({ mallId: 'test' });
      // @ts-ignore
      axios.put.mockResolvedValue(response);
      const result = await client.createRequest('PUT', '/test', data, options);
      expect(result).toEqual(deepcopy(response));
      expect(axios.put).toHaveBeenCalledWith(
        expectedUrl,
        deepcopy(expectedBody),
        {
          headers: deepcopy(options.headers),
        },
      );
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
