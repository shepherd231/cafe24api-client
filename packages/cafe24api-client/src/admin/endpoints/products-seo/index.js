export default (cls) => {
  cls.prototype.retrieveAProductSSeoSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/seo`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.updateProductSeoSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/seo`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        meta_title: input['meta_title'],
        meta_author: input['meta_author'],
        meta_description: input['meta_description'],
        meta_keywords: input['meta_keywords'],
        meta_alt: input['meta_alt'],
        search_engine_exposure: input['search_engine_exposure'],
      },
      options,
    );
  };
};
