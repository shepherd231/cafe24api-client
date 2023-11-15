import register from '../../socials-apple/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const appleLoginSyncDetails = cls.prototype.appleLoginSyncDetails;
  cls.prototype.appleLoginSyncDetails = async function (input, options) {
    const response = await appleLoginSyncDetails.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const appleLoginSyncSettings = cls.prototype.appleLoginSyncSettings;
  cls.prototype.appleLoginSyncSettings = async function (input, options) {
    const response = await appleLoginSyncSettings.call(
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
