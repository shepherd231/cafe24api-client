
export default (cls) => {
  cls.prototype.retrieveAListOfShippingCarriers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/carriers`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.retrieveAShippingCarrier = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/carriers/${input['carrier_id']}`,
      {
        shop_no: input['shop_no'],
        carrier_id: input['carrier_id'],
      },
      options,
    );
  };

  cls.prototype.createAShippingCarrier = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/carriers`,
      {
        shop_no: input['shop_no'],
        shipping_carrier_code: input['shipping_carrier_code'],
        contact: input['contact'],
        email: input['email'],
        shipping_carrier: input['shipping_carrier'],
        track_shipment_url: input['track_shipment_url'],
        secondary_contact: input['secondary_contact'],
        default_shipping_fee: input['default_shipping_fee'],
        homepage_url: input['homepage_url'],
        shipping_fee_setting: input['shipping_fee_setting'],
        shipping_fee_setting_detail: input['shipping_fee_setting_detail'],
      },
      options,
    );
  };

  cls.prototype.updateAShippingCarrier = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/carriers/${input['carrier_id']}`,
      {
        shop_no: input['shop_no'],
        carrier_id: input['carrier_id'],
        default_shipping_carrier: input['default_shipping_carrier'],
      },
      options,
    );
  };

  cls.prototype.deleteAShippingCarrier = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/carriers/${input['carrier_id']}`,
      {
        shop_no: input['shop_no'],
        carrier_id: input['carrier_id'],
        delete_default_carrier: input['delete_default_carrier'],
      },
      options,
    );
  };

};
