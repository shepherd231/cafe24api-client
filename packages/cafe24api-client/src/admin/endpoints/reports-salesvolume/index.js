export default (cls) => {
  cls.prototype.retrieveASalesReport = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/reports/salesvolume`,
      {
        shop_no: input['shop_no'],
        product_no: input['product_no'],
        variants_code: input['variants_code'],
        category_no: input['category_no'],
        mobile: input['mobile'],
        delivery_type: input['delivery_type'],
        group_no: input['group_no'],
        supplier_id: input['supplier_id'],
        start_date: input['start_date'],
        end_date: input['end_date'],
      },
      options,
    );
  };
};
