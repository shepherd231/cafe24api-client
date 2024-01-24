import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 긴급문의 게시물의 답변글을 조회, 등록, 수정할 수 있습니다.
   */
  export interface UrgentinquiryReply {
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
     * 답변 등록일
     *
     * 날짜
     */
    created_date: any;
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
    status: any;
    /**
     * @description
     * 답변 내용
     *
     *
     */
    content: any;
    /**
     * @description
     * 답변 방법
     *
     * E:이메일
     * S:SMS
     * A:전부
     *
     *
     */
    method: any;
    /**
     * @description
     * 답변 처리 횟수
     *
     *
     */
    count: any;
    /**
     * @description
     * 처리중 또는 답변완료 한 운영자 아이디
     *
     *
     */
    user_id: any;
    /**
     * @description
     * 첨부 파일 상세
     *
     *
     */
    attached_file_detail: any;
  }

  export interface RetrieveAReplyForUrgentInquiryPostInput {
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
     * 게시물 번호
     *
     * @required
     */
    article_no: any;
  }

  export interface RetrieveAReplyForUrgentInquiryPostOutput {
    reply: {
      shop_no: number;
      article_no: number;
      created_date: Cafe24Datetime;
      status: Cafe24Enum;
      content: string;
      method: Cafe24Enum;
      count: number;
      user_id: string;
      attached_file_detail: {
        no: number;
        source: string;
        name: string;
      }[];
    };
  }
  export interface CreateAReplyForUrgentInquiryPostInput {
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
     * 게시물 번호
     *
     * @required
     */
    article_no: any;
    /**
     * @description
     * 답변 내용
     *
     * @required
     */
    content: any;
    /**
     * @description
     * 답변 처리 상태
     *
     * F: 미처리
     * I: 처리중
     * T: 처리완료
     *
     * @default F
     *
     *
     */
    status?: any;
    /**
     * @description
     * 처리중 또는 답변완료 한 운영자 아이디
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    user_id: any;
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
      name: any;
      /**
       * @description
       * 파일 URL
       *
       *
       */
      url: any;
    };
  }

  export interface CreateAReplyForUrgentInquiryPostOutput {
    reply: {
      shop_no: number;
      article_no: number;
      created_date: Cafe24Datetime;
      status: Cafe24Enum;
      content: string;
      method: Cafe24Enum;
      count: number;
      user_id: string;
      attached_file_detail: {
        no: number;
        source: string;
        name: string;
      }[];
    };
  }
  export interface UpdateAReplyForUrgentInquiryPostInput {
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
     * 게시물 번호
     *
     * @required
     */
    article_no: any;
    /**
     * @description
     * 답변 내용
     *
     * @required
     */
    content: any;
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
    status?: any;
    /**
     * @description
     * 처리중 또는 답변완료 한 운영자 아이디
     *
     * 최대글자수 : [20자]
     */
    user_id?: any;
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
      name: any;
      /**
       * @description
       * 파일 URL
       *
       *
       */
      url: any;
    };
  }

  export interface UpdateAReplyForUrgentInquiryPostOutput {
    reply: {
      shop_no: number;
      article_no: number;
      created_date: Cafe24Datetime;
      status: Cafe24Enum;
      content: string;
      method: Cafe24Enum;
      count: number;
      user_id: string;
      attached_file_detail: {
        no: number;
        source: string;
        name: string;
      }[];
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 긴급문의 게시물의 답변글을 조회합니다.
     * 답변 등록일, 답변 처리 상태, 답변 처리 횟수 등을 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-reply-for-urgent-inquiry-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "reply": {
     *         "shop_no": 1,
     *         "article_no": 2,
     *         "created_date": "2022-04-13T15:42:37+09:00",
     *         "status": "T",
     *         "content": "reply content text",
     *         "method": "E",
     *         "count": 2,
     *         "user_id": "admin",
     *         "attached_file_detail": [
     *             {
     *                 "no": 1,
     *                 "source": "dev_starter_p1.png",
     *                 "name": "/2022/04/06/696717133bf7971d5125f2a05ce16d49.png"
     *             },
     *             {
     *                 "no": 2,
     *                 "source": "dev_basic_p2.png",
     *                 "name": "/2022/04/06/d0d3944674d139312bdf79853201b4c6.png"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    retrieveAReplyForUrgentInquiryPost(
      input: RetrieveAReplyForUrgentInquiryPostInput,
      options?: RequestOptions<
        RetrieveAReplyForUrgentInquiryPostOutput['reply']
      >,
    ): Promise<AxiosResponse<RetrieveAReplyForUrgentInquiryPostOutput>>;
    /**
     * @description
     * 긴급문의 게시물에 답변글을 등록합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-reply-for-urgent-inquiry-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "reply": {
     *         "shop_no": 1,
     *         "article_no": 2,
     *         "created_date": "2022-04-13T15:42:37+09:00",
     *         "status": "T",
     *         "content": "reply content text",
     *         "method": "E",
     *         "count": 2,
     *         "user_id": "admin",
     *         "attached_file_detail": [
     *             {
     *                 "no": 1,
     *                 "source": "dev_starter_p1.png",
     *                 "name": "/2022/04/06/696717133bf7971d5125f2a05ce16d49.png"
     *             },
     *             {
     *                 "no": 2,
     *                 "source": "dev_basic_p2.png",
     *                 "name": "/2022/04/06/d0d3944674d139312bdf79853201b4c6.png"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    createAReplyForUrgentInquiryPost(
      input: CreateAReplyForUrgentInquiryPostInput,
      options?: RequestOptions<CreateAReplyForUrgentInquiryPostOutput['reply']>,
    ): Promise<AxiosResponse<CreateAReplyForUrgentInquiryPostOutput>>;
    /**
     * @description
     * 긴급문의 게시물의 답변글을 수정합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-reply-for-urgent-inquiry-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "reply": {
     *         "shop_no": 1,
     *         "article_no": 2,
     *         "created_date": "2022-04-13T15:42:37+09:00",
     *         "status": "T",
     *         "content": "reply content text",
     *         "method": "E",
     *         "count": 2,
     *         "user_id": "admin",
     *         "attached_file_detail": [
     *             {
     *                 "no": 1,
     *                 "source": "dev_starter_p1.png",
     *                 "name": "/2022/04/06/696717133bf7971d5125f2a05ce16d49.png"
     *             },
     *             {
     *                 "no": 2,
     *                 "source": "dev_basic_p2.png",
     *                 "name": "/2022/04/06/d0d3944674d139312bdf79853201b4c6.png"
     *             }
     *         ]
     *     }
     * }
     * ```
     */
    updateAReplyForUrgentInquiryPost(
      input: UpdateAReplyForUrgentInquiryPostInput,
      options?: RequestOptions<UpdateAReplyForUrgentInquiryPostOutput['reply']>,
    ): Promise<AxiosResponse<UpdateAReplyForUrgentInquiryPostOutput>>;
  }
}
