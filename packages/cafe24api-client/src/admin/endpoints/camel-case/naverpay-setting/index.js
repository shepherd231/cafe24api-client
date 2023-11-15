import register from '../../naverpay-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveNaverPaySettings = cls.prototype.retrieveNaverPaySettings;
  cls.prototype.retrieveNaverPaySettings = async function (input, options) {
    const response = await retrieveNaverPaySettings.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createNaverPaySettings = cls.prototype.createNaverPaySettings;
  cls.prototype.createNaverPaySettings = async function (input, options) {
    const response = await createNaverPaySettings.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateNaverPaySettings = cls.prototype.updateNaverPaySettings;
  cls.prototype.updateNaverPaySettings = async function (input, options) {
    const response = await updateNaverPaySettings.call(
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
