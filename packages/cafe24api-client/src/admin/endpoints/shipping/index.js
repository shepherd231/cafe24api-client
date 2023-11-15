export default (cls) => {
  cls.prototype.retrieveShippingReturnSettings = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/shipping`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateStoreShippingReturnSettings = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/shipping`,
      {
        shop_no: input['shop_no'],
        shipping_method: input['shipping_method'],
        shipping_etc: input['shipping_etc'],
        shipping_period: input['shipping_period'],
        shipping_fee_type: input['shipping_fee_type'],
        shipping_fee: input['shipping_fee'],
        free_shipping_price: input['free_shipping_price'],
        shipping_fee_by_quantity: input['shipping_fee_by_quantity'],
        shipping_rates: input['shipping_rates'],
        shipping_fee_criteria: input['shipping_fee_criteria'],
        prepaid_shipping_fee: input['prepaid_shipping_fee'],
        product_weight: input['product_weight'],
        oversea_shipping_country: input['oversea_shipping_country'],
        oversea_shipping_country_list: input['oversea_shipping_country_list'],
        country_shipping_fee: input['country_shipping_fee'],
        country_shipping_fee_list: input['country_shipping_fee_list'],
        international_shipping_insurance:
          input['international_shipping_insurance'],
        return_address: input['return_address'],
        package_volume: input['package_volume'],
      },
      options,
    );
  };
};
