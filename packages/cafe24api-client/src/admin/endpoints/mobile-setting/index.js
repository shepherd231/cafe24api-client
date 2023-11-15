export default (cls) => {
  cls.prototype.retrieveMobileSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/mobile/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };
};
