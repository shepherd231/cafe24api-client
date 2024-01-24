import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 특정 URL로 접속 했을때, 설정한 URL로 리다이렉트할 수 있는 리소스입니다.
   */
  export interface Redirects {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 최소값: [1]
      * 최대값: [2147483647]
      */ 
    shop_no: any;
    /**
      * @description
      * 리다이렉트 아이디
      * 
      * 최대값: [2147483647]
      */ 
    id: any;
    /**
      * @description
      * 리다이렉트 경로
      * 
      * 
      */ 
    path: any;
    /**
      * @description
      * 대상 위치
      * 
      * 
      */ 
    target: any;
  }

  export interface RetrieveAListOfRedirectsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      * 최대값: [2147483647]
      */ 
    shop_no?: any;
    /**
      * @description
      * 리다이렉트 아이디
      * 
      * 최소값: [1]
      * 최대값: [2147483647]
      */ 
    id?: any;
    /**
      * @description
      * 리다이렉트 경로
      * 
      * 
      */ 
    path?: any;
    /**
      * @description
      * 대상 위치
      * 
      * 
      */ 
    target?: any;
  }

  export interface RetrieveAListOfRedirectsOutput {
    redirects: { 
    shop_no: number;
    id: number;
    path: string;
    target: string;
    }[];
  }
  export interface CreateARedirectInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      * 최대값: [2147483647]
      */ 
    shop_no?: any;
    /**
      * @description
      * 리다이렉트 경로
      * 
      * @required
      */ 
    path: any;
    /**
      * @description
      * 대상 위치
      * 
      * @required
      */ 
    target: any;
  }

  export interface CreateARedirectOutput {
    redirects: { 
    shop_no: number;
    id: number;
    path: string;
    target: string;
    };
  }
  export interface UpdateARedirectInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      * 최대값: [2147483647]
      */ 
    shop_no?: any;
    /**
      * @description
      * 리다이렉트 아이디
      * 
      * @required
      * 
      * 최소값: [1]
      * 최대값: [2147483647]
      */ 
    id: any;
    /**
      * @description
      * 리다이렉트 경로
      * 
      * 
      */ 
    path?: any;
    /**
      * @description
      * 대상 위치
      * 
      * 
      */ 
    target?: any;
  }

  export interface UpdateARedirectOutput {
    redirects: { 
    shop_no: number;
    id: number;
    path: string;
    target: string;
    };
  }
  export interface DeleteARedirectInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      * 최대값: [2147483647]
      */ 
    shop_no?: any;
    /**
      * @description
      * 리다이렉트 아이디
      * 
      * @required
      * 
      * 최소값: [1]
      * 최대값: [2147483647]
      */ 
    id: any;
  }

  export interface DeleteARedirectOutput {
    redirects: { 
    shop_no: number;
    id: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 등록된 Redirect URL을 조회할 수 있습니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-redirects
     *
     * @example 응답 예시
     * ```json
     * {
     *     "redirects": [
     *         {
     *             "shop_no": 1,
     *             "id": 1,
     *             "path": "/cafe24",
     *             "target": "https://www.cafe24.com"
     *         },
     *         {
     *             "shop_no": 1,
     *             "id": 2,
     *             "path": "/developers",
     *             "target": "https://developers.cafe24.com"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfRedirects(
      input: RetrieveAListOfRedirectsInput,
      options?: RequestOptions<RetrieveAListOfRedirectsOutput['redirects'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfRedirectsOutput>>;
    /**
     * @description
     * Redirect URL을 등록할 수 있습니다.
     * 샵별 최대 1000개 등록이 가능합니다.
     * 
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-redirect
     *
     * @example 응답 예시
     * ```json
     * {
     *     "redirects": {
     *         "shop_no": 1,
     *         "id": 1,
     *         "path": "/cafe24",
     *         "target": "https://www.cafe24.com"
     *     }
     * }
     * ```
     */
    createARedirect(
      input: CreateARedirectInput,
      options?: RequestOptions<CreateARedirectOutput['redirects']>,
    ): Promise<AxiosResponse<CreateARedirectOutput>>;
    /**
     * @description
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-redirect
     *
     * @example 응답 예시
     * ```json
     * {
     *     "redirects": {
     *         "shop_no": 1,
     *         "id": 1,
     *         "path": "/cafe24",
     *         "target": "https://www.cafe24.com"
     *     }
     * }
     * ```
     */
    updateARedirect(
      input: UpdateARedirectInput,
      options?: RequestOptions<UpdateARedirectOutput['redirects']>,
    ): Promise<AxiosResponse<UpdateARedirectOutput>>;
    /**
     * @description
     * 해당 API는 특정 클라이언트만 사용할 수 있는 API입니다. 사용하시려면 카페24 개발자센터로 문의해주세요.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-redirect
     *
     * @example 응답 예시
     * ```json
     * {
     *     "redirects": {
     *         "shop_no": 1,
     *         "id": 1
     *     }
     * }
     * ```
     */
    deleteARedirect(
      input: DeleteARedirectInput,
      options?: RequestOptions<DeleteARedirectOutput['redirects']>,
    ): Promise<AxiosResponse<DeleteARedirectOutput>>;
  }
}
