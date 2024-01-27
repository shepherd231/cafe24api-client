import register from '../../taxmanager/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveActivationInformationForTaxManager = cls.prototype.retrieveActivationInformationForTaxManager;
    cls.prototype.retrieveActivationInformationForTaxManager = async function (input, options) {
      const response = await retrieveActivationInformationForTaxManager.call(
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
