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
   *
   *
   * 회원 메모(Customers memos)는 특정 회원의 메모에 대한 회원의 하위 리소스입니다.
   * 회원 메모를 통해 특정 회원에 대하여 메모를 등록, 수정, 삭제 등을 할 수 있습니다.
   */
  export interface CustomersMemos {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 메모 번호
     *
     * 시스템에서 부여한 상품 메모의 고유한 번호. 상품 메모 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     *
     */
    memoNo: any;
    /**
     * @description
     * 작성자 아이디
     *
     * 메모를 작성한 관리자의 아이디 정보.
     *
     *
     */
    authorId: any;
    /**
     * @description
     * 메모 내용
     *
     * 메모의 내용. HTML을 사용하여 등록할 수 있다.
     *
     *
     */
    memo: any;
    /**
     * @description
     * 중요 메모 여부
     *
     * 중요 메모의 구분여부.
     *
     * T : 중요 메모
     * F : 일반 메모
     *
     *
     */
    importantFlag: any;
    /**
     * @description
     * 생성일
     *
     * 메모를 작성한 시간.
     *
     *
     */
    createdDate: any;
  }

  export interface RetrieveACountOfCustomerMemosInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 회원아이디
     *
     * @required
     */
    memberId: any;
  }

  export interface RetrieveACountOfCustomerMemosOutput {
    count: number;
  }
  export interface RetrieveAListOfCustomerMemosInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 회원아이디
     *
     * @required
     */
    memberId: any;
    /**
     * @description
     * 검색 시작일
     *
     * 날짜
     */
    startDate?: any;
    /**
     * @description
     * 검색 종료일
     *
     * 날짜
     */
    endDate?: any;
    /**
     * @description
     * 중요 메모 여부
     *
     * T : 중요 메모
     * F : 일반 메모
     *
     *
     */
    importantFlag?: any;
    /**
     * @description
     * 메모
     *
     *
     */
    memo?: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [10000]
     */
    offset?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfCustomerMemosOutput {
    memos: {
      shopNo: number;
      memoNo: number;
      authorId: string;
      memo: string;
      importantFlag: Cafe24Enum;
      createdDate: Cafe24Datetime;
    }[];
  }
  export interface RetrieveACustomerMemoInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 메모 번호
     *
     * 시스템에서 부여한 상품 메모의 고유한 번호. 상품 메모 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    memoNo: any;
    /**
     * @description
     * 회원아이디
     *
     * @required
     */
    memberId: any;
  }

  export interface RetrieveACustomerMemoOutput {
    memo: {
      shopNo: number;
      memoNo: number;
      authorId: string;
      memo: string;
      importantFlag: Cafe24Enum;
      createdDate: Cafe24Datetime;
    };
  }
  export interface CreateACustomerMemoInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 회원아이디
     *
     * @required
     */
    memberId: any;
    /**
     * @description
     * 작성자 아이디
     *
     * 메모를 작성한 관리자의 아이디 정보.
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    authorId: any;
    /**
     * @description
     * 메모
     *
     * 메모의 내용. HTML을 사용하여 등록할 수 있다.
     *
     * @required
     */
    memo: any;
    /**
     * @description
     * 중요 메모 여부
     *
     * 중요 메모의 구분여부.
     *
     * T : 중요 메모
     * F : 일반 메모
     *
     * @default F
     *
     *
     */
    importantFlag?: any;
  }

  export interface CreateACustomerMemoOutput {
    memo: {
      shopNo: number;
      memoNo: number;
      authorId: string;
      memo: string;
      importantFlag: Cafe24Enum;
      createdDate: Cafe24Datetime;
    };
  }
  export interface UpdateACustomerMemoInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 메모 번호
     *
     * 시스템에서 부여한 상품 메모의 고유한 번호. 상품 메모 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    memoNo: any;
    /**
     * @description
     * 회원아이디
     *
     * @required
     */
    memberId: any;
    /**
     * @description
     * 작성자 아이디
     *
     * 메모를 작성한 관리자의 아이디 정보.
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    authorId: any;
    /**
     * @description
     * 메모
     *
     * 메모의 내용. HTML을 사용하여 등록할 수 있다.
     *
     *
     */
    memo?: any;
    /**
     * @description
     * 중요 메모 여부
     *
     * 중요 메모의 구분여부.
     *
     * T : 중요 메모
     * F : 일반 메모
     *
     *
     */
    importantFlag?: any;
  }

  export interface UpdateACustomerMemoOutput {
    memo: {
      shopNo: number;
      memoNo: number;
      authorId: string;
      memo: string;
      importantFlag: Cafe24Enum;
      createdDate: Cafe24Datetime;
    };
  }
  export interface DeleteACustomerMemoInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 메모 번호
     *
     * 시스템에서 부여한 상품 메모의 고유한 번호. 상품 메모 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    memoNo: any;
    /**
     * @description
     * 회원아이디
     *
     * @required
     */
    memberId: any;
  }

  export interface DeleteACustomerMemoOutput {
    memo: {
      shopNo: number;
      memoNo: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 회원의 메모 개수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-customer-memos
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfCustomerMemos(
      input: RetrieveACountOfCustomerMemosInput,
      options?: AdminRequestOptions<
        RetrieveACountOfCustomerMemosOutput['count']
      >,
    ): Promise<AxiosResponse<RetrieveACountOfCustomerMemosOutput>>;
    /**
     * @description
     * 특정 회원에 대한 메모 목록을 조회할 수 있습니다.
     * 작성자 아이디, 메모 내용, 중요 메모 여부 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-customer-memos
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memos": [
     *         {
     *             "shop_no": 1,
     *             "memo_no": 1,
     *             "author_id": "subadmin1",
     *             "memo": "This is a sample memo.",
     *             "important_flag": "T",
     *             "created_date": "2018-01-18T11:19:27+09:00"
     *         },
     *         {
     *             "shop_no": 1,
     *             "memo_no": 2,
     *             "author_id": "subadmin2",
     *             "memo": "This is a sample memo.",
     *             "important_flag": "F",
     *             "created_date": "2018-01-18T11:19:27+09:00"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCustomerMemos(
      input: RetrieveAListOfCustomerMemosInput,
      options?: AdminRequestOptions<
        RetrieveAListOfCustomerMemosOutput['memos'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfCustomerMemosOutput>>;
    /**
     * @description
     * 특정 회원의 메모 1개를 조회할 수 있습니다.
     * 메모의 작성자 아이디, 메모 내용 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-customer-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "shop_no": 1,
     *         "memo_no": 1,
     *         "author_id": "subadmin1",
     *         "memo": "This is a sample memo.",
     *         "important_flag": "T",
     *         "created_date": "2018-01-18T11:19:27+09:00"
     *     }
     * }
     * ```
     */
    retrieveACustomerMemo(
      input: RetrieveACustomerMemoInput,
      options?: AdminRequestOptions<RetrieveACustomerMemoOutput['memo']>,
    ): Promise<AxiosResponse<RetrieveACustomerMemoOutput>>;
    /**
     * @description
     * 특정 회원에 메모를 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-customer-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "shop_no": 1,
     *         "memo_no": 1,
     *         "author_id": "subadmin1",
     *         "memo": "This is a sample memo.",
     *         "important_flag": "T",
     *         "created_date": "2018-01-18T11:19:27+09:00"
     *     }
     * }
     * ```
     */
    createACustomerMemo(
      input: CreateACustomerMemoInput,
      options?: AdminRequestOptions<CreateACustomerMemoOutput['memo']>,
    ): Promise<AxiosResponse<CreateACustomerMemoOutput>>;
    /**
     * @description
     * 특정 회원에 등록된 메모를 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-customer-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "shop_no": 1,
     *         "memo_no": 1,
     *         "author_id": "subadmin1",
     *         "memo": "This is a sample memo.",
     *         "important_flag": "T",
     *         "created_date": "2018-01-18T11:19:27+09:00"
     *     }
     * }
     * ```
     */
    updateACustomerMemo(
      input: UpdateACustomerMemoInput,
      options?: AdminRequestOptions<UpdateACustomerMemoOutput['memo']>,
    ): Promise<AxiosResponse<UpdateACustomerMemoOutput>>;
    /**
     * @description
     * 특정 회원에 등록된 메모를 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-customer-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "shop_no": 1,
     *         "memo_no": 3
     *     }
     * }
     * ```
     */
    deleteACustomerMemo(
      input: DeleteACustomerMemoInput,
      options?: AdminRequestOptions<DeleteACustomerMemoOutput['memo']>,
    ): Promise<AxiosResponse<DeleteACustomerMemoOutput>>;
  }
}
