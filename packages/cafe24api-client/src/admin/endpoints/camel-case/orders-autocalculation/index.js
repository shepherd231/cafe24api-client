import register from '../../orders-autocalculation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const removeAutoCalculationSettingOfAnOrder = cls.prototype.removeAutoCalculationSettingOfAnOrder;
    cls.prototype.removeAutoCalculationSettingOfAnOrder = async function (input, options) {
      const response = await removeAutoCalculationSettingOfAnOrder.call(
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
