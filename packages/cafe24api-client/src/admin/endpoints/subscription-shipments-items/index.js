export default (cls) => {
  cls.prototype.updateProductVariantsInSubscription = async function (
    input,
    options,
  ) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/subscription/shipments/${input['subscription_id']}/items`,
      {
        subscription_id: input['subscription_id'],
        variant_code: input['variant_code'],
        option_id: input['option_id'],
        subscription_state: input['subscription_state'],
        quantity: input['quantity'],
        expected_delivery_date: input['expected_delivery_date'],
        subscription_shipments_cycle: input['subscription_shipments_cycle'],
      },
      options,
    );
  };
};
