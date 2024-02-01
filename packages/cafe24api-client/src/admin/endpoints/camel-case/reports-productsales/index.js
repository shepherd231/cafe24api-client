import register from '../../reports-productsales/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveHourlyProductSalesStatisticsOfAStore =
    cls.prototype.retrieveHourlyProductSalesStatisticsOfAStore;
  cls.prototype.retrieveHourlyProductSalesStatisticsOfAStore = async function (
    input,
    options,
  ) {
    const response = await retrieveHourlyProductSalesStatisticsOfAStore.call(
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
