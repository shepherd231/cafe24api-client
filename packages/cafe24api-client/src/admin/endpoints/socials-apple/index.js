
export default (cls) => {
  cls.prototype.appleLoginSyncDetails = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/socials/apple`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.appleLoginSyncSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/socials/apple`,
      {
        shop_no: input['shop_no'],
        use_apple_login: input['use_apple_login'],
        client_id: input['client_id'],
        team_id: input['team_id'],
        key_id: input['key_id'],
        auth_key_file_name: input['auth_key_file_name'],
        auth_key_file_contents: input['auth_key_file_contents'],
        use_certification: input['use_certification'],
      },
      options,
    );
  };

};
