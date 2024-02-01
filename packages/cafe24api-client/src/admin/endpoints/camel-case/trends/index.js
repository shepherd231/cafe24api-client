import register from '../../trends/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfTrends = cls.prototype.retrieveAListOfTrends;
  cls.prototype.retrieveAListOfTrends = async function (input, options) {
    const response = await retrieveAListOfTrends.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfTrends = cls.prototype.retrieveACountOfTrends;
  cls.prototype.retrieveACountOfTrends = async function (input, options) {
    const response = await retrieveACountOfTrends.call(
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
