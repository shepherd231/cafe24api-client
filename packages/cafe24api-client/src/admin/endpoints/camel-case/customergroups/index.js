import register from '../../customergroups/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCustomerTiers =
    cls.prototype.retrieveAListOfCustomerTiers;
  cls.prototype.retrieveAListOfCustomerTiers = async function (input, options) {
    const response = await retrieveAListOfCustomerTiers.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfCustomerTiers =
    cls.prototype.retrieveACountOfCustomerTiers;
  cls.prototype.retrieveACountOfCustomerTiers = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfCustomerTiers.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACustomerTier = cls.prototype.retrieveACustomerTier;
  cls.prototype.retrieveACustomerTier = async function (input, options) {
    const response = await retrieveACustomerTier.call(
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
