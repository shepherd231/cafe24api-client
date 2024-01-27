export default (cls) => {
  cls.prototype.retrieveTheTotalCountForMonthlyReviewsAndRatings =
    async function (input, options) {
      return this.createRequest(
        'GET',
        `/api/v2/admin/financials/monthlyreviews`,
        {
          shop_no: input['shop_no'],
          start_month: input['start_month'],
          end_month: input['end_month'],
        },
        options,
      );
    };
};
