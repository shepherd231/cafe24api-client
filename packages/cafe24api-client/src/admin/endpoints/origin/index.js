
export default (cls) => {
  cls.prototype.retrieveAListOfOrigins = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/origin`,
      {
        origin_place_no: input['origin_place_no'],
        origin_place_name: input['origin_place_name'],
        foreign: input['foreign'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

};
