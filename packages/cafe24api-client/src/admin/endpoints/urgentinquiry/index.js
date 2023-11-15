export default (cls) => {
  cls.prototype.retrieveAnUrgentInquiryPost = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/urgentinquiry`,
      {
        shop_no: input['shop_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };
};
