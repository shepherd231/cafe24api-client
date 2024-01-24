
export default (cls) => {
  cls.prototype.retrieveAListOfDecorationImages = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/decorationimages`,
      {
      },
      options,
    );
  };

  cls.prototype.retrieveAListOfProductDecorationImages = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/decorationimages`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.setDecorationImagesForAProduct = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/${input['product_no']}/decorationimages`,
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

  cls.prototype.updateProductDecorationImages = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/decorationimages`,
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

  cls.prototype.removeAProductDecorationImage = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/products/${input['product_no']}/decorationimages/{code}`,
      {
        shop_no: input['shop_no'],
        code: input['code'],
        product_no: input['product_no'],
      },
      options,
    );
  };

};
