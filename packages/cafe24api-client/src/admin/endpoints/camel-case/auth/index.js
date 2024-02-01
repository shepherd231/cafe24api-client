import register from '../../auth/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const getAuthenticationCode = cls.prototype.getAuthenticationCode;
  const getAccessToken = cls.prototype.getAccessToken;
  const getAccessTokenUsingRefreshToken =
    cls.prototype.getAccessTokenUsingRefreshToken;

  cls.prototype.getAuthenticationCode = async function (input, options) {
    const response = await getAuthenticationCode.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
  cls.prototype.getAccessToken = async function (input, options) {
    const response = await getAccessToken.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
  cls.prototype.getAccessTokenUsingRefreshToken = async function (
    input,
    options,
  ) {
    const response = await getAccessTokenUsingRefreshToken.call(
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
