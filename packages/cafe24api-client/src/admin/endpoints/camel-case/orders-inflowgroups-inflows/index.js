import register from '../../orders-inflowgroups-inflows/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfGroupTrafficSources =
    cls.prototype.retrieveAListOfGroupTrafficSources;
  cls.prototype.retrieveAListOfGroupTrafficSources = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfGroupTrafficSources.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAGroupTrafficSource = cls.prototype.createAGroupTrafficSource;
  cls.prototype.createAGroupTrafficSource = async function (input, options) {
    const response = await createAGroupTrafficSource.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAGroupTrafficSource = cls.prototype.updateAGroupTrafficSource;
  cls.prototype.updateAGroupTrafficSource = async function (input, options) {
    const response = await updateAGroupTrafficSource.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAGroupTrafficSource = cls.prototype.deleteAGroupTrafficSource;
  cls.prototype.deleteAGroupTrafficSource = async function (input, options) {
    const response = await deleteAGroupTrafficSource.call(
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
