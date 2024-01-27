import register from '../../categories-products/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProductsByCategory = cls.prototype.retrieveAListOfProductsByCategory;
    cls.prototype.retrieveAListOfProductsByCategory = async function (input, options) {
      const response = await retrieveAListOfProductsByCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveACountOfProductsByCategory = cls.prototype.retrieveACountOfProductsByCategory;
    cls.prototype.retrieveACountOfProductsByCategory = async function (input, options) {
      const response = await retrieveACountOfProductsByCategory.call(
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
