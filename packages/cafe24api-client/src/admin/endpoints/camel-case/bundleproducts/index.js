import register from '../../bundleproducts/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfBundles = cls.prototype.retrieveAListOfBundles;
    cls.prototype.retrieveAListOfBundles = async function (input, options) {
      const response = await retrieveAListOfBundles.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveABundle = cls.prototype.retrieveABundle;
    cls.prototype.retrieveABundle = async function (input, options) {
      const response = await retrieveABundle.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createABundle = cls.prototype.createABundle;
    cls.prototype.createABundle = async function (input, options) {
      const response = await createABundle.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateABundle = cls.prototype.updateABundle;
    cls.prototype.updateABundle = async function (input, options) {
      const response = await updateABundle.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteABundle = cls.prototype.deleteABundle;
    cls.prototype.deleteABundle = async function (input, options) {
      const response = await deleteABundle.call(
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
