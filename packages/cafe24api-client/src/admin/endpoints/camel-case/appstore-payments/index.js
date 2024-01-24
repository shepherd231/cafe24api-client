import register from '../../appstore-payments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfCafe24StorePayments = cls.prototype.retrieveAListOfCafe24StorePayments;
    cls.prototype.retrieveAListOfCafe24StorePayments = async function (input, options) {
      const response = await retrieveAListOfCafe24StorePayments.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveACountOfCafe24StorePayments = cls.prototype.retrieveACountOfCafe24StorePayments;
    cls.prototype.retrieveACountOfCafe24StorePayments = async function (input, options) {
      const response = await retrieveACountOfCafe24StorePayments.call(
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
