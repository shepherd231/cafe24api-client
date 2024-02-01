import register from '../../benefits/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfCustomerBenefits =
    cls.prototype.retrieveAListOfCustomerBenefits;
  cls.prototype.retrieveAListOfCustomerBenefits = async function (
    input,
    options,
  ) {
    const response = await retrieveAListOfCustomerBenefits.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACountOfCustomerBenefits =
    cls.prototype.retrieveACountOfCustomerBenefits;
  cls.prototype.retrieveACountOfCustomerBenefits = async function (
    input,
    options,
  ) {
    const response = await retrieveACountOfCustomerBenefits.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveACustomerBenefit = cls.prototype.retrieveACustomerBenefit;
  cls.prototype.retrieveACustomerBenefit = async function (input, options) {
    const response = await retrieveACustomerBenefit.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createACustomerBenefit = cls.prototype.createACustomerBenefit;
  cls.prototype.createACustomerBenefit = async function (input, options) {
    const response = await createACustomerBenefit.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const updateACustomerBenefit = cls.prototype.updateACustomerBenefit;
  cls.prototype.updateACustomerBenefit = async function (input, options) {
    const response = await updateACustomerBenefit.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteACustomerBenefit = cls.prototype.deleteACustomerBenefit;
  cls.prototype.deleteACustomerBenefit = async function (input, options) {
    const response = await deleteACustomerBenefit.call(
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
