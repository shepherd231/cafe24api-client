
export default (cls) => {
  cls.prototype.retrieveAListOfBrands = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/brands`,
      {
        shop_no: input['shop_no'],
        brand_code: input['brand_code'],
        brand_name: input['brand_name'],
        use_brand: input['use_brand'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfBrands = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/brands/count`,
      {
        shop_no: input['shop_no'],
        brand_code: input['brand_code'],
        brand_name: input['brand_name'],
        use_brand: input['use_brand'],
      },
      options,
    );
  };

  cls.prototype.createABrand = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/brands`,
      {
        shop_no: input['shop_no'],
        brand_name: input['brand_name'],
        use_brand: input['use_brand'],
        search_keyword: input['search_keyword'],
      },
      options,
    );
  };

  cls.prototype.updateABrand = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/brands/${input['brand_code']}`,
      {
        shop_no: input['shop_no'],
        brand_code: input['brand_code'],
        brand_name: input['brand_name'],
        use_brand: input['use_brand'],
        search_keyword: input['search_keyword'],
      },
      options,
    );
  };

  cls.prototype.deleteABrand = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/brands/${input['brand_code']}`,
      {
        brand_code: input['brand_code'],
      },
      options,
    );
  };

};
