import register from '../../financials-store/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
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
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
