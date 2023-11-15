export default (cls) => {
  cls.prototype.createAnAdditionalProductImage = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/${input['product_no']}/additionalimages`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        additional_image: input['additional_image'],
      },
      options,
    );
  };

  cls.prototype.updateAnAdditionalProductImage = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/additionalimages`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        additional_image: input['additional_image'],
      },
      options,
    );
  };

  cls.prototype.deleteAnAdditionalProductImage = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/products/${input['product_no']}/additionalimages`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };
};
