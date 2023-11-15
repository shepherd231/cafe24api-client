export default (cls) => {
  cls.prototype.updatePaymentStatusForMultipleOrders = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/payments`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        status: input['status'],
        auto_paid: input['auto_paid'],
        recover_inventory: input['recover_inventory'],
        cancel_request: input['cancel_request'],
      },
      options,
    );
  };
};
