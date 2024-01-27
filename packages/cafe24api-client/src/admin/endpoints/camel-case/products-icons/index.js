import register from '../../products-icons/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfIcons = cls.prototype.retrieveAListOfIcons;
  cls.prototype.retrieveAListOfIcons = async function (input, options) {
    const response = await retrieveAListOfIcons.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAListOfProductIcons = cls.prototype.retrieveAListOfProductIcons;
  cls.prototype.retrieveAListOfProductIcons = async function (input, options) {
    const response = await retrieveAListOfProductIcons.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const setIconsForAProduct = cls.prototype.setIconsForAProduct;
  cls.prototype.setIconsForAProduct = async function (input, options) {
    const response = await setIconsForAProduct.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateProductIcons = cls.prototype.updateProductIcons;
  cls.prototype.updateProductIcons = async function (input, options) {
    const response = await updateProductIcons.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const removeAProductIcon = cls.prototype.removeAProductIcon;
  cls.prototype.removeAProductIcon = async function (input, options) {
    const response = await removeAProductIcon.call(
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
