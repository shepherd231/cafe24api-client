
export default (cls) => {
  cls.prototype.retrieveAPaymentAmount = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/paymentamount`,
      {
        shop_no: input['shop_no'],
        order_item_code: input['order_item_code'],
      },
      options,
    );
  };

};
