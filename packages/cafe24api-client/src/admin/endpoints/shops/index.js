
export default (cls) => {
  cls.prototype.retrieveAListOfShops = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/shops`,
      {
      },
      options,
    );
  };

  cls.prototype.retrieveAShop = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/shops/${input['shop_no']}`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

};
