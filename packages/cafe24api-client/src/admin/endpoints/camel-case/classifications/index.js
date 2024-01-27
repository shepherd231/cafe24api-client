import register from '../../classifications/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfCustomCategories = cls.prototype.retrieveAListOfCustomCategories;
    cls.prototype.retrieveAListOfCustomCategories = async function (input, options) {
      const response = await retrieveAListOfCustomCategories.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveACountOfCustomCategories = cls.prototype.retrieveACountOfCustomCategories;
    cls.prototype.retrieveACountOfCustomCategories = async function (input, options) {
      const response = await retrieveACountOfCustomCategories.call(
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
