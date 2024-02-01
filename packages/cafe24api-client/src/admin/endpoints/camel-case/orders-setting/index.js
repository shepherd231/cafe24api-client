import register from '../../orders-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveOrderSettings = cls.prototype.retrieveOrderSettings;
  cls.prototype.retrieveOrderSettings = async function (input, options) {
    const response = await retrieveOrderSettings.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateOrderSettings = cls.prototype.updateOrderSettings;
  cls.prototype.updateOrderSettings = async function (input, options) {
    const response = await updateOrderSettings.call(
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
