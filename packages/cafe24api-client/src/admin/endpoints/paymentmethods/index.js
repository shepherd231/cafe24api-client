export default (cls) => {
  cls.prototype.retrieveAListOfPaymentMethods = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/paymentmethods`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };
};
