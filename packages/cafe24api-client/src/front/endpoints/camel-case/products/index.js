import register from '../../products/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfProducts = cls.prototype.retrieveAListOfProducts;
  cls.prototype.retrieveAListOfProducts = async function (input, options) {
    const response = await retrieveAListOfProducts.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfProducts = cls.prototype.retrieveACountOfProducts;
  cls.prototype.retrieveACountOfProducts = async function (input, options) {
    const response = await retrieveACountOfProducts.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAProductResource = cls.prototype.retrieveAProductResource;
  cls.prototype.retrieveAProductResource = async function (input, options) {
    const response = await retrieveAProductResource.call(
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
