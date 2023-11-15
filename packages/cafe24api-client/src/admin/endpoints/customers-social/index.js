export default (cls) => {
  cls.prototype.retrieveACustomerSSocialAccount = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/social`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };
};
