import register from '../../scripttags/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfScriptTags = cls.prototype.retrieveAListOfScriptTags;
  cls.prototype.retrieveAListOfScriptTags = async function (input, options) {
    const response = await retrieveAListOfScriptTags.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfScriptTags = cls.prototype.retrieveACountOfScriptTags;
  cls.prototype.retrieveACountOfScriptTags = async function (input, options) {
    const response = await retrieveACountOfScriptTags.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAScriptTag = cls.prototype.retrieveAScriptTag;
  cls.prototype.retrieveAScriptTag = async function (input, options) {
    const response = await retrieveAScriptTag.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAScriptTag = cls.prototype.createAScriptTag;
  cls.prototype.createAScriptTag = async function (input, options) {
    const response = await createAScriptTag.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAScriptTag = cls.prototype.updateAScriptTag;
  cls.prototype.updateAScriptTag = async function (input, options) {
    const response = await updateAScriptTag.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAScriptTag = cls.prototype.deleteAScriptTag;
  cls.prototype.deleteAScriptTag = async function (input, options) {
    const response = await deleteAScriptTag.call(
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
