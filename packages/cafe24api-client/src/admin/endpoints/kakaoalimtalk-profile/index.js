
export default (cls) => {
  cls.prototype.retrieveAKakaoChannelSenderProfileKey = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/kakaoalimtalk/profile`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

};
