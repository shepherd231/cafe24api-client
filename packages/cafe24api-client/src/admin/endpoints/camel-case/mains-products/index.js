import register from '../../mains-products/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProductsInMainCategory = cls.prototype.retrieveAListOfProductsInMainCategory;
    cls.prototype.retrieveAListOfProductsInMainCategory = async function (input, options) {
      const response = await retrieveAListOfProductsInMainCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveACountOfProductsInMainCategory = cls.prototype.retrieveACountOfProductsInMainCategory;
    cls.prototype.retrieveACountOfProductsInMainCategory = async function (input, options) {
      const response = await retrieveACountOfProductsInMainCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const setMainCategoryProducts = cls.prototype.setMainCategoryProducts;
    cls.prototype.setMainCategoryProducts = async function (input, options) {
      const response = await setMainCategoryProducts.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateFixedSortingOfProductsInMainCategory = cls.prototype.updateFixedSortingOfProductsInMainCategory;
    cls.prototype.updateFixedSortingOfProductsInMainCategory = async function (input, options) {
      const response = await updateFixedSortingOfProductsInMainCategory.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAProductInMainCategory = cls.prototype.deleteAProductInMainCategory;
    cls.prototype.deleteAProductInMainCategory = async function (input, options) {
      const response = await deleteAProductInMainCategory.call(
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
