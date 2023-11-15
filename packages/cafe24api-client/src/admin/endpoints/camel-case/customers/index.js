import register from '../../customers/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCustomers = cls.prototype.retrieveAListOfCustomers;
  cls.prototype.retrieveAListOfCustomers = async function (input, options) {
    const response = await retrieveAListOfCustomers.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAnAccount = cls.prototype.deleteAnAccount;
  cls.prototype.deleteAnAccount = async function (input, options) {
    const response = await deleteAnAccount.call(
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
