export default (cls) => {
  cls.prototype.retrieveAListOfPaymentGatewayMethods = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/paymentgateway/${input['client_id']}/paymentmethods`,
      {
        client_id: input['client_id'],
      },
      options,
    );
  };

  cls.prototype.createAPaymentGatewayMethod = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/paymentgateway/${input['client_id']}/paymentmethods`,
      {
        client_id: input['client_id'],
        payment_method_code: input['payment_method_code'],
        payment_method: input['payment_method'],
        payment_method_name: input['payment_method_name'],
        payment_method_url: input['payment_method_url'],
        available_shop_no: input['available_shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateAPaymentMethodOfAPaymentGateway = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/paymentgateway/${input['client_id']}/paymentmethods/{payment_method_code}`,
      {
        client_id: input['client_id'],
        payment_method_code: input['payment_method_code'],
        payment_method: input['payment_method'],
        payment_method_name: input['payment_method_name'],
        payment_method_url: input['payment_method_url'],
        available_shop_no: input['available_shop_no'],
      },
      options,
    );
  };

  cls.prototype.deleteAPaymentMethodOfAPaymentGateway = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/paymentgateway/${input['client_id']}/paymentmethods/{payment_method_code}`,
      {
        client_id: input['client_id'],
        payment_method_code: input['payment_method_code'],
      },
      options,
    );
  };
};
