
export default (cls) => {
  cls.prototype.retrieveAListOfDailySales = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/financials/dailysales`,
      {
        start_date: input['start_date'],
        end_date: input['end_date'],
        payment_gateway_name: input['payment_gateway_name'],
        partner_id: input['partner_id'],
        payment_method: input['payment_method'],
      },
      options,
    );
  };

};
