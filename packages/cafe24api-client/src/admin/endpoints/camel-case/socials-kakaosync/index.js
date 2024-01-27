import register from '../../socials-kakaosync/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const kakaoSyncDetails = cls.prototype.kakaoSyncDetails;
    cls.prototype.kakaoSyncDetails = async function (input, options) {
      const response = await kakaoSyncDetails.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const kakaoSyncUpdates = cls.prototype.kakaoSyncUpdates;
    cls.prototype.kakaoSyncUpdates = async function (input, options) {
      const response = await kakaoSyncUpdates.call(
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
