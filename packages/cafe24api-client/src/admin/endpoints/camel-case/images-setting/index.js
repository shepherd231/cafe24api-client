import register from '../../images-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveProductImageSizeSettings =
    cls.prototype.retrieveProductImageSizeSettings;
  cls.prototype.retrieveProductImageSizeSettings = async function (
    input,
    options,
  ) {
    const response = await retrieveProductImageSizeSettings.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateProductImageSizeSettings =
    cls.prototype.updateProductImageSizeSettings;
  cls.prototype.updateProductImageSizeSettings = async function (
    input,
    options,
  ) {
    const response = await updateProductImageSizeSettings.call(
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
