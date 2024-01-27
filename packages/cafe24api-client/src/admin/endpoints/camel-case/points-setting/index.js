import register from '../../points-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrievePointsSettings = cls.prototype.retrievePointsSettings;
    cls.prototype.retrievePointsSettings = async function (input, options) {
      const response = await retrievePointsSettings.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updatePointsSettings = cls.prototype.updatePointsSettings;
    cls.prototype.updatePointsSettings = async function (input, options) {
      const response = await updatePointsSettings.call(
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
