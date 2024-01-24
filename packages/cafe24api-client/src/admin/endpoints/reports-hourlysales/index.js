
export default (cls) => {
  cls.prototype.retrieveHourlySalesStatisticsOfAStore = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/reports/hourlysales`,
      {
        shop_no: input['shop_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        collection_hour: input['collection_hour'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

};
