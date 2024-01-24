
export default (cls) => {
  cls.prototype.retrieveAThemePage = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/themes/${input['skin_no']}/pages`,
      {
        skin_no: input['skin_no'],
        path: input['path'],
      },
      options,
    );
  };

  cls.prototype.createAThemePage = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/themes/${input['skin_no']}/pages`,
      {
        skin_no: input['skin_no'],
        path: input['path'],
        source: input['source'],
        display_location: input['display_location'],
      },
      options,
    );
  };

};
