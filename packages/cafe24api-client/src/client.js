/**
 * @abstract
 */
export class Cafe24APIClient {
  constructor(options) {
    this.mallId = options.mallId;
    this.url = `https://${this.mallId}.cafe24api.com`;
  }

  /**
   * @protected
   */
  createBody(data, fields) {
    const { shop_no = 1, ...rest } = data ?? {};
    return {
      shop_no,
      fields,
      request: rest ?? {},
    };
  }

  /**
   * @protected
   */
  createParams(data, fields) {
    return {
      ...data,
      fields,
    };
  }

  /**
   * @protected
   * @abstract
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createHeaders(options) {
    throw new Error('Not implemented');
  }
}
