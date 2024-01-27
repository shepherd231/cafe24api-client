export default (cls) => {
  cls.prototype.retrieveAListOfProductCategories = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/categories`,
      {
        shop_no: input['shop_no'],
        category_depth: input['category_depth'],
        category_no: input['category_no'],
        parent_category_no: input['parent_category_no'],
        category_name: input['category_name'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfProductCategories = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/categories/count`,
      {
        shop_no: input['shop_no'],
        category_depth: input['category_depth'],
        category_no: input['category_no'],
        parent_category_no: input['parent_category_no'],
        category_name: input['category_name'],
      },
      options,
    );
  };

  cls.prototype.retrieveAProductCategory = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/categories/${input['category_no']}`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
      },
      options,
    );
  };
};
