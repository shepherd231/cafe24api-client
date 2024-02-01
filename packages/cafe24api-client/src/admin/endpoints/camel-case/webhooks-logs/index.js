import register from '../../webhooks-logs/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfWebhookLogs = cls.prototype.retrieveAListOfWebhookLogs;
  cls.prototype.retrieveAListOfWebhookLogs = async function (input, options) {
    const response = await retrieveAListOfWebhookLogs.call(
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
