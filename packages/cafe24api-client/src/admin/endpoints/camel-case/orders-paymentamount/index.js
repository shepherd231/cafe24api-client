import register from '../../orders-paymentamount/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAPaymentAmount = cls.prototype.retrieveAPaymentAmount;
  cls.prototype.retrieveAPaymentAmount = async function (input, options) {
    const response = await retrieveAPaymentAmount.call(
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
