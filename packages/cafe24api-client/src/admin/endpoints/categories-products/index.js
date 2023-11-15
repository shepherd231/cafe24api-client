export default (cls) => {
  cls.prototype.retrieveAListOfProductsByCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/categories/${input['category_no']}/products`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        display_group: input['display_group'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfProductsByCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/categories/${input['category_no']}/products/count`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        display_group: input['display_group'],
      },
      options,
    );
  };

  cls.prototype.addProductsToACategory = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/categories/${input['category_no']}/products`,
      {
        category_no: input['category_no'],
        display_group: input['display_group'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.updateAProductInProductCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/categories/${input['category_no']}/products`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        display_group: input['display_group'],
        product_no: input['product_no'],
        sequence: input['sequence'],
        auto_sort: input['auto_sort'],
        fixed_sort: input['fixed_sort'],
      },
      options,
    );
  };

  cls.prototype.deleteAProductByCategory = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/categories/${input['category_no']}/products/{product_no}`,
      {
        category_no: input['category_no'],
        product_no: input['product_no'],
        display_group: input['display_group'],
      },
      options,
    );
  };
};
