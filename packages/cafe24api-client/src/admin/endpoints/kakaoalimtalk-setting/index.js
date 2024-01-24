
export default (cls) => {
  cls.prototype.retrieveTheKakaoInfoTalkSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/kakaoalimtalk/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updateTheKakaoInfoTalkSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/kakaoalimtalk/setting`,
      {
        shop_no: input['shop_no'],
        use_kakaoalimtalk: input['use_kakaoalimtalk'],
      },
      options,
    );
  };

};
