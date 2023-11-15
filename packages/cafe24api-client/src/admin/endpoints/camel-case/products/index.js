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

  const createAProduct = cls.prototype.createAProduct;
  cls.prototype.createAProduct = async function (input, options) {
    const response = await createAProduct.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAProduct = cls.prototype.updateAProduct;
  cls.prototype.updateAProduct = async function (input, options) {
    const response = await updateAProduct.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAProduct = cls.prototype.deleteAProduct;
  cls.prototype.deleteAProduct = async function (input, options) {
    const response = await deleteAProduct.call(
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
