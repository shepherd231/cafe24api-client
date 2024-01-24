import register from '../../points-autoexpiration/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAnAutomaticPointsExpiration =
    cls.prototype.retrieveAnAutomaticPointsExpiration;
  cls.prototype.retrieveAnAutomaticPointsExpiration = async function (
    input,
    options,
  ) {
    const response = await retrieveAnAutomaticPointsExpiration.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createAnAutomaticPointsExpiration =
    cls.prototype.createAnAutomaticPointsExpiration;
  cls.prototype.createAnAutomaticPointsExpiration = async function (
    input,
    options,
  ) {
    const response = await createAnAutomaticPointsExpiration.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteAnAutomaticPointsExpiration =
    cls.prototype.deleteAnAutomaticPointsExpiration;
  cls.prototype.deleteAnAutomaticPointsExpiration = async function (
    input,
    options,
  ) {
    const response = await deleteAnAutomaticPointsExpiration.call(
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
