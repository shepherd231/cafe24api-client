import register from '../../carts/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAShoppingCart = cls.prototype.retrieveAShoppingCart;
    cls.prototype.retrieveAShoppingCart = async function (input, options) {
      const response = await retrieveAShoppingCart.call(
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
