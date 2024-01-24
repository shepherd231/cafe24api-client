
export default (cls) => {
  cls.prototype.retrieveAListOfShippingInformationOfAnOrder = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/shipments`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
      },
      options,
    );
  };

  cls.prototype.createAnOrderShippingInformation = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/shipments`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        tracking_no: input['tracking_no'],
        shipping_company_code: input['shipping_company_code'],
        order_item_code: input['order_item_code'],
        status: input['status'],
        shipping_code: input['shipping_code'],
        carrier_id: input['carrier_id'],
      },
      options,
    );
  };

  cls.prototype.updateAnOrderShipping = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/shipments/{shipping_code}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        shipping_code: input['shipping_code'],
        status: input['status'],
        status_additional_info: input['status_additional_info'],
        tracking_no: input['tracking_no'],
        shipping_company_code: input['shipping_company_code'],
      },
      options,
    );
  };

  cls.prototype.deleteAnOrderShipping = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/orders/${input['order_id']}/shipments/{shipping_code}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        shipping_code: input['shipping_code'],
      },
      options,
    );
  };

};
