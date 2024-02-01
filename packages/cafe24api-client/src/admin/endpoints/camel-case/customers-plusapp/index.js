import register from '../../customers-plusapp/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAppInstallationInformation =
    cls.prototype.retrieveAppInstallationInformation;
  cls.prototype.retrieveAppInstallationInformation = async function (
    input,
    options,
  ) {
    const response = await retrieveAppInstallationInformation.call(
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
