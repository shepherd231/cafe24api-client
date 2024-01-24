
export default (cls) => {
  cls.prototype.retrieveAListOfProductOptions = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/products/${input['product_no']}/options`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
      },
      options,
    );
  };

  cls.prototype.createProductOptions = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/products/${input['product_no']}/options`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        has_option: input['has_option'],
        option_type: input['option_type'],
        option_list_type: input['option_list_type'],
        options: input['options'],
        select_one_by_option: input['select_one_by_option'],
        option_preset_code: input['option_preset_code'],
        option_preset_name: input['option_preset_name'],
        use_additional_option: input['use_additional_option'],
        additional_options: input['additional_options'],
        use_attached_file_option: input['use_attached_file_option'],
        attached_file_option: input['attached_file_option'],
      },
      options,
    );
  };

  cls.prototype.updateProductOptions = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/products/${input['product_no']}/options`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        option_list_type: input['option_list_type'],
        option_preset_code: input['option_preset_code'],
        options: input['options'],
        original_options: input['original_options'],
        select_one_by_option: input['select_one_by_option'],
        option_preset_name: input['option_preset_name'],
        use_additional_option: input['use_additional_option'],
        additional_options: input['additional_options'],
        use_attached_file_option: input['use_attached_file_option'],
        attached_file_option: input['attached_file_option'],
      },
      options,
    );
  };

  cls.prototype.deleteAProductOption = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/products/${input['product_no']}/options`,
      {
        product_no: input['product_no'],
      },
      options,
    );
  };

};
