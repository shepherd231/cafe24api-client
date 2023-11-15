export default (cls) => {
  cls.prototype.calculateTotalDue = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/calculation`,
      {
        shop_no: input['shop_no'],
        mobile: input['mobile'],
        member_id: input['member_id'],
        shipping_type: input['shipping_type'],
        payment_method: input['payment_method'],
        country_code: input['country_code'],
        carrier_id: input['carrier_id'],
        zipcode: input['zipcode'],
        address_full: input['address_full'],
        address_state: input['address_state'],
        items: input['items'],
      },
      options,
    );
  };
};
