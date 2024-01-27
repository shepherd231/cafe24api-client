
export default (cls) => {
  cls.prototype.retrieveAListOfProductCategories = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/categories`,
      {
        shop_no: input['shop_no'],
        category_depth: input['category_depth'],
        category_no: input['category_no'],
        parent_category_no: input['parent_category_no'],
        category_name: input['category_name'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfProductCategories = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/categories/count`,
      {
        shop_no: input['shop_no'],
        category_depth: input['category_depth'],
        category_no: input['category_no'],
        parent_category_no: input['parent_category_no'],
        category_name: input['category_name'],
      },
      options,
    );
  };

  cls.prototype.retrieveAProductCategory = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/categories/${input['category_no']}`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
      },
      options,
    );
  };

  cls.prototype.createAProductCategory = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/categories`,
      {
        shop_no: input['shop_no'],
        parent_category_no: input['parent_category_no'],
        category_name: input['category_name'],
        display_type: input['display_type'],
        use_main: input['use_main'],
        use_display: input['use_display'],
        soldout_product_display: input['soldout_product_display'],
        sub_category_product_display: input['sub_category_product_display'],
        hashtag_product_display: input['hashtag_product_display'],
        hash_tags: input['hash_tags'],
        product_display_scope: input['product_display_scope'],
        product_display_type: input['product_display_type'],
        product_display_key: input['product_display_key'],
        product_display_sort: input['product_display_sort'],
        product_display_period: input['product_display_period'],
        normal_product_display_type: input['normal_product_display_type'],
        normal_product_display_key: input['normal_product_display_key'],
        normal_product_display_sort: input['normal_product_display_sort'],
        normal_product_display_period: input['normal_product_display_period'],
        recommend_product_display_type: input['recommend_product_display_type'],
        recommend_product_display_key: input['recommend_product_display_key'],
        recommend_product_display_sort: input['recommend_product_display_sort'],
        recommend_product_display_period: input['recommend_product_display_period'],
        new_product_display_type: input['new_product_display_type'],
        new_product_display_key: input['new_product_display_key'],
        new_product_display_sort: input['new_product_display_sort'],
        new_product_display_period: input['new_product_display_period'],
      },
      options,
    );
  };

  cls.prototype.updateAProductCategory = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/categories/${input['category_no']}`,
      {
        shop_no: input['shop_no'],
        category_no: input['category_no'],
        category_name: input['category_name'],
        display_type: input['display_type'],
        use_main: input['use_main'],
        use_display: input['use_display'],
        soldout_product_display: input['soldout_product_display'],
        sub_category_product_display: input['sub_category_product_display'],
        hashtag_product_display: input['hashtag_product_display'],
        hash_tags: input['hash_tags'],
        product_display_scope: input['product_display_scope'],
        product_display_type: input['product_display_type'],
        product_display_key: input['product_display_key'],
        product_display_sort: input['product_display_sort'],
        product_display_period: input['product_display_period'],
        normal_product_display_type: input['normal_product_display_type'],
        normal_product_display_key: input['normal_product_display_key'],
        normal_product_display_sort: input['normal_product_display_sort'],
        normal_product_display_period: input['normal_product_display_period'],
        recommend_product_display_type: input['recommend_product_display_type'],
        recommend_product_display_key: input['recommend_product_display_key'],
        recommend_product_display_sort: input['recommend_product_display_sort'],
        recommend_product_display_period: input['recommend_product_display_period'],
        new_product_display_type: input['new_product_display_type'],
        new_product_display_key: input['new_product_display_key'],
        new_product_display_sort: input['new_product_display_sort'],
        new_product_display_period: input['new_product_display_period'],
      },
      options,
    );
  };

  cls.prototype.deleteAProductCategory = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/categories/${input['category_no']}`,
      {
        category_no: input['category_no'],
      },
      options,
    );
  };

};
