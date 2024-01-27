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
   * 주문 메모(Orders memos)는 특정 주문의 메모에 대한 주문의 하위 리소스 입니다.
   * 주문에 대하여 관리자 메모의 조회, 등록, 수정, 삭제를 할 수 있습니다.
   */
  export interface OrdersMemos {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 메모 번호
      * 
      * 
      */ 
    memo_no: any;
    /**
      * @description
      * 주문번호
      * 
      * 
      */ 
    order_id: any;
    /**
      * @description
      * 메모 등록일
      * 
      * 
      */ 
    created_date: any;
    /**
      * @description
      * 작성자 아이디
      * 
      * 
      */ 
    author_id: any;
    /**
      * @description
      * 작성자 아이피
      * 
      * 
      */ 
    ip: any;
    /**
      * @description
      * 고객상담 동시등록 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_customer_inquiry: any;
    /**
      * @description
      * 등록기준
      * 
      * O : 주문별
      * P : 품목별
      * 
      * 
      */ 
    attach_type: any;
    /**
      * @description
      * 메모 내용
      * 
      * 
      */ 
    content: any;
    /**
      * @description
      * 중요 메모 여부
      * 
      * T : 중요 메모
      * F : 일반 메모
      * 
      * 
      */ 
    starred_memo: any;
    /**
      * @description
      * 상단고정 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    fixed: any;
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    product_list: any;
    /**
      * @description
      * 상담분류
      * 
      * cs_01 : 배송문의
      * cs_02 : 상품문의
      * cs_03 : 결제문의
      * cs_04 : 주문취소
      * cs_05 : 상품변경
      * 
      * 
      */ 
    topic_type: any;
    /**
      * @description
      * 상담결과
      * 
      * F : 처리중
      * T : 처리완료
      * 
      * 
      */ 
    status: any;
  }

  export interface RetrieveAListOfAdminMemosForAnOrderInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 최소값: [1]
      */ 
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * @required
      * 
      * 주문번호
      */ 
    order_id: any;
    /**
      * @description
      * 조회결과 최대건수
      * 
      * @default 10
      * 
      * 최소: [1]~최대: [500]
      */ 
    limit?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [8000]
      */ 
    offset?: any;
  }

  export interface RetrieveAListOfAdminMemosForAnOrderOutput {
    memos: { 
    shop_no: number;
    memo_no: number;
    order_id: string;
    created_date: Cafe24Datetime;
    author_id: string;
    ip: string;
    use_customer_inquiry: Cafe24Enum;
    attach_type: Cafe24Enum;
    content: string;
    starred_memo: Cafe24Enum;
    fixed: Cafe24Enum;
    product_list: { 
    product_no: number;
    option_code: string;
    }[];
    }[];
  }
  export interface RetrieveAListOfOrderMemosInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      * 
      * 주문번호
      */ 
    order_id: any;
  }

  export interface RetrieveAListOfOrderMemosOutput {
    memos: { 
    shop_no: number;
    memo_no: number;
    created_date: Cafe24Datetime;
    author_id: string;
    ip: string;
    use_customer_inquiry: Cafe24Enum;
    attach_type: Cafe24Enum;
    content: string;
    starred_memo: Cafe24Enum;
    fixed: Cafe24Enum;
    product_list: { 
    product_no: number;
    option_code: string;
    }[];
    }[];
  }
  export interface CreateAnOrderMemoInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      * 
      * 주문번호
      */ 
    order_id: any;
    /**
      * @description
      * 메모 내용
      * 
      * @required
      * 
      * 최대글자수 : [1000자]
      */ 
    content: any;
    /**
      * @description
      * 고객상담 동시등록 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    use_customer_inquiry?: any;
    /**
      * @description
      * 상담분류
      * 
      * cs_01 : 배송문의
      * cs_02 : 상품문의
      * cs_03 : 결제문의
      * cs_04 : 주문취소
      * cs_05 : 상품변경
      * 
      * 
      */ 
    topic_type?: any;
    /**
      * @description
      * 상담결과
      * 
      * F : 처리중
      * T : 처리완료
      * 
      * 
      */ 
    status?: any;
    /**
      * @description
      * 등록기준
      * 
      * O : 주문별
      * P : 품목별
      * 
      * @default O
      * 
      * 
      */ 
    attach_type?: any;
    /**
      * @description
      * 중요 메모 여부
      * 
      * T : 중요 메모
      * F : 일반 메모
      * 
      * @default F
      * 
      * 
      */ 
    starred_memo?: any;
    /**
      * @description
      * 상단고정 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    fixed?: any;
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    product_list?: any;
  }

  export interface CreateAnOrderMemoOutput {
    memo: { 
    shop_no: number;
    memo_no: number;
    author_id: string;
    use_customer_inquiry: Cafe24Enum;
    topic_type: any;
    status: any;
    attach_type: Cafe24Enum;
    content: string;
    starred_memo: Cafe24Enum;
    fixed: Cafe24Enum;
    product_list: { 
    product_no: number;
    option_code: string;
    }[];
    };
  }
  export interface UpdateAnOrderMemoInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      * 
      * 주문번호
      */ 
    order_id: any;
    /**
      * @description
      * 메모 번호
      * 
      * @required
      */ 
    memo_no: any;
    /**
      * @description
      * 메모 내용
      * 
      * 최대글자수 : [1000자]
      */ 
    content?: any;
    /**
      * @description
      * 고객상담 동시등록 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    use_customer_inquiry?: any;
    /**
      * @description
      * 상담분류
      * 
      * cs_01 : 배송문의
      * cs_02 : 상품문의
      * cs_03 : 결제문의
      * cs_04 : 주문취소
      * cs_05 : 상품변경
      * 
      * 
      */ 
    topic_type?: any;
    /**
      * @description
      * 상담결과
      * 
      * F : 처리중
      * T : 처리완료
      * 
      * 
      */ 
    status?: any;
    /**
      * @description
      * 등록기준
      * 
      * O : 주문별
      * P : 품목별
      * 
      * @default O
      * 
      * 
      */ 
    attach_type?: any;
    /**
      * @description
      * 중요 메모 여부
      * 
      * T : 중요 메모
      * F : 일반 메모
      * 
      * @default F
      * 
      * 
      */ 
    starred_memo?: any;
    /**
      * @description
      * 상단고정 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    fixed?: any;
    /**
      * @description
      * 상품 목록
      * 
      * 
      */ 
    product_list?: any;
  }

  export interface UpdateAnOrderMemoOutput {
    memo: { 
    shop_no: number;
    memo_no: number;
    use_customer_inquiry: Cafe24Enum;
    topic_type: any;
    status: any;
    attach_type: Cafe24Enum;
    content: string;
    starred_memo: Cafe24Enum;
    fixed: Cafe24Enum;
    product_list: { 
    product_no: number;
    option_code: string;
    }[];
    };
  }
  export interface DeleteAnOrderMemoInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
    /**
      * @description
      * 주문번호
      * 
      * @required
      * 
      * 주문번호
      */ 
    order_id: any;
    /**
      * @description
      * 메모 번호
      * 
      * @required
      */ 
    memo_no: any;
  }

  export interface DeleteAnOrderMemoOutput {
    memo: { 
    shop_no: number;
    memo_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 여러개의 주문에 대한 메모를 목록으로 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-admin-memos-for-an-order
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memos": [
     *         {
     *             "shop_no": 1,
     *             "memo_no": 13,
     *             "order_id": "20200113-0000011",
     *             "created_date": "2020-01-13T09:53:33+09:00",
     *             "author_id": "sampleid",
     *             "ip": "127.0.0.1",
     *             "use_customer_inquiry": "F",
     *             "attach_type": "P",
     *             "content": "sample memo content",
     *             "starred_memo": "F",
     *             "fixed": "F",
     *             "product_list": [
     *                 {
     *                     "product_no": 11,
     *                     "option_code": "000A"
     *                 },
     *                 {
     *                     "product_no": 12,
     *                     "option_code": "000A"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "memo_no": 14,
     *             "order_id": "20200113-0000011",
     *             "created_date": "2020-01-14T10:53:41+09:00",
     *             "author_id": "sampleid",
     *             "ip": "127.0.0.1",
     *             "use_customer_inquiry": "F",
     *             "attach_type": "P",
     *             "content": "sample memo content",
     *             "starred_memo": "F",
     *             "fixed": "F",
     *             "product_list": [
     *                 {
     *                     "product_no": 11,
     *                     "option_code": "000A"
     *                 },
     *                 {
     *                     "product_no": 12,
     *                     "option_code": "000A"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfAdminMemosForAnOrder(
      input: RetrieveAListOfAdminMemosForAnOrderInput,
      options?: AdminRequestOptions<RetrieveAListOfAdminMemosForAnOrderOutput['memos'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfAdminMemosForAnOrderOutput>>;
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-order-memos
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memos": [
     *         {
     *             "shop_no": 1,
     *             "memo_no": 13,
     *             "created_date": "2020-01-13T09:53:33+09:00",
     *             "author_id": "sampleid",
     *             "ip": "127.0.0.1",
     *             "use_customer_inquiry": "F",
     *             "attach_type": "P",
     *             "content": "sample memo content",
     *             "starred_memo": "F",
     *             "fixed": "F",
     *             "product_list": [
     *                 {
     *                     "product_no": 11,
     *                     "option_code": "000A"
     *                 },
     *                 {
     *                     "product_no": 12,
     *                     "option_code": "000A"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "memo_no": 14,
     *             "created_date": "2020-01-14T10:53:41+09:00",
     *             "author_id": "sampleid",
     *             "ip": "127.0.0.1",
     *             "use_customer_inquiry": "F",
     *             "attach_type": "P",
     *             "content": "sample memo content",
     *             "starred_memo": "F",
     *             "fixed": "F",
     *             "product_list": [
     *                 {
     *                     "product_no": 11,
     *                     "option_code": "000A"
     *                 },
     *                 {
     *                     "product_no": 12,
     *                     "option_code": "000A"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfOrderMemos(
      input: RetrieveAListOfOrderMemosInput,
      options?: AdminRequestOptions<RetrieveAListOfOrderMemosOutput['memos'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfOrderMemosOutput>>;
    /**
     * @description
     * 특정 주문에 메모를 등록할 수 있습니다.
     * 메모를 등록하면서 중요메모로 표시하거나 주문서 상단에 고정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-an-order-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "shop_no": 1,
     *         "memo_no": 13,
     *         "author_id": "sampleid",
     *         "use_customer_inquiry": "F",
     *         "topic_type": null,
     *         "status": null,
     *         "attach_type": "P",
     *         "content": "sample memo content",
     *         "starred_memo": "F",
     *         "fixed": "F",
     *         "product_list": [
     *             {
     *                 "product_no": 11,
     *                 "option_code": "000A"
     *             },
     *             {
     *                 "product_no": 12,
     *                 "option_code": "000A"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    createAnOrderMemo(
      input: CreateAnOrderMemoInput,
      options?: AdminRequestOptions<CreateAnOrderMemoOutput['memo']>,
    ): Promise<AxiosResponse<CreateAnOrderMemoOutput>>;
    /**
     * @description
     * 특정 주문에 대한 메모를 수정할 수 있습니다.
     * 메모내용, 상담분류, 중요 메모 여부, 상단고정 여부 등을 변경할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-an-order-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "shop_no": 1,
     *         "memo_no": 13,
     *         "use_customer_inquiry": "F",
     *         "topic_type": null,
     *         "status": null,
     *         "attach_type": "P",
     *         "content": "sample memo content",
     *         "starred_memo": "F",
     *         "fixed": "F",
     *         "product_list": [
     *             {
     *                 "product_no": 11,
     *                 "option_code": "000A"
     *             },
     *             {
     *                 "product_no": 12,
     *                 "option_code": "000A"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateAnOrderMemo(
      input: UpdateAnOrderMemoInput,
      options?: AdminRequestOptions<UpdateAnOrderMemoOutput['memo']>,
    ): Promise<AxiosResponse<UpdateAnOrderMemoOutput>>;
    /**
     * @description
     * 특정 주문에 대한 메모를 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-an-order-memo
     *
     * @example 응답 예시
     * ```json
     * {
     *     "memo": {
     *         "shop_no": 1,
     *         "memo_no": 13
     *     }
     * }
     * ```
     */
    deleteAnOrderMemo(
      input: DeleteAnOrderMemoInput,
      options?: AdminRequestOptions<DeleteAnOrderMemoOutput['memo']>,
    ): Promise<AxiosResponse<DeleteAnOrderMemoOutput>>;
  }
}
