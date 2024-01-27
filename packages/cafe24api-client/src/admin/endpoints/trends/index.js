export default (cls) => {
  cls.prototype.retrieveAListOfTrends = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/trends`,
      {
        shop_no: input['shop_no'],
        trend_code: input['trend_code'],
        trend_name: input['trend_name'],
        use_trend: input['use_trend'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfTrends = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/trends/count`,
      {
        shop_no: input['shop_no'],
        trend_code: input['trend_code'],
        trend_name: input['trend_name'],
        use_trend: input['use_trend'],
      },
      options,
    );
  };
};
