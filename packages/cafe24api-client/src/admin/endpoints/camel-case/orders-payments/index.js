import register from '../../orders-payments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const updateAnOrderPaymentStatus = cls.prototype.updateAnOrderPaymentStatus;
    cls.prototype.updateAnOrderPaymentStatus = async function (input, options) {
      const response = await updateAnOrderPaymentStatus.call(
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
