import register from '../../suppliers-users-regionalsurcharges/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveASupplierUserSListOfRegionalShippingFees =
    cls.prototype.retrieveASupplierUserSListOfRegionalShippingFees;
  cls.prototype.retrieveASupplierUserSListOfRegionalShippingFees =
    async function (input, options) {
      const response =
        await retrieveASupplierUserSListOfRegionalShippingFees.call(
          this,
          convertToSnakeCase(input),
          optionsToSnakeCase(options),
        );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

  const createRegionalShippingFeeForASupplierUser =
    cls.prototype.createRegionalShippingFeeForASupplierUser;
  cls.prototype.createRegionalShippingFeeForASupplierUser = async function (
    input,
    options,
  ) {
    const response = await createRegionalShippingFeeForASupplierUser.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteSupplierUserSRegionalShippingFeeSettings =
    cls.prototype.deleteSupplierUserSRegionalShippingFeeSettings;
  cls.prototype.deleteSupplierUserSRegionalShippingFeeSettings =
    async function (input, options) {
      const response =
        await deleteSupplierUserSRegionalShippingFeeSettings.call(
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
