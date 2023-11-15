import register from '../../products-tags/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveACountOfAProductSProductTags =
    cls.prototype.retrieveACountOfAProductSProductTags;
  cls.prototype.retrieveACountOfAProductSProductTags = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfAProductSProductTags.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAListOfAProductSProductTags =
    cls.prototype.retrieveAListOfAProductSProductTags;
  cls.prototype.retrieveAListOfAProductSProductTags = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfAProductSProductTags.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createProductTags = cls.prototype.createProductTags;
  cls.prototype.createProductTags = async function (input, options) {
    const response = await createProductTags.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAProductTag = cls.prototype.deleteAProductTag;
  cls.prototype.deleteAProductTag = async function (input, options) {
    const response = await deleteAProductTag.call(
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
