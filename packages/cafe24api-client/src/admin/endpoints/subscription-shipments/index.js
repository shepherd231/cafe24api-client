export default (cls) => {
  cls.prototype.retrieveASubscription = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/subscription/shipments`,
      {
        date_type: input['date_type'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        subscription_id: input['subscription_id'],
        member_id: input['member_id'],
        buyer_name: input['buyer_name'],
        buyer_phone: input['buyer_phone'],
        buyer_cellphone: input['buyer_cellphone'],
        product_no: input['product_no'],
        product_name: input['product_name'],
        product_code: input['product_code'],
        variant_code: input['variant_code'],
        subscription_shipments_cycle: input['subscription_shipments_cycle'],
        subscription_state: input['subscription_state'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.createASubscription = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/subscription/shipments`,
      {
        member_id: input['member_id'],
        buyer_name: input['buyer_name'],
        buyer_zipcode: input['buyer_zipcode'],
        buyer_address1: input['buyer_address1'],
        buyer_address2: input['buyer_address2'],
        buyer_phone: input['buyer_phone'],
        buyer_cellphone: input['buyer_cellphone'],
        buyer_email: input['buyer_email'],
        receiver_name: input['receiver_name'],
        receiver_zipcode: input['receiver_zipcode'],
        receiver_address1: input['receiver_address1'],
        receiver_address2: input['receiver_address2'],
        receiver_phone: input['receiver_phone'],
        receiver_cellphone: input['receiver_cellphone'],
        shipping_message: input['shipping_message'],
        delivery_type: input['delivery_type'],
        expected_delivery_date: input['expected_delivery_date'],
        subscription_shipments_cycle: input['subscription_shipments_cycle'],
        wished_delivery: input['wished_delivery'],
        wished_delivery_start_hour: input['wished_delivery_start_hour'],
        wished_delivery_end_hour: input['wished_delivery_end_hour'],
        wished_delivery_hour_asap: input['wished_delivery_hour_asap'],
        store_pickup: input['store_pickup'],
        use_virtual_phone_no: input['use_virtual_phone_no'],
        items: input['items'],
      },
      options,
    );
  };

  cls.prototype.updateASubscription = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/subscription/shipments/${input['subscription_id']}`,
      {
        subscription_id: input['subscription_id'],
        receiver_name: input['receiver_name'],
        receiver_zipcode: input['receiver_zipcode'],
        receiver_address1: input['receiver_address1'],
        receiver_address2: input['receiver_address2'],
        receiver_phone: input['receiver_phone'],
        receiver_cellphone: input['receiver_cellphone'],
        shipping_message: input['shipping_message'],
        subscription_state: input['subscription_state'],
      },
      options,
    );
  };
};
