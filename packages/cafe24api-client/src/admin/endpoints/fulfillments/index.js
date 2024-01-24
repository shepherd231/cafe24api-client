export default (cls) => {
  cls.prototype.createShippingInformationForMultipleOrdersViaFulfillment =
    async function (input, options) {
      return this.createRequest(
        'POST',
        `/api/v2/admin/fulfillments`,
        {
          shop_no: input['shop_no'],
          tracking_no: input['tracking_no'],
          shipping_company_code: input['shipping_company_code'],
          status: input['status'],
          order_id: input['order_id'],
          shipping_code: input['shipping_code'],
          order_item_code: input['order_item_code'],
          carrier_id: input['carrier_id'],
          post_express_flag: input['post_express_flag'],
        },
        options,
      );
    };
};
