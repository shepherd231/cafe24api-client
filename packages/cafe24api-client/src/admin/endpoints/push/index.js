export default (cls) => {
  cls.prototype.retrievePushNotificationDeliveryHistory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/push`,
      {
        shop_no: input['shop_no'],
        search_status: input['search_status'],
        search_date: input['search_date'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        push_code: input['push_code'],
        content: input['content'],
        send_type: input['send_type'],
        receiver_type: input['receiver_type'],
        silent: input['silent'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.createAPushNotification = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/push`,
      {
        shop_no: input['shop_no'],
        send_type: input['send_type'],
        reserve_day: input['reserve_day'],
        reserve_hour: input['reserve_hour'],
        reserve_minuate: input['reserve_minuate'],
        os_type: input['os_type'],
        receiver_type: input['receiver_type'],
        group_no: input['group_no'],
        member_id: input['member_id'],
        title: input['title'],
        content_android: input['content_android'],
        content_ios: input['content_ios'],
        image_url: input['image_url'],
        use_link: input['use_link'],
        link_type: input['link_type'],
        external_link: input['external_link'],
        use_benefit: input['use_benefit'],
        benefit_end_day: input['benefit_end_day'],
        benefit_points: input['benefit_points'],
        silent: input['silent'],
      },
      options,
    );
  };

  cls.prototype.updateAPushNotification = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/push/${input['push_code']}`,
      {
        shop_no: input['shop_no'],
        push_code: input['push_code'],
        title: input['title'],
        content_android: input['content_android'],
        content_ios: input['content_ios'],
        image_url: input['image_url'],
      },
      options,
    );
  };

  cls.prototype.deleteAPushNotification = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/push/${input['push_code']}`,
      {
        shop_no: input['shop_no'],
        push_code: input['push_code'],
      },
      options,
    );
  };
};
