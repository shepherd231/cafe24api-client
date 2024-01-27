import register from '../../financials-dailysales/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfDailySales = cls.prototype.retrieveAListOfDailySales;
    cls.prototype.retrieveAListOfDailySales = async function (input, options) {
      const response = await retrieveAListOfDailySales.call(
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
