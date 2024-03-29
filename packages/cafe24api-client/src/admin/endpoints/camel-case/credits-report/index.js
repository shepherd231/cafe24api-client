import register from '../../credits-report/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveACreditReportByDateRange =
    cls.prototype.retrieveACreditReportByDateRange;
  cls.prototype.retrieveACreditReportByDateRange = async function (
    input,
    options,
  ) {
    const response = await retrieveACreditReportByDateRange.call(
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
