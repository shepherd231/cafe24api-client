import register from '../../financials-dailysales/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfDailySales = cls.prototype.retrieveAListOfDailySales;
  cls.prototype.retrieveAListOfDailySales = async function (input, options) {
    const response = await retrieveAListOfDailySales.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
