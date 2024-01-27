import register from '../../exchange/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAnExchange = cls.prototype.retrieveAnExchange;
    cls.prototype.retrieveAnExchange = async function (input, options) {
      const response = await retrieveAnExchange.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createMultipleExchanges = cls.prototype.createMultipleExchanges;
    cls.prototype.createMultipleExchanges = async function (input, options) {
      const response = await createMultipleExchanges.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateMultipleOrderExchanges = cls.prototype.updateMultipleOrderExchanges;
    cls.prototype.updateMultipleOrderExchanges = async function (input, options) {
      const response = await updateMultipleOrderExchanges.call(
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
