import register from '../../manufacturers/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfManufacturers =
    cls.prototype.retrieveAListOfManufacturers;
  cls.prototype.retrieveAListOfManufacturers = async function (input, options) {
    const response = await retrieveAListOfManufacturers.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAManufacturer = cls.prototype.retrieveAManufacturer;
  cls.prototype.retrieveAManufacturer = async function (input, options) {
    const response = await retrieveAManufacturer.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfManufacturers =
    cls.prototype.retrieveACountOfManufacturers;
  cls.prototype.retrieveACountOfManufacturers = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfManufacturers.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAManufacturer = cls.prototype.createAManufacturer;
  cls.prototype.createAManufacturer = async function (input, options) {
    const response = await createAManufacturer.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAManufacturer = cls.prototype.updateAManufacturer;
  cls.prototype.updateAManufacturer = async function (input, options) {
    const response = await updateAManufacturer.call(
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
