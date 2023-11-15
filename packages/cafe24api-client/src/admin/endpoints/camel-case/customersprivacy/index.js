import register from '../../customersprivacy/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCustomerInformation =
    cls.prototype.retrieveAListOfCustomerInformation;
  cls.prototype.retrieveAListOfCustomerInformation = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfCustomerInformation.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfCustomerInformation =
    cls.prototype.retrieveACountOfCustomerInformation;
  cls.prototype.retrieveACountOfCustomerInformation = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfCustomerInformation.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACustomerInformation =
    cls.prototype.retrieveACustomerInformation;
  cls.prototype.retrieveACustomerInformation = async function (input, options) {
    const response = await retrieveACustomerInformation.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateACustomerInformation = cls.prototype.updateACustomerInformation;
  cls.prototype.updateACustomerInformation = async function (input, options) {
    const response = await updateACustomerInformation.call(
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
