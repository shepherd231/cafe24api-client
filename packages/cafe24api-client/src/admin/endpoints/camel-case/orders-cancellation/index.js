import register from '../../orders-cancellation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const createAnOrderCancellation = cls.prototype.createAnOrderCancellation;
  cls.prototype.createAnOrderCancellation = async function (input, options) {
    const response = await createAnOrderCancellation.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const changeCancellationDetails = cls.prototype.changeCancellationDetails;
  cls.prototype.changeCancellationDetails = async function (input, options) {
    const response = await changeCancellationDetails.call(
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
