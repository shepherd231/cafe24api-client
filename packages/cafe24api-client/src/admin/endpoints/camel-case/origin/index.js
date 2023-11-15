import register from '../../origin/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfOrigins = cls.prototype.retrieveAListOfOrigins;
  cls.prototype.retrieveAListOfOrigins = async function (input, options) {
    const response = await retrieveAListOfOrigins.call(
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
