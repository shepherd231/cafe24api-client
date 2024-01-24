export default (cls) => {
  cls.prototype.retrieveAListOfProductTranslations = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/translations/products`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        product_name: input['product_name'],
        language_code: input['language_code'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.updateProductTranslation = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/translations/products/${input['product_no']}`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        translations: input['translations'],
      },
      options,
    );
  };
};
