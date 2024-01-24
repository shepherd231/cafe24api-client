export default (cls) => {
  cls.prototype.retrieveDistributionGroupList = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/recipientgroups`,
      {
        shop_no: input['shop_no'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.retrieveDistributionGroupDetails = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/recipientgroups/${input['group_no']}`,
      {
        shop_no: input['shop_no'],
        group_no: input['group_no'],
      },
      options,
    );
  };

  cls.prototype.createADistributionGroup = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/recipientgroups`,
      {
        shop_no: input['shop_no'],
        group_name: input['group_name'],
        group_description: input['group_description'],
        news_mail: input['news_mail'],
        sms: input['sms'],
        member_group_no: input['member_group_no'],
        member_class: input['member_class'],
        member_type: input['member_type'],
        join_path: input['join_path'],
        inflow_path: input['inflow_path'],
        inflow_path_detail: input['inflow_path_detail'],
        date_type: input['date_type'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        solar_calendar: input['solar_calendar'],
        age_min: input['age_min'],
        age_max: input['age_max'],
        gender: input['gender'],
        available_points_min: input['available_points_min'],
        available_points_max: input['available_points_max'],
        use_mobile_app: input['use_mobile_app'],
        plusapp_member_join: input['plusapp_member_join'],
      },
      options,
    );
  };

  cls.prototype.editDistributionGroup = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/recipientgroups/${input['group_no']}`,
      {
        shop_no: input['shop_no'],
        group_no: input['group_no'],
        group_name: input['group_name'],
        group_description: input['group_description'],
        news_mail: input['news_mail'],
        sms: input['sms'],
        member_group_no: input['member_group_no'],
        member_class: input['member_class'],
        member_type: input['member_type'],
        join_path: input['join_path'],
        inflow_path: input['inflow_path'],
        inflow_path_detail: input['inflow_path_detail'],
        date_type: input['date_type'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        solar_calendar: input['solar_calendar'],
        age_min: input['age_min'],
        age_max: input['age_max'],
        gender: input['gender'],
        available_points_min: input['available_points_min'],
        available_points_max: input['available_points_max'],
        use_mobile_app: input['use_mobile_app'],
        plusapp_member_join: input['plusapp_member_join'],
      },
      options,
    );
  };

  cls.prototype.deleteDistributionGroup = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/recipientgroups/${input['group_no']}`,
      {
        shop_no: input['shop_no'],
        group_no: input['group_no'],
      },
      options,
    );
  };
};
