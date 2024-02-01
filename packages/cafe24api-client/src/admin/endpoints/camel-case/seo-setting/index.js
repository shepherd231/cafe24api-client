import register from '../../seo-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveSeoSettings = cls.prototype.retrieveSeoSettings;
  cls.prototype.retrieveSeoSettings = async function (input, options) {
    const response = await retrieveSeoSettings.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateStoreSeoSettings = cls.prototype.updateStoreSeoSettings;
  cls.prototype.updateStoreSeoSettings = async function (input, options) {
    const response = await updateStoreSeoSettings.call(
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
