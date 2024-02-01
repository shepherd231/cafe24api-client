import register from '../../orders-exchange/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const createAnOrderExchange = cls.prototype.createAnOrderExchange;
  cls.prototype.createAnOrderExchange = async function (input, options) {
    const response = await createAnOrderExchange.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAnOrderExchange = cls.prototype.updateAnOrderExchange;
  cls.prototype.updateAnOrderExchange = async function (input, options) {
    const response = await updateAnOrderExchange.call(
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
