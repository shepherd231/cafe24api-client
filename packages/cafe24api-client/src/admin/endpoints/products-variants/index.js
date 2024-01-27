export default (cls) => {
  cls.prototype.retrieveAListOfProductVariants = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/variants`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        inventories: input['inventories'],
      },
      options,
    );
  };

  cls.prototype.retrieveAProductVariant = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/variants/{variant_code}`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        variant_code: input['variant_code'],
        inventories: input['inventories'],
      },
      options,
    );
  };

  cls.prototype.updateAProductVariant = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/variants/{variant_code}`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        variant_code: input['variant_code'],
        custom_variant_code: input['custom_variant_code'],
        display: input['display'],
        selling: input['selling'],
        additional_amount: input['additional_amount'],
        quantity: input['quantity'],
        use_inventory: input['use_inventory'],
        important_inventory: input['important_inventory'],
        inventory_control_type: input['inventory_control_type'],
        display_soldout: input['display_soldout'],
        safety_inventory: input['safety_inventory'],
      },
      options,
    );
  };

  cls.prototype.updateMultipleProductVariants = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/variants`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        variant_code: input['variant_code'],
        custom_variant_code: input['custom_variant_code'],
        display: input['display'],
        selling: input['selling'],
        additional_amount: input['additional_amount'],
        quantity: input['quantity'],
        use_inventory: input['use_inventory'],
        important_inventory: input['important_inventory'],
        inventory_control_type: input['inventory_control_type'],
        display_soldout: input['display_soldout'],
        safety_inventory: input['safety_inventory'],
      },
      options,
    );
  };

  cls.prototype.deleteAProductVariant = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/products/${input['product_no']}/variants/{variant_code}`,
      {
        product_no: input['product_no'],
        variant_code: input['variant_code'],
      },
      options,
    );
  };
};
