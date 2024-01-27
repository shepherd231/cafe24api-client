export default (cls) => {
  cls.prototype.retrieveAListOfOrders = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders`,
      {
        items: input['items'],
        receivers: input['receivers'],
        buyer: input['buyer'],
        return: input['return'],
        cancellation: input['cancellation'],
        exchange: input['exchange'],
        shop_no: input['shop_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        order_id: input['order_id'],
        order_status: input['order_status'],
        payment_status: input['payment_status'],
        member_type: input['member_type'],
        group_no: input['group_no'],
        buyer_name: input['buyer_name'],
        receiver_name: input['receiver_name'],
        name_furigana: input['name_furigana'],
        receiver_address: input['receiver_address'],
        member_id: input['member_id'],
        member_email: input['member_email'],
        product_no: input['product_no'],
        product_code: input['product_code'],
        date_type: input['date_type'],
        supplier_id: input['supplier_id'],
        order_place_id: input['order_place_id'],
        buyer_cellphone: input['buyer_cellphone'],
        buyer_phone: input['buyer_phone'],
        buyer_email: input['buyer_email'],
        inflow_path: input['inflow_path'],
        subscription: input['subscription'],
        market_order_no: input['market_order_no'],
        market_cancel_request: input['market_cancel_request'],
        payment_method: input['payment_method'],
        payment_gateway_name: input['payment_gateway_name'],
        market_seller_id: input['market_seller_id'],
        discount_method: input['discount_method'],
        discount_code: input['discount_code'],
        carrier_id: input['carrier_id'],
        labels: input['labels'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.retrieveAnOrder = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        items: input['items'],
        receivers: input['receivers'],
        buyer: input['buyer'],
        benefits: input['benefits'],
        coupons: input['coupons'],
        return: input['return'],
        cancellation: input['cancellation'],
        exchange: input['exchange'],
        refunds: input['refunds'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfOrders = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/count`,
      {
        shop_no: input['shop_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        order_id: input['order_id'],
        order_status: input['order_status'],
        payment_status: input['payment_status'],
        member_type: input['member_type'],
        group_no: input['group_no'],
        buyer_name: input['buyer_name'],
        receiver_name: input['receiver_name'],
        name_furigana: input['name_furigana'],
        receiver_address: input['receiver_address'],
        member_id: input['member_id'],
        member_email: input['member_email'],
        product_no: input['product_no'],
        product_code: input['product_code'],
        date_type: input['date_type'],
        supplier_id: input['supplier_id'],
        order_place_id: input['order_place_id'],
        buyer_cellphone: input['buyer_cellphone'],
        buyer_phone: input['buyer_phone'],
        buyer_email: input['buyer_email'],
        inflow_path: input['inflow_path'],
        subscription: input['subscription'],
        market_order_no: input['market_order_no'],
        market_cancel_request: input['market_cancel_request'],
        payment_method: input['payment_method'],
        payment_gateway_name: input['payment_gateway_name'],
        market_seller_id: input['market_seller_id'],
        discount_method: input['discount_method'],
        discount_code: input['discount_code'],
        carrier_id: input['carrier_id'],
        labels: input['labels'],
      },
      options,
    );
  };

  cls.prototype.updateStatusForMultipleOrders = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        process_status: input['process_status'],
        order_item_code: input['order_item_code'],
        purchase_confirmation: input['purchase_confirmation'],
        collect_points: input['collect_points'],
        show_shipping_address: input['show_shipping_address'],
      },
      options,
    );
  };

  cls.prototype.updateAnOrderStatus = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        process_status: input['process_status'],
        order_item_code: input['order_item_code'],
        purchase_confirmation: input['purchase_confirmation'],
        collect_points: input['collect_points'],
        show_shipping_address: input['show_shipping_address'],
      },
      options,
    );
  };
};
