export default (cls) => {
  cls.prototype.retrieveTheTransactionInformationOfAStore = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/financials/store`,
      {
        shop_no: input['shop_no'],
        payment_method: input['payment_method'],
      },
      options,
    );
  };
};
