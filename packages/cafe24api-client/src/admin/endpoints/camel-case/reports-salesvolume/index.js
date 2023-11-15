import register from '../../reports-salesvolume/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveASalesReport = cls.prototype.retrieveASalesReport;
  cls.prototype.retrieveASalesReport = async function (input, options) {
    const response = await retrieveASalesReport.call(
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
