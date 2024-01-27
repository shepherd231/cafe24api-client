export default (cls) => {
  cls.prototype.retrieveACountOfCustomerMemos = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/memos/count`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };

  cls.prototype.retrieveAListOfCustomerMemos = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/memos`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        important_flag: input['important_flag'],
        memo: input['memo'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACustomerMemo = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customers/${input['member_id']}/memos/{memo_no}`,
      {
        shop_no: input['shop_no'],
        memo_no: input['memo_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };

  cls.prototype.createACustomerMemo = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/customers/${input['member_id']}/memos`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        author_id: input['author_id'],
        memo: input['memo'],
        important_flag: input['important_flag'],
      },
      options,
    );
  };

  cls.prototype.updateACustomerMemo = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/customers/${input['member_id']}/memos/{memo_no}`,
      {
        shop_no: input['shop_no'],
        memo_no: input['memo_no'],
        member_id: input['member_id'],
        author_id: input['author_id'],
        memo: input['memo'],
        important_flag: input['important_flag'],
      },
      options,
    );
  };

  cls.prototype.deleteACustomerMemo = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/customers/${input['member_id']}/memos/{memo_no}`,
      {
        shop_no: input['shop_no'],
        memo_no: input['memo_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };
};
