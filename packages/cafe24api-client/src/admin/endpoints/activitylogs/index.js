
export default (cls) => {
  cls.prototype.retrieveAListOfActionLogs = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/activitylogs`,
      {
        manager_type: input['manager_type'],
        manager_id: input['manager_id'],
        mode: input['mode'],
        type: input['type'],
        content: input['content'],
        start_date: input['start_date'],
        end_date: input['end_date'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveAnActionLog = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/activitylogs/${input['process_no']}`,
      {
        process_no: input['process_no'],
      },
      options,
    );
  };

};
