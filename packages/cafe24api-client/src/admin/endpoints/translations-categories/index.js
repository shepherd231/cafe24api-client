export default (cls) => {
  cls.prototype.retrieveAListOfProductCategoryTranslations = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/translations/categories`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        language_code: input['language_code'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.updateProductCategoryTranslation = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/translations/categories/${input['category_no']}`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        translations: input['translations'],
      },
      options,
    );
  };
};
