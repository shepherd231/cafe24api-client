import register from '../../orders-items/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfOrderItems = cls.prototype.retrieveAListOfOrderItems;
  cls.prototype.retrieveAListOfOrderItems = async function (input, options) {
    const response = await retrieveAListOfOrderItems.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAnOrderItem = cls.prototype.createAnOrderItem;
  cls.prototype.createAnOrderItem = async function (input, options) {
    const response = await createAnOrderItem.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAnOrderItem1 = cls.prototype.updateAnOrderItem1;
  cls.prototype.updateAnOrderItem1 = async function (input, options) {
    const response = await updateAnOrderItem1.call(
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
