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
  export interface BoardsComments {
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
    /**
     * @description
     * link
     *
     *
     */
    links: any;
  }

  export interface RetrieveCommentsInBulkInput {
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
     * 해당 댓글번호 이후 검색
     *
     * 최소값: [1]
     * 최대값: [2147483647]
     */
    since_comment_no?: any;
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

  export interface RetrieveCommentsInBulkOutput {
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
      links: {
        rel: string;
        href: string;
      }[];
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-comments-in-bulk
     *
     * @example 응답 예시
     * ```json
     * {
     *     "comments": [
     *         {
     *             "shop_no": 1,
     *             "board_no": 1,
     *             "article_no": 2,
     *             "comment_no": 2,
     *             "content": "comment text",
     *             "writer": "Sample",
     *             "member_id": "sampleid",
     *             "created_date": "2019-04-02T13:43:21+09:00",
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
     *             ],
     *             "links": [
     *                 {
     *                     "rel": "next",
     *                     "href": "https://{mallid}.cafe24api.com/api/v2/admin/boards/5/comments?since_comment_no=2&limit=10"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "board_no": 1,
     *             "article_no": 2,
     *             "comment_no": 1,
     *             "content": "comment text2",
     *             "writer": "Sample3",
     *             "member_id": "sampleid3",
     *             "created_date": "2019-04-01T16:24:21+09:00",
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
     *             ],
     *             "links": [
     *                 {
     *                     "rel": "next",
     *                     "href": "https://{mallid}.cafe24api.com/api/v2/admin/boards/5/comments?since_comment_no=1&limit=10"
     *                 }
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveCommentsInBulk(
      input: RetrieveCommentsInBulkInput,
      options?: AdminRequestOptions<
        RetrieveCommentsInBulkOutput['comments'][number]
      >,
    ): Promise<AxiosResponse<RetrieveCommentsInBulkOutput>>;
  }
}
