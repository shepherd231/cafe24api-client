import register from '../../automessages-arguments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveTheListOfAvailableVariablesForAutomatedMessages = cls.prototype.retrieveTheListOfAvailableVariablesForAutomatedMessages;
    cls.prototype.retrieveTheListOfAvailableVariablesForAutomatedMessages = async function (input, options) {
      const response = await retrieveTheListOfAvailableVariablesForAutomatedMessages.call(
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
