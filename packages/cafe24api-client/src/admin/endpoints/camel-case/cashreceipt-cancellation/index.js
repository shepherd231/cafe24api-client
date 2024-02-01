import register from '../../cashreceipt-cancellation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const updateACashReceiptCancellation =
    cls.prototype.updateACashReceiptCancellation;
  cls.prototype.updateACashReceiptCancellation = async function (
    input,
    options,
  ) {
    const response = await updateACashReceiptCancellation.call(
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
