import register from '../../payments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const updatePaymentStatusForMultipleOrders = cls.prototype.updatePaymentStatusForMultipleOrders;
    cls.prototype.updatePaymentStatusForMultipleOrders = async function (input, options) {
      const response = await updatePaymentStatusForMultipleOrders.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
};
