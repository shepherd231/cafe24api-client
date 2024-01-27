import register from '../../paymentgateway-paymentmethods/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfPaymentGatewayMethods = cls.prototype.retrieveAListOfPaymentGatewayMethods;
    cls.prototype.retrieveAListOfPaymentGatewayMethods = async function (input, options) {
      const response = await retrieveAListOfPaymentGatewayMethods.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createAPaymentGatewayMethod = cls.prototype.createAPaymentGatewayMethod;
    cls.prototype.createAPaymentGatewayMethod = async function (input, options) {
      const response = await createAPaymentGatewayMethod.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAPaymentMethodOfAPaymentGateway = cls.prototype.updateAPaymentMethodOfAPaymentGateway;
    cls.prototype.updateAPaymentMethodOfAPaymentGateway = async function (input, options) {
      const response = await updateAPaymentMethodOfAPaymentGateway.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAPaymentMethodOfAPaymentGateway = cls.prototype.deleteAPaymentMethodOfAPaymentGateway;
    cls.prototype.deleteAPaymentMethodOfAPaymentGateway = async function (input, options) {
      const response = await deleteAPaymentMethodOfAPaymentGateway.call(
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
