
export default (cls) => {
  cls.prototype.createAnOrderReturn = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/return`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        payment_gateway_cancel: input['payment_gateway_cancel'],
        status: input['status'],
        pickup_completed: input['pickup_completed'],
        recover_inventory: input['recover_inventory'],
        recover_coupon: input['recover_coupon'],
        recover_coupon_no: input['recover_coupon_no'],
        add_memo_too: input['add_memo_too'],
        reason: input['reason'],
        claim_reason_type: input['claim_reason_type'],
        naverpay_return_reason_type: input['naverpay_return_reason_type'],
        refund_method_code: input['refund_method_code'],
        refund_bank_code: input['refund_bank_code'],
        refund_bank_name: input['refund_bank_name'],
        refund_bank_account_no: input['refund_bank_account_no'],
        refund_bank_account_holder: input['refund_bank_account_holder'],
        items: input['items'],
        request_pickup: input['request_pickup'],
        pickup: input['pickup'],
        return_invoice_no: input['return_invoice_no'],
        return_shipping_company_name: input['return_shipping_company_name'],
      },
      options,
    );
  };

  cls.prototype.updateAnOrderReturn = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/return/{claim_code}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        claim_code: input['claim_code'],
        status: input['status'],
        carrier_id: input['carrier_id'],
        return_invoice_no: input['return_invoice_no'],
        return_shipping_company_name: input['return_shipping_company_name'],
        return_invoice_success: input['return_invoice_success'],
        return_invoice_fail_reason: input['return_invoice_fail_reason'],
        refund_method_code: input['refund_method_code'],
        refund_bank_account_holder: input['refund_bank_account_holder'],
        pickup_completed: input['pickup_completed'],
        items: input['items'],
        recover_coupon: input['recover_coupon'],
        recover_coupon_no: input['recover_coupon_no'],
        recover_inventory: input['recover_inventory'],
        request_pickup: input['request_pickup'],
        pickup: input['pickup'],
        undone: input['undone'],
        add_memo_too: input['add_memo_too'],
        undone_reason_type: input['undone_reason_type'],
        undone_reason: input['undone_reason'],
        expose_order_detail: input['expose_order_detail'],
        exposed_undone_reason: input['exposed_undone_reason'],
        refund_bank_code: input['refund_bank_code'],
        refund_bank_name: input['refund_bank_name'],
        refund_bank_account_no: input['refund_bank_account_no'],
      },
      options,
    );
  };

};
