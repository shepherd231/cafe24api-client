
export default (cls) => {
  cls.prototype.updateAnOrderRefund = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/refunds/{refund_code}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        refund_code: input['refund_code'],
        status: input['status'],
        reason: input['reason'],
        send_sms: input['send_sms'],
        send_mail: input['send_mail'],
        payment_gateway_cancel: input['payment_gateway_cancel'],
      },
      options,
    );
  };

};
