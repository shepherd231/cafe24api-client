import register from '../../cancellationrequests/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const createACancellationRequestForMultipleItems =
    cls.prototype.createACancellationRequestForMultipleItems;
  cls.prototype.createACancellationRequestForMultipleItems = async function (
    input,
    options,
  ) {
    const response = await createACancellationRequestForMultipleItems.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const rejectACancellationRequestForMultipleItems =
    cls.prototype.rejectACancellationRequestForMultipleItems;
  cls.prototype.rejectACancellationRequestForMultipleItems = async function (
    input,
    options,
  ) {
    const response = await rejectACancellationRequestForMultipleItems.call(
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
