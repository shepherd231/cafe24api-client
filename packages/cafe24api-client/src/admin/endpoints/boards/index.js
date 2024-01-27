
export default (cls) => {
  cls.prototype.retrieveAListOfBoards = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/boards`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

};
