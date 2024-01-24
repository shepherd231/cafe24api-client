export default (cls) => {
  cls.prototype.retrieveAnAutomaticPointsExpiration = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/points/autoexpiration`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.createAnAutomaticPointsExpiration = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/points/autoexpiration`,
      {
        shop_no: input['shop_no'],
        expiration_date: input['expiration_date'],
        interval_month: input['interval_month'],
        target_period_month: input['target_period_month'],
        group_no: input['group_no'],
        standard_point: input['standard_point'],
        send_email: input['send_email'],
        send_sms: input['send_sms'],
        notification_time_day: input['notification_time_day'],
      },
      options,
    );
  };

  cls.prototype.deleteAnAutomaticPointsExpiration = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/points/autoexpiration`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };
};
