import register from '../../orders-buyer/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveCustomerDetailsOfAnOrder =
    cls.prototype.retrieveCustomerDetailsOfAnOrder;
  cls.prototype.retrieveCustomerDetailsOfAnOrder = async function (
    input,
    options,
  ) {
    const response = await retrieveCustomerDetailsOfAnOrder.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateCustomerInformationOfAnOrder =
    cls.prototype.updateCustomerInformationOfAnOrder;
  cls.prototype.updateCustomerInformationOfAnOrder = async function (
    input,
    options,
  ) {
    const response = await updateCustomerInformationOfAnOrder.call(
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
