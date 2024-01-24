import register from '../../fulfillments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const createShippingInformationForMultipleOrdersViaFulfillment = cls.prototype.createShippingInformationForMultipleOrdersViaFulfillment;
    cls.prototype.createShippingInformationForMultipleOrdersViaFulfillment = async function (input, options) {
      const response = await createShippingInformationForMultipleOrdersViaFulfillment.call(
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
