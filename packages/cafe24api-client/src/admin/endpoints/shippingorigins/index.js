
export default (cls) => {
  cls.prototype.retrieveAListOfShippingOrigins = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/shippingorigins`,
      {
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveAShippingOrigin = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/shippingorigins/${input['origin_code']}`,
      {
        origin_code: input['origin_code'],
      },
      options,
    );
  };

  cls.prototype.createAShippingOrigin = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/shippingorigins`,
      {
        origin_name: input['origin_name'],
        address1: input['address1'],
        address2: input['address2'],
        country_code: input['country_code'],
        default: input['default'],
        zipcode: input['zipcode'],
        contact: input['contact'],
        secondary_contact: input['secondary_contact'],
      },
      options,
    );
  };

  cls.prototype.updateAShippingOrigin = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/shippingorigins/${input['origin_code']}`,
      {
        origin_code: input['origin_code'],
        origin_name: input['origin_name'],
        country_code: input['country_code'],
        default: input['default'],
        contact: input['contact'],
        secondary_contact: input['secondary_contact'],
        zipcode: input['zipcode'],
        address1: input['address1'],
        address2: input['address2'],
      },
      options,
    );
  };

  cls.prototype.deleteAShippingOrigin = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/shippingorigins/${input['origin_code']}`,
      {
        origin_code: input['origin_code'],
      },
      options,
    );
  };

};
