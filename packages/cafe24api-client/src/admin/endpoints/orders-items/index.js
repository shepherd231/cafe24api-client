export default (cls) => {
  cls.prototype.retrieveAListOfOrderItems = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/items`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        supplier_id: input['supplier_id'],
      },
      options,
    );
  };

  cls.prototype.createAnOrderItem = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/items`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        was_product_bundle: input['was_product_bundle'],
        original_bundle_item_no: input['original_bundle_item_no'],
        variant_code: input['variant_code'],
      },
      options,
    );
  };

  cls.prototype.updateAnOrderItem_1 = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/items/{order_item_code}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
        claim_type: input['claim_type'],
        claim_status: input['claim_status'],
        claim_reason_type: input['claim_reason_type'],
        claim_reason: input['claim_reason'],
        claim_quantity: input['claim_quantity'],
      },
      options,
    );
  };
};
