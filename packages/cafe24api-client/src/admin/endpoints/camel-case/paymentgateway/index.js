import register from '../../paymentgateway/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const createAPaymentGateway = cls.prototype.createAPaymentGateway;
    cls.prototype.createAPaymentGateway = async function (input, options) {
      const response = await createAPaymentGateway.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAPaymentGateway = cls.prototype.updateAPaymentGateway;
    cls.prototype.updateAPaymentGateway = async function (input, options) {
      const response = await updateAPaymentGateway.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAPaymentGateway = cls.prototype.deleteAPaymentGateway;
    cls.prototype.deleteAPaymentGateway = async function (input, options) {
      const response = await deleteAPaymentGateway.call(
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
