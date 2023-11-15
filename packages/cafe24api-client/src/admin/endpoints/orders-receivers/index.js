export default (cls) => {
  cls.prototype.retrieveAListOfRecipientsOfAnOrder = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/receivers`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        shipping_code: input['shipping_code'],
      },
      options,
    );
  };

  cls.prototype.updateOrderRecipients = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/receivers`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        name: input['name'],
        phone: input['phone'],
        cellphone: input['cellphone'],
        shipping_message: input['shipping_message'],
        name_furigana: input['name_furigana'],
        zipcode: input['zipcode'],
        address1: input['address1'],
        address2: input['address2'],
        address_state: input['address_state'],
        address_city: input['address_city'],
        name_en: input['name_en'],
        city_en: input['city_en'],
        state_en: input['state_en'],
        street_en: input['street_en'],
        country_code: input['country_code'],
        clearance_information_type: input['clearance_information_type'],
        clearance_information: input['clearance_information'],
        shipping_code: input['shipping_code'],
        change_default_shipping_address:
          input['change_default_shipping_address'],
        virtual_phone_no: input['virtual_phone_no'],
        wished_delivery_date: input['wished_delivery_date'],
        use_fast_delivery_date: input['use_fast_delivery_date'],
        wished_delivery_time: input['wished_delivery_time'],
        use_fast_delivery_time: input['use_fast_delivery_time'],
      },
      options,
    );
  };

  cls.prototype.changeShippingInformation = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/receivers/{shipping_code}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        shipping_code: input['shipping_code'],
        name: input['name'],
        phone: input['phone'],
        cellphone: input['cellphone'],
        shipping_message: input['shipping_message'],
        name_furigana: input['name_furigana'],
        zipcode: input['zipcode'],
        address1: input['address1'],
        address2: input['address2'],
        address_state: input['address_state'],
        address_city: input['address_city'],
        name_en: input['name_en'],
        city_en: input['city_en'],
        state_en: input['state_en'],
        street_en: input['street_en'],
        country_code: input['country_code'],
        clearance_information_type: input['clearance_information_type'],
        clearance_information: input['clearance_information'],
        change_default_shipping_address:
          input['change_default_shipping_address'],
        virtual_phone_no: input['virtual_phone_no'],
        wished_delivery_date: input['wished_delivery_date'],
        use_fast_delivery_date: input['use_fast_delivery_date'],
        wished_delivery_time: input['wished_delivery_time'],
        use_fast_delivery_time: input['use_fast_delivery_time'],
        receiver_direct_input_check: input['receiver_direct_input_check'],
      },
      options,
    );
  };
};
