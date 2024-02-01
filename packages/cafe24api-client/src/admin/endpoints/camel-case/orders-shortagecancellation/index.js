import register from '../../orders-shortagecancellation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
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
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
