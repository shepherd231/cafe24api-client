
export default (cls) => {
  cls.prototype.retrieveAListOfCustomCategories = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/classifications`,
      {
        shop_no: input['shop_no'],
        classification_code: input['classification_code'],
        classification_name: input['classification_name'],
        use_classification: input['use_classification'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfCustomCategories = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/classifications/count`,
      {
        shop_no: input['shop_no'],
        classification_code: input['classification_code'],
        classification_name: input['classification_name'],
        use_classification: input['use_classification'],
      },
      options,
    );
  };

};
