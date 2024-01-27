import register from '../../boards-articles-comments/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfCommentsForABoardPost = cls.prototype.retrieveAListOfCommentsForABoardPost;
    cls.prototype.retrieveAListOfCommentsForABoardPost = async function (input, options) {
      const response = await retrieveAListOfCommentsForABoardPost.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createACommentForABoardPost = cls.prototype.createACommentForABoardPost;
    cls.prototype.createACommentForABoardPost = async function (input, options) {
      const response = await createACommentForABoardPost.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteACommentForABoardPost = cls.prototype.deleteACommentForABoardPost;
    cls.prototype.deleteACommentForABoardPost = async function (input, options) {
      const response = await deleteACommentForABoardPost.call(
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
