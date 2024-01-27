import register from '../../products-additionalimages/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const createAnAdditionalProductImage = cls.prototype.createAnAdditionalProductImage;
    cls.prototype.createAnAdditionalProductImage = async function (input, options) {
      const response = await createAnAdditionalProductImage.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAnAdditionalProductImage = cls.prototype.updateAnAdditionalProductImage;
    cls.prototype.updateAnAdditionalProductImage = async function (input, options) {
      const response = await updateAnAdditionalProductImage.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAnAdditionalProductImage = cls.prototype.deleteAnAdditionalProductImage;
    cls.prototype.deleteAnAdditionalProductImage = async function (input, options) {
      const response = await deleteAnAdditionalProductImage.call(
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
