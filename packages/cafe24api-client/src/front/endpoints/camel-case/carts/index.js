import register from '../../carts/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const createAShoppingCart = cls.prototype.createAShoppingCart;
  cls.prototype.createAShoppingCart = async function (input, options) {
    const response = await createAShoppingCart.call(
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
