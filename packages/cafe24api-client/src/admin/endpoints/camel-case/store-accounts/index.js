import register from '../../store-accounts/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfStoreBankAccounts = cls.prototype.retrieveAListOfStoreBankAccounts;
    cls.prototype.retrieveAListOfStoreBankAccounts = async function (input, options) {
      const response = await retrieveAListOfStoreBankAccounts.call(
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
