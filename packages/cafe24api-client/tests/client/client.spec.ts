import axios from 'axios';
import deepcopy from 'deepcopy';
import { Cafe24APIClient } from '../../src/client/index';
import { ClientTestFixtures } from './fixtures';

const {
  data,
  fields,
  options,
  response,
  expectedUrl,
  expectedParams,
  expectedBody,
} = ClientTestFixtures;

jest.mock('axios');

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
      const client = new Cafe24APIClient({ mallId: 'test', taskQueue: null });
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
      const client = new Cafe24APIClient({ mallId: 'test', taskQueue: null });
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
      const client = new Cafe24APIClient({ mallId: 'test', taskQueue: null });
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
      const client = new Cafe24APIClient({ mallId: 'test', taskQueue: null });
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
