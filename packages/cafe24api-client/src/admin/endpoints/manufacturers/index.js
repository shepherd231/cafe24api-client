
export default (cls) => {
  cls.prototype.retrieveAListOfManufacturers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/manufacturers`,
      {
        shop_no: input['shop_no'],
        manufacturer_code: input['manufacturer_code'],
        manufacturer_name: input['manufacturer_name'],
        use_manufacturer: input['use_manufacturer'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveAManufacturer = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/manufacturers/${input['manufacturer_code']}`,
      {
        shop_no: input['shop_no'],
        manufacturer_code: input['manufacturer_code'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfManufacturers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/manufacturers/count`,
      {
        shop_no: input['shop_no'],
        manufacturer_code: input['manufacturer_code'],
        manufacturer_name: input['manufacturer_name'],
        use_manufacturer: input['use_manufacturer'],
      },
      options,
    );
  };

  cls.prototype.createAManufacturer = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/manufacturers`,
      {
        shop_no: input['shop_no'],
        manufacturer_name: input['manufacturer_name'],
        president_name: input['president_name'],
        email: input['email'],
        phone: input['phone'],
        homepage: input['homepage'],
        zipcode: input['zipcode'],
        address1: input['address1'],
        address2: input['address2'],
        country_code: input['country_code'],
        use_manufacturer: input['use_manufacturer'],
      },
      options,
    );
  };

  cls.prototype.updateAManufacturer = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/manufacturers/${input['manufacturer_code']}`,
      {
        shop_no: input['shop_no'],
        manufacturer_code: input['manufacturer_code'],
        manufacturer_name: input['manufacturer_name'],
        president_name: input['president_name'],
        email: input['email'],
        phone: input['phone'],
        homepage: input['homepage'],
        zipcode: input['zipcode'],
        address1: input['address1'],
        address2: input['address2'],
        country_code: input['country_code'],
        use_manufacturer: input['use_manufacturer'],
      },
      options,
    );
  };

};
