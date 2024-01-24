export default (cls) => {
  cls.prototype.retrieveAListOfThemes = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/themes`,
      {
        type: input['type'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfThemes = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/themes/count`,
      {
        type: input['type'],
      },
      options,
    );
  };

  cls.prototype.retrieveATheme = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/themes/${input['skin_no']}`,
      {
        skin_no: input['skin_no'],
      },
      options,
    );
  };
};
