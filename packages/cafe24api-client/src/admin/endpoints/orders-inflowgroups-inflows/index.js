export default (cls) => {
  cls.prototype.retrieveAListOfGroupTrafficSources = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/inflowgroups/${input['group_id']}/inflows`,
      {
        group_id: input['group_id'],
      },
      options,
    );
  };

  cls.prototype.createAGroupTrafficSource = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/inflowgroups/${input['group_id']}/inflows`,
      {
        group_id: input['group_id'],
        inflow_id: input['inflow_id'],
        inflow_name: input['inflow_name'],
        inflow_icon: input['inflow_icon'],
      },
      options,
    );
  };

  cls.prototype.updateAGroupTrafficSource = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/inflowgroups/${input['group_id']}/inflows/{inflow_id}`,
      {
        group_id: input['group_id'],
        inflow_id: input['inflow_id'],
        inflow_name: input['inflow_name'],
        inflow_icon: input['inflow_icon'],
      },
      options,
    );
  };

  cls.prototype.deleteAGroupTrafficSource = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/orders/inflowgroups/${input['group_id']}/inflows/{inflow_id}`,
      {
        group_id: input['group_id'],
        inflow_id: input['inflow_id'],
      },
      options,
    );
  };
};
