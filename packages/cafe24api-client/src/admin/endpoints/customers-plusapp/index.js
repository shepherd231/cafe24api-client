
export default (cls) => {
  cls.prototype.retrieveAppInstallationInformation = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/plusapp`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };

};
