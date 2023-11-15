export default (cls) => {
  cls.prototype.retrieveAListOfMainCategories = async function (
    input,
    options,
  ) {
    return this.createRequest('GET', `/api/v2/admin/mains`, {}, options);
  };
};
