export default (cls) => {
  cls.prototype.createShippingInformationForMultipleOrders = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/shipments`,
      {
        shop_no: input['shop_no'],
        tracking_no: input['tracking_no'],
        shipping_company_code: input['shipping_company_code'],
        status: input['status'],
        order_id: input['order_id'],
        shipping_code: input['shipping_code'],
        order_item_code: input['order_item_code'],
        carrier_id: input['carrier_id'],
      },
      options,
    );
  };

  cls.prototype.updateMultipleOrderShippings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/shipments`,
      {
        shop_no: input['shop_no'],
        shipping_code: input['shipping_code'],
        order_id: input['order_id'],
        status: input['status'],
        status_additional_info: input['status_additional_info'],
        tracking_no: input['tracking_no'],
        shipping_company_code: input['shipping_company_code'],
      },
      options,
    );
  };
};
