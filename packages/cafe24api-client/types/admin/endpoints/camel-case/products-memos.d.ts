import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 상품 메모(Products memos)는 상품에 관한 특이사항을 메모하거나 운영자 간의 의사소통을 위한 도구로 활용할 수 있습니다.
   * 상품 메모는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   */
  export interface ProductsMemos {
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
     * 최대글자수 : [20자]
     */
    authorId: any;
    /**
     * @description
     * 생성일
     *
     * 메모를 작성한 시간.
     *
     *
     */
    createdDate: any;
    /**
     * @description
     * 메모
     *
     * 메모의 내용. HTML을 사용하여 등록할 수 있다.
     *
     *
     */
    memo: any;
  }

  export interface RetrieveAListOfProductMemosInput {
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 조회결과 시작위치
     *
     * @default 0
     *
     * 최대값: [8000]
     */
    offset?: any;
    /**
     * @description
     * 조회결과 최대건수
     *
     * 조회하고자 하는 최대 건수를 지정할 수 있음.
     * 예) 10 입력시 10건만 표시함.
     *
     * @default 10
     *
     * 최소: [1]~최대: [100]
     */
    limit?: any;
  }

  export interface RetrieveAListOfProductMemosOutput {
    memos: {
      memoNo: number;
      authorId: string;
      createdDate: Cafe24Datetime;
      memo: string;
    }[];
  }
  export interface RetrieveAProductMemoInput {
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 메모 번호
     *
     * 시스템에서 부여한 상품 메모의 고유한 번호. 상품 메모 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    memoNo: any;
  }

  export interface RetrieveAProductMemoOutput {
    memo: {
      memoNo: number;
      authorId: string;
      createdDate: Cafe24Datetime;
      memo: string;
    };
  }
  export interface CreateAProductMemoInput {
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
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
  }

  export interface CreateAProductMemoOutput {
    memo: {
      memoNo: number;
      authorId: string;
      createdDate: Cafe24Datetime;
      memo: string;
    };
  }
  export interface UpdateAProductMemoInput {
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
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
  }

  export interface UpdateAProductMemoOutput {
    memo: {
      memoNo: number;
      authorId: string;
      createdDate: Cafe24Datetime;
      memo: string;
    };
  }
  export interface DeleteAProductMemoInput {
    /**
     * @description
     * 상품번호
     *
     * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    productNo: any;
    /**
     * @description
     * 메모 번호
     *
     * 시스템에서 부여한 상품 메모의 고유한 번호. 상품 메모 번호는 쇼핑몰 내에서 중복되지 않는다.
     *
     * @required
     */
    memoNo: any;
  }

  export interface DeleteAProductMemoOutput {
    memo: {
      memoNo: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 상품에 등록된 메모를 목록으로 조회할 수 있습니다.
     * 작성자 아이디, 생성일, 메모 내용 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-product-memos
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memos": [
     *         {
     *             "memo_no": 4,
     *             "author_id": "subadmin1",
     *             "created_date": "2018-01-18T11:19:27+09:00",
     *             "memo": "This is a sample memo."
     *         },
     *         {
     *             "memo_no": 3,
     *             "author_id": "subadmin2",
     *             "created_date": "2018-01-18T11:19:27+09:00",
     *             "memo": "This is a sample memo."
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProductMemos(
      input: RetrieveAListOfProductMemosInput,
      options?: RequestOptions<
        RetrieveAListOfProductMemosOutput['memos'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfProductMemosOutput>>;
    /**
     * @description
     * 특정 상품에 등록된 메모 1개를 조회할 수 있습니다.
     * 작성자 아이디, 생성일, 메모내용 등을 조회할 수 있습니다.
     * 메모를 조회하기 위해선 메모번호가 필요합니다. 메모번호는 List all products memos 를 통해 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-product-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "memo_no": 12,
     *         "author_id": "subadmin1",
     *         "created_date": "2018-01-18T11:19:27+09:00",
     *         "memo": "This is a sample memo."
     *     }
     * }
     * ```
     */
    retrieveAProductMemo(
      input: RetrieveAProductMemoInput,
      options?: RequestOptions<RetrieveAProductMemoOutput['memo']>,
    ): Promise<AxiosResponse<RetrieveAProductMemoOutput>>;
    /**
     * @description
     * 특정 상품에 대한 메모를 등록할 수 있습니다.
     * 메모를 등록할 때에는 메모 작성자의 아이디를 입력해야 합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-product-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "memo_no": 7,
     *         "author_id": "subadmin1",
     *         "created_date": "2018-01-18T11:19:27+09:00",
     *         "memo": "This is a sample memo."
     *     }
     * }
     * ```
     */
    createAProductMemo(
      input: CreateAProductMemoInput,
      options?: RequestOptions<CreateAProductMemoOutput['memo']>,
    ): Promise<AxiosResponse<CreateAProductMemoOutput>>;
    /**
     * @description
     * 특정 상품에 등록된 메모를 수정할 수 있습니다.
     * 메모를 수정할 때에는 메모 작성자의 아이디와 메모번호를 입력해야 합니다.
     * 메모번호는 List all products memos 를 통해 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-product-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "memo_no": 7,
     *         "author_id": "subadmin2",
     *         "created_date": "2018-01-18T11:19:27+09:00",
     *         "memo": "Curabitur mollis consequat ipsum ac."
     *     }
     * }
     * ```
     */
    updateAProductMemo(
      input: UpdateAProductMemoInput,
      options?: RequestOptions<UpdateAProductMemoOutput['memo']>,
    ): Promise<AxiosResponse<UpdateAProductMemoOutput>>;
    /**
     * @description
     * 특정 상품에 등록된 메모를 삭제할 수 있습니다.
     * 메모를 삭제하기 위해선 메모번호가 필요합니다. 메모번호는 List all products memos 를 통해 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-product-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "memo_no": 12
     *     }
     * }
     * ```
     */
    deleteAProductMemo(
      input: DeleteAProductMemoInput,
      options?: RequestOptions<DeleteAProductMemoOutput['memo']>,
    ): Promise<AxiosResponse<DeleteAProductMemoOutput>>;
  }
}
