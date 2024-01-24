
export default (cls) => {
  cls.prototype.retrieveAListOfProductsInMainCategory = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/mains/${input['display_group']}/products`,
      {
        shop_no: input['shop_no'],
        display_group: input['display_group'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfProductsInMainCategory = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/mains/${input['display_group']}/products/count`,
      {
        shop_no: input['shop_no'],
        display_group: input['display_group'],
      },
      options,
    );
  };

  cls.prototype.setMainCategoryProducts = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/mains/${input['display_group']}/products`,
      {
        shop_no: input['shop_no'],
        display_group: input['display_group'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.updateFixedSortingOfProductsInMainCategory = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/mains/${input['display_group']}/products`,
      {
        shop_no: input['shop_no'],
        display_group: input['display_group'],
        product_no: input['product_no'],
        fix_product_no: input['fix_product_no'],
      },
      options,
    );
  };

  cls.prototype.deleteAProductInMainCategory = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/mains/${input['display_group']}/products/{product_no}`,
      {
        shop_no: input['shop_no'],
        display_group: input['display_group'],
        product_no: input['product_no'],
      },
      options,
    );
  };

};
