export default (cls) => {
  cls.prototype.updateACollectionRequest = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/collectrequests/${input['request_no']}`,
      {
        shop_no: input['shop_no'],
        request_no: input['request_no'],
        collect_tracking_no: input['collect_tracking_no'],
      },
      options,
    );
  };
};
