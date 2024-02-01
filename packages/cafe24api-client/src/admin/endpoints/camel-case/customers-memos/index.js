import register from '../../customers-memos/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveACountOfCustomerMemos =
    cls.prototype.retrieveACountOfCustomerMemos;
  cls.prototype.retrieveACountOfCustomerMemos = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfCustomerMemos.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAListOfCustomerMemos =
    cls.prototype.retrieveAListOfCustomerMemos;
  cls.prototype.retrieveAListOfCustomerMemos = async function (input, options) {
    const response = await retrieveAListOfCustomerMemos.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACustomerMemo = cls.prototype.retrieveACustomerMemo;
  cls.prototype.retrieveACustomerMemo = async function (input, options) {
    const response = await retrieveACustomerMemo.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createACustomerMemo = cls.prototype.createACustomerMemo;
  cls.prototype.createACustomerMemo = async function (input, options) {
    const response = await createACustomerMemo.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateACustomerMemo = cls.prototype.updateACustomerMemo;
  cls.prototype.updateACustomerMemo = async function (input, options) {
    const response = await updateACustomerMemo.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteACustomerMemo = cls.prototype.deleteACustomerMemo;
  cls.prototype.deleteACustomerMemo = async function (input, options) {
    const response = await deleteACustomerMemo.call(
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
