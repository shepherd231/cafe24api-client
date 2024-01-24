
export default (cls) => {
  cls.prototype.retrievePaymentHistoryOfAnOrder = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/paymenttimeline`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        date_type: input['date_type'],
      },
      options,
    );
  };

  cls.prototype.retrievePaymentDetailsOfAnOrder = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/paymenttimeline/{payment_no}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        payment_no: input['payment_no'],
      },
      options,
    );
  };

};
