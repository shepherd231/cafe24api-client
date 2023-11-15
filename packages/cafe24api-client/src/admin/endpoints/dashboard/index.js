export default (cls) => {
  cls.prototype.retrieveADashboard = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/dashboard`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };
};
