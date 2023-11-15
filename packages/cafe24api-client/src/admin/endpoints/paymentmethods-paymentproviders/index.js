export default (cls) => {
  cls.prototype.retrieveAListOfProvidersByPaymentMethod = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/paymentmethods/${input['code']}/paymentproviders`,
      {
        shop_no: input['shop_no'],
        code: input['code'],
        name: input['name'],
        display: input['display'],
      },
      options,
    );
  };

  cls.prototype.updateTheDisplayStatusOfAPaymentMethod = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/paymentmethods/${input['code']}/paymentproviders/{name}`,
      {
        shop_no: input['shop_no'],
        code: input['code'],
        name: input['name'],
        display: input['display'],
      },
      options,
    );
  };
};
