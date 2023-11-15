import register from '../../coupons/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveACountOfCoupons = cls.prototype.retrieveACountOfCoupons;
  cls.prototype.retrieveACountOfCoupons = async function (input, options) {
    const response = await retrieveACountOfCoupons.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAListOfCoupons = cls.prototype.retrieveAListOfCoupons;
  cls.prototype.retrieveAListOfCoupons = async function (input, options) {
    const response = await retrieveAListOfCoupons.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createACoupon = cls.prototype.createACoupon;
  cls.prototype.createACoupon = async function (input, options) {
    const response = await createACoupon.call(
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
