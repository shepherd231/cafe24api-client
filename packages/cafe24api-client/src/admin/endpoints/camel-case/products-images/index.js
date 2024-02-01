import register from '../../products-images/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const uploadImages = cls.prototype.uploadImages;
  cls.prototype.uploadImages = async function (input, options) {
    const response = await uploadImages.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const uploadProductImages = cls.prototype.uploadProductImages;
  cls.prototype.uploadProductImages = async function (input, options) {
    const response = await uploadProductImages.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteProductImages = cls.prototype.deleteProductImages;
  cls.prototype.deleteProductImages = async function (input, options) {
    const response = await deleteProductImages.call(
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
