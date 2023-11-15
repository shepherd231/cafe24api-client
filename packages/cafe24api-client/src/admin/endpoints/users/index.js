export default (cls) => {
  cls.prototype.retrieveAListOfAdminUsers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/users`,
      {
        search_type: input['search_type'],
        keyword: input['keyword'],
        admin_type: input['admin_type'],
      },
      options,
    );
  };

  cls.prototype.retrieveAdminUserDetails = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/users/${input['user_id']}`,
      {
        shop_no: input['shop_no'],
        user_id: input['user_id'],
      },
      options,
    );
  };
};
