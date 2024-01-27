export default (cls) => {
  cls.prototype.retrieveCurrencySettings = async function (input, options) {
    return this.createRequest('GET', `/api/v2/admin/currency`, {}, options);
  };
};
