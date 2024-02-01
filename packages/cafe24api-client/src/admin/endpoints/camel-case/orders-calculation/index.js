import register from '../../orders-calculation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const calculateTotalDue = cls.prototype.calculateTotalDue;
  cls.prototype.calculateTotalDue = async function (input, options) {
    const response = await calculateTotalDue.call(
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
