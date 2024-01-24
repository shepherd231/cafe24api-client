import register from '../../orders-receivers-history/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfRecipientHistoryOfAnOrder = cls.prototype.retrieveAListOfRecipientHistoryOfAnOrder;
    cls.prototype.retrieveAListOfRecipientHistoryOfAnOrder = async function (input, options) {
      const response = await retrieveAListOfRecipientHistoryOfAnOrder.call(
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
