
export default (cls) => {
  cls.prototype.retrieveStoreDetails = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/store`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

};
