export default (cls) => {
  cls.prototype.retrieveAListOfProductVariants = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/products/${input['product_no']}/variants`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        inventories: input['inventories'],
      },
      options,
    );
  };

  cls.prototype.retrieveAProductVariant = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/products/${input['product_no']}/variants/{variant_code}`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        variant_code: input['variant_code'],
        inventories: input['inventories'],
      },
      options,
    );
  };
};
