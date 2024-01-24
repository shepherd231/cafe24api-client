
export default (cls) => {
  cls.prototype.sendASMS = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/sms`,
      {
        shop_no: input['shop_no'],
        sender_no: input['sender_no'],
        content: input['content'],
        recipients: input['recipients'],
        member_id: input['member_id'],
        group_no: input['group_no'],
        exclude_unsubscriber: input['exclude_unsubscriber'],
        type: input['type'],
        title: input['title'],
      },
      options,
    );
  };

};
