import register from '../../apps/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAnAppInformation = cls.prototype.retrieveAnAppInformation;
  cls.prototype.retrieveAnAppInformation = async function (input, options) {
    const response = await retrieveAnAppInformation.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAnAppInformation = cls.prototype.updateAnAppInformation;
  cls.prototype.updateAnAppInformation = async function (input, options) {
    const response = await updateAnAppInformation.call(
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
