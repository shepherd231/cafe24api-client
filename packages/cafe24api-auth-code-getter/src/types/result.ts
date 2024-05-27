export type GetAuthCodeResult =
  | {
      success: true;
      /**
       * @description
       * Cafe24 API auth code
       */
      code: string;
      /**
       * @description
       * Cafe24 API auth code state
       */
      state: string;
    }
  | {
      success: false;
      error: any;
    };
