import register from '../../financials-monthlysales/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfMonthlySales = cls.prototype.retrieveAListOfMonthlySales;
  cls.prototype.retrieveAListOfMonthlySales = async function (input, options) {
    const response = await retrieveAListOfMonthlySales.call(
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
