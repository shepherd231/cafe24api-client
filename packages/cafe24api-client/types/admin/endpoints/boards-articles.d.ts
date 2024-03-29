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
   * 게시물(Boards articles)은 게시판에 게시되는 게시물을 관리하기 위한 리소스입니다.
   * 특정 게시판의 게시물을 조회하거나 게시물을 생성하거나 수정, 삭제할 수 있습니다.
   */
  export interface BoardsArticles {
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
     * 최대값: [2147483647]
     */
    article_no: any;
    /**
     * @description
     * 부모 게시물 번호
     *
     *
     */
    parent_article_no: any;
    /**
     * @description
     * 게시판 번호
     *
     * @required
     */
    board_no: any;
    /**
     * @description
     * 상품번호
     *
     *
     */
    product_no: any;
    /**
     * @description
     * 분류 번호
     *
     *
     */
    category_no: any;
    /**
     * @description
     * 게시판 카테고리 번호
     *
     *
     */
    board_category_no: any;
    /**
     * @description
     * 답변 게시물 순서
     *
     *
     */
    reply_sequence: any;
    /**
     * @description
     * 답변 차수
     *
     *
     */
    reply_depth: any;
    /**
     * @description
     * 생성일
     *
     * 날짜
     */
    created_date: any;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: any;
    /**
     * @description
     * 작성자 이메일
     *
     * 이메일
     */
    writer_email: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    member_id: any;
    /**
     * @description
     * 제목
     *
     *
     */
    title: any;
    /**
     * @description
     * 내용
     *
     *
     */
    content: any;
    /**
     * @description
     * 공급사 아이디
     *
     * 형식 : [a-z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    supplier_id: any;
    /**
     * @description
     * 작성자 IP
     *
     * IP
     */
    client_ip: any;
    /**
     * @description
     * 별명
     *
     *
     */
    nick_name: any;
    /**
     * @description
     * 평점
     *
     * 최소: [1]~최대: [5]
     */
    rating: any;
    /**
     * @description
     * 매체사
     *
     * 최대글자수 : [20자]
     */
    sales_channel: any;
    /**
     * @description
     * 1:1 게시판 문의내용에 대한 답변 메일 여부
     *
     * Y : 사용함
     * N : 사용안함
     *
     *
     */
    reply_mail: any;
    /**
     * @description
     * 게시 여부
     *
     * T : 게시함
     * F : 게시안함
     *
     *
     */
    display: any;
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
     * 공지 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    notice: any;
    /**
     * @description
     * 고정글 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    fixed: any;
    /**
     * @description
     * 삭제 구분
     *
     * T : 삭제
     * F : 비삭제
     *
     *
     */
    deleted: any;
    /**
     * @description
     * 게시물 작성 경로
     *
     * P : PC
     * M : 모바일
     *
     *
     */
    input_channel: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    order_id: any;
    /**
     * @description
     * 첨부 파일 상세
     *
     *
     */
    attach_file_urls: any;
    /**
     * @description
     * 조회수
     *
     *
     */
    hit: any;
    /**
     * @description
     * 1:1 게시판 문의내용에 대한 답변여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    reply: any;
    /**
     * @description
     * 처리중 또는 답변완료 한 운영자 아이디
     *
     *
     */
    reply_user_id: any;
    /**
     * @description
     * 답변 처리 상태
     *
     * N : 답변전
     * P : 처리중
     * C : 처리완료
     *
     *
     */
    reply_status: any;
    /**
     * @description
     * 네이버페이 리뷰 아이디
     *
     *
     */
    naverpay_review_id: any;
    /**
     * @description
     * 노출시간 사용여부
     *
     *
     */
    display_time: any;
    /**
     * @description
     * 노출시간 시작 시각
     *
     *
     */
    display_time_start_hour: any;
    /**
     * @description
     * 노출시간 종료 시각
     *
     *
     */
    display_time_end_hour: any;
    /**
     * @description
     * 첨부 파일 상세
     *
     *
     */
    attached_file_detail: any;
    /**
     * @description
     * 첨부 파일 상세
     *
     *
     */
    attached_file_urls: any;
  }

  export interface RetrieveAListOfPostsForABoardInput {
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
     * 게시판 카테고리 번호
     *
     *
     */
    board_category_no?: any;
    /**
     * @description
     * 검색 시작일(작성일)
     *
     * 검색을 시작할 기준일 또는 작성일
     *
     * 날짜
     */
    start_date?: any;
    /**
     * @description
     * 검색 종료일
     *
     * 검색을 종료할 기준일
     * 검색 시작일과 같이 사용해야함. 검색기간은 한 호출에 1년 이상 검색 불가.
     *
     * 날짜
     */
    end_date?: any;
    /**
     * @description
     * 쇼핑몰 구분
     *
     * P : PC
     * M : 모바일
     *
     *
     */
    input_channel?: any;
    /**
     * @description
     * 검색 영역
     *
     * subject : 제목
     * content : 내용
     * writer_name : 작성자
     * product : 상품명
     * member_id : 회원 아이디
     *
     *
     */
    search?: any;
    /**
     * @description
     * 검색어
     *
     *
     */
    keyword?: any;
    /**
     * @description
     * 답변상태
     *
     * N : 답변 전
     * P : 처리중
     * C : 답변 완료
     *
     *
     */
    reply_status?: any;
    /**
     * @description
     * 댓글여부
     *
     * T : 있음
     * F : 없음
     *
     *
     */
    comment?: any;
    /**
     * @description
     * 첨부파일 여부
     *
     * T : 있음
     * F : 없음
     *
     *
     */
    attached_file?: any;
    /**
     * @description
     * 게시물 유형
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * all : 전체
     * normal : 일반글
     * notice : 공지글
     * fixed : 고정글
     *
     *
     */
    article_type?: any;
    /**
     * @description
     * 상품번호
     *
     *
     */
    product_no?: any;
    /**
     * @description
     * 상품정보 포함 여부
     *
     * T : 있음
     * F : 없음
     *
     *
     */
    has_product?: any;
    /**
     * @description
     * 공지 여부
     *
     * T : 있음
     * F : 없음
     *
     *
     */
    is_notice?: any;
    /**
     * @description
     * 게시 여부
     *
     * T : 있음
     * F : 없음
     *
     *
     */
    is_display?: any;
    /**
     * @description
     * 공급사 아이디
     *
     * 형식 : [a-z0-9]
     * 글자수 최소: [4자]~최대: [16자]
     */
    supplier_id?: any;
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

  export interface RetrieveAListOfPostsForABoardOutput {
    articles: {
      shop_no: number;
      article_no: number;
      parent_article_no: number;
      board_no: number;
      product_no: number;
      category_no: number;
      board_category_no: number;
      reply_sequence: number;
      reply_depth: number;
      created_date: Cafe24Datetime;
      writer: string;
      writer_email: string;
      member_id: string;
      title: string;
      content: string;
      supplier_id: string;
      client_ip: string;
      nick_name: string;
      rating: number;
      reply_mail: Cafe24Enum;
      display: Cafe24Enum;
      secret: Cafe24Enum;
      notice: Cafe24Enum;
      fixed: Cafe24Enum;
      deleted: Cafe24Enum;
      input_channel: Cafe24Enum;
      order_id: string;
      attach_file_urls: {
        no: number;
        name: string;
        url: string;
      }[];
      hit: number;
      reply: Cafe24Enum;
      reply_user_id: string;
      reply_status: Cafe24Enum;
      naverpay_review_id: string;
      display_time: Cafe24Enum;
      display_time_start_hour: number;
      display_time_end_hour: number;
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }
  export interface CreateABoardPostInput {
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
     * 작성자명
     *
     * @required
     *
     * 최대글자수 : [100자]
     */
    writer: any;
    /**
     * @description
     * 제목
     *
     * @required
     *
     * 최대글자수 : [256자]
     */
    title: any;
    /**
     * @description
     * 내용
     *
     * @required
     */
    content: any;
    /**
     * @description
     * 작성자 IP
     *
     * @required
     *
     * IP
     */
    client_ip: any;
    /**
     * @description
     * 답변 게시물 번호
     *
     * 게시물에 답변을 추가하고자 할 경우 게시물의 번호를 입력한다.
     *
     *
     */
    reply_article_no?: any;
    /**
     * @description
     * 생성일
     *
     * 날짜
     */
    created_date?: any;
    /**
     * @description
     * 작성자 이메일
     *
     * 이메일
     */
    writer_email?: any;
    /**
     * @description
     * 회원아이디
     *
     * 미입력시 대표운영자 계정으로 작성된다.
     *
     * 최대글자수 : [20자]
     */
    member_id?: any;
    /**
     * @description
     * 공지 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    notice?: any;
    /**
     * @description
     * 고정글 여부
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
     * 삭제 구분
     *
     * T : 삭제
     * F : 비삭제
     *
     * @default F
     *
     *
     */
    deleted?: any;
    /**
     * @description
     * 1:1 게시판 문의내용에 대한 답변여부
     *
     * T : 사용함
     * F : 사용안함
     *
     * @default F
     *
     *
     */
    reply?: any;
    /**
     * @description
     * 평점
     *
     * 최소: [1]~최대: [5]
     */
    rating?: any;
    /**
     * @description
     * 매체사
     *
     * 최대글자수 : [20자]
     */
    sales_channel?: any;
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
     * 게시글 비밀번호
     *
     *
     */
    password?: any;
    /**
     * @description
     * 1:1 게시판 문의내용에 대한 답변 메일 여부
     *
     * Y : 사용함
     * N : 사용안함
     *
     * @default N
     *
     *
     */
    reply_mail?: any;
    /**
     * @description
     * 게시판 카테고리 번호
     *
     *
     */
    board_category_no?: any;
    /**
     * @description
     * 별명
     *
     * 최대글자수 : [50자]
     */
    nick_name?: any;
    /**
     * @description
     * 게시물 작성 경로
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
     * 처리중 또는 답변완료 한 운영자 아이디
     *
     *
     */
    reply_user_id?: any;
    /**
     * @description
     * 답변 처리 상태
     *
     * N : 답변전
     * P : 처리중
     * C : 처리완료
     *
     *
     */
    reply_status?: any;
    /**
     * @description
     * 상품번호
     *
     * 최대값: [2147483647]
     */
    product_no?: any;
    /**
     * @description
     * 분류 번호
     *
     *
     */
    category_no?: any;
    /**
     * @description
     * 주문번호
     *
     * 주문번호
     */
    order_id?: any;
    /**
     * @description
     * 네이버페이 리뷰 아이디
     *
     *
     */
    naverpay_review_id?: any;
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

  export interface CreateABoardPostOutput {
    articles: {
      shop_no: number;
      article_no: number;
      parent_article_no: number;
      board_no: number;
      product_no: number;
      category_no: number;
      board_category_no: number;
      reply_sequence: number;
      reply_depth: number;
      created_date: Cafe24Datetime;
      writer: string;
      writer_email: string;
      member_id: string;
      title: string;
      content: string;
      client_ip: string;
      nick_name: string;
      rating: number;
      reply_mail: Cafe24Enum;
      display: Cafe24Enum;
      secret: Cafe24Enum;
      notice: Cafe24Enum;
      fixed: Cafe24Enum;
      deleted: Cafe24Enum;
      input_channel: Cafe24Enum;
      order_id: string;
      attached_file_detail: {
        no: number;
        path: string;
        name: string;
        size: number;
        source: string;
        type: string;
        ext: string;
        width: number;
        height: number;
        thumb: string;
      }[];
      hit: number;
      reply: Cafe24Enum;
      reply_user_id: string;
      reply_status: Cafe24Enum;
      naverpay_review_id: string;
    }[];
  }
  export interface UpdateABoardPostInput {
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
     * 제목
     *
     * 최대글자수 : [256자]
     */
    title?: any;
    /**
     * @description
     * 내용
     *
     *
     */
    content?: any;
    /**
     * @description
     * 평점
     *
     * 최소: [1]~최대: [5]
     */
    rating?: any;
    /**
     * @description
     * 매체사
     *
     * 최대글자수 : [20자]
     */
    sales_channel?: any;
    /**
     * @description
     * 게시판 카테고리 번호
     *
     *
     */
    board_category_no?: any;
    /**
     * @description
     * 게시 여부
     *
     * T : 게시함
     * F : 게시안함
     *
     *
     */
    display?: any;
    /**
     * @description
     * 공지 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    notice?: any;
    /**
     * @description
     * 고정글 여부
     *
     * T : 사용함
     * F : 사용안함
     *
     *
     */
    fixed?: any;
    /**
     * @description
     * 노출시간 시작 시각
     *
     *
     */
    display_time_start_hour?: any;
    /**
     * @description
     * 노출시간 종료 시각
     *
     *
     */
    display_time_end_hour?: any;
    /**
     * @description
     * 파일 URL
     *
     * URL
     */
    attach_file_url1?: any;
    /**
     * @description
     * 파일 URL
     *
     * URL
     */
    attach_file_url2?: any;
    /**
     * @description
     * 파일 URL
     *
     * URL
     */
    attach_file_url3?: any;
    /**
     * @description
     * 파일 URL
     *
     * URL
     */
    attach_file_url4?: any;
    /**
     * @description
     * 파일 URL
     *
     * URL
     */
    attach_file_url5?: any;
  }

  export interface UpdateABoardPostOutput {
    article: {
      shop_no: number;
      article_no: number;
      parent_article_no: number;
      board_no: number;
      product_no: number;
      category_no: number;
      board_category_no: number;
      reply_sequence: number;
      reply_depth: number;
      created_date: Cafe24Datetime;
      writer: string;
      writer_email: string;
      member_id: string;
      title: string;
      content: string;
      client_ip: string;
      nick_name: string;
      rating: number;
      reply_mail: Cafe24Enum;
      display: Cafe24Enum;
      secret: Cafe24Enum;
      notice: Cafe24Enum;
      fixed: Cafe24Enum;
      deleted: Cafe24Enum;
      input_channel: Cafe24Enum;
      order_id: string;
      attached_file_urls: {
        no: number;
        name: string;
        url: string;
      }[];
      hit: number;
      reply: Cafe24Enum;
      reply_user_id: string;
      reply_status: Cafe24Enum;
      naverpay_review_id: string;
      display_time: Cafe24Enum;
      display_time_start_hour: Cafe24Datetime;
      display_time_end_hour: Cafe24Datetime;
    };
  }
  export interface DeleteABoardPostInput {
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
     *
     * 최대값: [2147483647]
     */
    article_no: any;
  }

  export interface DeleteABoardPostOutput {
    article: {
      shop_no: number;
      board_no: number;
      article_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 특정 게시판의 게시물 목록을 조회할 수 있습니다.
     * 해당 API는 한국어, 일본어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-posts-for-a-board
     *
     * @example 응답 예시
     * ```json
     * {
     *     "articles": [
     *         {
     *             "shop_no": 1,
     *             "article_no": 1,
     *             "parent_article_no": 1,
     *             "board_no": 4,
     *             "product_no": 10,
     *             "category_no": 1,
     *             "board_category_no": 1,
     *             "reply_sequence": 1,
     *             "reply_depth": 0,
     *             "created_date": "2019-04-30T16:44:21+09:00",
     *             "writer": "John Doe",
     *             "writer_email": "sample@sample.com",
     *             "member_id": "sampleid",
     *             "title": "subject text1",
     *             "content": "contents text1",
     *             "supplier_id": "sample",
     *             "client_ip": "127.0.0.1",
     *             "nick_name": "sample nickname",
     *             "rating": 5,
     *             "reply_mail": "N",
     *             "display": "T",
     *             "secret": "T",
     *             "notice": "F",
     *             "fixed": "F",
     *             "deleted": "F",
     *             "input_channel": "P",
     *             "order_id": "20170710-0000013",
     *             "attach_file_urls": [
     *                 {
     *                     "no": 1,
     *                     "name": "dev_starter_p1.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2019/01/02/4f43130f0698818abc2d4b03ca7635ad.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "name": "dev_basic_p2.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2019/01/02/ea8203b11b4148f4cbf723e4e01c866f.png"
     *                 }
     *             ],
     *             "hit": 0,
     *             "reply": "F",
     *             "reply_user_id": "admin",
     *             "reply_status": "C",
     *             "naverpay_review_id": "naverid",
     *             "display_time": "T",
     *             "display_time_start_hour": 6,
     *             "display_time_end_hour": 12
     *         },
     *         {
     *             "shop_no": 1,
     *             "article_no": 2,
     *             "parent_article_no": 1,
     *             "board_no": 4,
     *             "product_no": 10,
     *             "category_no": 1,
     *             "board_category_no": 1,
     *             "reply_sequence": 1,
     *             "reply_depth": 1,
     *             "created_date": "2019-04-30T17:44:21+09:00",
     *             "writer": "John Doe",
     *             "writer_email": "sample@sample.com",
     *             "member_id": "sampleid",
     *             "title": "subject text2",
     *             "content": "contents text2",
     *             "supplier_id": "sample",
     *             "client_ip": "127.0.0.1",
     *             "nick_name": "sample nickname",
     *             "rating": 4,
     *             "reply_mail": "N",
     *             "display": "T",
     *             "secret": "T",
     *             "notice": "F",
     *             "fixed": "F",
     *             "deleted": "F",
     *             "input_channel": "P",
     *             "order_id": "20170710-0000013",
     *             "attach_file_urls": [
     *                 {
     *                     "no": 1,
     *                     "name": "dev_starter_p1.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2019/04/30/dfa1631de377efb25d78687700719233.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "name": "dev_basic_p2.png",
     *                     "url": "https://{domain}/file_data/{mall_id}/2019/04/30/e8786abe5442ddf5b725995c9e785036.png"
     *                 }
     *             ],
     *             "hit": 0,
     *             "reply": "F",
     *             "reply_user_id": "admin",
     *             "reply_status": "C",
     *             "naverpay_review_id": "naverid",
     *             "display_time": "T",
     *             "display_time_start_hour": 6,
     *             "display_time_end_hour": 12
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "prev",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/boards/4/articles?limit=10&offset=0"
     *         },
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/boards/4/articles?limit=10&offset=20"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfPostsForABoard(
      input: RetrieveAListOfPostsForABoardInput,
      options?: AdminRequestOptions<
        RetrieveAListOfPostsForABoardOutput['articles'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfPostsForABoardOutput>>;
    /**
     * @description
     * 특정 게시판에 게시물을 등록할 수 있습니다.
     * 해당 게시판이 상품 게시판일 경우 평점과 같은 정보도 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-board-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "articles": [
     *         {
     *             "shop_no": 1,
     *             "article_no": 50,
     *             "parent_article_no": 40,
     *             "board_no": 5,
     *             "product_no": 10,
     *             "category_no": 1,
     *             "board_category_no": 1,
     *             "reply_sequence": 1,
     *             "reply_depth": 1,
     *             "created_date": "2018-11-30T12:43:00+09:00",
     *             "writer": "John Doe",
     *             "writer_email": "sample@sample.com",
     *             "member_id": "sampleid",
     *             "title": "subject text1",
     *             "content": "contents text1",
     *             "client_ip": "127.0.0.1",
     *             "nick_name": "sample nickname",
     *             "rating": 0,
     *             "reply_mail": "N",
     *             "display": "T",
     *             "secret": "T",
     *             "notice": "F",
     *             "fixed": "F",
     *             "deleted": "F",
     *             "input_channel": "P",
     *             "order_id": "20170710-0000013",
     *             "attached_file_detail": [
     *                 {
     *                     "no": 1,
     *                     "path": "/2019/01/02/4f43130f0698818abc2d4b03ca7635ad.png",
     *                     "name": "/2019/01/02/4f43130f0698818abc2d4b03ca7635ad.png",
     *                     "size": 87956,
     *                     "source": "dev_starter_p1.png",
     *                     "type": "image/png",
     *                     "ext": "png",
     *                     "width": 850,
     *                     "height": 728,
     *                     "thumb": "/gallery//2019/01/02/4f43130f0698818abc2d4b03ca7635ad.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "path": "/2019/01/02/ea8203b11b4148f4cbf723e4e01c866f.png",
     *                     "name": "/2019/01/02/ea8203b11b4148f4cbf723e4e01c866f.png",
     *                     "size": 23072,
     *                     "source": "dev_basic_p2.png",
     *                     "type": "image/png",
     *                     "ext": "png",
     *                     "width": 821,
     *                     "height": 292,
     *                     "thumb": "/gallery//2019/01/02/ea8203b11b4148f4cbf723e4e01c866f.png"
     *                 }
     *             ],
     *             "hit": 0,
     *             "reply": "F",
     *             "reply_user_id": "admin",
     *             "reply_status": "C",
     *             "naverpay_review_id": "naverid"
     *         },
     *         {
     *             "shop_no": 1,
     *             "article_no": 51,
     *             "parent_article_no": 40,
     *             "board_no": 5,
     *             "product_no": 10,
     *             "category_no": 1,
     *             "board_category_no": 1,
     *             "reply_sequence": 1,
     *             "reply_depth": 1,
     *             "created_date": "2018-11-30T12:43:00+09:00",
     *             "writer": "John Doe",
     *             "writer_email": "sample@sample.com",
     *             "member_id": "sampleid",
     *             "title": "subject text2",
     *             "content": "contents text2",
     *             "client_ip": "127.0.0.1",
     *             "nick_name": "sample nickname",
     *             "rating": 0,
     *             "reply_mail": "N",
     *             "display": "T",
     *             "secret": "F",
     *             "notice": "F",
     *             "fixed": "F",
     *             "deleted": "F",
     *             "input_channel": "P",
     *             "order_id": "20170710-0000013",
     *             "attached_file_detail": [
     *                 {
     *                     "no": 1,
     *                     "path": "/2019/01/02/dfa1631de377efb25d78687700719233.png",
     *                     "name": "/2019/01/02/dfa1631de377efb25d78687700719233.png",
     *                     "size": 87956,
     *                     "source": "dev_starter_p1.png",
     *                     "type": "image/png",
     *                     "ext": "png",
     *                     "width": 850,
     *                     "height": 728,
     *                     "thumb": "/gallery//2019/01/02/dfa1631de377efb25d78687700719233.png"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "path": "/2019/01/02/e8786abe5442ddf5b725995c9e785036.png",
     *                     "name": "/2019/01/02/e8786abe5442ddf5b725995c9e785036.png",
     *                     "size": 23072,
     *                     "source": "dev_basic_p2.png",
     *                     "type": "image/png",
     *                     "ext": "png",
     *                     "width": 821,
     *                     "height": 292,
     *                     "thumb": "/gallery//2019/01/02/e8786abe5442ddf5b725995c9e785036.png"
     *                 }
     *             ],
     *             "hit": 0,
     *             "reply": "F",
     *             "reply_user_id": "admin",
     *             "reply_status": "C",
     *             "naverpay_review_id": "naverid"
     *         }
     *     ]
     * }
     * ```
     */
    createABoardPost(
      input: CreateABoardPostInput,
      options?: AdminRequestOptions<CreateABoardPostOutput['articles'][number]>,
    ): Promise<AxiosResponse<CreateABoardPostOutput>>;
    /**
     * @description
     * 특정 게시판의 게시물을 수정할 수 있습니다.
     * 게시물의 제목, 내용과 평점, 노출 시간 등의 정보를 수정할 수 있습니다.
     * 해당 API는 한국어, 일본어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-board-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "article": {
     *         "shop_no": 1,
     *         "article_no": 50,
     *         "parent_article_no": 40,
     *         "board_no": 5,
     *         "product_no": 10,
     *         "category_no": 1,
     *         "board_category_no": 1,
     *         "reply_sequence": 1,
     *         "reply_depth": 1,
     *         "created_date": "2018-11-30T12:43:00+09:00",
     *         "writer": "John Doe",
     *         "writer_email": "sample@sample.com",
     *         "member_id": "sampleid",
     *         "title": "subject text",
     *         "content": "contents text",
     *         "client_ip": "127.0.0.1",
     *         "nick_name": "sample nickname",
     *         "rating": 0,
     *         "reply_mail": "N",
     *         "display": "T",
     *         "secret": "T",
     *         "notice": "F",
     *         "fixed": "F",
     *         "deleted": "F",
     *         "input_channel": "P",
     *         "order_id": "20170710-0000013",
     *         "attached_file_urls": [
     *             {
     *                 "no": 1,
     *                 "name": "dev_starter_p1.png",
     *                 "url": "https://{domain}/file_data/{mall_id}/2019/01/02/4f43130f0698818abc2d4b03ca7635ad.png"
     *             },
     *             {
     *                 "no": 2,
     *                 "name": "dev_basic_p2.png",
     *                 "url": "https://{domain}/file_data/{mall_id}/2019/01/02/ea8203b11b4148f4cbf723e4e01c866f.png"
     *             }
     *         ],
     *         "hit": 0,
     *         "reply": "F",
     *         "reply_user_id": "admin",
     *         "reply_status": "C",
     *         "naverpay_review_id": "naverid",
     *         "display_time": "T",
     *         "display_time_start_hour": "1",
     *         "display_time_end_hour": "12"
     *     }
     * }
     * ```
     */
    updateABoardPost(
      input: UpdateABoardPostInput,
      options?: AdminRequestOptions<UpdateABoardPostOutput['article']>,
    ): Promise<AxiosResponse<UpdateABoardPostOutput>>;
    /**
     * @description
     * 특정 게시판에 있는 게시물 하나를 삭제할 수 있습니다.
     * 해당 API는 한국어, 일본어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-board-post
     *
     * @example 응답 예시
     * ```json
     * {
     *     "article": {
     *         "shop_no": 1,
     *         "board_no": 1,
     *         "article_no": 1
     *     }
     * }
     * ```
     */
    deleteABoardPost(
      input: DeleteABoardPostInput,
      options?: AdminRequestOptions<DeleteABoardPostOutput['article']>,
    ): Promise<AxiosResponse<DeleteABoardPostOutput>>;
  }
}
