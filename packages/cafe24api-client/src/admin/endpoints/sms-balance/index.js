
export default (cls) => {
  cls.prototype.retrieveTheSMSBalance = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/sms/balance`,
      {
      },
      options,
    );
  };

};
