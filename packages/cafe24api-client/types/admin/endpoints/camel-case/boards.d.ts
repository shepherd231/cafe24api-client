import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

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
    shopNo: any;
    /**
      * @description
      * 게시판 번호
      * 
      * 
      */ 
    boardNo: any;
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
    boardType: any;
    /**
      * @description
      * 게시판 이름
      * 
      * 
      */ 
    boardName: any;
    /**
      * @description
      * 게시판 추가여부
      * 
      * T : 추가게시판
      * F : 기본게시판
      * 
      * 
      */ 
    useAdditionalBoard: any;
    /**
      * @description
      * 게시판 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useBoard: any;
    /**
      * @description
      * 표시여부
      * 
      * T : 표시함
      * F : 표시안함
      * 
      * 
      */ 
    useDisplay: any;
    /**
      * @description
      * 정렬 순서
      * 
      * 
      */ 
    displayOrder: any;
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
    shopNo?: any;
  }

  export interface RetrieveAListOfBoardsOutput {
    boards: { 
    shopNo: number;
    boardNo: number;
    boardType: number;
    boardName: string;
    useAdditionalBoard: Cafe24Enum;
    useBoard: Cafe24Enum;
    useDisplay: Cafe24Enum;
    displayOrder: number;
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
     *             "display_order": 1
     *         },
     *         {
     *             "shop_no": 1,
     *             "board_no": 8,
     *             "board_type": 1,
     *             "board_name": "gallery",
     *             "use_additional_board": "F",
     *             "use_board": "T",
     *             "use_display": "T",
     *             "display_order": 2
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfBoards(
      input: RetrieveAListOfBoardsInput,
      options?: RequestOptions<RetrieveAListOfBoardsOutput['boards'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfBoardsOutput>>;
  }
}
