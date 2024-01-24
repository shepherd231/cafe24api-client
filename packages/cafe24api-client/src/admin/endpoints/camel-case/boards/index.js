import register from '../../boards/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfBoards = cls.prototype.retrieveAListOfBoards;
  cls.prototype.retrieveAListOfBoards = async function (input, options) {
    const response = await retrieveAListOfBoards.call(
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
