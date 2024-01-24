import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 테마 번역 정보(Translations themes)는, 다국어 코드화된 디자인 스킨에 탑재된 번역 정보를 조회하거나 수정할 수 있는 기능입니다.
   */
  export interface TranslationsThemes {
    /**
      * @description
      * 디자인 번호
      * 
      * 
      */ 
    skinNo: any;
    /**
      * @description
      * 번역 정보
      * 
      * 
      */ 
    translations: any;
    /**
      * @description
      * 디자인 코드
      * 
      * 
      */ 
    skinCode: any;
    /**
      * @description
      * 디자인 번역 정보
      * 
      * 
      */ 
    skinTranslation: any;
  }

  export interface RetrieveAListOfThemeTranslationsInput {
  }

  export interface RetrieveAListOfThemeTranslationsOutput {
    themes: { 
    skinNo: number;
    translations: { 
    languageCode: string;
    path: string;
    }[];
    }[];
  }
  export interface RetrieveAThemeTranslationInput {
    /**
      * @description
      * 디자인 번호
      * 
      * @required
      */ 
    skinNo: any;
    /**
      * @description
      * 언어 코드
      * 
      * @required
      */ 
    languageCode: any;
  }

  export interface RetrieveAThemeTranslationOutput {
    theme: { 
    skinNo: number;
    skinCode: string;
    skinTranslation: { 
    languageCode: string;
    path: string;
    source: string;
    };
    };
  }
  export interface UpdateAThemeTranslationInput {
    /**
      * @description
      * 디자인 번호
      * 
      * @required
      */ 
    skinNo: any;
    /**
      * @description
      * 디자인 번역 정보
      * 
      * 
      */ 
    skinTranslation?: { 
    /**
      * @description
      * 언어 코드
      * 
      * 
      */ 
    languageCode: any;
    /**
      * @description
      * 소스 코드
      * 
      * 
      */ 
    source: any;
    };
  }

  export interface UpdateAThemeTranslationOutput {
    theme: { 
    skinNo: number;
    skinCode: string;
    skinTranslation: { 
    languageCode: string;
    path: string;
    source: string;
    };
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 디자인의 디자인 번역 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-theme-translations
     *
     * @example 응답 예시
     * ```json
     * {
     *     "themes": [
     *         {
     *             "skin_no": 3,
     *             "translations": [
     *                 {
     *                     "language_code": "en_US",
     *                     "path": "/locale/en_US.json"
     *                 },
     *                 {
     *                     "language_code": "es_ES",
     *                     "path": "/locale/es_ES.json"
     *                 }
     *             ]
     *         },
     *         {
     *             "skin_no": 5,
     *             "translations": [
     *                 {
     *                     "language_code": "en_US",
     *                     "path": "/locale/en_US.json"
     *                 },
     *                 {
     *                     "language_code": "es_ES",
     *                     "path": "/locale/es_ES.json"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfThemeTranslations(
      input?: RetrieveAListOfThemeTranslationsInput,
      options?: RequestOptions<RetrieveAListOfThemeTranslationsOutput['themes'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfThemeTranslationsOutput>>;
    /**
     * @description
     * 특정 디자인의 디자인 번역 정보를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-theme-translation
     *
     * @example 응답 예시
     * ```json
     * {
     *     "theme": {
     *         "skin_no": 3,
     *         "skin_code": "skin1",
     *         "skin_translation": {
     *             "language_code": "en_US",
     *             "path": "/locale/en_US.json",
     *             "source": "{\\n    \\\"MEMBER_ID\\\": {\\n        \\\"FIND_YOUR_ID\\\": \\\"Find your ID\\\",\\n        \\\"NAME\\\": \\\"Name\\\",\\n        \\\"EMAIL_ADDRESS\\\": \\\"Email address\\\",\\n        \\\"LOG_IN\\\": \\\"Log in\\\",\\n        \\\"FORGOT_PASSWORD\\\": \\\"Forgot password?\\\"\\n    }\\n}"
     *         }
     *     }
     * }
     * ```
     */
    retrieveAThemeTranslation(
      input: RetrieveAThemeTranslationInput,
      options?: RequestOptions<RetrieveAThemeTranslationOutput['theme']>,
    ): Promise<AxiosResponse<RetrieveAThemeTranslationOutput>>;
    /**
     * @description
     * 특정 디자인의 디자인 번역 정보를 수정할 수 있습니다.
     * 디자인 번역정보 수정시, 언어 코드와 소스 코드는 필수 입력 항목입니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-theme-translation
     *
     * @example 응답 예시
     * ```json
     * {
     *     "theme": {
     *         "skin_no": 3,
     *         "skin_code": "skin1",
     *         "skin_translation": {
     *             "language_code": "en_US",
     *             "path": "/locale/en_US.json",
     *             "source": "{\\n    \\\"MEMBER_ID\\\": {\\n        \\\"FIND_YOUR_ID\\\": \\\"Find your ID\\\",\\n        \\\"NAME\\\": \\\"Name\\\",\\n        \\\"EMAIL_ADDRESS\\\": \\\"Email address\\\",\\n        \\\"LOG_IN\\\": \\\"Log in\\\",\\n        \\\"FORGOT_PASSWORD\\\": \\\"Forgot password?\\\"\\n    }\\n}"
     *         }
     *     }
     * }
     * ```
     */
    updateAThemeTranslation(
      input: UpdateAThemeTranslationInput,
      options?: RequestOptions<UpdateAThemeTranslationOutput['theme']>,
    ): Promise<AxiosResponse<UpdateAThemeTranslationOutput>>;
  }
}
