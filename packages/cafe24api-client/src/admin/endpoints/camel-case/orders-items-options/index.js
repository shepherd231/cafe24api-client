import register from '../../orders-items-options/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const updateAnOrderItem = cls.prototype.updateAnOrderItem;
  cls.prototype.updateAnOrderItem = async function (input, options) {
    const response = await updateAnOrderItem.call(
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
