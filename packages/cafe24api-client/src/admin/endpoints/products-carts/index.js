
export default (cls) => {
  cls.prototype.retrieveACountOfCartsContainingAProduct = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/carts/count`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.retrieveAListOfCartsContainingAProduct = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/carts`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

};
