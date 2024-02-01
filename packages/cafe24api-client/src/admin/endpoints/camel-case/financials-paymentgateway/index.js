import register from '../../financials-paymentgateway/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfPaymentGatewayContractDetails =
    cls.prototype.retrieveAListOfPaymentGatewayContractDetails;
  cls.prototype.retrieveAListOfPaymentGatewayContractDetails = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfPaymentGatewayContractDetails.call(
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
