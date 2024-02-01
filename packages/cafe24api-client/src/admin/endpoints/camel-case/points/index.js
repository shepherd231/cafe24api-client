import register from '../../points/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrievePoints = cls.prototype.retrievePoints;
  cls.prototype.retrievePoints = async function (input, options) {
    const response = await retrievePoints.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const issueAndDeductPoints = cls.prototype.issueAndDeductPoints;
  cls.prototype.issueAndDeductPoints = async function (input, options) {
    const response = await issueAndDeductPoints.call(
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
