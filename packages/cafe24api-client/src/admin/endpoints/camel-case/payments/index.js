import register from '../../payments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const updatePaymentStatusForMultipleOrders =
    cls.prototype.updatePaymentStatusForMultipleOrders;
  cls.prototype.updatePaymentStatusForMultipleOrders = async function (
    input,
    options,
  ) {
    const response = await updatePaymentStatusForMultipleOrders.call(
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
