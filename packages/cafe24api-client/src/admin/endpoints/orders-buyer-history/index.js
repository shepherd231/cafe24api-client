export default (cls) => {
  cls.prototype.retrieveAListOfCustomerHistoryOfAnOrder = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/buyer/history`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
      },
      options,
    );
  };
};
