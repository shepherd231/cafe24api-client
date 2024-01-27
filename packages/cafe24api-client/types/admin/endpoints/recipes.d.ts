import { AxiosResponse } from 'axios';
import {
  Endpoint,
  AdminRequestOptions,
  Cafe24Datetime,
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Datetime,
  Cafe24Enum,
} from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 레시피(Recipes)와 관련된 기능으로,
   * 쇼핑몰에 레시피를 등록하거나, 등록된 레시피를 목록으로 조회하거나, 등록된 레시피를 삭제할 수 있습니다.
   */
  export interface Recipes {
    /**
     * @description
     * 레시피 코드
     *
     *
     */
    recipe_code: any;
    /**
     * @description
     * 레시피 이름
     *
     * 최대글자수 : [200자]
     */
    recipe_name: any;
    /**
     * @description
     * 활성화 여부
     *
     * T : 활성화
     * F : 비활성화
     *
     *
     */
    active: any;
  }

  export interface RetrieveAListOfRecipesInput {}

  export interface RetrieveAListOfRecipesOutput {
    recipes: {
      recipe_code: Cafe24Datetime;
      recipe_name: string;
      active: Cafe24Enum;
    }[];
  }
  export interface CreateARecipeInput {
    /**
     * @description
     * 레시피 코드
     *
     * @required
     */
    recipe_code: any;
    /**
     * @description
     * 트리거 설정
     *
     *
     */
    trigger_settings?: {
      required_filters?: any[];
      optional_filters?: any[];
    };
  }

  export interface CreateARecipeOutput {
    recipes: {
      recipe_code: Cafe24Datetime;
      active: Cafe24Enum;
    }[];
  }
  export interface DeleteARecipeInput {
    /**
     * @description
     * 레시피 코드
     *
     * @required
     */
    recipe_code: any;
  }

  export interface DeleteARecipeOutput {
    recipe: {
      recipe_code: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 레시피를 목록으로 조회할 수 있습니다.
     * 레시피 코드, 이름, 활성화 여부를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-recipes
     *
     * @example 응답 예시
     * ```json
     * {
     *     "recipes": [
     *         {
     *             "recipe_code": "111149-123456",
     *             "recipe_name": "recipeName001",
     *             "active": "T"
     *         },
     *         {
     *             "recipe_code": "111149-123457",
     *             "recipe_name": "recipeName002",
     *             "active": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfRecipes(
      input?: RetrieveAListOfRecipesInput,
      options?: AdminRequestOptions<
        RetrieveAListOfRecipesOutput['recipes'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfRecipesOutput>>;
    /**
     * @description
     * 쇼핑몰에 레시피를 등록할 수 있습니다.
     * 레시피 등록을 위해서는 레시피가 이미 생성되어있어야 하며 해당 생성된 레시피 코드가 필요합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-recipe
     *
     * @example 응답 예시
     * ```json
     * {
     *     "recipes": [
     *         {
     *             "recipe_code": "111149-123456",
     *             "active": "T"
     *         },
     *         {
     *             "recipe_code": "111149-123457",
     *             "active": "T"
     *         }
     *     ]
     * }
     * ```
     */
    createARecipe(
      input: CreateARecipeInput,
      options?: AdminRequestOptions<CreateARecipeOutput['recipes'][number]>,
    ): Promise<AxiosResponse<CreateARecipeOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 레시피를 등록해제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-recipe
     *
     * @example 응답 예시
     * ```json
     * {
     *     "recipe": {
     *         "recipe_code": "111490-111682"
     *     }
     * }
     * ```
     */
    deleteARecipe(
      input: DeleteARecipeInput,
      options?: AdminRequestOptions<DeleteARecipeOutput['recipe']>,
    ): Promise<AxiosResponse<DeleteARecipeOutput>>;
  }
}
