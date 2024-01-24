import register from '../../appstore-orders/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retreiveACafe24StoreOrder = cls.prototype.retreiveACafe24StoreOrder;
  cls.prototype.retreiveACafe24StoreOrder = async function (input, options) {
    const response = await retreiveACafe24StoreOrder.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createACafe24StoreOrder = cls.prototype.createACafe24StoreOrder;
  cls.prototype.createACafe24StoreOrder = async function (input, options) {
    const response = await createACafe24StoreOrder.call(
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
