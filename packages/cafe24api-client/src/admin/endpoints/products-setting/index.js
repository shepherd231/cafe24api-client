export default (cls) => {
  cls.prototype.retrieveProductSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };
};
