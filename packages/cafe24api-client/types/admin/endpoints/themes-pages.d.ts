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
   * 테마 페이지(Themes pages)는 쇼핑몰의 디자인 테마의 페이지에 대한 조회, 설정, 수정, 삭제를 하는 기능입니다.
   * 테마 페이지는 하위 리소스로 테마(Themes) 하위에서만 사용할 수 있습니다.
   * 
   * 
   */
  export interface ThemesPages {
    /**
      * @description
      * 디자인 번호
      * 
      * 
      */ 
    skin_no: any;
    /**
      * @description
      * 디자인 코드
      * 
      * 
      */ 
    skin_code: any;
    /**
      * @description
      * 파일 경로
      * 
      * 
      */ 
    path: any;
    /**
      * @description
      * 소스 코드
      * 
      * 
      */ 
    source: any;
    /**
      * @description
      * 화면 분류
      * 
      * 
      */ 
    display_location: any;
  }

  export interface RetrieveAThemePageInput {
    /**
      * @description
      * 디자인 번호
      * 
      * @required
      */ 
    skin_no: any;
    /**
      * @description
      * 파일 경로
      * 
      * @required
      */ 
    path: any;
  }

  export interface RetrieveAThemePageOutput {
    page: { 
    skin_no: Cafe24Datetime;
    skin_code: string;
    path: string;
    source: string;
    };
  }
  export interface CreateAThemePageInput {
    /**
      * @description
      * 디자인 번호
      * 
      * @required
      */ 
    skin_no: any;
    /**
      * @description
      * 파일/디렉토리 경로
      * 
      * @required
      */ 
    path: any;
    /**
      * @description
      * 소스 코드
      * 
      * 
      */ 
    source?: any;
    /**
      * @description
      * 화면 분류
      * 
      * 
      */ 
    display_location?: any;
  }

  export interface CreateAThemePageOutput {
    page: { 
    skin_no: Cafe24Datetime;
    skin_code: string;
    path: string;
    source: string;
    display_location: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 스킨을 지정한 테마 페이지를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-theme-page
     *
     * @example 응답 예시
     * ```json
     * {
     *     "page": {
     *         "skin_no": "1",
     *         "skin_code": "skin",
     *         "path": "/sample.html",
     *         "source": "<!--@layout(/layout/basic/main.html)-->\\n\\n<div module=\\\"Layout_Dummy\\\"></div>"
     *     }
     * }
     * ```
     */
    retrieveAThemePage(
      input: RetrieveAThemePageInput,
      options?: AdminRequestOptions<RetrieveAThemePageOutput['page']>,
    ): Promise<AxiosResponse<RetrieveAThemePageOutput>>;
    /**
     * @description
     * 테마 페이지를 설정합니다.
     * 디자인 테마를 특정 경로에 설정할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-theme-page
     *
     * @example 응답 예시
     * ```json
     * {
     *     "page": {
     *         "skin_no": "1",
     *         "skin_code": "skin",
     *         "path": "/sample.html",
     *         "source": "<!--@layout(/layout/basic/main.html)-->\\n\\n<div module=\\\"Layout_Dummy\\\"></div>",
     *         "display_location": "MAIN"
     *     }
     * }
     * ```
     */
    createAThemePage(
      input: CreateAThemePageInput,
      options?: AdminRequestOptions<CreateAThemePageOutput['page']>,
    ): Promise<AxiosResponse<CreateAThemePageOutput>>;
  }
}
