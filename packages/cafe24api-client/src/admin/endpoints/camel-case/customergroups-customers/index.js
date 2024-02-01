import register from '../../customergroups-customers/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const updateACustomerSCustomerTier =
    cls.prototype.updateACustomerSCustomerTier;
  cls.prototype.updateACustomerSCustomerTier = async function (input, options) {
    const response = await updateACustomerSCustomerTier.call(
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
