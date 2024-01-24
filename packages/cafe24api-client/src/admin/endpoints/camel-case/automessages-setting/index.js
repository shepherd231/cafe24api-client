import register from '../../automessages-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveTheAutomatedMessageSettings =
    cls.prototype.retrieveTheAutomatedMessageSettings;
  cls.prototype.retrieveTheAutomatedMessageSettings = async function (
    input,
    options,
  ) {
    const response = await retrieveTheAutomatedMessageSettings.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAnAutomatedMessage = cls.prototype.updateAnAutomatedMessage;
  cls.prototype.updateAnAutomatedMessage = async function (input, options) {
    const response = await updateAnAutomatedMessage.call(
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
