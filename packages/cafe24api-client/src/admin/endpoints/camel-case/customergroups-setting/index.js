import register from '../../customergroups-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveCustomerTierSettings =
    cls.prototype.retrieveCustomerTierSettings;
  cls.prototype.retrieveCustomerTierSettings = async function (input, options) {
    const response = await retrieveCustomerTierSettings.call(
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
