
export default (cls) => {
  cls.prototype.retrieveACustomersListOfPaymentMethods = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/paymentinformation`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };

  cls.prototype.deleteCustomersPaymentInformation = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/customers/${input['member_id']}/paymentinformation`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };

};
