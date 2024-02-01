import register from '../../boards-articles/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfPostsForABoard =
    cls.prototype.retrieveAListOfPostsForABoard;
  cls.prototype.retrieveAListOfPostsForABoard = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfPostsForABoard.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createABoardPost = cls.prototype.createABoardPost;
  cls.prototype.createABoardPost = async function (input, options) {
    const response = await createABoardPost.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateABoardPost = cls.prototype.updateABoardPost;
  cls.prototype.updateABoardPost = async function (input, options) {
    const response = await updateABoardPost.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteABoardPost = cls.prototype.deleteABoardPost;
  cls.prototype.deleteABoardPost = async function (input, options) {
    const response = await deleteABoardPost.call(
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
