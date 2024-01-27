import register from '../../orders-buyer-history/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfCustomerHistoryOfAnOrder = cls.prototype.retrieveAListOfCustomerHistoryOfAnOrder;
    cls.prototype.retrieveAListOfCustomerHistoryOfAnOrder = async function (input, options) {
      const response = await retrieveAListOfCustomerHistoryOfAnOrder.call(
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
