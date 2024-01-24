import register from '../../credits/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCreditsByDateRange =
    cls.prototype.retrieveAListOfCreditsByDateRange;
  cls.prototype.retrieveAListOfCreditsByDateRange = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfCreditsByDateRange.call(
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
