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
   * 긴급문의 게시물에 대해 조회할 수 있습니다.
   */
  export interface Urgentinquiry {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 
      */ 
    shopNo: any;
    /**
      * @description
      * 게시물 번호
      * 
      * 
      */ 
    articleNo: any;
    /**
      * @description
      * 게시물 유형
      * 
      * 
      */ 
    articleType: any;
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
    memberId: any;
    /**
      * @description
      * 작성일 시작일자
      * 
      * 날짜
      */ 
    startDate: any;
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
    replyStatus: any;
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
    writerEmail: any;
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
    searchType: any;
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
    attachedFileDetail: any;
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
    shopNo?: any;
    /**
      * @description
      * 작성일 시작일자
      * 
      * 날짜
      */ 
    startDate?: any;
    /**
      * @description
      * 작성일 종료일자
      * 
      * 날짜
      */ 
    endDate?: any;
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
    shopNo: number;
    articleNo: number;
    articleType: string;
    title: string;
    writer: string;
    memberId: string;
    startDate: Cafe24Datetime;
    replyStatus: Cafe24Enum;
    hit: number;
    content: string;
    writerEmail: string;
    phone: string;
    searchType: Cafe24Enum;
    keyword: string;
    attachedFileDetail: { 
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
      options?: AdminRequestOptions<RetrieveAnUrgentInquiryPostOutput['urgentinquiry'][number]>,
    ): Promise<AxiosResponse<RetrieveAnUrgentInquiryPostOutput>>;
  }
}
