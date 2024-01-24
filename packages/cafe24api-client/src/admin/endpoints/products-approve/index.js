
export default (cls) => {
  cls.prototype.retrieveAProductApprovalStatus = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/approve`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.createAProductApprovalRequest = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/${input['product_no']}/approve`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        user_id: input['user_id'],
      },
      options,
    );
  };

  cls.prototype.updateAProductApprovalStatus = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/approve`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        user_id: input['user_id'],
        status: input['status'],
      },
      options,
    );
  };

};
