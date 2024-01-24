
export default (cls) => {
  cls.prototype.retrieveAListOfIssuedCoupons = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/coupons/${input['coupon_no']}/issues`,
      {
        shop_no: input['shop_no'],
        coupon_no: input['coupon_no'],
        member_id: input['member_id'],
        group_no: input['group_no'],
        issued_date: input['issued_date'],
        issued_start_date: input['issued_start_date'],
        issued_end_date: input['issued_end_date'],
        used_coupon: input['used_coupon'],
        since_issue_no: input['since_issue_no'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.createCouponIssuanceHistory = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/coupons/${input['coupon_no']}/issues`,
      {
        shop_no: input['shop_no'],
        coupon_no: input['coupon_no'],
        issued_member_scope: input['issued_member_scope'],
        group_no: input['group_no'],
        member_id: input['member_id'],
        send_sms_for_issue: input['send_sms_for_issue'],
        allow_duplication: input['allow_duplication'],
        single_issue_per_once: input['single_issue_per_once'],
        issue_count_per_once: input['issue_count_per_once'],
        issued_place_type: input['issued_place_type'],
        issued_by_action_type: input['issued_by_action_type'],
        issued_by_event_type: input['issued_by_event_type'],
        request_admin_id: input['request_admin_id'],
      },
      options,
    );
  };

};
