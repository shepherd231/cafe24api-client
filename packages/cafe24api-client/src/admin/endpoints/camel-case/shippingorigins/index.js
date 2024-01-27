import register from '../../shippingorigins/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfShippingOrigins =
    cls.prototype.retrieveAListOfShippingOrigins;
  cls.prototype.retrieveAListOfShippingOrigins = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfShippingOrigins.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAShippingOrigin = cls.prototype.retrieveAShippingOrigin;
  cls.prototype.retrieveAShippingOrigin = async function (input, options) {
    const response = await retrieveAShippingOrigin.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAShippingOrigin = cls.prototype.createAShippingOrigin;
  cls.prototype.createAShippingOrigin = async function (input, options) {
    const response = await createAShippingOrigin.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAShippingOrigin = cls.prototype.updateAShippingOrigin;
  cls.prototype.updateAShippingOrigin = async function (input, options) {
    const response = await updateAShippingOrigin.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAShippingOrigin = cls.prototype.deleteAShippingOrigin;
  cls.prototype.deleteAShippingOrigin = async function (input, options) {
    const response = await deleteAShippingOrigin.call(
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
