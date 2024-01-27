export default (cls) => {
  cls.prototype.retrieveAListOfSupplierUsers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/suppliers/users`,
      {
        shop_no: input['shop_no'],
        user_id: input['user_id'],
        supplier_code: input['supplier_code'],
        supplier_name: input['supplier_name'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfSupplierUsers = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/suppliers/users/count`,
      {
        shop_no: input['shop_no'],
        user_id: input['user_id'],
        supplier_code: input['supplier_code'],
        supplier_name: input['supplier_name'],
      },
      options,
    );
  };

  cls.prototype.retrieveSupplierUserDetails = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/suppliers/users/${input['user_id']}`,
      {
        shop_no: input['shop_no'],
        user_id: input['user_id'],
      },
      options,
    );
  };

  cls.prototype.createASupplierUser = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/suppliers/users`,
      {
        user_id: input['user_id'],
        supplier_code: input['supplier_code'],
        user_name: input['user_name'],
        nick_name: input['nick_name'],
        password: input['password'],
        use_nick_name_icon: input['use_nick_name_icon'],
        use_writer_name_icon: input['use_writer_name_icon'],
        email: input['email'],
        phone: input['phone'],
        permission_shop_no: input['permission_shop_no'],
        permission_category_select: input['permission_category_select'],
        permitted_category_list: input['permitted_category_list'],
        permission_product_modify: input['permission_product_modify'],
        permission_product_display: input['permission_product_display'],
        permission_product_selling: input['permission_product_selling'],
        permission_product_delete: input['permission_product_delete'],
        permission_order_menu: input['permission_order_menu'],
        permission_amount_inquiry: input['permission_amount_inquiry'],
      },
      options,
    );
  };

  cls.prototype.updateASupplierUser = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/suppliers/users/${input['user_id']}`,
      {
        user_id: input['user_id'],
        user_name: input['user_name'],
        nick_name: input['nick_name'],
        password: input['password'],
        use_nick_name_icon: input['use_nick_name_icon'],
        use_writer_name_icon: input['use_writer_name_icon'],
        email: input['email'],
        phone: input['phone'],
        permission_shop_no: input['permission_shop_no'],
        permission_category_select: input['permission_category_select'],
        permitted_category_list: input['permitted_category_list'],
        permission_product_modify: input['permission_product_modify'],
        permission_product_display: input['permission_product_display'],
        permission_product_selling: input['permission_product_selling'],
        permission_product_delete: input['permission_product_delete'],
        permission_order_menu: input['permission_order_menu'],
        permission_amount_inquiry: input['permission_amount_inquiry'],
      },
      options,
    );
  };

  cls.prototype.deleteASupplierUser = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/suppliers/users/${input['user_id']}`,
      {
        user_id: input['user_id'],
      },
      options,
    );
  };
};
