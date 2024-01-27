
export default (cls) => {
  cls.prototype.updateACashReceiptCancellation = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/cashreceipt/${input['cashreceipt_no']}/cancellation`,
      {
        cashreceipt_no: input['cashreceipt_no'],
        order_id: input['order_id'],
        type: input['type'],
      },
      options,
    );
  };

};
