import register from '../../products-wishlist-customers/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCustomersWithAProductInWishlist =
    cls.prototype.retrieveAListOfCustomersWithAProductInWishlist;
  cls.prototype.retrieveAListOfCustomersWithAProductInWishlist =
    async function (input, options) {
      const response =
        await retrieveAListOfCustomersWithAProductInWishlist.call(
          this,
          convertToSnakeCase(input),
          formatCamelCasedOptions(options),
        );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

  const retrieveACountOfCustomersWithAProductInWishlist =
    cls.prototype.retrieveACountOfCustomersWithAProductInWishlist;
  cls.prototype.retrieveACountOfCustomersWithAProductInWishlist =
    async function (input, options) {
      const response =
        await retrieveACountOfCustomersWithAProductInWishlist.call(
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
