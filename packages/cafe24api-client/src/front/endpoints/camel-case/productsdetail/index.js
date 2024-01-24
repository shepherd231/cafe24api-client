import register from '../../productsdetail/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveTheDetailsOfAProduct = cls.prototype.retrieveTheDetailsOfAProduct;
    cls.prototype.retrieveTheDetailsOfAProduct = async function (input, options) {
      const response = await retrieveTheDetailsOfAProduct.call(
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
