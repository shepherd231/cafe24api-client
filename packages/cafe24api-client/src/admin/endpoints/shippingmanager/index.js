
export default (cls) => {
  cls.prototype.retrieveActivationInformationForShippingManager = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/shippingmanager`,
      {
      },
      options,
    );
  };

};
