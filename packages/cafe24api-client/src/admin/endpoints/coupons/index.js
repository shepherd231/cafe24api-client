
export default (cls) => {
  cls.prototype.retrieveACountOfCoupons = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/coupons/count`,
      {
        shop_no: input['shop_no'],
        coupon_no: input['coupon_no'],
        coupon_type: input['coupon_type'],
        coupon_name: input['coupon_name'],
        benefit_type: input['benefit_type'],
        issue_type: input['issue_type'],
        issue_sub_type: input['issue_sub_type'],
        issued_flag: input['issued_flag'],
        created_start_date: input['created_start_date'],
        created_end_date: input['created_end_date'],
        deleted: input['deleted'],
        pause_begin_date: input['pause_begin_date'],
        pause_end_date: input['pause_end_date'],
        issue_order_path: input['issue_order_path'],
        issue_order_type: input['issue_order_type'],
        issue_reserved: input['issue_reserved'],
        available_period_type: input['available_period_type'],
        available_datetime: input['available_datetime'],
        available_site: input['available_site'],
        available_scope: input['available_scope'],
        available_price_type: input['available_price_type'],
        available_order_price_type: input['available_order_price_type'],
      },
      options,
    );
  };

  cls.prototype.retrieveAListOfCoupons = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/coupons`,
      {
        shop_no: input['shop_no'],
        coupon_no: input['coupon_no'],
        coupon_type: input['coupon_type'],
        coupon_name: input['coupon_name'],
        benefit_type: input['benefit_type'],
        issue_type: input['issue_type'],
        issue_sub_type: input['issue_sub_type'],
        issued_flag: input['issued_flag'],
        created_start_date: input['created_start_date'],
        created_end_date: input['created_end_date'],
        deleted: input['deleted'],
        pause_begin_date: input['pause_begin_date'],
        pause_end_date: input['pause_end_date'],
        issue_order_path: input['issue_order_path'],
        issue_order_type: input['issue_order_type'],
        issue_reserved: input['issue_reserved'],
        available_period_type: input['available_period_type'],
        available_datetime: input['available_datetime'],
        available_site: input['available_site'],
        available_scope: input['available_scope'],
        available_price_type: input['available_price_type'],
        available_order_price_type: input['available_order_price_type'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.createACoupon = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/coupons`,
      {
        shop_no: input['shop_no'],
        coupon_name: input['coupon_name'],
        benefit_type: input['benefit_type'],
        issue_type: input['issue_type'],
        available_period_type: input['available_period_type'],
        available_begin_datetime: input['available_begin_datetime'],
        available_end_datetime: input['available_end_datetime'],
        available_day_from_issued: input['available_day_from_issued'],
        available_site: input['available_site'],
        available_scope: input['available_scope'],
        available_product: input['available_product'],
        available_product_list: input['available_product_list'],
        available_category: input['available_category'],
        available_category_list: input['available_category_list'],
        available_amount_type: input['available_amount_type'],
        available_coupon_count_by_order: input['available_coupon_count_by_order'],
        available_price_type: input['available_price_type'],
        available_order_price_type: input['available_order_price_type'],
        available_min_price: input['available_min_price'],
        discount_amount: input['discount_amount'],
        discount_rate: input['discount_rate'],
      },
      options,
    );
  };

};
