import register from '../../shipping-suppliers/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveASupplierSShippingSettings = cls.prototype.retrieveASupplierSShippingSettings;
    cls.prototype.retrieveASupplierSShippingSettings = async function (input, options) {
      const response = await retrieveASupplierSShippingSettings.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateASupplierSShippingSettings = cls.prototype.updateASupplierSShippingSettings;
    cls.prototype.updateASupplierSShippingSettings = async function (input, options) {
      const response = await updateASupplierSShippingSettings.call(
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
