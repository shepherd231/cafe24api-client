import register from '../../icons/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfDesginIcons = cls.prototype.retrieveAListOfDesginIcons;
  cls.prototype.retrieveAListOfDesginIcons = async function (input, options) {
    const response = await retrieveAListOfDesginIcons.call(
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
