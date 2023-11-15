export default (cls) => {
  cls.prototype.retrieveAListOfRecipes = async function (input, options) {
    return this.createRequest('GET', `/api/v2/admin/recipes`, {}, options);
  };

  cls.prototype.createARecipe = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/recipes`,
      {
        recipe_code: input['recipe_code'],
        trigger_settings: input['trigger_settings'],
      },
      options,
    );
  };

  cls.prototype.deleteARecipe = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/recipes/${input['recipe_code']}`,
      {
        recipe_code: input['recipe_code'],
      },
      options,
    );
  };
};
