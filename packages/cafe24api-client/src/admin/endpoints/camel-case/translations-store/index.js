import register from '../../translations-store/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfStoreTranslations =
    cls.prototype.retrieveAListOfStoreTranslations;
  cls.prototype.retrieveAListOfStoreTranslations = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfStoreTranslations.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateTheTranslationsOfAStore =
    cls.prototype.updateTheTranslationsOfAStore;
  cls.prototype.updateTheTranslationsOfAStore = async function (
    input,
    options,
  ) {
    const response = await updateTheTranslationsOfAStore.call(
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
