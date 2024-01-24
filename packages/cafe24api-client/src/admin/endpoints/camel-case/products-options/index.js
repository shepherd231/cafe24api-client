import register from '../../products-options/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProductOptions = cls.prototype.retrieveAListOfProductOptions;
    cls.prototype.retrieveAListOfProductOptions = async function (input, options) {
      const response = await retrieveAListOfProductOptions.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createProductOptions = cls.prototype.createProductOptions;
    cls.prototype.createProductOptions = async function (input, options) {
      const response = await createProductOptions.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateProductOptions = cls.prototype.updateProductOptions;
    cls.prototype.updateProductOptions = async function (input, options) {
      const response = await updateProductOptions.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAProductOption = cls.prototype.deleteAProductOption;
    cls.prototype.deleteAProductOption = async function (input, options) {
      const response = await deleteAProductOption.call(
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
