
export default (cls) => {
  cls.prototype.updateAnOrderPaymentStatus = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/payments`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        change_payment_amount: input['change_payment_amount'],
        change_payment_method: input['change_payment_method'],
        payment_method: input['payment_method'],
        billing_name: input['billing_name'],
        bank_account_id: input['bank_account_id'],
        admin_additional_amount: input['admin_additional_amount'],
        commission: input['commission'],
        change_payment_amount_reason: input['change_payment_amount_reason'],
      },
      options,
    );
  };

};
