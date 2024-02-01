import register from '../../orders-exchangerequests/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const rejectAnExchangeRequest = cls.prototype.rejectAnExchangeRequest;
  cls.prototype.rejectAnExchangeRequest = async function (input, options) {
    const response = await rejectAnExchangeRequest.call(
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
