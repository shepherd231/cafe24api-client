import register from '../../shops/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfShops = cls.prototype.retrieveAListOfShops;
    cls.prototype.retrieveAListOfShops = async function (input, options) {
      const response = await retrieveAListOfShops.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveAShop = cls.prototype.retrieveAShop;
    cls.prototype.retrieveAShop = async function (input, options) {
      const response = await retrieveAShop.call(
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
