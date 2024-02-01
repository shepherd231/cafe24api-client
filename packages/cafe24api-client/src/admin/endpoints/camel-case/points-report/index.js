import register from '../../points-report/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAPointsReportByDateRange =
    cls.prototype.retrieveAPointsReportByDateRange;
  cls.prototype.retrieveAPointsReportByDateRange = async function (
    input,
    options,
  ) {
    const response = await retrieveAPointsReportByDateRange.call(
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
