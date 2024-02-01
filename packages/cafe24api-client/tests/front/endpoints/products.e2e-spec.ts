import Case from 'case';
import { AxiosResponse } from 'axios';
import { Cafe24FrontAPIClient } from '../../../src/client/index';
import Products from '../../../src/front/endpoints/products/index';

describe('Products', () => {
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
        shop_no: 1,
        limit: 10,
      });
      expect(response.status).toEqual(200);
      expect(response.data).toHaveProperty('products');
      expect(response.data.products).toBeInstanceOf(Array);
      expect(response.data.products.length).toBeLessThanOrEqual(10);
      response.data.products.forEach((product) =>
        Object.keys(product).forEach((key) => {
          expect(key).toEqual(Case.snake(key));
        }),
      );
    });

    it('should retrieve a list of products with only specified properties', async () => {
      const fields = ['product_no', 'product_name', 'price'];
      const response: AxiosResponse = await client.retrieveAListOfProducts(
        {
          shop_no: 1,
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
          expect(Case.snake(key)).toEqual(key);
        });
      });
    });
  });
});
