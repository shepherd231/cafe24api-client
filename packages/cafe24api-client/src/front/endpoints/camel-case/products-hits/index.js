import register from '../../products-hits/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveACountOfProductViews =
    cls.prototype.retrieveACountOfProductViews;
  cls.prototype.retrieveACountOfProductViews = async function (input, options) {
    const response = await retrieveACountOfProductViews.call(
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
