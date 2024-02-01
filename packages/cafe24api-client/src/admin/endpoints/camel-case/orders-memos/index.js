import register from '../../orders-memos/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfAdminMemosForAnOrder =
    cls.prototype.retrieveAListOfAdminMemosForAnOrder;
  cls.prototype.retrieveAListOfAdminMemosForAnOrder = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfAdminMemosForAnOrder.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveAListOfOrderMemos = cls.prototype.retrieveAListOfOrderMemos;
  cls.prototype.retrieveAListOfOrderMemos = async function (input, options) {
    const response = await retrieveAListOfOrderMemos.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAnOrderMemo = cls.prototype.createAnOrderMemo;
  cls.prototype.createAnOrderMemo = async function (input, options) {
    const response = await createAnOrderMemo.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateAnOrderMemo = cls.prototype.updateAnOrderMemo;
  cls.prototype.updateAnOrderMemo = async function (input, options) {
    const response = await updateAnOrderMemo.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAnOrderMemo = cls.prototype.deleteAnOrderMemo;
  cls.prototype.deleteAnOrderMemo = async function (input, options) {
    const response = await deleteAnOrderMemo.call(
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
