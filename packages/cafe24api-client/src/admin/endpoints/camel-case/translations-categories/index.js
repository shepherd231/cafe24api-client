import register from '../../translations-categories/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfProductCategoryTranslations =
    cls.prototype.retrieveAListOfProductCategoryTranslations;
  cls.prototype.retrieveAListOfProductCategoryTranslations = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfProductCategoryTranslations.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateProductCategoryTranslation =
    cls.prototype.updateProductCategoryTranslation;
  cls.prototype.updateProductCategoryTranslation = async function (
    input,
    options,
  ) {
    const response = await updateProductCategoryTranslation.call(
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
