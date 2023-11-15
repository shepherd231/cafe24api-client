export default (cls) => {
  cls.prototype.retrieveTheAutomatedMessageSettings = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/automessages/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateAnAutomatedMessage = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/automessages/setting`,
      {
        shop_no: input['shop_no'],
        send_method: input['send_method'],
        send_method_push: input['send_method_push'],
      },
      options,
    );
  };
};
