import register from '../../products-seo/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAProductSSeoSettings =
    cls.prototype.retrieveAProductSSeoSettings;
  cls.prototype.retrieveAProductSSeoSettings = async function (input, options) {
    const response = await retrieveAProductSSeoSettings.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateProductSeoSettings = cls.prototype.updateProductSeoSettings;
  cls.prototype.updateProductSeoSettings = async function (input, options) {
    const response = await updateProductSeoSettings.call(
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
