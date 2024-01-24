import register from '../../refunds/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfRefunds = cls.prototype.retrieveAListOfRefunds;
  cls.prototype.retrieveAListOfRefunds = async function (input, options) {
    const response = await retrieveAListOfRefunds.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveARefund = cls.prototype.retrieveARefund;
  cls.prototype.retrieveARefund = async function (input, options) {
    const response = await retrieveARefund.call(
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
