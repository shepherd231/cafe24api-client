
export default (cls) => {
  cls.prototype.retrieveAListOfCafe24StorePayments = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/appstore/payments`,
      {
        order_id: input['order_id'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        currency: input['currency'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfCafe24StorePayments = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/appstore/payments/count`,
      {
        order_id: input['order_id'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        currency: input['currency'],
      },
      options,
    );
  };

};
