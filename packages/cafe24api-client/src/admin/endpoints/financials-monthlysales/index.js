
export default (cls) => {
  cls.prototype.retrieveAListOfMonthlySales = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/financials/monthlysales`,
      {
        start_month: input['start_month'],
        end_month: input['end_month'],
        payment_gateway_name: input['payment_gateway_name'],
        partner_id: input['partner_id'],
        payment_method: input['payment_method'],
      },
      options,
    );
  };

};
