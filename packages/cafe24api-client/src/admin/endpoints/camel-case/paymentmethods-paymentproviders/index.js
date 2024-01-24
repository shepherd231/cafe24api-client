import register from '../../paymentmethods-paymentproviders/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProvidersByPaymentMethod = cls.prototype.retrieveAListOfProvidersByPaymentMethod;
    cls.prototype.retrieveAListOfProvidersByPaymentMethod = async function (input, options) {
      const response = await retrieveAListOfProvidersByPaymentMethod.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateTheDisplayStatusOfAPaymentMethod = cls.prototype.updateTheDisplayStatusOfAPaymentMethod;
    cls.prototype.updateTheDisplayStatusOfAPaymentMethod = async function (input, options) {
      const response = await updateTheDisplayStatusOfAPaymentMethod.call(
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
