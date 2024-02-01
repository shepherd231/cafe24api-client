import register from '../../orders-shippingfeecancellation/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveShippingFeeCancellationDetailsOfAnOrder =
    cls.prototype.retrieveShippingFeeCancellationDetailsOfAnOrder;
  cls.prototype.retrieveShippingFeeCancellationDetailsOfAnOrder =
    async function (input, options) {
      const response =
        await retrieveShippingFeeCancellationDetailsOfAnOrder.call(
          this,
          convertToSnakeCase(input),
          formatCamelCasedOptions(options),
        );
      return {
        ...response,
        data: convertToCamelCase(response.data),
      };
    };

  const createAnOrderShippingFeeCancellation =
    cls.prototype.createAnOrderShippingFeeCancellation;
  cls.prototype.createAnOrderShippingFeeCancellation = async function (
    input,
    options,
  ) {
    const response = await createAnOrderShippingFeeCancellation.call(
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
