import register from '../../carriers/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfShippingCarriers =
    cls.prototype.retrieveAListOfShippingCarriers;
  cls.prototype.retrieveAListOfShippingCarriers = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfShippingCarriers.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAShippingCarrier = cls.prototype.retrieveAShippingCarrier;
  cls.prototype.retrieveAShippingCarrier = async function (input, options) {
    const response = await retrieveAShippingCarrier.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAShippingCarrier = cls.prototype.createAShippingCarrier;
  cls.prototype.createAShippingCarrier = async function (input, options) {
    const response = await createAShippingCarrier.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAShippingCarrier = cls.prototype.updateAShippingCarrier;
  cls.prototype.updateAShippingCarrier = async function (input, options) {
    const response = await updateAShippingCarrier.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAShippingCarrier = cls.prototype.deleteAShippingCarrier;
  cls.prototype.deleteAShippingCarrier = async function (input, options) {
    const response = await deleteAShippingCarrier.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
