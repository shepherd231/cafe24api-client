export default (cls) => {
  cls.prototype.createAnOrderCancellationOnStockShortage = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/shortagecancellation`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        payment_gateway_cancel: input['payment_gateway_cancel'],
        keep_auto_calculation: input['keep_auto_calculation'],
        collect_gift: input['collect_gift'],
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
};
