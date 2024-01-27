export default (cls) => {
  cls.prototype.retrieveCustomerDetailsOfAnOrder = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/buyer`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
      },
      options,
    );
  };

  cls.prototype.updateCustomerInformationOfAnOrder = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/buyer`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        name: input['name'],
        email: input['email'],
        phone: input['phone'],
        cellphone: input['cellphone'],
        customer_notification: input['customer_notification'],
      },
      options,
    );
  };
};
