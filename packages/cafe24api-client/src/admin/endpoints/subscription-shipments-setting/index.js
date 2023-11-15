export default (cls) => {
  cls.prototype.retrieveAListOfSubscriptionProducts = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/subscription/shipments/setting`,
      {
        shop_no: input['shop_no'],
        subscription_no: input['subscription_no'],
      },
      options,
    );
  };

  cls.prototype.createASubscriptionPaymentRule = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/subscription/shipments/setting`,
      {
        shop_no: input['shop_no'],
        subscription_shipments_name: input['subscription_shipments_name'],
        product_binding_type: input['product_binding_type'],
        one_time_purchase: input['one_time_purchase'],
        product_list: input['product_list'],
        category_list: input['category_list'],
        use_discount: input['use_discount'],
        discount_value_unit: input['discount_value_unit'],
        discount_values: input['discount_values'],
        related_purchase_quantity: input['related_purchase_quantity'],
        subscription_shipments_cycle_type:
          input['subscription_shipments_cycle_type'],
        subscription_shipments_cycle: input['subscription_shipments_cycle'],
        use_order_price_condition: input['use_order_price_condition'],
        order_price_greater_than: input['order_price_greater_than'],
        include_regional_shipping_rate: input['include_regional_shipping_rate'],
        shipments_start_date: input['shipments_start_date'],
      },
      options,
    );
  };

  cls.prototype.updateSubscriptionProducts = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/subscription/shipments/setting/${input['subscription_no']}`,
      {
        shop_no: input['shop_no'],
        subscription_no: input['subscription_no'],
        subscription_shipments_name: input['subscription_shipments_name'],
        product_binding_type: input['product_binding_type'],
        one_time_purchase: input['one_time_purchase'],
        product_list: input['product_list'],
        category_list: input['category_list'],
        use_discount: input['use_discount'],
        discount_value_unit: input['discount_value_unit'],
        discount_values: input['discount_values'],
        related_purchase_quantity: input['related_purchase_quantity'],
        subscription_shipments_cycle_type:
          input['subscription_shipments_cycle_type'],
        subscription_shipments_cycle: input['subscription_shipments_cycle'],
        use_order_price_condition: input['use_order_price_condition'],
        order_price_greater_than: input['order_price_greater_than'],
        include_regional_shipping_rate: input['include_regional_shipping_rate'],
        shipments_start_date: input['shipments_start_date'],
      },
      options,
    );
  };

  cls.prototype.deleteSubscriptionProducts = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/subscription/shipments/setting/${input['subscription_no']}`,
      {
        shop_no: input['shop_no'],
        subscription_no: input['subscription_no'],
      },
      options,
    );
  };
};
