import register from '../../paymentmethods/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfPaymentMethods =
    cls.prototype.retrieveAListOfPaymentMethods;
  cls.prototype.retrieveAListOfPaymentMethods = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfPaymentMethods.call(
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
