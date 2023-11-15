import register from '../../financials-store/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveTheTransactionInformationOfAStore =
    cls.prototype.retrieveTheTransactionInformationOfAStore;
  cls.prototype.retrieveTheTransactionInformationOfAStore = async function (
    input,
    options,
  ) {
    const response = await retrieveTheTransactionInformationOfAStore.call(
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
