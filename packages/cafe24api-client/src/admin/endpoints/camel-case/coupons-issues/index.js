import register from '../../coupons-issues/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfIssuedCoupons =
    cls.prototype.retrieveAListOfIssuedCoupons;
  cls.prototype.retrieveAListOfIssuedCoupons = async function (input, options) {
    const response = await retrieveAListOfIssuedCoupons.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createCouponIssuanceHistory = cls.prototype.createCouponIssuanceHistory;
  cls.prototype.createCouponIssuanceHistory = async function (input, options) {
    const response = await createCouponIssuanceHistory.call(
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
