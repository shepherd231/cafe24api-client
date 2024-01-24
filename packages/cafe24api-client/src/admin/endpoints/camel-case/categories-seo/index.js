import register from '../../categories-seo/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveSeoSettingsByCategory = cls.prototype.retrieveSeoSettingsByCategory;
    cls.prototype.retrieveSeoSettingsByCategory = async function (input, options) {
      const response = await retrieveSeoSettingsByCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAProductCategorySeo = cls.prototype.updateAProductCategorySeo;
    cls.prototype.updateAProductCategorySeo = async function (input, options) {
      const response = await updateAProductCategorySeo.call(
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
