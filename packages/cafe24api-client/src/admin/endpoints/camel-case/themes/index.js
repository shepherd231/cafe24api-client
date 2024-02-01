import register from '../../themes/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfThemes = cls.prototype.retrieveAListOfThemes;
  cls.prototype.retrieveAListOfThemes = async function (input, options) {
    const response = await retrieveAListOfThemes.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfThemes = cls.prototype.retrieveACountOfThemes;
  cls.prototype.retrieveACountOfThemes = async function (input, options) {
    const response = await retrieveACountOfThemes.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveATheme = cls.prototype.retrieveATheme;
  cls.prototype.retrieveATheme = async function (input, options) {
    const response = await retrieveATheme.call(
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
