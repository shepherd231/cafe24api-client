import register from '../../translations-products/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProductTranslations = cls.prototype.retrieveAListOfProductTranslations;
    cls.prototype.retrieveAListOfProductTranslations = async function (input, options) {
      const response = await retrieveAListOfProductTranslations.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateProductTranslation = cls.prototype.updateProductTranslation;
    cls.prototype.updateProductTranslation = async function (input, options) {
      const response = await updateProductTranslation.call(
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
