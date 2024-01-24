
export default (cls) => {
  cls.prototype.retrieveNaverPaySettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/naverpay/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.createNaverPaySettings = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/naverpay/setting`,
      {
        shop_no: input['shop_no'],
        authentication_key: input['authentication_key'],
        naverpay_version: input['naverpay_version'],
        shop_id: input['shop_id'],
        is_button_show: input['is_button_show'],
        is_used_order: input['is_used_order'],
        is_used_review: input['is_used_review'],
        is_show_review: input['is_show_review'],
        is_order_page: input['is_order_page'],
        certi_key: input['certi_key'],
        image_key: input['image_key'],
        naver_button_pc_product: input['naver_button_pc_product'],
        naver_button_pc_basket: input['naver_button_pc_basket'],
        naver_button_mobile_product: input['naver_button_mobile_product'],
        naver_button_mobile_basket: input['naver_button_mobile_basket'],
      },
      options,
    );
  };

  cls.prototype.updateNaverPaySettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/naverpay/setting`,
      {
        shop_no: input['shop_no'],
        authentication_key: input['authentication_key'],
      },
      options,
    );
  };

};
