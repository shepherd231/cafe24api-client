export default (cls) => {
  cls.prototype.retrieveTheSmsBalance = async function (input, options) {
    return this.createRequest('GET', `/api/v2/admin/sms/balance`, {}, options);
  };
};
