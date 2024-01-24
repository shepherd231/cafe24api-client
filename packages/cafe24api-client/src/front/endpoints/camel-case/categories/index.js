import register from '../../categories/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfProductCategories =
    cls.prototype.retrieveAListOfProductCategories;
  cls.prototype.retrieveAListOfProductCategories = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfProductCategories.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfProductCategories =
    cls.prototype.retrieveACountOfProductCategories;
  cls.prototype.retrieveACountOfProductCategories = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfProductCategories.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAProductCategory = cls.prototype.retrieveAProductCategory;
  cls.prototype.retrieveAProductCategory = async function (input, options) {
    const response = await retrieveAProductCategory.call(
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
