import register from '../../autodisplay/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfAutoLayouts = cls.prototype.retrieveAListOfAutoLayouts;
  cls.prototype.retrieveAListOfAutoLayouts = async function (input, options) {
    const response = await retrieveAListOfAutoLayouts.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAutoLayoutForSelectedProductCategory =
    cls.prototype.createAutoLayoutForSelectedProductCategory;
  cls.prototype.createAutoLayoutForSelectedProductCategory = async function (
    input,
    options,
  ) {
    const response = await createAutoLayoutForSelectedProductCategory.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAutoLayoutForSelectedProductCategory =
    cls.prototype.updateAutoLayoutForSelectedProductCategory;
  cls.prototype.updateAutoLayoutForSelectedProductCategory = async function (
    input,
    options,
  ) {
    const response = await updateAutoLayoutForSelectedProductCategory.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAutoLayoutForSelectedProductCategory =
    cls.prototype.deleteAutoLayoutForSelectedProductCategory;
  cls.prototype.deleteAutoLayoutForSelectedProductCategory = async function (
    input,
    options,
  ) {
    const response = await deleteAutoLayoutForSelectedProductCategory.call(
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
