
export default (cls) => {
  cls.prototype.retrieveActivationInformationForTaxManager = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/taxmanager`,
      {
      },
      options,
    );
  };

};
