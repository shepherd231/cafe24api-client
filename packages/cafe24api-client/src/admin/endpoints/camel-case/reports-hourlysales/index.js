import register from '../../reports-hourlysales/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveHourlySalesStatisticsOfAStore =
    cls.prototype.retrieveHourlySalesStatisticsOfAStore;
  cls.prototype.retrieveHourlySalesStatisticsOfAStore = async function (
    input,
    options,
  ) {
    const response = await retrieveHourlySalesStatisticsOfAStore.call(
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
