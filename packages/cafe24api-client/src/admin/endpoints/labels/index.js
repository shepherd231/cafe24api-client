export default (cls) => {
  cls.prototype.retrieveOrderLabels = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/labels`,
      {
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.createMultipleOrderLabels = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/labels`,
      {
        shop_no: input['shop_no'],
        name: input['name'],
        order_item_code: input['order_item_code'],
      },
      options,
    );
  };
};
