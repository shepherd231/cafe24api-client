import register from '../../redirects/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfRedirects = cls.prototype.retrieveAListOfRedirects;
  cls.prototype.retrieveAListOfRedirects = async function (input, options) {
    const response = await retrieveAListOfRedirects.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createARedirect = cls.prototype.createARedirect;
  cls.prototype.createARedirect = async function (input, options) {
    const response = await createARedirect.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateARedirect = cls.prototype.updateARedirect;
  cls.prototype.updateARedirect = async function (input, options) {
    const response = await updateARedirect.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteARedirect = cls.prototype.deleteARedirect;
  cls.prototype.deleteARedirect = async function (input, options) {
    const response = await deleteARedirect.call(
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
