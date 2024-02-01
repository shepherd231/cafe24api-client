import register from '../../reports-salesvolume/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveASalesReport = cls.prototype.retrieveASalesReport;
  cls.prototype.retrieveASalesReport = async function (input, options) {
    const response = await retrieveASalesReport.call(
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
