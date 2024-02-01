import register from '../../orders-items-options/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const createOrderItemOptions = cls.prototype.createOrderItemOptions;
  cls.prototype.createOrderItemOptions = async function (input, options) {
    const response = await createOrderItemOptions.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAnOrderItem = cls.prototype.updateAnOrderItem;
  cls.prototype.updateAnOrderItem = async function (input, options) {
    const response = await updateAnOrderItem.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteOrderItemOptions = cls.prototype.deleteOrderItemOptions;
  cls.prototype.deleteOrderItemOptions = async function (input, options) {
    const response = await deleteOrderItemOptions.call(
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
