import register from '../../origin/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfOrigins = cls.prototype.retrieveAListOfOrigins;
  cls.prototype.retrieveAListOfOrigins = async function (input, options) {
    const response = await retrieveAListOfOrigins.call(
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
