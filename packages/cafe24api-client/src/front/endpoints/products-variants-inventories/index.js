export default (cls) => {
  cls.prototype.retrieveInventoryDetailsOfAProductVariant = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/products/${input['product_no']}/variants/{variant_code}/inventories`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        variant_code: input['variant_code'],
      },
      options,
    );
  };
};
