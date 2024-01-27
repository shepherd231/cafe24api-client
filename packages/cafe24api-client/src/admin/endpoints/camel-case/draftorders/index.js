import register from '../../draftorders/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const createADraftOrder = cls.prototype.createADraftOrder;
    cls.prototype.createADraftOrder = async function (input, options) {
      const response = await createADraftOrder.call(
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
