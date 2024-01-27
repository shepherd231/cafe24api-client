import register from '../../users/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfAdminUsers = cls.prototype.retrieveAListOfAdminUsers;
    cls.prototype.retrieveAListOfAdminUsers = async function (input, options) {
      const response = await retrieveAListOfAdminUsers.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const retrieveAdminUserDetails = cls.prototype.retrieveAdminUserDetails;
    cls.prototype.retrieveAdminUserDetails = async function (input, options) {
      const response = await retrieveAdminUserDetails.call(
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
