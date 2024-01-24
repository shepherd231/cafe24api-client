export default (cls) => {
  cls.prototype.retrieveProductImageSizeSettings = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/images/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateProductImageSizeSettings = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/images/setting`,
      {
        shop_no: input['shop_no'],
        product_image_size: input['product_image_size'],
      },
      options,
    );
  };
};
