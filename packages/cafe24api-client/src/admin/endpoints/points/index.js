export default (cls) => {
  cls.prototype.retrievePoints = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/points`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        email: input['email'],
        order_id: input['order_id'],
        group_no: input['group_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        case: input['case'],
        points_category: input['points_category'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.issueAndDeductPoints = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/points`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        order_id: input['order_id'],
        amount: input['amount'],
        type: input['type'],
        reason: input['reason'],
      },
      options,
    );
  };
};
