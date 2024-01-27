import register from '../../products-carts/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveACountOfCartsContainingAProduct = cls.prototype.retrieveACountOfCartsContainingAProduct;
    cls.prototype.retrieveACountOfCartsContainingAProduct = async function (input, options) {
      const response = await retrieveACountOfCartsContainingAProduct.call(
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
