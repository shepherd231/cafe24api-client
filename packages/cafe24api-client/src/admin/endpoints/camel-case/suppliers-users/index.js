import register from '../../suppliers-users/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfSupplierUsers =
    cls.prototype.retrieveAListOfSupplierUsers;
  cls.prototype.retrieveAListOfSupplierUsers = async function (input, options) {
    const response = await retrieveAListOfSupplierUsers.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfSupplierUsers =
    cls.prototype.retrieveACountOfSupplierUsers;
  cls.prototype.retrieveACountOfSupplierUsers = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfSupplierUsers.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveSupplierUserDetails = cls.prototype.retrieveSupplierUserDetails;
  cls.prototype.retrieveSupplierUserDetails = async function (input, options) {
    const response = await retrieveSupplierUserDetails.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createASupplierUser = cls.prototype.createASupplierUser;
  cls.prototype.createASupplierUser = async function (input, options) {
    const response = await createASupplierUser.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateASupplierUser = cls.prototype.updateASupplierUser;
  cls.prototype.updateASupplierUser = async function (input, options) {
    const response = await updateASupplierUser.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteASupplierUser = cls.prototype.deleteASupplierUser;
  cls.prototype.deleteASupplierUser = async function (input, options) {
    const response = await deleteASupplierUser.call(
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
