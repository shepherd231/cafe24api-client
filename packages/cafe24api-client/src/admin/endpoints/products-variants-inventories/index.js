export default (cls) => {
  cls.prototype.retrieveInventoryDetailsOfAProductVariant = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/variants/{variant_code}/inventories`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        variant_code: input['variant_code'],
      },
      options,
    );
  };

  cls.prototype.updateAProductVariantInventory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/variants/{variant_code}/inventories`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        variant_code: input['variant_code'],
        use_inventory: input['use_inventory'],
        important_inventory: input['important_inventory'],
        inventory_control_type: input['inventory_control_type'],
        display_soldout: input['display_soldout'],
        quantity: input['quantity'],
        safety_inventory: input['safety_inventory'],
        origin_code: input['origin_code'],
      },
      options,
    );
  };
};
