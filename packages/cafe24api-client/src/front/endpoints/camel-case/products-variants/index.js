import register from '../../products-variants/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProductVariants = cls.prototype.retrieveAListOfProductVariants;
    cls.prototype.retrieveAListOfProductVariants = async function (input, options) {
      const response = await retrieveAListOfProductVariants.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveAProductVariant = cls.prototype.retrieveAProductVariant;
    cls.prototype.retrieveAProductVariant = async function (input, options) {
      const response = await retrieveAProductVariant.call(
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
