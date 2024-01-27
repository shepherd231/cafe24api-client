export default (cls) => {
  cls.prototype.retrieveAProductDiscountedPrice = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/products/${input['product_no']}/discountprice`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };
};
