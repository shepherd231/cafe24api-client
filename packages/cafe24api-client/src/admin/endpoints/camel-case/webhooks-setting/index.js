import register from '../../webhooks-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveWebhookSettings = cls.prototype.retrieveWebhookSettings;
  cls.prototype.retrieveWebhookSettings = async function (input, options) {
    const response = await retrieveWebhookSettings.call(
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
