import register from '../../shipping/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveShippingReturnSettings =
    cls.prototype.retrieveShippingReturnSettings;
  cls.prototype.retrieveShippingReturnSettings = async function (
    input,
    options,
  ) {
    const response = await retrieveShippingReturnSettings.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateStoreShippingReturnSettings =
    cls.prototype.updateStoreShippingReturnSettings;
  cls.prototype.updateStoreShippingReturnSettings = async function (
    input,
    options,
  ) {
    const response = await updateStoreShippingReturnSettings.call(
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
