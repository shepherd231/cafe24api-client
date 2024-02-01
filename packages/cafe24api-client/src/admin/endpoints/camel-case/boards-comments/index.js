import register from '../../boards-comments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveCommentsInBulk = cls.prototype.retrieveCommentsInBulk;
  cls.prototype.retrieveCommentsInBulk = async function (input, options) {
    const response = await retrieveCommentsInBulk.call(
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
