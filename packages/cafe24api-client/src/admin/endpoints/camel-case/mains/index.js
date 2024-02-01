import register from '../../mains/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfMainCategories =
    cls.prototype.retrieveAListOfMainCategories;
  cls.prototype.retrieveAListOfMainCategories = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfMainCategories.call(
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
