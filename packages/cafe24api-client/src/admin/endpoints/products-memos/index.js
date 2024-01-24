
export default (cls) => {
  cls.prototype.retrieveAListOfProductMemos = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/memos`,
      {
        product_no: input['product_no'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveAProductMemo = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/memos/{memo_no}`,
      {
        product_no: input['product_no'],
        memo_no: input['memo_no'],
      },
      options,
    );
  };

  cls.prototype.createAProductMemo = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/${input['product_no']}/memos`,
      {
        product_no: input['product_no'],
        author_id: input['author_id'],
        memo: input['memo'],
      },
      options,
    );
  };

  cls.prototype.updateAProductMemo = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/memos/{memo_no}`,
      {
        product_no: input['product_no'],
        memo_no: input['memo_no'],
        author_id: input['author_id'],
        memo: input['memo'],
      },
      options,
    );
  };

  cls.prototype.deleteAProductMemo = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/products/${input['product_no']}/memos/{memo_no}`,
      {
        product_no: input['product_no'],
        memo_no: input['memo_no'],
      },
      options,
    );
  };

};
