import register from '../../activitylogs/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfActionLogs = cls.prototype.retrieveAListOfActionLogs;
  cls.prototype.retrieveAListOfActionLogs = async function (input, options) {
    const response = await retrieveAListOfActionLogs.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAnActionLog = cls.prototype.retrieveAnActionLog;
  cls.prototype.retrieveAnActionLog = async function (input, options) {
    const response = await retrieveAnActionLog.call(
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
