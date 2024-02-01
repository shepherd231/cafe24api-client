import register from '../../labels/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveOrderLabels = cls.prototype.retrieveOrderLabels;
  cls.prototype.retrieveOrderLabels = async function (input, options) {
    const response = await retrieveOrderLabels.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createMultipleOrderLabels = cls.prototype.createMultipleOrderLabels;
  cls.prototype.createMultipleOrderLabels = async function (input, options) {
    const response = await createMultipleOrderLabels.call(
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
