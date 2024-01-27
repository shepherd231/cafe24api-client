import register from '../../shipments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const createShippingInformationForMultipleOrders = cls.prototype.createShippingInformationForMultipleOrders;
    cls.prototype.createShippingInformationForMultipleOrders = async function (input, options) {
      const response = await createShippingInformationForMultipleOrders.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateMultipleOrderShippings = cls.prototype.updateMultipleOrderShippings;
    cls.prototype.updateMultipleOrderShippings = async function (input, options) {
      const response = await updateMultipleOrderShippings.call(
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
