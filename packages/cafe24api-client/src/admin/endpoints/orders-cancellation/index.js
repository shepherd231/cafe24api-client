
export default (cls) => {
  cls.prototype.createAnOrderCancellation = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/cancellation`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        payment_gateway_cancel: input['payment_gateway_cancel'],
        status: input['status'],
        recover_inventory: input['recover_inventory'],
        recover_coupon: input['recover_coupon'],
        recover_coupon_no: input['recover_coupon_no'],
        add_memo_too: input['add_memo_too'],
        reason: input['reason'],
        claim_reason_type: input['claim_reason_type'],
        naverpay_cancel_reason_type: input['naverpay_cancel_reason_type'],
        kakaopay_cancel_reason_type: input['kakaopay_cancel_reason_type'],
        refund_method_code: input['refund_method_code'],
        refund_bank_code: input['refund_bank_code'],
        refund_bank_name: input['refund_bank_name'],
        refund_bank_account_no: input['refund_bank_account_no'],
        refund_bank_account_holder: input['refund_bank_account_holder'],
        items: input['items'],
      },
      options,
    );
  };

  cls.prototype.changeCancellationDetails = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/cancellation/{claim_code}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        claim_code: input['claim_code'],
        recover_inventory: input['recover_inventory'],
        undone: input['undone'],
        add_memo_too: input['add_memo_too'],
        undone_reason_type: input['undone_reason_type'],
        undone_reason: input['undone_reason'],
        expose_order_detail: input['expose_order_detail'],
        exposed_undone_reason: input['exposed_undone_reason'],
      },
      options,
    );
  };

};
