
export default (cls) => {
  cls.prototype.naverLoginDetails = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/socials/naverlogin`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateNaverLoginSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/socials/naverlogin`,
      {
        shop_no: input['shop_no'],
        use_naverlogin: input['use_naverlogin'],
        client_id: input['client_id'],
        client_secret: input['client_secret'],
      },
      options,
    );
  };

};
