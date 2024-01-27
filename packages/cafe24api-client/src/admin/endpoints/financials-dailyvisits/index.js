export default (cls) => {
  cls.prototype.retrieveACountOfDailyvisits = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/financials/dailyvisits`,
      {
        shop_no: input['shop_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
      },
      options,
    );
  };
};
