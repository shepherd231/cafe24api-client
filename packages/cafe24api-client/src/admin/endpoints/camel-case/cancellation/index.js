import register from '../../cancellation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAnOrderCancellation = cls.prototype.retrieveAnOrderCancellation;
    cls.prototype.retrieveAnOrderCancellation = async function (input, options) {
      const response = await retrieveAnOrderCancellation.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createMultipleOrderCancellations = cls.prototype.createMultipleOrderCancellations;
    cls.prototype.createMultipleOrderCancellations = async function (input, options) {
      const response = await createMultipleOrderCancellations.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const changeCancellationDetailsInBulk = cls.prototype.changeCancellationDetailsInBulk;
    cls.prototype.changeCancellationDetailsInBulk = async function (input, options) {
      const response = await changeCancellationDetailsInBulk.call(
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
