export default (cls) => {
  cls.prototype.retrieveSeoSettingsByCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/categories/${input['category_no']}/seo`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
      },
      options,
    );
  };

  cls.prototype.updateAProductCategorySeo = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/categories/${input['category_no']}/seo`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        search_engine_exposure: input['search_engine_exposure'],
        meta_title: input['meta_title'],
        meta_author: input['meta_author'],
        meta_description: input['meta_description'],
        meta_keywords: input['meta_keywords'],
      },
      options,
    );
  };
};
