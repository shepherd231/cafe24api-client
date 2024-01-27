import register from '../../recipientgroups/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  optionsToSnakeCase,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveDistributionGroupList =
    cls.prototype.retrieveDistributionGroupList;
  cls.prototype.retrieveDistributionGroupList = async function (
    input,
    options,
  ) {
    const response = await retrieveDistributionGroupList.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const retrieveDistributionGroupDetails =
    cls.prototype.retrieveDistributionGroupDetails;
  cls.prototype.retrieveDistributionGroupDetails = async function (
    input,
    options,
  ) {
    const response = await retrieveDistributionGroupDetails.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createADistributionGroup = cls.prototype.createADistributionGroup;
  cls.prototype.createADistributionGroup = async function (input, options) {
    const response = await createADistributionGroup.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const editDistributionGroup = cls.prototype.editDistributionGroup;
  cls.prototype.editDistributionGroup = async function (input, options) {
    const response = await editDistributionGroup.call(
      this,
      convertToSnakeCase(input),
      optionsToSnakeCase(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteDistributionGroup = cls.prototype.deleteDistributionGroup;
  cls.prototype.deleteDistributionGroup = async function (input, options) {
    const response = await deleteDistributionGroup.call(
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
