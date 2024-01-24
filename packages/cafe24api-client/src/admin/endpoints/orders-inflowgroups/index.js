export default (cls) => {
  cls.prototype.retrieveAListOfTrafficSourceGroups = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/inflowgroups`,
      {},
      options,
    );
  };

  cls.prototype.createATrafficSourceGroup = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/inflowgroups`,
      {
        inflow_group_id: input['inflow_group_id'],
        inflow_group_name: input['inflow_group_name'],
      },
      options,
    );
  };

  cls.prototype.updateATrafficSourceGroup = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/inflowgroups/${input['inflow_group_id']}`,
      {
        inflow_group_id: input['inflow_group_id'],
        inflow_group_name: input['inflow_group_name'],
      },
      options,
    );
  };

  cls.prototype.deleteATrafficSourceGroup = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/orders/inflowgroups/${input['inflow_group_id']}`,
      {
        inflow_group_id: input['inflow_group_id'],
      },
      options,
    );
  };
};
