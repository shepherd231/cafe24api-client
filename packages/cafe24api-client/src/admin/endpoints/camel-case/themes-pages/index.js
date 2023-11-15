import register from '../../themes-pages/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAThemePage = cls.prototype.retrieveAThemePage;
  cls.prototype.retrieveAThemePage = async function (input, options) {
    const response = await retrieveAThemePage.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAThemePage = cls.prototype.createAThemePage;
  cls.prototype.createAThemePage = async function (input, options) {
    const response = await createAThemePage.call(
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
