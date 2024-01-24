
export default (cls) => {
  cls.prototype.retrieveAnExchange = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/exchange/${input['claim_code']}`,
      {
        shop_no: input['shop_no'],
        claim_code: input['claim_code'],
      },
      options,
    );
  };

  cls.prototype.createMultipleExchanges = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/exchange`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        status: input['status'],
        recover_inventory: input['recover_inventory'],
        add_memo_too: input['add_memo_too'],
        items: input['items'],
        same_product: input['same_product'],
      },
      options,
    );
  };

  cls.prototype.updateMultipleOrderExchanges = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/exchange`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        claim_code: input['claim_code'],
        status: input['status'],
        pickup_completed: input['pickup_completed'],
        recover_inventory: input['recover_inventory'],
        exchanged_after_collected: input['exchanged_after_collected'],
        items: input['items'],
        undone: input['undone'],
        add_memo_too: input['add_memo_too'],
        undone_reason_type: input['undone_reason_type'],
        undone_reason: input['undone_reason'],
        expose_order_detail: input['expose_order_detail'],
        exposed_undone_reason: input['exposed_undone_reason'],
        return_invoice_no: input['return_invoice_no'],
        carrier_id: input['carrier_id'],
        return_invoice_success: input['return_invoice_success'],
        return_invoice_fail_reason: input['return_invoice_fail_reason'],
      },
      options,
    );
  };

};
