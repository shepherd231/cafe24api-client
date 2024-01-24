
export default (cls) => {
  cls.prototype.retrieveAListOfProductsInMainCategory = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/mains/${input['display_group']}/products`,
      {
        mobile: input['mobile'],
        shop_no: input['shop_no'],
        display_group: input['display_group'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

};
