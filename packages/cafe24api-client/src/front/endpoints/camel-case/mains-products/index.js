import register from '../../mains-products/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProductsInMainCategory = cls.prototype.retrieveAListOfProductsInMainCategory;
    cls.prototype.retrieveAListOfProductsInMainCategory = async function (input, options) {
      const response = await retrieveAListOfProductsInMainCategory.call(
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
