import register from '../../returnrequests/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const createAReturnRequestForMultipleItems = cls.prototype.createAReturnRequestForMultipleItems;
    cls.prototype.createAReturnRequestForMultipleItems = async function (input, options) {
      const response = await createAReturnRequestForMultipleItems.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const rejectAReturnRequestForMultipleItems = cls.prototype.rejectAReturnRequestForMultipleItems;
    cls.prototype.rejectAReturnRequestForMultipleItems = async function (input, options) {
      const response = await rejectAReturnRequestForMultipleItems.call(
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
