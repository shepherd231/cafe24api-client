export default (cls) => {
  cls.prototype.retrieveTheListOfAvailableVariablesForAutomatedMessages =
    async function (input, options) {
      return this.createRequest(
        'GET',
        `/api/v2/admin/automessages/arguments`,
        {
          shop_no: input['shop_no'],
        },
        options,
      );
    };
};
