import register from '../../return/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAReturn = cls.prototype.retrieveAReturn;
  cls.prototype.retrieveAReturn = async function (input, options) {
    const response = await retrieveAReturn.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createMultipleOrderReturns = cls.prototype.createMultipleOrderReturns;
  cls.prototype.createMultipleOrderReturns = async function (input, options) {
    const response = await createMultipleOrderReturns.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAReturn = cls.prototype.updateAReturn;
  cls.prototype.updateAReturn = async function (input, options) {
    const response = await updateAReturn.call(
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
