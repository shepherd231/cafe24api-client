import register from '../../orders/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfOrders = cls.prototype.retrieveAListOfOrders;
  cls.prototype.retrieveAListOfOrders = async function (input, options) {
    const response = await retrieveAListOfOrders.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAnOrder = cls.prototype.retrieveAnOrder;
  cls.prototype.retrieveAnOrder = async function (input, options) {
    const response = await retrieveAnOrder.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfOrders = cls.prototype.retrieveACountOfOrders;
  cls.prototype.retrieveACountOfOrders = async function (input, options) {
    const response = await retrieveACountOfOrders.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateStatusForMultipleOrders =
    cls.prototype.updateStatusForMultipleOrders;
  cls.prototype.updateStatusForMultipleOrders = async function (
    input,
    options,
  ) {
    const response = await updateStatusForMultipleOrders.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAnOrderStatus = cls.prototype.updateAnOrderStatus;
  cls.prototype.updateAnOrderStatus = async function (input, options) {
    const response = await updateAnOrderStatus.call(
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
