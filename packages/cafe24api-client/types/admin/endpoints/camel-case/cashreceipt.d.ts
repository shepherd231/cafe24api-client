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
   * 현금영수증(Cashreceipts)은 현금으로 구매 후 구매자가 발급 받을 수 있는 결제 증빙입니다.
   * 현금영수증 리소스를 통해 현금영수증을 발급하거나 수정할 수 있고, 현재까지 발급된 현금영수증을 조회할 수 있습니다.
   * 현금영수증은 대한민국에만 있는 제도로, 한국 쇼핑몰에서만 사용할 수 있습니다.
   */
  export interface Cashreceipt {
    /**
     * @description
     * 현금영수증 번호
     *
     *
     */
    cashreceiptNo: any;
    /**
     * @description
     * 승인번호
     *
     *
     */
    approvalNo: any;
    /**
     * @description
     * 신청일자
     *
     *
     */
    requestDate: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    memberId: any;
    /**
     * @description
     * 요청자 이름
     *
     *
     */
    name: any;
    /**
     * @description
     * 상품구매금액
     *
     *
     */
    orderPriceAmount: any;
    /**
     * @description
     * 부가세
     *
     *
     */
    vat: any;
    /**
     * @description
     * 총 신청금액
     *
     *
     */
    subtotal: any;
    /**
     * @description
     * 주문상태
     *
     * 입금전: unpaid
     * 미배송: unshipped
     * 배송중: shipping
     * 배송대기: standby
     * 배송완료: shipped
     * 부분취소: partially_canceled
     * 전체취소: canceled
     *
     *
     */
    orderStatus: any;
    /**
     * @description
     * 처리상태
     *
     * 신청: request
     * 발행대기: await_issuance
     * 발행: issued
     * 발행거부: issuance_rejected
     * 신청취소: canceled_request
     * 발행취소: canceled_issuance
     * 발행실패: failed_issuance
     *
     *
     */
    status: any;
    /**
     * @description
     * 신청결제사
     *
     *
     */
    pgName: any;
    /**
     * @description
     * 현금영수증 일련 번호
     *
     *
     */
    cashBillNo: any;
    /**
     * @description
     * 발행 타입
     *
     * 개인: personal
     * 사업자: business
     *
     *
     */
    type: any;
    /**
     * @description
     * 사업자등록번호
     *
     *
     */
    companyRegistrationNo: any;
    /**
     * @description
     * 휴대전화
     *
     *
     */
    cellphone: any;
    /**
     * @description
     * 과세금액
     *
     *
     */
    taxAmount: any;
    /**
     * @description
     * 면세금액
     *
     *
     */
    taxFreeAmount: any;
    /**
     * @description
     * 공급가액
     *
     *
     */
    supplyPrice: any;
  }

  export interface RetrieveAListOfCashReceiptsInput {
    /**
     * @description
     * 검색 시작일
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
     * @required
     *
     * 날짜
     */
    endDate: any;
    /**
     * @description
     * 주문번호
     *
     * ,(콤마)로 여러 건을 검색할 수 있다.
     *
     * 주문번호
     */
    orderId?: any;
    /**
     * @description
     * 승인번호
     *
     * 최대글자수 : [9자]
     */
    approvalNo?: any;
    /**
     * @description
     * 요청자 이름
     *
     * 최대글자수 : [20자]
     */
    name?: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    memberId?: any;
    /**
     * @description
     * 처리상태
     *
     * 전체: all
     * 신청: request
     * 발행: issued
     * 신청취소: canceled_request
     * 발행취소: canceled_issuance
     * 발행실패: failed_issuance
     *
     * @default all
     *
     *
     */
    status?: any;
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

  export interface RetrieveAListOfCashReceiptsOutput {
    cashreceipt: {
      cashreceiptNo: number;
      approvalNo: Cafe24Datetime;
      requestDate: Cafe24Date;
      orderId: string;
      memberId: string;
      name: string;
      orderPriceAmount: Cafe24Datetime;
      vat: Cafe24Datetime;
      subtotal: Cafe24Datetime;
      orderStatus: string;
      status: string;
      pgName: string;
      cashBillNo: Cafe24Datetime;
    }[];
    links: {
      rel: string;
      href: string;
    }[];
  }
  export interface CreateACashReceiptInput {
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
    /**
     * @description
     * 발행 타입
     *
     * 개인: personal
     * 사업자: business
     *
     * @required
     */
    type: any;
    /**
     * @description
     * 사업자등록번호
     *
     * 사업자번호
     * 최대글자수 : [10자]
     */
    companyRegistrationNo?: any;
    /**
     * @description
     * 휴대전화
     *
     * 모바일
     * 최대글자수 : [11자]
     */
    cellphone?: any;
  }

  export interface CreateACashReceiptOutput {
    cashreceipt: {
      cashreceiptNo: number;
      approvalNo: Cafe24Datetime;
      orderId: string;
      type: string;
      companyRegistrationNo: any;
      cellphone: Cafe24Datetime;
      taxAmount: Cafe24Datetime;
      taxFreeAmount: string;
      supplyPrice: Cafe24Datetime;
      vat: Cafe24Datetime;
    };
  }
  export interface UpdateACashReceiptInput {
    /**
     * @description
     * 현금영수증 번호
     *
     * @required
     *
     * 최소값: [1]
     */
    cashreceiptNo: any;
    /**
     * @description
     * 주문번호
     *
     * @required
     *
     * 주문번호
     */
    orderId: any;
    /**
     * @description
     * 발행 타입
     *
     * 개인: personal
     * 사업자: business
     *
     *
     */
    type?: any;
    /**
     * @description
     * 사업자등록번호
     *
     * 사업자번호
     * 최대글자수 : [10자]
     */
    companyRegistrationNo?: any;
    /**
     * @description
     * 휴대전화
     *
     * 모바일
     * 최대글자수 : [11자]
     */
    cellphone?: any;
  }

  export interface UpdateACashReceiptOutput {
    cashreceipt: {
      cashreceiptNo: number;
      approvalNo: Cafe24Datetime;
      orderId: string;
      type: string;
      companyRegistrationNo: any;
      cellphone: Cafe24Datetime;
      taxAmount: Cafe24Datetime;
      taxFreeAmount: string;
      supplyPrice: Cafe24Datetime;
      vat: Cafe24Datetime;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 현재까지 발급된 현금영수증을 조회할 수 있습니다.
     * 해당 API는 한국어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-cash-receipts
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cashreceipt": [
     *         {
     *             "cashreceipt_no": 11,
     *             "approval_no": "265409188",
     *             "request_date": "2020-10-16",
     *             "order_id": "20201013-0000096",
     *             "member_id": "sampleid",
     *             "name": "John Doe",
     *             "order_price_amount": "13500.00",
     *             "vat": "1227.00",
     *             "subtotal": "13500.00",
     *             "order_status": "non_delivered",
     *             "status": "issued",
     *             "pg_name": "allat",
     *             "cash_bill_no": "2001468853"
     *         },
     *         {
     *             "cashreceipt_no": 10,
     *             "approval_no": "265409188",
     *             "request_date": "2020-10-16",
     *             "order_id": "20201013-0000102",
     *             "member_id": "sampleid",
     *             "name": "John Doe",
     *             "order_price_amount": "13500.00",
     *             "vat": "1227.00",
     *             "subtotal": "13500.00",
     *             "order_status": "canceled",
     *             "status": "canceled_issuance",
     *             "pg_name": "allat",
     *             "cash_bill_no": "2001468853"
     *         }
     *     ],
     *     "links": [
     *         {
     *             "rel": "next",
     *             "href": "https://{mallid}.cafe24api.com/api/v2/admin/cashreceipt?limit=10&offset=10"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfCashReceipts(
      input: RetrieveAListOfCashReceiptsInput,
      options?: AdminRequestOptions<
        RetrieveAListOfCashReceiptsOutput['cashreceipt'][number]
      >,
    ): Promise<AxiosResponse<RetrieveAListOfCashReceiptsOutput>>;
    /**
     * @description
     * 특정 주문 번호에 대해 현금영수증을 발급해줄 수 있습니다.
     * 해당 API는 한국어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-cash-receipt
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cashreceipt": {
     *         "cashreceipt_no": 10,
     *         "approval_no": "265409188",
     *         "order_id": "20201013-0000096",
     *         "type": "personal",
     *         "company_registration_no": null,
     *         "cellphone": "01000000000",
     *         "tax_amount": "13500.00",
     *         "tax_free_amount": "0.00",
     *         "supply_price": "12273.00",
     *         "vat": "1227.00"
     *     }
     * }
     * ```
     */
    createACashReceipt(
      input: CreateACashReceiptInput,
      options?: AdminRequestOptions<CreateACashReceiptOutput['cashreceipt']>,
    ): Promise<AxiosResponse<CreateACashReceiptOutput>>;
    /**
     * @description
     * 발급된 현금 영수증 정보를 수정할 수 있습니다.
     * 해당 API는 한국어 쇼핑몰에서만 사용 가능합니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-cash-receipt
     *
     * @example 응답 예시
     * ```json
     * {
     *     "cashreceipt": {
     *         "cashreceipt_no": 10,
     *         "approval_no": "265409188",
     *         "order_id": "20201013-0000096",
     *         "type": "personal",
     *         "company_registration_no": null,
     *         "cellphone": "01000000000",
     *         "tax_amount": "13500.00",
     *         "tax_free_amount": "0.00",
     *         "supply_price": "12273.00",
     *         "vat": "1227.00"
     *     }
     * }
     * ```
     */
    updateACashReceipt(
      input: UpdateACashReceiptInput,
      options?: AdminRequestOptions<UpdateACashReceiptOutput['cashreceipt']>,
    ): Promise<AxiosResponse<UpdateACashReceiptOutput>>;
  }
}
