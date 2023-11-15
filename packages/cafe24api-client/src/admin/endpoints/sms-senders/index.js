export default (cls) => {
  cls.prototype.retrieveAListOfSmsSenders = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/sms/senders`,
      {
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };
};
