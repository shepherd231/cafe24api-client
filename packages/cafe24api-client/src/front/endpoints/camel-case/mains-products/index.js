import register from '../../mains-products/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfProductsInMainCategory =
    cls.prototype.retrieveAListOfProductsInMainCategory;
  cls.prototype.retrieveAListOfProductsInMainCategory = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfProductsInMainCategory.call(
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
