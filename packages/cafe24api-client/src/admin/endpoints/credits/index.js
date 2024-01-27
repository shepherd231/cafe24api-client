
export default (cls) => {
  cls.prototype.retrieveAListOfCreditsByDateRange = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/credits`,
      {
        shop_no: input['shop_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        type: input['type'],
        case: input['case'],
        admin_id: input['admin_id'],
        order_id: input['order_id'],
        search_field: input['search_field'],
        keyword: input['keyword'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

};
