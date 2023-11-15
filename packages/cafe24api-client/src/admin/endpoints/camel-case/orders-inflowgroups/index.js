import register from '../../orders-inflowgroups/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfTrafficSourceGroups =
    cls.prototype.retrieveAListOfTrafficSourceGroups;
  cls.prototype.retrieveAListOfTrafficSourceGroups = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfTrafficSourceGroups.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createATrafficSourceGroup = cls.prototype.createATrafficSourceGroup;
  cls.prototype.createATrafficSourceGroup = async function (input, options) {
    const response = await createATrafficSourceGroup.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateATrafficSourceGroup = cls.prototype.updateATrafficSourceGroup;
  cls.prototype.updateATrafficSourceGroup = async function (input, options) {
    const response = await updateATrafficSourceGroup.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteATrafficSourceGroup = cls.prototype.deleteATrafficSourceGroup;
  cls.prototype.deleteATrafficSourceGroup = async function (input, options) {
    const response = await deleteATrafficSourceGroup.call(
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
