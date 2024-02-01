import register from '../../orders-paymenttimeline/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrievePaymentHistoryOfAnOrder =
    cls.prototype.retrievePaymentHistoryOfAnOrder;
  cls.prototype.retrievePaymentHistoryOfAnOrder = async function (
    input,
    options,
  ) {
    const response = await retrievePaymentHistoryOfAnOrder.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrievePaymentDetailsOfAnOrder =
    cls.prototype.retrievePaymentDetailsOfAnOrder;
  cls.prototype.retrievePaymentDetailsOfAnOrder = async function (
    input,
    options,
  ) {
    const response = await retrievePaymentDetailsOfAnOrder.call(
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
