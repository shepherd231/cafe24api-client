export default (cls) => {
  cls.prototype.retrieveAListOfAutoLayouts = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/autodisplay`,
      {
        shop_no: input['shop_no'],
        display_no: input['display_no'],
      },
      options,
    );
  };

  cls.prototype.createAutoLayoutForSelectedProductCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/autodisplay`,
      {
        shop_no: input['shop_no'],
        use_main: input['use_main'],
        category_no: input['category_no'],
        display_group: input['display_group'],
        display_count: input['display_count'],
        use_reservation: input['use_reservation'],
        start_date: input['start_date'],
        use_hashtag: input['use_hashtag'],
        hash_tags: input['hash_tags'],
        display_sort: input['display_sort'],
        timetable: input['timetable'],
        period: input['period'],
        except_categories_scope: input['except_categories_scope'],
        except_categories: input['except_categories'],
      },
      options,
    );
  };

  cls.prototype.updateAutoLayoutForSelectedProductCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/autodisplay/${input['display_no']}`,
      {
        shop_no: input['shop_no'],
        display_no: input['display_no'],
        display_count: input['display_count'],
        use_reservation: input['use_reservation'],
        start_date: input['start_date'],
        use_hashtag: input['use_hashtag'],
        hash_tags: input['hash_tags'],
        display_sort: input['display_sort'],
        timetable: input['timetable'],
        period: input['period'],
        except_categories_scope: input['except_categories_scope'],
        except_categories: input['except_categories'],
      },
      options,
    );
  };

  cls.prototype.deleteAutoLayoutForSelectedProductCategory = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/autodisplay/${input['display_no']}`,
      {
        shop_no: input['shop_no'],
        display_no: input['display_no'],
      },
      options,
    );
  };
};
