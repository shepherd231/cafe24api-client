import register from '../../automessages-arguments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveTheListOfAvailableVariablesForAutomatedMessages =
    cls.prototype.retrieveTheListOfAvailableVariablesForAutomatedMessages;
  cls.prototype.retrieveTheListOfAvailableVariablesForAutomatedMessages =
    async function (input, options) {
      const response =
        await retrieveTheListOfAvailableVariablesForAutomatedMessages.call(
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
