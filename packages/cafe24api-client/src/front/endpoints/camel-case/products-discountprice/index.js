import register from '../../products-discountprice/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAProductDiscountedPrice =
    cls.prototype.retrieveAProductDiscountedPrice;
  cls.prototype.retrieveAProductDiscountedPrice = async function (
    input,
    options,
  ) {
    const response = await retrieveAProductDiscountedPrice.call(
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
