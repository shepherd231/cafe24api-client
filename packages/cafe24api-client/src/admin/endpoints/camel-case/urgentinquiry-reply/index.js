import register from '../../urgentinquiry-reply/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAReplyForUrgentInquiryPost = cls.prototype.retrieveAReplyForUrgentInquiryPost;
    cls.prototype.retrieveAReplyForUrgentInquiryPost = async function (input, options) {
      const response = await retrieveAReplyForUrgentInquiryPost.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createAReplyForUrgentInquiryPost = cls.prototype.createAReplyForUrgentInquiryPost;
    cls.prototype.createAReplyForUrgentInquiryPost = async function (input, options) {
      const response = await createAReplyForUrgentInquiryPost.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAReplyForUrgentInquiryPost = cls.prototype.updateAReplyForUrgentInquiryPost;
    cls.prototype.updateAReplyForUrgentInquiryPost = async function (input, options) {
      const response = await updateAReplyForUrgentInquiryPost.call(
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
