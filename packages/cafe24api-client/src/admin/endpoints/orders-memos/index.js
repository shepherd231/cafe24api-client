export default (cls) => {
  cls.prototype.retrieveAListOfAdminMemosForAnOrder = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/memos`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.retrieveAListOfOrderMemos = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/${input['order_id']}/memos`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
      },
      options,
    );
  };

  cls.prototype.createAnOrderMemo = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/${input['order_id']}/memos`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        content: input['content'],
        use_customer_inquiry: input['use_customer_inquiry'],
        topic_type: input['topic_type'],
        status: input['status'],
        attach_type: input['attach_type'],
        starred_memo: input['starred_memo'],
        fixed: input['fixed'],
        product_list: input['product_list'],
      },
      options,
    );
  };

  cls.prototype.updateAnOrderMemo = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/${input['order_id']}/memos/{memo_no}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        memo_no: input['memo_no'],
        content: input['content'],
        use_customer_inquiry: input['use_customer_inquiry'],
        topic_type: input['topic_type'],
        status: input['status'],
        attach_type: input['attach_type'],
        starred_memo: input['starred_memo'],
        fixed: input['fixed'],
        product_list: input['product_list'],
      },
      options,
    );
  };

  cls.prototype.deleteAnOrderMemo = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/orders/${input['order_id']}/memos/{memo_no}`,
      {
        shop_no: input['shop_no'],
        order_id: input['order_id'],
        memo_no: input['memo_no'],
      },
      options,
    );
  };
};
