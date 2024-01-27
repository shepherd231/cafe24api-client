export default (cls) => {
  cls.prototype.retrieveASupplierUsersListOfRegionalShippingFees =
    async function (input, options) {
      return this.createRequest(
        'GET',
        `/api/v2/admin/suppliers/users/${input['supplier_id']}/regionalsurcharges`,
        {
          shop_no: input['shop_no'],
          supplier_id: input['supplier_id'],
          offset: input['offset'],
          limit: input['limit'],
        },
        options,
      );
    };

  cls.prototype.createRegionalShippingFeeForASupplierUser = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/suppliers/users/${input['supplier_id']}/regionalsurcharges`,
      {
        shop_no: input['shop_no'],
        supplier_id: input['supplier_id'],
        country_code: input['country_code'],
        region_name: input['region_name'],
        use_regional_surcharge: input['use_regional_surcharge'],
        surcharge_region_name: input['surcharge_region_name'],
        start_zipcode: input['start_zipcode'],
        end_zipcode: input['end_zipcode'],
        regional_surcharge_amount: input['regional_surcharge_amount'],
      },
      options,
    );
  };

  cls.prototype.deleteSupplierUsersRegionalShippingFeeSettings =
    async function (input, options) {
      return this.createRequest(
        'DELETE',
        `/api/v2/admin/suppliers/users/${input['supplier_id']}/regionalsurcharges/{regional_surcharge_no}`,
        {
          shop_no: input['shop_no'],
          supplier_id: input['supplier_id'],
          regional_surcharge_no: input['regional_surcharge_no'],
        },
        options,
      );
    };
};
