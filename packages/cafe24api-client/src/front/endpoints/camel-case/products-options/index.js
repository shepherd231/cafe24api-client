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

 
};
