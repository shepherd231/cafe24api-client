export default (cls) => {
  cls.prototype.retrieveAListOfCustomers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers`,
      {
        shop_no: input['shop_no'],
        cellphone: input['cellphone'],
        member_id: input['member_id'],
      },
      options,
    );
  };

  cls.prototype.deleteAnAccount = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/customers/${input['member_id']}`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        is_point_check: input['is_point_check'],
      },
      options,
    );
  };
};
