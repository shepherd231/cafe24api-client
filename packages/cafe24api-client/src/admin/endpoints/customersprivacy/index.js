
export default (cls) => {
  cls.prototype.retrieveAListOfCustomerInformation = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customersprivacy`,
      {
        shop_no: input['shop_no'],
        search_type: input['search_type'],
        created_start_date: input['created_start_date'],
        member_id: input['member_id'],
        news_mail: input['news_mail'],
        sms: input['sms'],
        thirdparty_agree: input['thirdparty_agree'],
        group_no: input['group_no'],
        search_field: input['search_field'],
        keyword: input['keyword'],
        date_type: input['date_type'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        member_type: input['member_type'],
        member_class: input['member_class'],
        residence: input['residence'],
        gender: input['gender'],
        member_authority: input['member_authority'],
        join_path: input['join_path'],
        use_mobile_app: input['use_mobile_app'],
        fixed_group: input['fixed_group'],
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfCustomerInformation = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customersprivacy/count`,
      {
        shop_no: input['shop_no'],
        search_type: input['search_type'],
        created_start_date: input['created_start_date'],
        member_id: input['member_id'],
        news_mail: input['news_mail'],
        sms: input['sms'],
        thirdparty_agree: input['thirdparty_agree'],
        group_no: input['group_no'],
        search_field: input['search_field'],
        keyword: input['keyword'],
        date_type: input['date_type'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        member_type: input['member_type'],
        member_class: input['member_class'],
        residence: input['residence'],
        gender: input['gender'],
        member_authority: input['member_authority'],
        join_path: input['join_path'],
        use_mobile_app: input['use_mobile_app'],
        fixed_group: input['fixed_group'],
      },
      options,
    );
  };

  cls.prototype.retrieveACustomerInformation = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/customersprivacy/${input['member_id']}`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
      },
      options,
    );
  };

  cls.prototype.updateACustomerInformation = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/customersprivacy/${input['member_id']}`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        cellphone: input['cellphone'],
        email: input['email'],
        sms: input['sms'],
        news_mail: input['news_mail'],
        thirdparty_agree: input['thirdparty_agree'],
        birthday: input['birthday'],
        solar_calendar: input['solar_calendar'],
        address1: input['address1'],
        address2: input['address2'],
        zipcode: input['zipcode'],
        country_code: input['country_code'],
        additional_information: input['additional_information'],
        city: input['city'],
        state: input['state'],
        refund_bank_code: input['refund_bank_code'],
        refund_bank_account_no: input['refund_bank_account_no'],
        refund_bank_account_holder: input['refund_bank_account_holder'],
        fixed_group: input['fixed_group'],
      },
      options,
    );
  };

};
