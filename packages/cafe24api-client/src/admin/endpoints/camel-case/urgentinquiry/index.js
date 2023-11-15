import register from '../../urgentinquiry/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAnUrgentInquiryPost = cls.prototype.retrieveAnUrgentInquiryPost;
  cls.prototype.retrieveAnUrgentInquiryPost = async function (input, options) {
    const response = await retrieveAnUrgentInquiryPost.call(
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
