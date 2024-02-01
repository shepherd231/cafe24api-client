import register from '../../customers-paymentinformation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveACustomerSListOfPaymentMethods =
    cls.prototype.retrieveACustomerSListOfPaymentMethods;
  cls.prototype.retrieveACustomerSListOfPaymentMethods = async function (
    input,
    options,
  ) {
    const response = await retrieveACustomerSListOfPaymentMethods.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteCustomerSPaymentInformation =
    cls.prototype.deleteCustomerSPaymentInformation;
  cls.prototype.deleteCustomerSPaymentInformation = async function (
    input,
    options,
  ) {
    const response = await deleteCustomerSPaymentInformation.call(
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
