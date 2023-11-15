export default (cls) => {
  cls.prototype.createACancellationRequestForMultipleItems = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/cancellationrequests`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        reason_type: input['reason_type'],
        reason: input['reason'],
        refund_bank_code: input['refund_bank_code'],
        refund_bank_name: input['refund_bank_name'],
        refund_bank_account_no: input['refund_bank_account_no'],
        refund_bank_account_holder: input['refund_bank_account_holder'],
        items: input['items'],
      },
      options,
    );
  };

  cls.prototype.rejectACancellationRequestForMultipleItems = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/cancellationrequests`,
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
