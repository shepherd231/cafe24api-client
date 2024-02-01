import register from '../../kakaopay-setting/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveSettingsForKakaopayOrders =
    cls.prototype.retrieveSettingsForKakaopayOrders;
  cls.prototype.retrieveSettingsForKakaopayOrders = async function (
    input,
    options,
  ) {
    const response = await retrieveSettingsForKakaopayOrders.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateSettingsForKakaopayOrders =
    cls.prototype.updateSettingsForKakaopayOrders;
  cls.prototype.updateSettingsForKakaopayOrders = async function (
    input,
    options,
  ) {
    const response = await updateSettingsForKakaopayOrders.call(
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
