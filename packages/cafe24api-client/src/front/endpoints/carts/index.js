export default (cls) => {
  cls.prototype.createAShoppingCart = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/carts`,
      {
        shop_no: input['shop_no'],
        variants: input['variants'],
        addtional_products: input['addtional_products'],
        product_no: input['product_no'],
        basket_type: input['basket_type'],
        duplicated_item_check: input['duplicated_item_check'],
        prepaid_shipping_fee: input['prepaid_shipping_fee'],
      },
      options,
    );
  };
};
