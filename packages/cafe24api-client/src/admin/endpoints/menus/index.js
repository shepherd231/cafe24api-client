
export default (cls) => {
  cls.prototype.retrieveMenus = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/menus`,
      {
        shop_no: input['shop_no'],
        mode: input['mode'],
        menu_no: input['menu_no'],
        contains_app_url: input['contains_app_url'],
      },
      options,
    );
  };

};
