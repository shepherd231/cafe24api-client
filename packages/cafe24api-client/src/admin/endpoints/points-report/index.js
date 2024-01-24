
export default (cls) => {
  cls.prototype.retrieveAPointsReportByDateRange = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/points/report`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        email: input['email'],
        group_no: input['group_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
      },
      options,
    );
  };

};
