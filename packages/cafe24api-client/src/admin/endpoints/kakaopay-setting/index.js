
export default (cls) => {
  cls.prototype.retrieveSettingsForKakaoPayOrders = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/kakaopay/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateSettingsForKakaoPayOrders = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/kakaopay/setting`,
      {
        shop_no: input['shop_no'],
        shop_key: input['shop_key'],
        pixel_code: input['pixel_code'],
        use_kakaopay: input['use_kakaopay'],
        product_detail_button_size: input['product_detail_button_size'],
        basket_button_size: input['basket_button_size'],
        use_dark_mode: input['use_dark_mode'],
        button_authorization_key: input['button_authorization_key'],
        thirdparty_agree: input['thirdparty_agree'],
        thirdparty_agree_date: input['thirdparty_agree_date'],
      },
      options,
    );
  };

};
