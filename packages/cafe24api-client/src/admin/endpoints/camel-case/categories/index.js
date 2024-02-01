import register from '../../categories/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
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
      formatCamelCasedOptions(options),
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
      formatCamelCasedOptions(options),
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
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAProductCategory = cls.prototype.createAProductCategory;
  cls.prototype.createAProductCategory = async function (input, options) {
    const response = await createAProductCategory.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAProductCategory = cls.prototype.updateAProductCategory;
  cls.prototype.updateAProductCategory = async function (input, options) {
    const response = await updateAProductCategory.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAProductCategory = cls.prototype.deleteAProductCategory;
  cls.prototype.deleteAProductCategory = async function (input, options) {
    const response = await deleteAProductCategory.call(
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
