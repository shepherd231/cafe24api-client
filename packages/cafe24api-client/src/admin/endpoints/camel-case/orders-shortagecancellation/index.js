import register from '../../orders-shortagecancellation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const createAnOrderCancellationOnStockShortage =
    cls.prototype.createAnOrderCancellationOnStockShortage;
  cls.prototype.createAnOrderCancellationOnStockShortage = async function (
    input,
    options,
  ) {
    const response = await createAnOrderCancellationOnStockShortage.call(
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
