
export default (cls) => {
  cls.prototype.retrieveASupplierUsersRegionalShippingFeeSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/suppliers/users/${input['supplier_id']}/regionalsurcharges/setting`,
      {
        shop_no: input['shop_no'],
        supplier_id: input['supplier_id'],
      },
      options,
    );
  };

  cls.prototype.updateASupplierUsersRegionalShippingFeeSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/suppliers/users/${input['supplier_id']}/regionalsurcharges/setting`,
      {
        shop_no: input['shop_no'],
        supplier_id: input['supplier_id'],
        use_regional_surcharge: input['use_regional_surcharge'],
        region_setting_type: input['region_setting_type'],
        jeju_surcharge_amount: input['jeju_surcharge_amount'],
        remote_area_surcharge_amount: input['remote_area_surcharge_amount'],
      },
      options,
    );
  };

};
