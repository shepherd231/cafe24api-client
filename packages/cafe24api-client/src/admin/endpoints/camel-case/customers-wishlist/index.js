import register from '../../customers-wishlist/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveACountOfProductsInCustomerWishlist =
    cls.prototype.retrieveACountOfProductsInCustomerWishlist;
  cls.prototype.retrieveACountOfProductsInCustomerWishlist = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfProductsInCustomerWishlist.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAListOfProductsInCustomerWishlist =
    cls.prototype.retrieveAListOfProductsInCustomerWishlist;
  cls.prototype.retrieveAListOfProductsInCustomerWishlist = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfProductsInCustomerWishlist.call(
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
