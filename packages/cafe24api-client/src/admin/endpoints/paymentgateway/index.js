export default (cls) => {
  cls.prototype.createAPaymentGateway = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/paymentgateway`,
      {
        shop_no: input['shop_no'],
        partner_id: input['partner_id'],
        additional_information: input['additional_information'],
        membership_fee_type: input['membership_fee_type'],
        service_limit_type: input['service_limit_type'],
      },
      options,
    );
  };

  cls.prototype.updateAPaymentGateway = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/paymentgateway/${input['client_id']}`,
      {
        shop_no: input['shop_no'],
        client_id: input['client_id'],
        partner_id: input['partner_id'],
        additional_information: input['additional_information'],
        membership_fee_type: input['membership_fee_type'],
        service_limit_type: input['service_limit_type'],
      },
      options,
    );
  };

  cls.prototype.deleteAPaymentGateway = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/paymentgateway/${input['client_id']}`,
      {
        shop_no: input['shop_no'],
        client_id: input['client_id'],
      },
      options,
    );
  };
};
