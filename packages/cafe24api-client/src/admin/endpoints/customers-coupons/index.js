export default (cls) => {
  cls.prototype.retrieveAListOfCustomerCoupons = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/coupons`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfCustomerCoupons = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/coupons/count`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };

  cls.prototype.deleteACustomerCoupon = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/customers/${input['member_id']}/coupons/{coupon_no}`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        coupon_no: input['coupon_no'],
        issue_no: input['issue_no'],
      },
      options,
    );
  };
};
