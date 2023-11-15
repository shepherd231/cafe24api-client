import register from '../../socials-naverlogin/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const naverLoginDetails = cls.prototype.naverLoginDetails;
  cls.prototype.naverLoginDetails = async function (input, options) {
    const response = await naverLoginDetails.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateNaverLoginSettings = cls.prototype.updateNaverLoginSettings;
  cls.prototype.updateNaverLoginSettings = async function (input, options) {
    const response = await updateNaverLoginSettings.call(
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
