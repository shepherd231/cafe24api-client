import register from '../../sms-senders/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfSmsSenders = cls.prototype.retrieveAListOfSmsSenders;
  cls.prototype.retrieveAListOfSmsSenders = async function (input, options) {
    const response = await retrieveAListOfSmsSenders.call(
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
