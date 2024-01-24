import register from '../../financials-monthlysales/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfMonthlySales = cls.prototype.retrieveAListOfMonthlySales;
    cls.prototype.retrieveAListOfMonthlySales = async function (input, options) {
      const response = await retrieveAListOfMonthlySales.call(
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
