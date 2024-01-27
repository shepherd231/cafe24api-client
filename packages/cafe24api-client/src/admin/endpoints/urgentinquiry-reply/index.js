
export default (cls) => {
  cls.prototype.retrieveAReplyForUrgentInquiryPost = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/urgentinquiry/${input['article_no']}/reply`,
      {
        shop_no: input['shop_no'],
        article_no: input['article_no'],
      },
      options,
    );
  };

  cls.prototype.createAReplyForUrgentInquiryPost = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/urgentinquiry/${input['article_no']}/reply`,
      {
        shop_no: input['shop_no'],
        article_no: input['article_no'],
        content: input['content'],
        status: input['status'],
        user_id: input['user_id'],
        attach_file_urls: input['attach_file_urls'],
      },
      options,
    );
  };

  cls.prototype.updateAReplyForUrgentInquiryPost = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/urgentinquiry/${input['article_no']}/reply`,
      {
        shop_no: input['shop_no'],
        article_no: input['article_no'],
        content: input['content'],
        status: input['status'],
        user_id: input['user_id'],
        attach_file_urls: input['attach_file_urls'],
      },
      options,
    );
  };

};
