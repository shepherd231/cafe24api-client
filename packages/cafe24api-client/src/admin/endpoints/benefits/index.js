
export default (cls) => {
  cls.prototype.retrieveAListOfCustomerBenefits = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/benefits`,
      {
        shop_no: input['shop_no'],
        use_benefit: input['use_benefit'],
        benefit_name: input['benefit_name'],
        benefit_type: input['benefit_type'],
        period_type: input['period_type'],
        benefit_start_date: input['benefit_start_date'],
        benefit_end_date: input['benefit_end_date'],
        platform_types: input['platform_types'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfCustomerBenefits = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/benefits/count`,
      {
        shop_no: input['shop_no'],
        use_benefit: input['use_benefit'],
        benefit_name: input['benefit_name'],
        benefit_type: input['benefit_type'],
        period_type: input['period_type'],
        benefit_start_date: input['benefit_start_date'],
        benefit_end_date: input['benefit_end_date'],
        platform_types: input['platform_types'],
      },
      options,
    );
  };

  cls.prototype.retrieveACustomerBenefit = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/benefits/${input['benefit_no']}`,
      {
        shop_no: input['shop_no'],
        benefit_no: input['benefit_no'],
      },
      options,
    );
  };

  cls.prototype.createACustomerBenefit = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/benefits`,
      {
        shop_no: input['shop_no'],
        use_benefit: input['use_benefit'],
        benefit_name: input['benefit_name'],
        benefit_division: input['benefit_division'],
        benefit_type: input['benefit_type'],
        use_benefit_period: input['use_benefit_period'],
        benefit_start_date: input['benefit_start_date'],
        benefit_end_date: input['benefit_end_date'],
        platform_types: input['platform_types'],
        use_group_binding: input['use_group_binding'],
        customer_group_list: input['customer_group_list'],
        product_binding_type: input['product_binding_type'],
        use_except_category: input['use_except_category'],
        available_coupon: input['available_coupon'],
        period_sale: input['period_sale'],
        gift: input['gift'],
        new_product_sale: input['new_product_sale'],
        shipping_fee_sale: input['shipping_fee_sale'],
        gift_product_bundle: input['gift_product_bundle'],
        icon_url: input['icon_url'],
      },
      options,
    );
  };

  cls.prototype.updateACustomerBenefit = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/benefits/${input['benefit_no']}`,
      {
        shop_no: input['shop_no'],
        benefit_no: input['benefit_no'],
        use_benefit: input['use_benefit'],
        benefit_name: input['benefit_name'],
        use_benefit_period: input['use_benefit_period'],
        benefit_start_date: input['benefit_start_date'],
        benefit_end_date: input['benefit_end_date'],
        platform_types: input['platform_types'],
        use_group_binding: input['use_group_binding'],
        customer_group_list: input['customer_group_list'],
        product_binding_type: input['product_binding_type'],
        use_except_category: input['use_except_category'],
        available_coupon: input['available_coupon'],
        period_sale: input['period_sale'],
        gift: input['gift'],
        gift_product_bundle: input['gift_product_bundle'],
        new_product_sale: input['new_product_sale'],
        shipping_fee_sale: input['shipping_fee_sale'],
        icon_url: input['icon_url'],
      },
      options,
    );
  };

  cls.prototype.deleteACustomerBenefit = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/benefits/${input['benefit_no']}`,
      {
        shop_no: input['shop_no'],
        benefit_no: input['benefit_no'],
      },
      options,
    );
  };

};
