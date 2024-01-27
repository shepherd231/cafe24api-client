
export default (cls) => {
  cls.prototype.retrieveAListOfSalesChannels = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/orders/saleschannels`,
      {
        limit: input['limit'],
        offset: input['offset'],
      },
      options,
    );
  };

  cls.prototype.createASalesChannel = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/orders/saleschannels`,
      {
        sales_channel_id: input['sales_channel_id'],
        sales_channel_name: input['sales_channel_name'],
        sales_channel_icon: input['sales_channel_icon'],
      },
      options,
    );
  };

  cls.prototype.updateASalesChannel = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/orders/saleschannels/${input['sales_channel_id']}`,
      {
        sales_channel_id: input['sales_channel_id'],
        sales_channel_name: input['sales_channel_name'],
        sales_channel_icon: input['sales_channel_icon'],
      },
      options,
    );
  };

  cls.prototype.deleteASalesChannel = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/orders/saleschannels/${input['sales_channel_id']}`,
      {
        sales_channel_id: input['sales_channel_id'],
      },
      options,
    );
  };

};
