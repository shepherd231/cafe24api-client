
export default (cls) => {
  cls.prototype.retrieveAListOfCustomerTiers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customergroups`,
      {
        shop_no: input['shop_no'],
        group_no: input['group_no'],
        group_name: input['group_name'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfCustomerTiers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customergroups/count`,
      {
        shop_no: input['shop_no'],
        group_no: input['group_no'],
        group_name: input['group_name'],
      },
      options,
    );
  };

  cls.prototype.retrieveACustomerTier = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customergroups/${input['group_no']}`,
      {
        shop_no: input['shop_no'],
        group_no: input['group_no'],
      },
      options,
    );
  };

};
