
export default (cls) => {
  cls.prototype.retrieveACountOfAProductsProductTags = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/tags/count`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.retrieveAListOfAProductsProductTags = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/tags`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.createProductTags = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/${input['product_no']}/tags`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        tags: input['tags'],
      },
      options,
    );
  };

  cls.prototype.deleteAProductTag = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/products/${input['product_no']}/tags/{tag}`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        tag: input['tag'],
      },
      options,
    );
  };

};
