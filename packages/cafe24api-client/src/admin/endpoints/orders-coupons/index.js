
export default (cls) => {
  cls.prototype.retrieveAListOfCouponsAppliedToAnOrder = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/coupons`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

};
