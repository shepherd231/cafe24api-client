import joi from 'joi';

export interface GetAuthCodeOptions {
  /**
   * @description
   * Cafe24 mall id.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_MALL_ID` environment variable.
   */
  mallId: string;
  /**
   * @description
   * Cafe24 mall password.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_MALL_PASSWORD` environment variable.
   */
  password: string;
  /**
   * @description
   * Cafe24 app client id.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_CLIENT_ID` environment variable.
   */
  clientId: string;
  /**
   * @description
   * Cafe24 auth state.
   *
   * This value is optional, and if not provided,
   * it will be generated automatically.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_AUTH_STATE` environment variable.
   */
  state?: string;
  /**
   * @description
   * Cafe24 auth redirect uri.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_AUTH_REDIRECT_URI` environment variable.
   */
  redirectUri: string;
  /**
   * @description
   * Cafe24 auth scope.
   *
   * This value should be comma separated string
   * with valid scope values.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_AUTH_SCOPE` environment variable.
   */
  scope: string;
}

const getAuthCodeOptionsSchema = joi.object({
  mallId: joi.string().required(),
  password: joi.string().required(),
  clientId: joi.string().required(),
  state: joi.string().optional(),
  redirectUri: joi.string().required(),
  scope: joi.string().required(),
});

export const validateOptions = (options: GetAuthCodeOptions) => {
  const { error } = getAuthCodeOptionsSchema.validate(options);
  if (error) {
    throw error;
  }
};
