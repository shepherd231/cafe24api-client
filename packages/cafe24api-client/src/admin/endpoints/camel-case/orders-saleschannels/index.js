import register from '../../orders-saleschannels/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  
    const retrieveAListOfSalesChannels = cls.prototype.retrieveAListOfSalesChannels;
    cls.prototype.retrieveAListOfSalesChannels = async function (input, options) {
      const response = await retrieveAListOfSalesChannels.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const createASalesChannel = cls.prototype.createASalesChannel;
    cls.prototype.createASalesChannel = async function (input, options) {
      const response = await createASalesChannel.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const updateASalesChannel = cls.prototype.updateASalesChannel;
    cls.prototype.updateASalesChannel = async function (input, options) {
      const response = await updateASalesChannel.call(
        this,
        convertToSnakeCase(input),
        optionsToSnakeCase(options),
      );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

 
    const deleteASalesChannel = cls.prototype.deleteASalesChannel;
    cls.prototype.deleteASalesChannel = async function (input, options) {
      const response = await deleteASalesChannel.call(
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
