
export default (cls) => {
  cls.prototype.rejectAnExchangeRequest = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/exchangerequests`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
        undone: input['undone'],
        reason_type: input['reason_type'],
        reason: input['reason'],
        display_reject_reason: input['display_reject_reason'],
        reject_reason: input['reject_reason'],
      },
      options,
    );
  };

};
