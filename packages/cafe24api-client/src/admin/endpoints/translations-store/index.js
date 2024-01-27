
export default (cls) => {
  cls.prototype.retrieveAListOfStoreTranslations = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/translations/store`,
      {
        shop_no: input['shop_no'],
        language_code: input['language_code'],
      },
      options,
    );
  };

  cls.prototype.updateTheTranslationsOfAStore = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/translations/store`,
      {
        shop_no: input['shop_no'],
        translations: input['translations'],
      },
      options,
    );
  };

};
