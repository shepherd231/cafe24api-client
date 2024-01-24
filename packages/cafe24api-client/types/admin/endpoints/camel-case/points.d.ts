import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {
  /**
   * @description
   *
   *
   * 적립금(Points)은 쇼핑몰 회원의 적립금의 조회, 증가, 차감을 할 수 있는 기능입니다.
   * 적립금은 매우 민감한 기능이므로 이용에 주의를 기울여야 합니다.
   */
  export interface Points {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: any;
    /**
     * @description
     * 적립금 타입
     *
     *
     */
    case: any;
    /**
     * @description
     * 회원아이디
     *
     *
     */
    memberId: any;
    /**
     * @description
     * 이메일
     *
     *
     */
    email: any;
    /**
     * @description
     * 회원등급명
     *
     *
     */
    groupName: any;
    /**
     * @description
     * 적립금 증가
     *
     *
     */
    availablePointsIncrease: any;
    /**
     * @description
     * 적립금 차감
     *
     *
     */
    availablePointsDecrease: any;
    /**
     * @description
     * 가용 적립금
     *
     *
     */
    availablePointsTotal: any;
    /**
     * @description
     * 미가용 적립금
     *
     *
     */
    unavailablePoints: any;
    /**
     * @description
     * 주문일
     *
     *
     */
    orderDate: any;
    /**
     * @description
     * 적립금 지급일
     *
     *
     */
    issueDate: any;
    /**
     * @description
     * 미가용 적립금 사용 가능일
     *
     *
     */
    availableDate: any;
    /**
     * @description
     * 관리자 아이디
     *
     *
     */
    adminId: any;
    /**
     * @description
     * 관리자 이름
     *
     *
     */
    adminName: any;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: any;
    /**
     * @description
     * 적립 사유
     *
     * 적립금을 증가/차감하는 사유를 입력할 수 있다.
     *
     *
     */
    reason: any;
    /**
     * @description
     * 적립금 증감액
     *
     * 1회당 최대 1,000,000원 이하까지 적립금을 지급할 수 있음.
     * 가용 적립금보다 큰 금액을 차감할 수 없다.
     *
     *
     */
    amount: any;
    /**
     * @description
     * 적립금 증가/차감 여부
     *
     * 적립금을 증가시킬지 차감시킬지 여부를 선택할 수 있다.
     *
     *
     */
    type: any;
  }

  export interface RetrievePointsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 회원아이디
     *
     * 최대글자수 : [20자]
     */
    memberId?: any;
    /**
     * @description
     * 이메일
     *
     * 이메일
     */
    email?: any;
    /**
     * @description
     * 주문아이디
     *
     * 최대글자수 : [100자]
     */
    orderId?: any;
    /**
     * @description
     * 회원등급번호
     *
     *
     */
    groupNo?: any;
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
     * 적립금 타입
     *
     * 적립금 타입 지정 없이 전체 조회시에는 D: 적립금 환불 타입은 제외되고 조회 되므로, 적립금 환불 타입을 조회하려면 타입을 지정해야 합니다.
     *
     * A : 관리자 직접 적립금 부여
     * B : 주문취소로 인한 환불시 환불금을 적립금으로 부여
     * C : 적립대기중이던 적립금 취소
     * D : 반품완료 후 사용가능
     * E : csv파일로 등록된 회원
     * F : 주문취소로 인해 상품에 대한 적립금 차감
     * G : 추천한 신규 가입자에게 적립금 부여
     * H : (기존 적립금 내역용 레거시 타입) 주문시 회원등급에 따른 적립금 부여(회원 등급 적립금)
     * I : 주문취소로 인해 회원등급에 대한 적립금 환불
     * J : 주문취소로 인해 쿠폰에 대한 적립금 환불
     * K : 주문시 회원등급에 따른 적립금 부여(회원 등급 적립금)
     * L : 주문시 사용한 쿠폰에 따른 적립금 부여(쿠폰 적립금)
     * M : 상품구매시 사용한 적립금
     * N : 신규가입시 적립금 부여
     * O : 적립금 즉시지급 쿠폰(온라인/시리얼)
     * P : 주문시 구매한 상품에 대한 적립금 부여(구매에 대한 적립금)
     * Q : 즐겨찾기 적립금
     * R : 추천받은 기존 가입자에게 적립금 부여
     * S : 주문취소시 구매에 사용한 적립금 부여(적립금 복원(주문취소))
     * T : 뉴스레터 동의 적립금
     * U : 바로가기(링콘) 설치 후 로그인
     * V : 피추천인 주문취소에 따른 감사적립금 차감
     * W : 피추천인 주문에 따른 감사적립금 부여
     * X : 바로가기(링콘) 접속 후 구매에 따른 추가 적립금 부여
     * Y : (기존 적립금 내역용 레거시 타입) 주문시 구매한 상품에 대한 적립금 부여(구매에 대한 적립금)
     * Z : 바로가기 아이콘 설치
     * AA : 바로가기(링콘) 접속 후 구매에 따른 추가 적립금 차감
     * AB : 적립금 소멸
     * AD : 회원정보 이벤트 참여 적립금
     * AE : 플러스앱 주문 적립금
     * AF : 주문취소에 의한 플러스앱주문 적립금 차감
     * AG : 오프라인구매-적립금 사용
     * AH : 오프라인취소-구매시 사용한 적립금 복원
     * AI : 이벤트팩토리 적립금
     * AK : 플러스앱 푸시알림 ON 적립금
     * AL : 플러스앱 설치 적립금
     * AM : API 를 통한 적립금
     * AN : 플러스앱 푸시 혜택받기로 인한 적립금
     * AO : 구매 확정 취소에 의한 플러스앱 적립금 차감
     * AP : 구매 확정 취소에 의한 쿠폰 적립금 차감
     * AQ : 구매 확정 취소에 의한 회원등급 적립금 차감
     * AR : 구매 확정 취소에 의한 상품 적립금 차감
     * AS : 구매 확정 취소에 의한 링콘 적립금 차감
     * 1 : SMS 수신동의 + 이메일 수신동의 적립금
     * 2 : SMS 수신동의 적립금
     * 3 : 회원 정보 수정 이벤트
     * 4 : 오프라인취소-구매시 지급한 적립금 회수
     * 5 : 오프라인구매-적립금 지급
     * 6 : [품목추가] 관리자 직접 지급 [상품] 적립금
     * 7 : [품목추가] 관리자 직접 지급 [회원] 적립금
     * 8 : [품목교환] 관리자 직접 지급 [상품] 적립금
     * 9 : [품목교환] 관리자 직접 지급 [회원] 적립금
     *
     *
     */
    case?: any;
    /**
     * @description
     * 적립금 내역
     *
     * available: 가용적립금
     * unavailable: 미가용 적립금
     * unavailable_coupon: 미가용회원/쿠폰적립금
     *
     * @default available
     *
     *
     */
    pointsCategory?: any;
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

  export interface RetrievePointsOutput {
    points: {
      shopNo: number;
      case: Cafe24Enum;
      memberId: string;
      email: string;
      groupName: string;
      availablePointsIncrease: string;
      availablePointsDecrease: any;
      availablePointsTotal: string;
      unavailablePoints: any;
      orderDate: any;
      issueDate: Cafe24Datetime;
      availableDate: any;
      adminId: string;
      adminName: any;
      orderId: any;
      reason: string;
    }[];
  }
  export interface IssueAndDeductPointsInput {
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
     * SMS는 한국어 멀티쇼핑몰에서만 발송 가능하다.
     *
     * @default 1
     *
     *
     */
    shopNo?: any;
    /**
     * @description
     * 회원아이디
     *
     * 회원 아이디
     *
     * @required
     *
     * 최대글자수 : [20자]
     */
    memberId: any;
    /**
     * @description
     * 주문번호
     *
     * 주문번호
     */
    orderId?: any;
    /**
     * @description
     * 적립금 증감액
     *
     * 1회당 최대 1,000,000원 이하까지 적립금을 지급할 수 있음.
     * 가용 적립금보다 큰 금액을 차감할 수 없다.
     *
     * @required
     *
     * 최소값: [0]
     */
    amount: any;
    /**
     * @description
     * 적립금 증가/차감 여부
     *
     * 적립금을 증가시킬지 차감시킬지 여부를 선택할 수 있다.
     *
     * increase : 증가
     * decrease : 차감
     *
     * @required
     */
    type: any;
    /**
     * @description
     * 적립 사유
     *
     * 적립금을 증가/차감하는 사유를 입력할 수 있다.
     *
     *
     */
    reason?: any;
  }

  export interface IssueAndDeductPointsOutput {
    points: {
      shopNo: number;
      memberId: string;
      orderId: string;
      amount: string;
      type: string;
      reason: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 회원의 적립금을 조회할 수 있습니다.
     * 지급 또는 차감된 적립금 각각에 대하여 타입과 사유 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-points
     *
     * @example 응답 예시
     * ```json
     * {
     *     "points": [
     *         {
     *             "shop_no": 1,
     *             "case": "A",
     *             "member_id": "testmember",
     *             "email": "sample@sample.com",
     *             "group_name": "sample group",
     *             "available_points_increase": "500.00",
     *             "available_points_decrease": null,
     *             "available_points_total": "500.00",
     *             "unavailable_points": null,
     *             "order_date": null,
     *             "issue_date": "2019-02-11T05:50:01+09:00",
     *             "available_date": null,
     *             "admin_id": "admin",
     *             "admin_name": null,
     *             "order_id": null,
     *             "reason": "New products promotion"
     *         },
     *         {
     *             "shop_no": 1,
     *             "case": "A",
     *             "member_id": "testmember",
     *             "email": "sample@sample.com",
     *             "group_name": "sample group",
     *             "available_points_increase": null,
     *             "available_points_decrease": "200.00",
     *             "available_points_total": "300.00",
     *             "unavailable_points": null,
     *             "order_date": null,
     *             "issue_date": "2019-02-11T05:55:01+09:00",
     *             "available_date": null,
     *             "admin_id": "admin",
     *             "admin_name": null,
     *             "order_id": null,
     *             "reason": "Expired Points"
     *         }
     *     ]
     * }
     * ```
     */
    retrievePoints(
      input: RetrievePointsInput,
      options?: RequestOptions<RetrievePointsOutput['points'][number]>,
    ): Promise<AxiosResponse<RetrievePointsOutput>>;
    /**
     * @description
     * 회원의 적립금의 증가, 차감 처리를 할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#issue-and-deduct-points
     *
     * @example 응답 예시
     * ```json
     * {
     *     "points": {
     *         "shop_no": 1,
     *         "member_id": "testmember",
     *         "order_id": "20200228-0000001",
     *         "amount": "10.00",
     *         "type": "increase",
     *         "reason": "New products promotion"
     *     }
     * }
     * ```
     */
    issueAndDeductPoints(
      input: IssueAndDeductPointsInput,
      options?: RequestOptions<IssueAndDeductPointsOutput['points']>,
    ): Promise<AxiosResponse<IssueAndDeductPointsOutput>>;
  }
}
