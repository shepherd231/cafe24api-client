import register from '../../orders-return/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const createAnOrderReturn = cls.prototype.createAnOrderReturn;
    cls.prototype.createAnOrderReturn = async function (input, options) {
      const response = await createAnOrderReturn.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAnOrderReturn = cls.prototype.updateAnOrderReturn;
    cls.prototype.updateAnOrderReturn = async function (input, options) {
      const response = await updateAnOrderReturn.call(
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
