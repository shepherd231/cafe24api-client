import register from '../../products-icons/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfProductIcons = cls.prototype.retrieveAListOfProductIcons;
  cls.prototype.retrieveAListOfProductIcons = async function (input, options) {
    const response = await retrieveAListOfProductIcons.call(
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
