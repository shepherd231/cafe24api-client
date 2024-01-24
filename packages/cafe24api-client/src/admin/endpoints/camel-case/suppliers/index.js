import register from '../../suppliers/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfSuppliers = cls.prototype.retrieveAListOfSuppliers;
    cls.prototype.retrieveAListOfSuppliers = async function (input, options) {
      const response = await retrieveAListOfSuppliers.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveACountOfSuppliers = cls.prototype.retrieveACountOfSuppliers;
    cls.prototype.retrieveACountOfSuppliers = async function (input, options) {
      const response = await retrieveACountOfSuppliers.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveASupplier = cls.prototype.retrieveASupplier;
    cls.prototype.retrieveASupplier = async function (input, options) {
      const response = await retrieveASupplier.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createASupplier = cls.prototype.createASupplier;
    cls.prototype.createASupplier = async function (input, options) {
      const response = await createASupplier.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateASupplier = cls.prototype.updateASupplier;
    cls.prototype.updateASupplier = async function (input, options) {
      const response = await updateASupplier.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteASupplier = cls.prototype.deleteASupplier;
    cls.prototype.deleteASupplier = async function (input, options) {
      const response = await deleteASupplier.call(
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
