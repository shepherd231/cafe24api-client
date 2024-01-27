import register from '../../carts/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const createAShoppingCart = cls.prototype.createAShoppingCart;
    cls.prototype.createAShoppingCart = async function (input, options) {
      const response = await createAShoppingCart.call(
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
