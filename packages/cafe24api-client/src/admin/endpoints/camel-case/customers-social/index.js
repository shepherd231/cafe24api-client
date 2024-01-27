import register from '../../customers-social/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveACustomerSSocialAccount = cls.prototype.retrieveACustomerSSocialAccount;
    cls.prototype.retrieveACustomerSSocialAccount = async function (input, options) {
      const response = await retrieveACustomerSSocialAccount.call(
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
