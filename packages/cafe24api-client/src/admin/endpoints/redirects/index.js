export default (cls) => {
  cls.prototype.retrieveAListOfRedirects = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/redirects`,
      {
        shop_no: input['shop_no'],
        id: input['id'],
        path: input['path'],
        target: input['target'],
      },
      options,
    );
  };

  cls.prototype.createARedirect = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/redirects`,
      {
        shop_no: input['shop_no'],
        path: input['path'],
        target: input['target'],
      },
      options,
    );
  };

  cls.prototype.updateARedirect = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/redirects/${input['id']}`,
      {
        shop_no: input['shop_no'],
        id: input['id'],
        path: input['path'],
        target: input['target'],
      },
      options,
    );
  };

  cls.prototype.deleteARedirect = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/redirects/${input['id']}`,
      {
        shop_no: input['shop_no'],
        id: input['id'],
      },
      options,
    );
  };
};
