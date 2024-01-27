export default (cls) => {
  cls.prototype.retrieveAnOrderLabel = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/items/{order_item_code}/labels`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
      },
      options,
    );
  };

  cls.prototype.createAnOrderLabel = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/items/{order_item_code}/labels`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
        names: input['names'],
      },
      options,
    );
  };

  cls.prototype.updateAnOrderLabel = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/items/{order_item_code}/labels`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
        names: input['names'],
      },
      options,
    );
  };

  cls.prototype.deleteAnOrderLabel = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/orders/${input['order_id']}/items/{order_item_code}/labels/{name}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        order_item_code: input['order_item_code'],
        name: input['name'],
      },
      options,
    );
  };
};
