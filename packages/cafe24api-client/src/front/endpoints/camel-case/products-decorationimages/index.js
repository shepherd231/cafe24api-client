import register from '../../products-decorationimages/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfProductDecorationImages =
    cls.prototype.retrieveAListOfProductDecorationImages;
  cls.prototype.retrieveAListOfProductDecorationImages = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfProductDecorationImages.call(
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
