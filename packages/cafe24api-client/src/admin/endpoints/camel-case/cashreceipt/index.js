import register from '../../cashreceipt/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCashReceipts = cls.prototype.retrieveAListOfCashReceipts;
  cls.prototype.retrieveAListOfCashReceipts = async function (input, options) {
    const response = await retrieveAListOfCashReceipts.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createACashReceipt = cls.prototype.createACashReceipt;
  cls.prototype.createACashReceipt = async function (input, options) {
    const response = await createACashReceipt.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateACashReceipt = cls.prototype.updateACashReceipt;
  cls.prototype.updateACashReceipt = async function (input, options) {
    const response = await updateACashReceipt.call(
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
