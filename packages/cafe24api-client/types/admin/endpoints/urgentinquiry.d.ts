import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 긴급문의 게시물에 대해 조회할 수 있습니다.
   */
  export interface Urgentinquiry {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shop_no: any;
    /**
     * @description
     * 게시물 번호
     *
     *
     */
    article_no: any;
    /**
     * @description
     * 게시물 유형
     *
     *
     */
    article_type: any;
    /**
     * @description
     * 제목
     *
     *
     */
    title: any;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    member_id: any;
    /**
     * @description
     * 작성일 시작일자
     *
     * 날짜
     */
    start_date: any;
    /**
     * @description
     * 답변 처리 상태
     *
     * F: 미처리
     * I: 처리중
     * T: 처리완료
     *
     *
     */
    reply_status: any;
    /**
     * @description
     * 조회수
     *
     *
     */
    hit: any;
    /**
     * @description
     * 내용
     *
     *
     */
    content: any;
    /**
     * @description
     * 작성자 이메일
     *
     * 이메일
     */
    writer_email: any;
    /**
     * @description
     * 전화번호
     *
     * 전화번호
     */
    phone: any;
    /**
     * @description
     * 검색 타입
     *
     * P:상품
     * O:주문
     *
     *
     */
    search_type: any;
    /**
     * @description
     * 검색어
     *
     *
     */
    keyword: any;
    /**
     * @description
     * 첨부 파일 상세
     *
     *
     */
    attached_file_detail: any;
  }

  export interface RetrieveAnUrgentInquiryPostInput {
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
     * 작성일 시작일자
     *
     * 날짜
     */
    start_date?: any;
    /**
     * @description
     * 작성일 종료일자
     *
     * 날짜
     */
    end_date?: any;
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

  export interface RetrieveAnUrgentInquiryPostOutput {
    urgentinquiry: {
      shop_no: number;
      article_no: number;
      article_type: string;
      title: string;
      writer: string;
      member_id: string;
      start_date: Cafe24Datetime;
      reply_status: Cafe24Enum;
      hit: number;
      content: string;
      writer_email: string;
      phone: string;
      search_type: Cafe24Enum;
      keyword: string;
      attached_file_detail: {
        no: number;
        source: string;
        name: string;
      }[];
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 긴급문의 게시물을 조회합니다.
     * 게시물 유형, 답변 처리 상태, 조회수 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-an-urgent-inquiry-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "urgentinquiry": [
     *         {
     *             "shop_no": 1,
     *             "article_no": 2,
     *             "article_type": "type text",
     *             "title": "subject text",
     *             "writer": "John Doe",
     *             "member_id": "sampleid",
     *             "start_date": "2022-04-06T10:32:34+09:00",
     *             "reply_status": "T",
     *             "hit": 8,
     *             "content": "content text",
     *             "writer_email": "sample@sample.com",
     *             "phone": "010-1111-2222",
     *             "search_type": "P",
     *             "keyword": "P000000J",
     *             "attached_file_detail": [
     *                 {
     *                     "no": 1,
     *                     "source": "dev_starter_p1.png",
     *                     "name": "/2022/04/06/696717133bf7971d5125f2a05ce16d49.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "source": "dev_basic_p2.png",
     *                     "name": "/2022/04/06/d0d3944674d139312bdf79853201b4c6.png"
     *                 }
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "article_no": 3,
     *             "article_type": "type text",
     *             "title": "subject text",
     *             "writer": "John Doe",
     *             "member_id": "sampleid",
     *             "start_date": "2022-04-06T10:32:34+09:00",
     *             "reply_status": "T",
     *             "hit": 8,
     *             "content": "content text",
     *             "writer_email": "sample@sample.com",
     *             "phone": "010-1111-2222",
     *             "search_type": "P",
     *             "keyword": "P000000J",
     *             "attached_file_detail": [
     *                 {
     *                     "no": 1,
     *                     "source": "dev_starter_p1.png",
     *                     "name": "/2022/04/06/696717133bf7971d5125f2a05ce16d49.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "source": "dev_basic_p2.png",
     *                     "name": "/2022/04/06/d0d3944674d139312bdf79853201b4c6.png"
     *                 }
     *             ]
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "prev",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/urgentinquiry?limit=10&offset=0"
     *         },
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/urgentinquiry?limit=10&offset=20"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAnUrgentInquiryPost(
      input: RetrieveAnUrgentInquiryPostInput,
      options?: RequestOptions<
        RetrieveAnUrgentInquiryPostOutput['urgentinquiry'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAnUrgentInquiryPostOutput>>;
  }
}
