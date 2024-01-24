
export default (cls) => {
  cls.prototype.uploadImages = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/images`,
      {
        image: input['image'],
      },
      options,
    );
  };

  cls.prototype.uploadProductImages = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/${input['product_no']}/images`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        detail_image: input['detail_image'],
        list_image: input['list_image'],
        tiny_image: input['tiny_image'],
        small_image: input['small_image'],
        image_upload_type: input['image_upload_type'],
      },
      options,
    );
  };

  cls.prototype.deleteProductImages = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/products/${input['product_no']}/images`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

};
