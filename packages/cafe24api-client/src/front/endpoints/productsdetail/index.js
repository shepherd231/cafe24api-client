export default (cls) => {
  cls.prototype.retrieveTheDetailsOfAProduct = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/productsdetail/${input['product_no']}`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        mobile: input['mobile'],
      },
      options,
    );
  };
};
