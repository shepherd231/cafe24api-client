export default (cls) => {
  cls.prototype.retrievePointsSettings = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/points/setting`,
      {
        shop_no: input['shop_no'],
      },
      options,
    );
  };

  cls.prototype.updatePointsSettings = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/points/setting`,
      {
        shop_no: input['shop_no'],
        point_issuance_standard: input['point_issuance_standard'],
        payment_period: input['payment_period'],
        name: input['name'],
        format: input['format'],
        round_unit: input['round_unit'],
        round_type: input['round_type'],
        display_type: input['display_type'],
        unusable_points_change_type: input['unusable_points_change_type'],
      },
      options,
    );
  };
};
