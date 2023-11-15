import register from '../../orders-items/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfOrderItems = cls.prototype.retrieveAListOfOrderItems;
  cls.prototype.retrieveAListOfOrderItems = async function (input, options) {
    const response = await retrieveAListOfOrderItems.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
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
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAnOrderItem_1 = cls.prototype.updateAnOrderItem_1;
  cls.prototype.updateAnOrderItem_1 = async function (input, options) {
    const response = await updateAnOrderItem_1.call(
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
