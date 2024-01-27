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
   * 댓글(Comments)은 게시물에 쇼핑몰 고객이나 관리자가 추가한 의견입니다.
   * 해당 리소스를 통해 특정 게시물에 달린 댓글을 추가/삭제하거나 조회할 수 있습니다
   */
  export interface BoardsArticlesComments {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 게시판 번호
      * 
      * 
      */ 
    board_no: any;
    /**
      * @description
      * 게시물 번호
      * 
      * 
      */ 
    article_no: any;
    /**
      * @description
      * 댓글 번호
      * 
      * 
      */ 
    comment_no: any;
    /**
      * @description
      * 댓글 내용
      * 
      * 
      */ 
    content: any;
    /**
      * @description
      * 작성자명
      * 
      * 최대글자수 : [100자]
      */ 
    writer: any;
    /**
      * @description
      * 회원아이디
      * 
      * 최대글자수 : [20자]
      */ 
    member_id: any;
    /**
      * @description
      * 생성일
      * 
      * 날짜
      */ 
    created_date: any;
    /**
      * @description
      * 작성자 IP
      * 
      * IP
      */ 
    client_ip: any;
    /**
      * @description
      * 댓글 평점
      * 
      * 최소: [1]~최대: [5]
      */ 
    rating: any;
    /**
      * @description
      * 비밀글 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    secret: any;
    /**
      * @description
      * 부모 댓글 번호
      * 
      * 
      */ 
    parent_comment_no: any;
    /**
      * @description
      * 쇼핑몰 구분
      * 
      * P : PC
      * M : 모바일
      * 
      * 
      */ 
    input_channel: any;
    /**
      * @description
      * 첨부 파일 상세
      * 
      * 
      */ 
    attach_file_urls: any;
  }

  export interface RetrieveAListOfCommentsForABoardPostInput {
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
      * 게시판 번호
      * 
      * @required
      */ 
    board_no: any;
    /**
      * @description
      * 게시물 번호
      * 
      * @required
      */ 
    article_no: any;
    /**
      * @description
      * 댓글 번호
      * 
      * 
      */ 
    comment_no?: any;
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
      * @default 10
      * 
      * 최소: [1]~최대: [100]
      */ 
    limit?: any;
  }

  export interface RetrieveAListOfCommentsForABoardPostOutput {
    comments: { 
    shop_no: number;
    board_no: number;
    article_no: number;
    comment_no: number;
    content: string;
    writer: string;
    member_id: string;
    created_date: Cafe24Datetime;
    client_ip: string;
    rating: number;
    secret: Cafe24Enum;
    parent_comment_no: any;
    input_channel: Cafe24Enum;
    attach_file_urls: { 
    no: number;
    name: string;
    url: string;
    }[];
    }[];
  }
  export interface CreateACommentForABoardPostInput {
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
      * 게시판 번호
      * 
      * @required
      */ 
    board_no: any;
    /**
      * @description
      * 게시물 번호
      * 
      * @required
      */ 
    article_no: any;
    /**
      * @description
      * 댓글 내용
      * 
      * @required
      */ 
    content: any;
    /**
      * @description
      * 작성자명
      * 
      * @required
      * 
      * 최대글자수 : [100자]
      */ 
    writer: any;
    /**
      * @description
      * 댓글 비밀번호
      * 
      * @required
      * 
      * 글자수 최소: [1자]~최대: [20자]
      */ 
    password: any;
    /**
      * @description
      * 회원아이디
      * 
      * 최대글자수 : [20자]
      */ 
    member_id?: any;
    /**
      * @description
      * 댓글 평점
      * 
      * @default 0
      * 
      * 최소: [1]~최대: [5]
      */ 
    rating?: any;
    /**
      * @description
      * 비밀글 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    secret?: any;
    /**
      * @description
      * 부모 댓글 번호
      * 
      * 최소값: [1]
      */ 
    parent_comment_no?: any;
    /**
      * @description
      * 쇼핑몰 구분
      * 
      * P : PC
      * M : 모바일
      * 
      * @default P
      * 
      * 
      */ 
    input_channel?: any;
    /**
      * @description
      * 생성일
      * 
      * 날짜
      */ 
    created_date?: any;
    /**
      * @description
      * 첨부 파일 상세
      * 
      * 
      */ 
    attach_file_urls?: { 
    /**
      * @description
      * 파일명
      * 
      * 
      */ 
    name?: any;
    /**
      * @description
      * 파일 URL
      * 
      * 
      */ 
    url?: any;
    };
  }

  export interface CreateACommentForABoardPostOutput {
    comment: { 
    shop_no: number;
    board_no: number;
    article_no: number;
    comment_no: number;
    content: string;
    writer: string;
    member_id: string;
    rating: number;
    secret: Cafe24Enum;
    parent_comment_no: number;
    input_channel: Cafe24Enum;
    created_date: Cafe24Datetime;
    client_ip: string;
    attach_file_urls: { 
    no: number;
    name: string;
    url: string;
    }[];
    };
  }
  export interface DeleteACommentForABoardPostInput {
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
      * 게시판 번호
      * 
      * @required
      */ 
    board_no: any;
    /**
      * @description
      * 게시물 번호
      * 
      * @required
      */ 
    article_no: any;
    /**
      * @description
      * 댓글 번호
      * 
      * @required
      */ 
    comment_no: any;
  }

  export interface DeleteACommentForABoardPostOutput {
    comment: { 
    shop_no: number;
    board_no: number;
    article_no: number;
    comment_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 게시물에 달린 댓글을 조회할 수 있습니다.
     * 댓글 내용, 작성자명, 회원아이디 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-comments-for-a-board-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "comments": [
     *         {
     *             "shop_no": 1,
     *             "board_no": 1,
     *             "article_no": 2,
     *             "comment_no": 1,
     *             "content": "comment text",
     *             "writer": "Sample",
     *             "member_id": "sampleid",
     *             "created_date": "2019-04-01T16:24:21+09:00",
     *             "client_ip": "127.0.0.1",
     *             "rating": 0,
     *             "secret": "F",
     *             "parent_comment_no": null,
     *             "input_channel": "P",
     *             "attach_file_urls": [
     *                 {
     *                     "no": 1,
     *                     "name": "dev_starter_p1.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2023/01/23/4f43130f0698818abc2d4b03ca7635ad.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "name": "dev_basic_p1.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2023/01/23/ea8203b11b4148f4cbf723e4e01c866f.png"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "board_no": 1,
     *             "article_no": 2,
     *             "comment_no": 2,
     *             "content": "reply text",
     *             "writer": "Sample2",
     *             "member_id": "sampleid2",
     *             "created_date": "2019-04-01T18:44:21+09:00",
     *             "client_ip": "127.0.0.2",
     *             "rating": 0,
     *             "secret": "F",
     *             "parent_comment_no": 1,
     *             "input_channel": "P",
     *             "attach_file_urls": [
     *                 {
     *                     "no": 1,
     *                     "name": "dev_starter_p2.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2023/01/23/4f43130f0698818abc2d4b03ca7635ad.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "name": "dev_basic_p2.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2023/01/23/ea8203b11b4148f4cbf723e4e01c866f.png"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "board_no": 1,
     *             "article_no": 2,
     *             "comment_no": 3,
     *             "content": "comment text2",
     *             "writer": "Sample3",
     *             "member_id": "sampleid3",
     *             "created_date": "2019-04-02T13:43:21+09:00",
     *             "client_ip": "127.0.0.3",
     *             "rating": 0,
     *             "secret": "F",
     *             "parent_comment_no": null,
     *             "input_channel": "P",
     *             "attach_file_urls": [
     *                 {
     *                     "no": 1,
     *                     "name": "dev_starter_p3.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2023/01/23/dfa1631de377efb25d76757700719233.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "name": "dev_basic_p3.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2023/01/23/e8786abe5442ddf5b725995c9e785036.png"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCommentsForABoardPost(
      input: RetrieveAListOfCommentsForABoardPostInput,
      options?: AdminRequestOptions<RetrieveAListOfCommentsForABoardPostOutput['comments'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfCommentsForABoardPostOutput>>;
    /**
     * @description
     * 특정 게시물에 댓글을 추가할 수 있으며, 댓글에 댓글을 추가할 수도 있습니다.
     * 게시물 번호, 댓글 내용 등을 필수로 입력합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-comment-for-a-board-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "comment": {
     *         "shop_no": 1,
     *         "board_no": 5,
     *         "article_no": 1,
     *         "comment_no": 2,
     *         "content": "contents text",
     *         "writer": "John Doe",
     *         "member_id": "sampleid",
     *         "rating": 5,
     *         "secret": "F",
     *         "parent_comment_no": 1,
     *         "input_channel": "P",
     *         "created_date": "2019-04-30T16:44:21+09:00",
     *         "client_ip": "127.0.0.1",
     *         "attach_file_urls": [
     *             {
     *                 "no": 1,
     *                 "name": "dev_starter_p1.png",
     *                 "url": "https://{domain}/file_data/{mall_id}/2023/01/23/4f43130f0698818abc2d4b03ca7635ad.png"
     *             },
     *             {
     *                 "no": 2,
     *                 "name": "dev_basic_p1.png",
     *                 "url": "https://{domain}/file_data/{mall_id}/2023/01/23/ea8203b11b4148f4cbf723e4e01c866f.png"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    createACommentForABoardPost(
      input: CreateACommentForABoardPostInput,
      options?: AdminRequestOptions<CreateACommentForABoardPostOutput['comment']>,
    ): Promise<AxiosResponse<CreateACommentForABoardPostOutput>>;
    /**
     * @description
     * 특정 게시물에 달린 댓글을 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-comment-for-a-board-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "comment": {
     *         "shop_no": 1,
     *         "board_no": 5,
     *         "article_no": 1,
     *         "comment_no": 1
     *     }
     * }
     * ```
     */
    deleteACommentForABoardPost(
      input: DeleteACommentForABoardPostInput,
      options?: AdminRequestOptions<DeleteACommentForABoardPostOutput['comment']>,
    ): Promise<AxiosResponse<DeleteACommentForABoardPostOutput>>;
  }
}
