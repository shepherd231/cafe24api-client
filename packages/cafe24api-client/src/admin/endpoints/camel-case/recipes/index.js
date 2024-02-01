import register from '../../recipes/index';
import {
  convertToCamelCase,
  convertToSnakeCase,
  formatCamelCasedOptions,
} from '../../../../utils/index';

export default (cls) => {
  register(cls);

  const retrieveAListOfRecipes = cls.prototype.retrieveAListOfRecipes;
  cls.prototype.retrieveAListOfRecipes = async function (input, options) {
    const response = await retrieveAListOfRecipes.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const createARecipe = cls.prototype.createARecipe;
  cls.prototype.createARecipe = async function (input, options) {
    const response = await createARecipe.call(
      this,
      convertToSnakeCase(input),
      formatCamelCasedOptions(options),
    );
    return {
      ...response,
      data: convertToCamelCase(response.data),
    };
  };

  const deleteARecipe = cls.prototype.deleteARecipe;
  cls.prototype.deleteARecipe = async function (input, options) {
    const response = await deleteARecipe.call(
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
