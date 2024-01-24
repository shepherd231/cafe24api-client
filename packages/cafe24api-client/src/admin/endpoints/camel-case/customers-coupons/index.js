import register from '../../customers-coupons/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCustomerCoupons =
    cls.prototype.retrieveAListOfCustomerCoupons;
  cls.prototype.retrieveAListOfCustomerCoupons = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfCustomerCoupons.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfCustomerCoupons =
    cls.prototype.retrieveACountOfCustomerCoupons;
  cls.prototype.retrieveACountOfCustomerCoupons = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfCustomerCoupons.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteACustomerCoupon = cls.prototype.deleteACustomerCoupon;
  cls.prototype.deleteACustomerCoupon = async function (input, options) {
    const response = await deleteACustomerCoupon.call(
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
