
export default (cls) => {
  cls.prototype.retrieveShippingFeeCancellationDetailsOfAnOrder = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/shippingfeecancellation`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
      },
      options,
    );
  };

  cls.prototype.createAnOrderShippingFeeCancellation = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/shippingfeecancellation`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        reason: input['reason'],
        claim_reason_type: input['claim_reason_type'],
        recover_coupon: input['recover_coupon'],
        refund_method_code: input['refund_method_code'],
        refund_bank_code: input['refund_bank_code'],
        refund_bank_name: input['refund_bank_name'],
        refund_bank_account_no: input['refund_bank_account_no'],
        refund_bank_account_holder: input['refund_bank_account_holder'],
        payment_gateway_cancel: input['payment_gateway_cancel'],
      },
      options,
    );
  };

};
