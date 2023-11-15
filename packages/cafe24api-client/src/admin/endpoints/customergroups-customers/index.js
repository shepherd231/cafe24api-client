export default (cls) => {
  cls.prototype.updateACustomerSCustomerTier = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/customergroups/${input['group_no']}/customers`,
      {
        shop_no: input['shop_no'],
        group_no: input['group_no'],
        member_id: input['member_id'],
        fixed_group: input['fixed_group'],
      },
      options,
    );
  };
};
