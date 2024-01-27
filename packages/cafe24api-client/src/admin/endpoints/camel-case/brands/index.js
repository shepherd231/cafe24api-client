import register from '../../brands/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfBrands = cls.prototype.retrieveAListOfBrands;
    cls.prototype.retrieveAListOfBrands = async function (input, options) {
      const response = await retrieveAListOfBrands.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveACountOfBrands = cls.prototype.retrieveACountOfBrands;
    cls.prototype.retrieveACountOfBrands = async function (input, options) {
      const response = await retrieveACountOfBrands.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createABrand = cls.prototype.createABrand;
    cls.prototype.createABrand = async function (input, options) {
      const response = await createABrand.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateABrand = cls.prototype.updateABrand;
    cls.prototype.updateABrand = async function (input, options) {
      const response = await updateABrand.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteABrand = cls.prototype.deleteABrand;
    cls.prototype.deleteABrand = async function (input, options) {
      const response = await deleteABrand.call(
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
