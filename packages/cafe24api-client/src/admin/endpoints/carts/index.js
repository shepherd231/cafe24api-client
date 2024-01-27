
export default (cls) => {
  cls.prototype.retrieveAShoppingCart = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/carts`,
      {
        shop_no: input['shop_no'],
        member_id: input['member_id'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

};
