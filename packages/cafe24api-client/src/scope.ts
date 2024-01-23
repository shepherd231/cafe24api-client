/**
 * @description
 * 앱에 허용할 수 있는 Scope 목록입니다.
 * 쇼핑몰 운영자 사용 권한과 쇼핑몰 회원 사용 권한의 Scope 목록은 상이합니다.
 *
 * @see https://developers.cafe24.com/app/front/app/develop/api/scope
 */
export class Scope {
  /**
   * @description
   * 상품분류(Categories), 메인진열(Mains)을 조회할 수 있습니다.
   */
  static READ_CATEGORY = 'mall.read_category';
  /**
   * @description
   * 상품분류(Categories), 메인진열(Mains)을 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_CATEGORY = 'mall.write_category';
  /**
   * @description
   * 상품(Products) 정보를 조회할 수 있습니다.
   */
  static READ_PRODUCT = 'mall.read_product';
  /**
   * @description
   * 상품(Products) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_PRODUCT = 'mall.write_product';
  /**
   * @description
   * 브랜드(Brands), 자체분류(Classification), 제조사(Manufacturers), 트렌드(Trends) 정보를 조회할 수 있습니다.
   */
  static READ_COLLECTION = 'mall.read_collection';
  /**
   * @description
   * 브랜드(Brands), 자체분류(Classification), 제조사(Manufacturers), 트렌드(Trends) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_COLLECTION = 'mall.write_collection';
  /**
   * @description
   * 공급사(Suppliers) 정보를 조회할 수 있습니다.
   */
  static READ_SUPPLY = 'mall.read_supply';
  /**
   * @description
   * 공급사(Suppliers) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_SUPPLY = 'mall.write_supply';
  /**
   * @description
   * 좋아요(Likes), 관심상품(Wishes), 장바구니(Cart) 정보를 조회할 수 있습니다.
   */
  static READ_PERSONAL = 'mall.read_personal';
  /**
   * @description
   * 좋아요(Likes), 관심상품(Wishes), 장바구니(Cart) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_PERSONAL = 'mall.write_personal';
  /**
   * @description
   * 주문(Orders) 정보를 조회할 수 있습니다.
   */
  static READ_ORDER = 'mall.read_order';
  /**
   * @description
   * 주문(Orders) 정보를 수정할 수 있습니다.
   */
  static WRITE_ORDER = 'mall.write_order';
  /**
   * @description
   * 게시판(Boards), 게시물(Articles), 덧글(Comments) 정보를 조회할 수 있습니다.
   */
  static READ_COMMUNITY = 'mall.read_community';
  /**
   * @description
   * 게시판(Boards), 게시물(Articles), 덧글(Comments) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_COMMUNITY = 'mall.write_community';
  /**
   * @description
   * 회원(Customers), 회원등급(CustomerGroup) 정보를 조회할 수 있습니다.
   */
  static READ_CUSTOMER = 'mall.read_customer';
  /**
   * @description
   * 회원(Customers), 회원등급(CustomerGroup) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_CUSTOMER = 'mall.write_customer';
  /**
   * @description
   * 메시지(Message) 정보를 조회할 수 있습니다.
   */
  static READ_NOTIFICATION = 'mall.read_notification';
  /**
   * @description
   * 메시지(Message) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_NOTIFICATION = 'mall.write_notification';
  /**
   * @description
   * 상점 설정 정보를 조회할 수 있습니다.
   */
  static READ_STORE = 'mall.read_store';
  /**
   * @description
   * 상점 설정 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_STORE = 'mall.write_store';
  /**
   * @description
   * 고객혜택(Benefits), 쿠폰(Coupons) 정보를 조회할 수 있습니다.
   */
  static READ_PROMOTION = 'mall.read_promotion';
  /**
   * @description
   * 고객혜택(Benefits), 쿠폰(Coupons) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_PROMOTION = 'mall.write_promotion';
  /**
   * @description
   * 디자인(Themes), 화면(Pages) 정보를 조회할 수 있습니다.
   */
  static READ_DESIGN = 'mall.read_design';
  /**
   * @description
   * 디자인(Themes), 화면(Pages) 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_DESIGN = 'mall.write_design';
  /**
   * @description
   * 앱 설치와 관련된 정보를 조회할 수 있습니다.
   */
  static READ_APPLICATION = 'mall.read_application';
  /**
   * @description
   * 앱 설치와 관련된 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_APPLICATION = 'mall.write_application';
  /**
   * @description
   * 매출 통계와 관련된 정보를 조회할 수 있습니다.
   */
  static READ_SALESREPORT = 'mall.read_salesreport';
  /**
   * @description
   * 매출 통계와 관련된 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_SALESREPORT = 'mall.write_salesreport';
  /**
   * @description
   * 쇼핑몰 고객의 개인정보를 조회할 수 있습니다.
   */
  static READ_PRIVACY = 'mall.read_privacy';
  /**
   * @description
   * 쇼핑몰 고객의 개인정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_PRIVACY = 'mall.write_privacy';
  /**
   * @description
   * 쇼핑몰 고객의 적립금, 예치금을 조회할 수 있습니다.
   */
  static READ_MILEAGE = 'mall.read_mileage';
  /**
   * @description
   * 쇼핑몰 고객의 적립금, 예치금을 지급/차감할 수 있습니다.
   */
  static WRITE_MILEAGE = 'mall.write_mileage';
  /**
   * @description
   * 배송, 반품 설정 정보를 조회할 수 있습니다.
   */
  static READ_SHIPPING = 'mall.read_shipping';
  /**
   * @description
   * 배송, 반품 설정 정보를 생성/수정/삭제할 수 있습니다.
   */
  static WRITE_SHIPPING = 'mall.write_shipping';
  /**
   * @description
   * 쇼핑몰 회원의 고유 식별자를 조회할 수 있습니다.
   */
  static READ_CUSTOMER_IDENTIFIER = 'mall.read_customer_Identifier';

  /**
   * @description
   * ','로 나누어진 Scope 문자열을 Scope 배열로 변환합니다.
   */
  static fromString(scope: string): string[] {
    const scopes = scope.split(',');
    const allScopes = Scope.getScopes();
    scopes.forEach((scope) => {
      if (!allScopes.includes(scope)) {
        throw new Error(`Unknown scope: ${scope}`);
      }
    });
    return scopes;
  }

  /**
   * @description
   * Scope 배열을 ','로 나누어진 Scope 문자열로 변환합니다.
   */
  static toString(scopes: string[]): string {
    return scopes.join(',');
  }

  /**
   * @description
   * 주어진 문자열이 유효한 Scope인지 확인합니다.
   */
  static isScope(value: string): boolean {
    return Scope.getScopes().includes(value);
  }

  /**
   * @description
   * 모든 Scope 목록을 반환합니다.
   */
  static getScopes(): string[] {
    return Object.entries(Scope)
      .filter(
        ([key]) =>
          !['fromString', 'toString', 'isScope', 'getScopes'].includes(key),
      )
      .map(([, value]) => value);
  }
}
