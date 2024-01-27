
export default (cls) => {
  cls.prototype.retrieveCouponSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/coupons/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateCouponSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/coupons/setting`,
      {
        shop_no: input['shop_no'],
        use_coupon: input['use_coupon'],
        available_issue_type: input['available_issue_type'],
        allow_using_coupons_with_points: input['allow_using_coupons_with_points'],
        allow_using_coupons_with_discounts: input['allow_using_coupons_with_discounts'],
        allow_using_product_and_order_coupons: input['allow_using_product_and_order_coupons'],
        recover_coupon_setting: input['recover_coupon_setting'],
        max_coupon_count: input['max_coupon_count'],
        use_additional_coupon: input['use_additional_coupon'],
        additional_coupon_no: input['additional_coupon_no'],
        show_coupon_to_non_members: input['show_coupon_to_non_members'],
        show_group_coupon_to_non_members: input['show_group_coupon_to_non_members'],
        show_issued_coupon: input['show_issued_coupon'],
        sorting_type: input['sorting_type'],
        download_image_type: input['download_image_type'],
        background_image_type: input['background_image_type'],
      },
      options,
    );
  };

};
