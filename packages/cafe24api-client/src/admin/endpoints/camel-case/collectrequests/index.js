import register from '../../collectrequests/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const updateACollectionRequest = cls.prototype.updateACollectionRequest;
  cls.prototype.updateACollectionRequest = async function (input, options) {
    const response = await updateACollectionRequest.call(
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
