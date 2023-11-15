import register from '../../coupons-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveCouponSettings = cls.prototype.retrieveCouponSettings;
  cls.prototype.retrieveCouponSettings = async function (input, options) {
    const response = await retrieveCouponSettings.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateCouponSettings = cls.prototype.updateCouponSettings;
  cls.prototype.updateCouponSettings = async function (input, options) {
    const response = await updateCouponSettings.call(
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
