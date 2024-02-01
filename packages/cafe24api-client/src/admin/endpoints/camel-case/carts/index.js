import register from '../../carts/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAShoppingCart = cls.prototype.retrieveAShoppingCart;
  cls.prototype.retrieveAShoppingCart = async function (input, options) {
    const response = await retrieveAShoppingCart.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
