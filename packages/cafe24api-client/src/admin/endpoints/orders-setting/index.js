export default (cls) => {
  cls.prototype.retrieveOrderSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateOrderSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/setting`,
      {
        shop_no: input['shop_no'],
        refund_benefit_setting: input['refund_benefit_setting'],
        use_product_prepare_status: input['use_product_prepare_status'],
        use_purchase_confirmation_button:
          input['use_purchase_confirmation_button'],
        purchase_confirmation_button_set_date:
          input['purchase_confirmation_button_set_date'],
        use_purchase_confirmation_auto_check:
          input['use_purchase_confirmation_auto_check'],
        purchase_confirmation_auto_check_day:
          input['purchase_confirmation_auto_check_day'],
        purchase_confirmation_auto_check_set_date:
          input['purchase_confirmation_auto_check_set_date'],
      },
      options,
    );
  };
};
