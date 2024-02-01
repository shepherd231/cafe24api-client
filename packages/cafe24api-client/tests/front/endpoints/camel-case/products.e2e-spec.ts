import Case from 'case';
import { AxiosResponse } from 'axios';
import { Cafe24FrontAPIClient } from '../../../../src/client/index';
import Products from '../../../../src/front/endpoints/camel-case/products/index';

describe('Products (camel-cased I/O)', () => {
  /**
   * @type {Cafe24FrontAPIClient}
   */
  let client;
  it('should have newly added methods', () => {
    Cafe24FrontAPIClient.use(Products);

    client = new Cafe24FrontAPIClient({
      mallId: process.env.CAFE24_MALL_ID,
      clientId: process.env.CAFE24_CLIENT_ID,
    });

    expect(typeof client.retrieveAListOfProducts).toEqual('function');
    expect(typeof client.retrieveACountOfProducts).toEqual('function');
    expect(typeof client.retrieveAProductResource).toEqual('function');
  });

  describe('retrieveAListOfProducts', () => {
    it('should retrieve a list of products', async () => {
      const response: AxiosResponse = await client.retrieveAListOfProducts({
        shopNo: 1,
        limit: 10,
      });
      expect(response.status).toEqual(200);
      expect(response.data).toHaveProperty('products');
      expect(response.data.products).toBeInstanceOf(Array);
      expect(response.data.products.length).toBeLessThanOrEqual(10);
      response.data.products.forEach((product) =>
        Object.keys(product).forEach((key) => {
          expect(key).toEqual(Case.camel(key));
        }),
      );
    });

    it('should retrieve a list of products with only specified properties', async () => {
      const fields = ['productNo', 'productName', 'price'];
      const response: AxiosResponse = await client.retrieveAListOfProducts(
        {
          shopNo: 1,
          limit: 10,
        },
        { fields },
      );
      expect(response.status).toEqual(200);
      expect(response.data).toHaveProperty('products');
      expect(response.data.products).toBeInstanceOf(Array);
      expect(response.data.products.length).toBeLessThanOrEqual(10);
      response.data.products.forEach((product) => {
        const keys = Object.keys(product);
        expect(keys.length).toEqual(fields.length);
        keys.forEach((key) => {
          expect(fields.includes(key)).toBeTruthy();
          expect(Case.camel(key)).toEqual(key);
        });
      });
    });
  });
});
