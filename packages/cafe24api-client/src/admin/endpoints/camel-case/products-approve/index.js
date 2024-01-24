import register from '../../products-approve/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAProductApprovalStatus = cls.prototype.retrieveAProductApprovalStatus;
    cls.prototype.retrieveAProductApprovalStatus = async function (input, options) {
      const response = await retrieveAProductApprovalStatus.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createAProductApprovalRequest = cls.prototype.createAProductApprovalRequest;
    cls.prototype.createAProductApprovalRequest = async function (input, options) {
      const response = await createAProductApprovalRequest.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAProductApprovalStatus = cls.prototype.updateAProductApprovalStatus;
    cls.prototype.updateAProductApprovalStatus = async function (input, options) {
      const response = await updateAProductApprovalStatus.call(
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
