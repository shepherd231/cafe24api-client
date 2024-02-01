import register from '../../subscription-shipments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveASubscription = cls.prototype.retrieveASubscription;
  cls.prototype.retrieveASubscription = async function (input, options) {
    const response = await retrieveASubscription.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createASubscription = cls.prototype.createASubscription;
  cls.prototype.createASubscription = async function (input, options) {
    const response = await createASubscription.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateASubscription = cls.prototype.updateASubscription;
  cls.prototype.updateASubscription = async function (input, options) {
    const response = await updateASubscription.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
