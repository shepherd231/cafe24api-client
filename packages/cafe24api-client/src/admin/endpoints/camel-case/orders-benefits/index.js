import register from '../../orders-benefits/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfOrderBenefitsAppliedToAnOrder =
    cls.prototype.retrieveAListOfOrderBenefitsAppliedToAnOrder;
  cls.prototype.retrieveAListOfOrderBenefitsAppliedToAnOrder = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfOrderBenefitsAppliedToAnOrder.call(
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
