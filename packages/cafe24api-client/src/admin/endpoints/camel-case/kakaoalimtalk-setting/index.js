import register from '../../kakaoalimtalk-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveTheKakaoInfoTalkSettings = cls.prototype.retrieveTheKakaoInfoTalkSettings;
    cls.prototype.retrieveTheKakaoInfoTalkSettings = async function (input, options) {
      const response = await retrieveTheKakaoInfoTalkSettings.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateTheKakaoInfoTalkSettings = cls.prototype.updateTheKakaoInfoTalkSettings;
    cls.prototype.updateTheKakaoInfoTalkSettings = async function (input, options) {
      const response = await updateTheKakaoInfoTalkSettings.call(
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
