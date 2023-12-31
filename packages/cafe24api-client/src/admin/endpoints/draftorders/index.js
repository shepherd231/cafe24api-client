export default (cls) => {
  cls.prototype.createADraftOrder = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/draftorders`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        order_from_mobile: input['order_from_mobile'],
        payment_method: input['payment_method'],
        order_place_id: input['order_place_id'],
        country_code: input['country_code'],
        payment_gateway_name: input['payment_gateway_name'],
        receiver_name: input['receiver_name'],
        receiver_name_en: input['receiver_name_en'],
        receiver_name_furigana: input['receiver_name_furigana'],
        receiver_phone: input['receiver_phone'],
        receiver_cellphone: input['receiver_cellphone'],
        receiver_zipcode: input['receiver_zipcode'],
        receiver_address1: input['receiver_address1'],
        receiver_address2: input['receiver_address2'],
        receiver_city: input['receiver_city'],
        receiver_state: input['receiver_state'],
        shipping_message: input['shipping_message'],
        buyer_name: input['buyer_name'],
        buyer_email: input['buyer_email'],
        buyer_phone: input['buyer_phone'],
        buyer_cellphone: input['buyer_cellphone'],
        buyer_zipcode: input['buyer_zipcode'],
        buyer_address1: input['buyer_address1'],
        buyer_address2: input['buyer_address2'],
        no_shipping_required: input['no_shipping_required'],
        buyer_ip: input['buyer_ip'],
        transaction_id: input['transaction_id'],
        bank_code: input['bank_code'],
        bank_account_no: input['bank_account_no'],
        bank_account_owner_name: input['bank_account_owner_name'],
        shipping_type: input['shipping_type'],
        send_order_message: input['send_order_message'],
        send_payment_guide_message: input['send_payment_guide_message'],
        send_order_email: input['send_order_email'],
        clearance_information_type: input['clearance_information_type'],
        clearance_information: input['clearance_information'],
        self_payment_cancel: input['self_payment_cancel'],
        self_payment_cancel_url: input['self_payment_cancel_url'],
        items: input['items'],
      },
      options,
    );
  };
};
