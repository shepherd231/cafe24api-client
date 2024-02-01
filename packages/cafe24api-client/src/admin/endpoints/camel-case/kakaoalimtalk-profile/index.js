import register from '../../kakaoalimtalk-profile/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAKakaoChannelSenderProfileKey =
    cls.prototype.retrieveAKakaoChannelSenderProfileKey;
  cls.prototype.retrieveAKakaoChannelSenderProfileKey = async function (
    input,
    options,
  ) {
    const response = await retrieveAKakaoChannelSenderProfileKey.call(
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
