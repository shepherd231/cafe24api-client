import register from '../../categories-decorationimages/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveDecorationImageSettingsByCategory = cls.prototype.retrieveDecorationImageSettingsByCategory;
    cls.prototype.retrieveDecorationImageSettingsByCategory = async function (input, options) {
      const response = await retrieveDecorationImageSettingsByCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateDecorationImagesOfAProductCategory = cls.prototype.updateDecorationImagesOfAProductCategory;
    cls.prototype.updateDecorationImagesOfAProductCategory = async function (input, options) {
      const response = await updateDecorationImagesOfAProductCategory.call(
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
