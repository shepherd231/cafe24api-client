export default (cls) => {
  cls.prototype.retrieveAListOfIcons = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/icons`,
      {},
      options,
    );
  };

  cls.prototype.retrieveAListOfProductIcons = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/icons`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.setIconsForAProduct = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/${input['product_no']}/icons`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        image_list: input['image_list'],
      },
      options,
    );
  };

  cls.prototype.updateProductIcons = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/icons`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        use_show_date: input['use_show_date'],
        show_start_date: input['show_start_date'],
        show_end_date: input['show_end_date'],
        image_list: input['image_list'],
      },
      options,
    );
  };

  cls.prototype.removeAProductIcon = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/products/${input['product_no']}/icons/{code}`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        code: input['code'],
      },
      options,
    );
  };
};
