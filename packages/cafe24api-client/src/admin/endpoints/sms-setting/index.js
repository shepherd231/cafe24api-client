
export default (cls) => {
  cls.prototype.retrieveSMSSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/sms/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

};
