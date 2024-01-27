
export default (cls) => {
  cls.prototype.retrieveAListOfCustomersWithAProductInWishlist = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/wishlist/customers`,
      {
        product_no: input['product_no'],
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfCustomersWithAProductInWishlist = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/wishlist/customers/count`,
      {
        product_no: input['product_no'],
        shop_no: input['shop_no'],
      },
      options,
    );
  };

};
