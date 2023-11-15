import register from '../../points-report/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
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
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };
};
