import register from '../../customers-autoupdate/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveCustomerTierAutoUpdateDetails =
    cls.prototype.retrieveCustomerTierAutoUpdateDetails;
  cls.prototype.retrieveCustomerTierAutoUpdateDetails = async function (
    input,
    options,
  ) {
    const response = await retrieveCustomerTierAutoUpdateDetails.call(
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
