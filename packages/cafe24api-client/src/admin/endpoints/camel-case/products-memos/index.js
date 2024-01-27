import register from '../../products-memos/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfProductMemos = cls.prototype.retrieveAListOfProductMemos;
    cls.prototype.retrieveAListOfProductMemos = async function (input, options) {
      const response = await retrieveAListOfProductMemos.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveAProductMemo = cls.prototype.retrieveAProductMemo;
    cls.prototype.retrieveAProductMemo = async function (input, options) {
      const response = await retrieveAProductMemo.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createAProductMemo = cls.prototype.createAProductMemo;
    cls.prototype.createAProductMemo = async function (input, options) {
      const response = await createAProductMemo.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAProductMemo = cls.prototype.updateAProductMemo;
    cls.prototype.updateAProductMemo = async function (input, options) {
      const response = await updateAProductMemo.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAProductMemo = cls.prototype.deleteAProductMemo;
    cls.prototype.deleteAProductMemo = async function (input, options) {
      const response = await deleteAProductMemo.call(
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
