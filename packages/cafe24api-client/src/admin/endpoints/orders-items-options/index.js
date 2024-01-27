
export default (cls) => {
  cls.prototype.createOrderItemOptions = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/items/{order_item_code}/options`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
        product_bundle: input['product_bundle'],
        additional_options: input['additional_options'],
        bundle_additional_options: input['bundle_additional_options'],
      },
      options,
    );
  };

  cls.prototype.updateAnOrderItem = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/items/{order_item_code}/options`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
        additional_options: input['additional_options'],
      },
      options,
    );
  };

  cls.prototype.deleteOrderItemOptions = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/orders/${input['order_id']}/items/{order_item_code}/options`,
      {
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
      },
      options,
    );
  };

};
