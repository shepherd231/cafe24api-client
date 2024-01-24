import register from '../../translations-themes/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfThemeTranslations = cls.prototype.retrieveAListOfThemeTranslations;
    cls.prototype.retrieveAListOfThemeTranslations = async function (input, options) {
      const response = await retrieveAListOfThemeTranslations.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveAThemeTranslation = cls.prototype.retrieveAThemeTranslation;
    cls.prototype.retrieveAThemeTranslation = async function (input, options) {
      const response = await retrieveAThemeTranslation.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAThemeTranslation = cls.prototype.updateAThemeTranslation;
    cls.prototype.updateAThemeTranslation = async function (input, options) {
      const response = await updateAThemeTranslation.call(
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
