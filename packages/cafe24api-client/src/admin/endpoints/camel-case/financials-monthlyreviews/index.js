import register from '../../financials-monthlyreviews/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveTheTotalCountForMonthlyReviewsAndRatings = cls.prototype.retrieveTheTotalCountForMonthlyReviewsAndRatings;
    cls.prototype.retrieveTheTotalCountForMonthlyReviewsAndRatings = async function (input, options) {
      const response = await retrieveTheTotalCountForMonthlyReviewsAndRatings.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
};
