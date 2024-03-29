import register from '../../sms-balance/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveTheSmsBalance = cls.prototype.retrieveTheSmsBalance;
  cls.prototype.retrieveTheSmsBalance = async function (input, options) {
    const response = await retrieveTheSmsBalance.call(
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
