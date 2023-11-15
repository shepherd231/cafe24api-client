export default (cls) => {
  cls.prototype.retrieveAListOfScriptTags = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/scripttags`,
      {
        shop_no: input['shop_no'],
        script_no: input['script_no'],
        src: input['src'],
        display_location: input['display_location'],
        exclude_path: input['exclude_path'],
        skin_no: input['skin_no'],
        integrity: input['integrity'],
        created_start_date: input['created_start_date'],
        created_end_date: input['created_end_date'],
        updated_start_date: input['updated_start_date'],
        updated_end_date: input['updated_end_date'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfScriptTags = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/scripttags/count`,
      {
        shop_no: input['shop_no'],
        script_no: input['script_no'],
        src: input['src'],
        display_location: input['display_location'],
        skin_no: input['skin_no'],
        created_start_date: input['created_start_date'],
        created_end_date: input['created_end_date'],
        updated_start_date: input['updated_start_date'],
        updated_end_date: input['updated_end_date'],
      },
      options,
    );
  };

  cls.prototype.retrieveAScriptTag = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/scripttags/${input['script_no']}`,
      {
        shop_no: input['shop_no'],
        script_no: input['script_no'],
      },
      options,
    );
  };

  cls.prototype.createAScriptTag = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/scripttags`,
      {
        shop_no: input['shop_no'],
        src: input['src'],
        display_location: input['display_location'],
        exclude_path: input['exclude_path'],
        skin_no: input['skin_no'],
        integrity: input['integrity'],
      },
      options,
    );
  };

  cls.prototype.updateAScriptTag = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/scripttags/${input['script_no']}`,
      {
        shop_no: input['shop_no'],
        script_no: input['script_no'],
        src: input['src'],
        display_location: input['display_location'],
        exclude_path: input['exclude_path'],
        skin_no: input['skin_no'],
        integrity: input['integrity'],
      },
      options,
    );
  };

  cls.prototype.deleteAScriptTag = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/scripttags/${input['script_no']}`,
      {
        script_no: input['script_no'],
      },
      options,
    );
  };
};
