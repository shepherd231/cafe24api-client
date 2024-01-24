export default (cls) => {
  cls.prototype.retrieveAListOfPaymentGatewayContractDetails = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/financials/paymentgateway`,
      {
        payment_gateway_name: input['payment_gateway_name'],
        partner_id: input['partner_id'],
      },
      options,
    );
  };
};
