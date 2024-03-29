import register from '../../products-variants-inventories/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveInventoryDetailsOfAProductVariant =
    cls.prototype.retrieveInventoryDetailsOfAProductVariant;
  cls.prototype.retrieveInventoryDetailsOfAProductVariant = async function (
    input,
    options,
  ) {
    const response = await retrieveInventoryDetailsOfAProductVariant.call(
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
