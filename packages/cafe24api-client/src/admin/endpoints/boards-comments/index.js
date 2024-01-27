
export default (cls) => {
  cls.prototype.retrieveCommentsInBulk = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/boards/${input['board_no']}/comments`,
      {
        shop_no: input['shop_no'],
        board_no: input['board_no'],
        since_comment_no: input['since_comment_no'],
        limit: input['limit'],
      },
      options,
    );
  };

};
