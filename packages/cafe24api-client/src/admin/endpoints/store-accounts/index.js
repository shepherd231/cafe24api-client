
export default (cls) => {
  cls.prototype.retrieveAListOfStoreBankAccounts = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/store/accounts`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

};
