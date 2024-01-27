import register from '../../subscription-shipments-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfSubscriptionProducts = cls.prototype.retrieveAListOfSubscriptionProducts;
    cls.prototype.retrieveAListOfSubscriptionProducts = async function (input, options) {
      const response = await retrieveAListOfSubscriptionProducts.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createASubscriptionPaymentRule = cls.prototype.createASubscriptionPaymentRule;
    cls.prototype.createASubscriptionPaymentRule = async function (input, options) {
      const response = await createASubscriptionPaymentRule.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateSubscriptionProducts = cls.prototype.updateSubscriptionProducts;
    cls.prototype.updateSubscriptionProducts = async function (input, options) {
      const response = await updateSubscriptionProducts.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteSubscriptionProducts = cls.prototype.deleteSubscriptionProducts;
    cls.prototype.deleteSubscriptionProducts = async function (input, options) {
      const response = await deleteSubscriptionProducts.call(
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
