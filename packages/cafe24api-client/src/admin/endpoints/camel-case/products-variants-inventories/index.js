import register from '../../products-variants-inventories/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
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
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAProductVariantInventory =
    cls.prototype.updateAProductVariantInventory;
  cls.prototype.updateAProductVariantInventory = async function (
    input,
    options,
  ) {
    const response = await updateAProductVariantInventory.call(
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
