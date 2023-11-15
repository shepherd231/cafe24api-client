export default (cls) => {
  cls.prototype.retrieveAListOfRefunds = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/refunds`,
      {
        shop_no: input['shop_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        date_type: input['date_type'],
        member_email: input['member_email'],
        buyer_email: input['buyer_email'],
        order_id: input['order_id'],
        member_id: input['member_id'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.retrieveARefund = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/refunds/${input['refund_code']}`,
      {
        shop_no: input['shop_no'],
        refund_code: input['refund_code'],
        items: input['items'],
      },
      options,
    );
  };
};
