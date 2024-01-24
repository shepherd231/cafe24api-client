
export default (cls) => {
  cls.prototype.retrieveAListOfCashReceipts = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/cashreceipt`,
      {
        start_date: input['start_date'],
        end_date: input['end_date'],
        order_id: input['order_id'],
        approval_no: input['approval_no'],
        name: input['name'],
        member_id: input['member_id'],
        status: input['status'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.createACashReceipt = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/cashreceipt`,
      {
        order_id: input['order_id'],
        type: input['type'],
        company_registration_no: input['company_registration_no'],
        cellphone: input['cellphone'],
      },
      options,
    );
  };

  cls.prototype.updateACashReceipt = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/cashreceipt/${input['cashreceipt_no']}`,
      {
        cashreceipt_no: input['cashreceipt_no'],
        order_id: input['order_id'],
        type: input['type'],
        company_registration_no: input['company_registration_no'],
        cellphone: input['cellphone'],
      },
      options,
    );
  };

};
