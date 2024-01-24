export default (cls) => {
  cls.prototype.retrieveWebhookSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/webhooks/setting`,
      {},
      options,
    );
  };
};
