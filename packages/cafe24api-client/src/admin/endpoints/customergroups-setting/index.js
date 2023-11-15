export default (cls) => {
  cls.prototype.retrieveCustomerTierSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customergroups/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };
};
