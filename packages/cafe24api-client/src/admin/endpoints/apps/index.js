
export default (cls) => {
  cls.prototype.retrieveAnAppInformation = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/apps`,
      {
      },
      options,
    );
  };

  cls.prototype.updateAnAppInformation = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/apps`,
      {
        version: input['version'],
        extension_type: input['extension_type'],
      },
      options,
    );
  };

};
