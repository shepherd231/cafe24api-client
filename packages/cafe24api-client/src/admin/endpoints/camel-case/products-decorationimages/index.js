import register from '../../products-decorationimages/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfDecorationImages =
    cls.prototype.retrieveAListOfDecorationImages;
  cls.prototype.retrieveAListOfDecorationImages = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfDecorationImages.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAListOfProductDecorationImages =
    cls.prototype.retrieveAListOfProductDecorationImages;
  cls.prototype.retrieveAListOfProductDecorationImages = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfProductDecorationImages.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const setDecorationImagesForAProduct =
    cls.prototype.setDecorationImagesForAProduct;
  cls.prototype.setDecorationImagesForAProduct = async function (
    input,
    options,
  ) {
    const response = await setDecorationImagesForAProduct.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateProductDecorationImages =
    cls.prototype.updateProductDecorationImages;
  cls.prototype.updateProductDecorationImages = async function (
    input,
    options,
  ) {
    const response = await updateProductDecorationImages.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const removeAProductDecorationImage =
    cls.prototype.removeAProductDecorationImage;
  cls.prototype.removeAProductDecorationImage = async function (
    input,
    options,
  ) {
    const response = await removeAProductDecorationImage.call(
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
