import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   * 판매수량 통계(Reports salesvolume)는 쇼핑몰의 상품이 판매된 수량의 통계에 대한 기능입니다.
   * 판매수량은 주기적으로 집계하여 업데이트 되므로 실시간의 데이터는 아닌 점 참고 부탁 드립니다.
   */
  export interface ReportsSalesvolume {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 정산 수집 일자
     *
     * 판매량 통계가 수집된 수집 날짜
     *
     *
     */
    collectionDate: any;
    /**
     * @description
     * 정산 수집 시간
     *
     * 판매량 통계가 수집된 수집 시간
     *
     *
     */
    collectionHour: any;
    /**
     * @description
     * 상품 판매가
     *
     * 해당 상품의 가격
     *
     *
     */
    productPrice: any;
    /**
     * @description
     * 상품 옵션 가격
     *
     * 해당 품목의 옵션 추가 가격.
     *
     *
     */
    productOptionPrice: any;
    /**
     * @description
     * 결제완료 수량
     *
     * 조회 기간동안 해당 품목이 결제 완료된 수량
     *
     *
     */
    settleCount: any;
    /**
     * @description
     * 교환완료 수량
     *
     * 조회 기간동안 해당 품목이 교환된 수량
     *
     *
     */
    exchaneProductCount: any;
    /**
     * @description
     * 취소완료 수량
     *
     * 조회 기간동안 해당 품목이 취소된 수량
     *
     *
     */
    cancelProductCount: any;
    /**
     * @description
     * 반품완료 수량
     *
     * 조회 기간동안 해당 품목이 반품된 수량
     *
     *
     */
    returnProductCount: any;
    /**
     * @description
     * 최종 데이터 갱신 시간
     *
     * 판매 수량 통계 데이터가 갱신된 시간 표시
     *
     *
     */
    updatedDate: any;
    /**
     * @description
     * 품목코드
     *
     * 해당 품목의 품목 코드
     *
     *
     */
    variantsCode: any;
    /**
     * @description
     * 상품번호
     *
     *
     */
    productNo: any;
    /**
     * @description
     * 총 판매 건수
     *
     * 해당 품목이 검색한 기간 동안 총 판매된 수량
     *
     *
     */
    totalSales: any;
  }

  export interface RetrieveASalesReportInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 상품번호
     *
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
     *
     * 조회시 상품번호(product_no)와 품목코드(variant_code) 둘 중에 하나는 반드시 포함하여야한다.
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     *
     */
    productNo?: any;
    /**
     * @description
     * 품목코드
     *
     * 판매 수량을 검색할 품목 코드
     *
     * 조회시 상품번호(product_no)와 품목코드(variant_code) 둘 중에 하나는 반드시 포함하여야한다.
     *
     *
     */
    variantsCode?: any;
    /**
     * @description
     * 분류 번호
     *
     * 판매 수량 중 특정 카테고리에서 판매된 수량 조회
     *
     *
     */
    categoryNo?: any;
    /**
     * @description
     * 모바일 PC 여부
     *
     * 판매 수량 중 모바일 웹에서 판매된 수량 조회
     *
     * T : 모바일
     * F : 그외
     *
     *
     */
    mobile?: any;
    /**
     * @description
     * 배송 유형
     *
     * 판매 수량 중 국내 또는 해외 배송 수량 조회
     *
     * A : 국내
     * B : 해외
     *
     *
     */
    deliveryType?: any;
    /**
     * @description
     * 회원 등급 번호
     *
     *
     */
    groupNo?: any;
    /**
     * @description
     * 공급사 아이디
     *
     * 판매 수량 중 특정 공급사 ID로 등록된 수량 조회
     *
     * 최대글자수 : [20자]
     */
    supplierId?: any;
    /**
     * @description
     * 검색 시작일
     *
     * 판매 수량을 조회할 검색 시작일(결제일 기준)
     * 검색 종료일과 같이 사용해야함.
     *
     * @required
     *
     * 날짜
     */
    startDate: any;
    /**
     * @description
     * 검색 종료일
     *
     * 판매 수량을 조회할 검색 종료일(결제일 기준)
     * 검색 시작일과 같이 사용해야함.
     *
     * @required
     *
     * 날짜
     */
    endDate: any;
  }

  export interface RetrieveASalesReportOutput {
    salesvolume: {
      shopNo: Cafe24Datetime;
      collectionDate: Cafe24Date;
      collectionHour: Cafe24Datetime;
      productPrice: Cafe24Datetime;
      productOptionPrice: string;
      settleCount: Cafe24Datetime;
      exchaneProductCount: Cafe24Datetime;
      cancelProductCount: Cafe24Datetime;
      returnProductCount: Cafe24Datetime;
      updatedDate: Cafe24Datetime;
      productNo: number;
      variantsCode: string;
      totalSales: Cafe24Datetime;
    }[];
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 판매수량 통계를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-sales-report
     *
     * @example 응답 예시
     * ```json
     * {
     *     "salesvolume": [
     *         {
     *             "shop_no": "1",
     *             "collection_date": "2018-10-27",
     *             "collection_hour": "12",
     *             "product_price": "10000.00",
     *             "product_option_price": "0.00",
     *             "settle_count": "2",
     *             "exchane_product_count": "0",
     *             "cancel_product_count": "0",
     *             "return_product_count": "0",
     *             "updated_date": "2018-10-27T14:51+09:00",
     *             "product_no": 16,
     *             "variants_code": "P0000BKE000A",
     *             "total_sales": "2"
     *         },
     *         {
     *             "shop_no": "1",
     *             "collection_date": "2018-10-27",
     *             "collection_hour": "12",
     *             "product_price": "10000.00",
     *             "product_option_price": "0.00",
     *             "settle_count": "23",
     *             "exchane_product_count": "0",
     *             "cancel_product_count": "0",
     *             "return_product_count": "0",
     *             "updated_date": "2018-10-27T14:51+09:00",
     *             "product_no": 16,
     *             "variants_code": "P0000BKE000B",
     *             "total_sales": "23"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveASalesReport(
      input: RetrieveASalesReportInput,
      options?: RequestOptions<
        RetrieveASalesReportOutput['salesvolume'][number]
      >,
    ): Promise<AxiosResponse<RetrieveASalesReportOutput>>;
  }
}
