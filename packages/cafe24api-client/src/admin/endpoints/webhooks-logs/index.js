
export default (cls) => {
  cls.prototype.retrieveAListOfWebhookLogs = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/webhooks/logs`,
      {
        requested_start_date: input['requested_start_date'],
        requested_end_date: input['requested_end_date'],
        success: input['success'],
        log_type: input['log_type'],
        since_log_id: input['since_log_id'],
        limit: input['limit'],
      },
      options,
    );
  };

};
