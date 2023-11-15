import register from '../../webhooks-logs/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfWebhookLogs = cls.prototype.retrieveAListOfWebhookLogs;
  cls.prototype.retrieveAListOfWebhookLogs = async function (input, options) {
    const response = await retrieveAListOfWebhookLogs.call(
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
