import register from '../../orders-refunds/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const updateAnOrderRefund = cls.prototype.updateAnOrderRefund;
  cls.prototype.updateAnOrderRefund = async function (input, options) {
    const response = await updateAnOrderRefund.call(
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
