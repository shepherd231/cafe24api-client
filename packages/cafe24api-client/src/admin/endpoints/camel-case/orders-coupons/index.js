import register from '../../orders-coupons/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCouponsAppliedToAnOrder =
    cls.prototype.retrieveAListOfCouponsAppliedToAnOrder;
  cls.prototype.retrieveAListOfCouponsAppliedToAnOrder = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfCouponsAppliedToAnOrder.call(
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
