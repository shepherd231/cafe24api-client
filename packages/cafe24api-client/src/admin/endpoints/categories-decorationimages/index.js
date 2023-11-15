export default (cls) => {
  cls.prototype.retrieveDecorationImageSettingsByCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/categories/${input['category_no']}/decorationimages`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
      },
      options,
    );
  };

  cls.prototype.updateDecorationImagesOfAProductCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/categories/${input['category_no']}/decorationimages`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        use_menu_image_pc: input['use_menu_image_pc'],
        menu_image_pc: input['menu_image_pc'],
        menu_over_image_pc: input['menu_over_image_pc'],
        use_top_image_pc: input['use_top_image_pc'],
        top_images_pc: input['top_images_pc'],
        use_title_image_pc: input['use_title_image_pc'],
        title_image_pc: input['title_image_pc'],
        use_menu_image_mobile: input['use_menu_image_mobile'],
        menu_image_mobile: input['menu_image_mobile'],
        use_top_image_mobile: input['use_top_image_mobile'],
        top_images_mobile: input['top_images_mobile'],
        use_title_image_mobile: input['use_title_image_mobile'],
        title_image_mobile: input['title_image_mobile'],
      },
      options,
    );
  };
};
