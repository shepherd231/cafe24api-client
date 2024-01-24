import register from '../../orders-shipments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfShippingInformationOfAnOrder = cls.prototype.retrieveAListOfShippingInformationOfAnOrder;
    cls.prototype.retrieveAListOfShippingInformationOfAnOrder = async function (input, options) {
      const response = await retrieveAListOfShippingInformationOfAnOrder.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createAnOrderShippingInformation = cls.prototype.createAnOrderShippingInformation;
    cls.prototype.createAnOrderShippingInformation = async function (input, options) {
      const response = await createAnOrderShippingInformation.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAnOrderShipping = cls.prototype.updateAnOrderShipping;
    cls.prototype.updateAnOrderShipping = async function (input, options) {
      const response = await updateAnOrderShipping.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAnOrderShipping = cls.prototype.deleteAnOrderShipping;
    cls.prototype.deleteAnOrderShipping = async function (input, options) {
      const response = await deleteAnOrderShipping.call(
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
