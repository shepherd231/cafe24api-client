import register from '../../exchangerequests/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const bulkExchangeRequestApi = cls.prototype.bulkExchangeRequestApi;
  cls.prototype.bulkExchangeRequestApi = async function (input, options) {
    const response = await bulkExchangeRequestApi.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const rejectAnExchangeRequestForMultipleItems =
    cls.prototype.rejectAnExchangeRequestForMultipleItems;
  cls.prototype.rejectAnExchangeRequestForMultipleItems = async function (
    input,
    options,
  ) {
    const response = await rejectAnExchangeRequestForMultipleItems.call(
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
