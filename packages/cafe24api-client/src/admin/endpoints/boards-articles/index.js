export default (cls) => {
  cls.prototype.retrieveAListOfPostsForABoard = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/boards/${input['board_no']}/articles`,
      {
        shop_no: input['shop_no'],
        board_no: input['board_no'],
        board_category_no: input['board_category_no'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        input_channel: input['input_channel'],
        search: input['search'],
        keyword: input['keyword'],
        reply_status: input['reply_status'],
        comment: input['comment'],
        attached_file: input['attached_file'],
        article_type: input['article_type'],
        product_no: input['product_no'],
        has_product: input['has_product'],
        is_notice: input['is_notice'],
        is_display: input['is_display'],
        supplier_id: input['supplier_id'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.createABoardPost = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/boards/${input['board_no']}/articles`,
      {
        shop_no: input['shop_no'],
        board_no: input['board_no'],
        writer: input['writer'],
        title: input['title'],
        content: input['content'],
        client_ip: input['client_ip'],
        reply_article_no: input['reply_article_no'],
        created_date: input['created_date'],
        writer_email: input['writer_email'],
        member_id: input['member_id'],
        notice: input['notice'],
        fixed: input['fixed'],
        deleted: input['deleted'],
        reply: input['reply'],
        rating: input['rating'],
        sales_channel: input['sales_channel'],
        secret: input['secret'],
        password: input['password'],
        reply_mail: input['reply_mail'],
        board_category_no: input['board_category_no'],
        nick_name: input['nick_name'],
        input_channel: input['input_channel'],
        reply_user_id: input['reply_user_id'],
        reply_status: input['reply_status'],
        product_no: input['product_no'],
        category_no: input['category_no'],
        order_id: input['order_id'],
        naverpay_review_id: input['naverpay_review_id'],
        attach_file_urls: input['attach_file_urls'],
      },
      options,
    );
  };

  cls.prototype.updateABoardPost = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/boards/${input['board_no']}/articles/{article_no}`,
      {
        shop_no: input['shop_no'],
        board_no: input['board_no'],
        article_no: input['article_no'],
        title: input['title'],
        content: input['content'],
        rating: input['rating'],
        sales_channel: input['sales_channel'],
        board_category_no: input['board_category_no'],
        display: input['display'],
        notice: input['notice'],
        fixed: input['fixed'],
        display_time_start_hour: input['display_time_start_hour'],
        display_time_end_hour: input['display_time_end_hour'],
        attach_file_url1: input['attach_file_url1'],
        attach_file_url2: input['attach_file_url2'],
        attach_file_url3: input['attach_file_url3'],
        attach_file_url4: input['attach_file_url4'],
        attach_file_url5: input['attach_file_url5'],
      },
      options,
    );
  };

  cls.prototype.deleteABoardPost = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/boards/${input['board_no']}/articles/{article_no}`,
      {
        shop_no: input['shop_no'],
        board_no: input['board_no'],
        article_no: input['article_no'],
      },
      options,
    );
  };
};
