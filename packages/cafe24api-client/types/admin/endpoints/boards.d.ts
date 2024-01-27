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
   * 게시판(Boards)은 상품리뷰나 상품문의 등 고객의 반응이 글로 게시되는 공간입니다.
   * 게시판 리소스에서는 현재 쇼핑몰에 있는 게시판의 목록을 확인할 수 있습니다.
   */
  export interface Boards {
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
      * 게시판 분류
      * 
      * 1 : 운영
      * 2 : 일반
      * 3 : 자료실
      * 4 : 기타
      * 5 : 상품
      * 6 : 갤러리
      * 7 : 1:1상담
      * 11 : 한줄메모
      * 
      * 
      */ 
    board_type: any;
    /**
      * @description
      * 게시판 이름
      * 
      * 
      */ 
    board_name: any;
    /**
      * @description
      * 게시판 추가여부
      * 
      * T : 추가게시판
      * F : 기본게시판
      * 
      * 
      */ 
    use_additional_board: any;
    /**
      * @description
      * 게시판 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_board: any;
    /**
      * @description
      * 표시여부
      * 
      * T : 표시함
      * F : 표시안함
      * 
      * 
      */ 
    use_display: any;
    /**
      * @description
      * 정렬 순서
      * 
      * 
      */ 
    display_order: any;
    /**
      * @description
      * 파일 첨부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    attached_file: any;
    /**
      * @description
      * 첨부파일용량제한 (Byte)
      * 
      * 
      */ 
    attached_file_size_limit: any;
    /**
      * @description
      * 게시물 표시
      * 
      * A : 전체 게시물 표시
      * T : 첨부 파일이 있는 게시물만 표시
      * F : 첨부 파일이 없는 게시물만 표시
      * 
      * 
      */ 
    article_display_type: any;
    /**
      * @description
      * 이미지 표시
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    image_display: any;
    /**
      * @description
      * 리사이징할 이미지 폭 (px)
      * 
      * 
      */ 
    image_resize: any;
  }

  export interface RetrieveAListOfBoardsInput {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * @default 1
      * 
      * 
      */ 
    shop_no?: any;
  }

  export interface RetrieveAListOfBoardsOutput {
    boards: { 
    shop_no: number;
    board_no: number;
    board_type: number;
    board_name: string;
    use_additional_board: Cafe24Enum;
    use_board: Cafe24Enum;
    use_display: Cafe24Enum;
    display_order: number;
    attached_file: Cafe24Enum;
    attached_file_size_limit: number;
    article_display_type: Cafe24Enum;
    image_display: Cafe24Enum;
    image_resize: number;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 현재 쇼핑몰에 있는 게시판을 목록으로 조회할 수 있습니다.
     * 게시판 번호를 조회하여 게시물 조회나 댓글 조회시 사용할 수 있습니다.
     * 해당 API는 한국어, 일본어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-boards
     *
     * @example 응답 예시
     * ```json
     * {
     *     "boards": [
     *         {
     *             "shop_no": 1,
     *             "board_no": 1,
     *             "board_type": 1,
     *             "board_name": "Notice",
     *             "use_additional_board": "T",
     *             "use_board": "T",
     *             "use_display": "T",
     *             "display_order": 1,
     *             "attached_file": "F",
     *             "attached_file_size_limit": 10485760,
     *             "article_display_type": "A",
     *             "image_display": "T",
     *             "image_resize": 587
     *         },
     *         {
     *             "shop_no": 1,
     *             "board_no": 8,
     *             "board_type": 1,
     *             "board_name": "gallery",
     *             "use_additional_board": "F",
     *             "use_board": "T",
     *             "use_display": "T",
     *             "display_order": 2,
     *             "attached_file": "F",
     *             "attached_file_size_limit": 3145728,
     *             "article_display_type": "A",
     *             "image_display": "T",
     *             "image_resize": 587
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfBoards(
      input: RetrieveAListOfBoardsInput,
      options?: AdminRequestOptions<RetrieveAListOfBoardsOutput['boards'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfBoardsOutput>>;
  }
}
