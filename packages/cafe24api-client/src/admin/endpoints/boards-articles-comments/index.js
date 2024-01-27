
export default (cls) => {
  cls.prototype.retrieveAListOfCommentsForABoardPost = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/boards/${input['board_no']}/articles/{article_no}/comments`,
      {
        shop_no: input['shop_no'],
        board_no: input['board_no'],
        article_no: input['article_no'],
        comment_no: input['comment_no'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.createACommentForABoardPost = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/boards/${input['board_no']}/articles/{article_no}/comments`,
      {
        shop_no: input['shop_no'],
        board_no: input['board_no'],
        article_no: input['article_no'],
        content: input['content'],
        writer: input['writer'],
        password: input['password'],
        member_id: input['member_id'],
        rating: input['rating'],
        secret: input['secret'],
        parent_comment_no: input['parent_comment_no'],
        input_channel: input['input_channel'],
        created_date: input['created_date'],
        attach_file_urls: input['attach_file_urls'],
      },
      options,
    );
  };

  cls.prototype.deleteACommentForABoardPost = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/boards/${input['board_no']}/articles/{article_no}/comments/{comment_no}`,
      {
        shop_no: input['shop_no'],
        board_no: input['board_no'],
        article_no: input['article_no'],
        comment_no: input['comment_no'],
      },
      options,
    );
  };

};
