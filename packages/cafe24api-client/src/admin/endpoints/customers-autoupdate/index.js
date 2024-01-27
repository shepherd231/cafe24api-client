export default (cls) => {
  cls.prototype.retrieveCustomerTierAutoUpdateDetails = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/autoupdate`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };
};
