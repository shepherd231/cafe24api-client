
export default (cls) => {
  cls.prototype.retrieveAListOfThemeTranslations = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/translations/themes`,
      {
      },
      options,
    );
  };

  cls.prototype.retrieveAThemeTranslation = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/translations/themes/${input['skin_no']}`,
      {
        skin_no: input['skin_no'],
        language_code: input['language_code'],
      },
      options,
    );
  };

  cls.prototype.updateAThemeTranslation = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/translations/themes/${input['skin_no']}`,
      {
        skin_no: input['skin_no'],
        skin_translation: input['skin_translation'],
      },
      options,
    );
  };

};
