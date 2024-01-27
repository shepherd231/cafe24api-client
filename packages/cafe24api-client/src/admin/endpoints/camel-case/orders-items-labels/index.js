import register from '../../orders-items-labels/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAnOrderLabel = cls.prototype.retrieveAnOrderLabel;
    cls.prototype.retrieveAnOrderLabel = async function (input, options) {
      const response = await retrieveAnOrderLabel.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createAnOrderLabel = cls.prototype.createAnOrderLabel;
    cls.prototype.createAnOrderLabel = async function (input, options) {
      const response = await createAnOrderLabel.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateAnOrderLabel = cls.prototype.updateAnOrderLabel;
    cls.prototype.updateAnOrderLabel = async function (input, options) {
      const response = await updateAnOrderLabel.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteAnOrderLabel = cls.prototype.deleteAnOrderLabel;
    cls.prototype.deleteAnOrderLabel = async function (input, options) {
      const response = await deleteAnOrderLabel.call(
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
