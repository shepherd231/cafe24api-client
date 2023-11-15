export default (cls) => {
  cls.prototype.retreiveACafe24StoreOrder = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/appstore/orders/${input['order_id']}`,
      {
        order_id: input['order_id'],
      },
      options,
    );
  };

  cls.prototype.createACafe24StoreOrder = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/appstore/orders`,
      {
        order_name: input['order_name'],
        order_amount: input['order_amount'],
        return_url: input['return_url'],
        automatic_payment: input['automatic_payment'],
      },
      options,
    );
  };
};
