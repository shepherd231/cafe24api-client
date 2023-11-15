export default (cls) => {
  cls.prototype.retrieveACountOfProductsInCustomerWishlist = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/wishlist/count`,
      {
        member_id: input['member_id'],
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.retrieveAListOfProductsInCustomerWishlist = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/wishlist`,
      {
        member_id: input['member_id'],
        shop_no: input['shop_no'],
      },
      options,
    );
  };
};
