import register from '../../suppliers-users-regionalsurcharges-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveASupplierUserSRegionalShippingFeeSettings =
    cls.prototype.retrieveASupplierUserSRegionalShippingFeeSettings;
  cls.prototype.retrieveASupplierUserSRegionalShippingFeeSettings =
    async function (input, options) {
      const response =
        await retrieveASupplierUserSRegionalShippingFeeSettings.call(
          this,
          convertToSnakeCase(input),
          formatCamelCasedOptions(options),
        );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

  const updateASupplierUserSRegionalShippingFeeSettings =
    cls.prototype.updateASupplierUserSRegionalShippingFeeSettings;
  cls.prototype.updateASupplierUserSRegionalShippingFeeSettings =
    async function (input, options) {
      const response =
        await updateASupplierUserSRegionalShippingFeeSettings.call(
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
