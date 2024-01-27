
export default (cls) => {
  cls.prototype.retrieveASuppliersShippingSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/shipping/suppliers/${input['supplier_id']}`,
      {
        shop_no: input['shop_no'],
        supplier_id: input['supplier_id'],
      },
      options,
    );
  };

  cls.prototype.updateASuppliersShippingSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/shipping/suppliers/${input['supplier_id']}`,
      {
        shop_no: input['shop_no'],
        supplier_id: input['supplier_id'],
        shipping_method: input['shipping_method'],
        shipping_etc: input['shipping_etc'],
        shipping_type: input['shipping_type'],
        shipping_place: input['shipping_place'],
        shipping_start_date: input['shipping_start_date'],
        shipping_end_date: input['shipping_end_date'],
        shipping_fee_type: input['shipping_fee_type'],
        free_shipping_price: input['free_shipping_price'],
        shipping_fee: input['shipping_fee'],
        shipping_fee_by_quantity: input['shipping_fee_by_quantity'],
        shipping_rates: input['shipping_rates'],
        prepaid_shipping_fee: input['prepaid_shipping_fee'],
        shipping_fee_by_product: input['shipping_fee_by_product'],
        product_weight: input['product_weight'],
        hscode: input['hscode'],
        country_hscode: input['country_hscode'],
      },
      options,
    );
  };

};
