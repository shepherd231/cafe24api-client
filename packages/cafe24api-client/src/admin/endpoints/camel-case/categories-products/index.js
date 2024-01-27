import register from '../../categories-products/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProductsByCategory = cls.prototype.retrieveAListOfProductsByCategory;
    cls.prototype.retrieveAListOfProductsByCategory = async function (input, options) {
      const response = await retrieveAListOfProductsByCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveACountOfProductsByCategory = cls.prototype.retrieveACountOfProductsByCategory;
    cls.prototype.retrieveACountOfProductsByCategory = async function (input, options) {
      const response = await retrieveACountOfProductsByCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const addProductsToACategory = cls.prototype.addProductsToACategory;
    cls.prototype.addProductsToACategory = async function (input, options) {
      const response = await addProductsToACategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAProductInProductCategory = cls.prototype.updateAProductInProductCategory;
    cls.prototype.updateAProductInProductCategory = async function (input, options) {
      const response = await updateAProductInProductCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAProductByCategory = cls.prototype.deleteAProductByCategory;
    cls.prototype.deleteAProductByCategory = async function (input, options) {
      const response = await deleteAProductByCategory.call(
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
