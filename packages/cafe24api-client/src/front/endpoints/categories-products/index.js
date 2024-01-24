
export default (cls) => {
  cls.prototype.retrieveAListOfProductsByCategory = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/categories/${input['category_no']}/products`,
      {
        mobile: input['mobile'],
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        display_group: input['display_group'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfProductsByCategory = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/categories/${input['category_no']}/products/count`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        display_group: input['display_group'],
      },
      options,
    );
  };

};
