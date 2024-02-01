import register from '../../subscription-shipments-items/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const updateProductVariantsInSubscription =
    cls.prototype.updateProductVariantsInSubscription;
  cls.prototype.updateProductVariantsInSubscription = async function (
    input,
    options,
  ) {
    const response = await updateProductVariantsInSubscription.call(
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
