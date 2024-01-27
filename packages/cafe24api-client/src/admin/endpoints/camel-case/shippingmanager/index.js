import register from '../../shippingmanager/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveActivationInformationForShippingManager =
    cls.prototype.retrieveActivationInformationForShippingManager;
  cls.prototype.retrieveActivationInformationForShippingManager =
    async function (input, options) {
      const response =
        await retrieveActivationInformationForShippingManager.call(
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
