import register from '../../products-variants/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfProductVariants =
    cls.prototype.retrieveAListOfProductVariants;
  cls.prototype.retrieveAListOfProductVariants = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfProductVariants.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAProductVariant = cls.prototype.retrieveAProductVariant;
  cls.prototype.retrieveAProductVariant = async function (input, options) {
    const response = await retrieveAProductVariant.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAProductVariant = cls.prototype.updateAProductVariant;
  cls.prototype.updateAProductVariant = async function (input, options) {
    const response = await updateAProductVariant.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateMultipleProductVariants =
    cls.prototype.updateMultipleProductVariants;
  cls.prototype.updateMultipleProductVariants = async function (
    input,
    options,
  ) {
    const response = await updateMultipleProductVariants.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAProductVariant = cls.prototype.deleteAProductVariant;
  cls.prototype.deleteAProductVariant = async function (input, options) {
    const response = await deleteAProductVariant.call(
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
