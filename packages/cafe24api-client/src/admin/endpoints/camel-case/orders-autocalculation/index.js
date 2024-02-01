import register from '../../orders-autocalculation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const removeAutoCalculationSettingOfAnOrder =
    cls.prototype.removeAutoCalculationSettingOfAnOrder;
  cls.prototype.removeAutoCalculationSettingOfAnOrder = async function (
    input,
    options,
  ) {
    const response = await removeAutoCalculationSettingOfAnOrder.call(
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
