export default (cls) => {
  cls.prototype.kakaoSyncDetails = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/socials/kakaosync`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.kakaoSyncUpdates = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/socials/kakaosync`,
      {
        shop_no: input['shop_no'],
        rest_api_key: input['rest_api_key'],
        javascript_key: input['javascript_key'],
        auto_login: input['auto_login'],
        use_signup_result_page: input['use_signup_result_page'],
      },
      options,
    );
  };
};
