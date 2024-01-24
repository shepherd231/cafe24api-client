import register from '../../financials-dailyvisits/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveACountOfDailyvisits = cls.prototype.retrieveACountOfDailyvisits;
    cls.prototype.retrieveACountOfDailyvisits = async function (input, options) {
      const response = await retrieveACountOfDailyvisits.call(
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
