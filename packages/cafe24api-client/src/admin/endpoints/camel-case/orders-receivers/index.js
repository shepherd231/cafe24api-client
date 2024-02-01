import register from '../../orders-receivers/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfRecipientsOfAnOrder =
    cls.prototype.retrieveAListOfRecipientsOfAnOrder;
  cls.prototype.retrieveAListOfRecipientsOfAnOrder = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfRecipientsOfAnOrder.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateOrderRecipients = cls.prototype.updateOrderRecipients;
  cls.prototype.updateOrderRecipients = async function (input, options) {
    const response = await updateOrderRecipients.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const changeShippingInformation = cls.prototype.changeShippingInformation;
  cls.prototype.changeShippingInformation = async function (input, options) {
    const response = await changeShippingInformation.call(
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
