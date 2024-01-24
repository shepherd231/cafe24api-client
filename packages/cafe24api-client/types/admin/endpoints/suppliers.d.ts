import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 공급사(Suppliers)는 상품의 &#34;제작정보&#34; 중 공급사에 입력하는 정보를 의미합니다.
   * 공급사는 쇼핑몰에 물품을 공급하여 상품을 팔 수 있게 하는 회사 또는 개인을 의미합니다.
   * 공급사는 상품을 구분하는 판매분류의 하나이며, 상품은 반드시 하나의 공급사를 갖고 있습니다.(미지정시 &#34;자체공급&#34;을 사용함)
   * 
   * 
   */
  export interface Suppliers {
    /**
      * @description
      * 멀티쇼핑몰 번호
      * 
      * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
      * 
      * 
      */ 
    shop_no: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 시스템이 부여한 공급사의 코드. 해당 쇼핑몰 내에서 공급사 코드는 중복되지 않는다.
      * 
      * 
      */ 
    supplier_code: any;
    /**
      * @description
      * 공급사명
      * 
      * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
      * 
      * 최대글자수 : [100자]
      */ 
    supplier_name: any;
    /**
      * @description
      * 상태
      * 
      * 해당 공급사와의 거래 현황 정보.
      * 
      * A : 거래중
      * P : 거래중지
      * N : 거래해지
      * 
      * 
      */ 
    status: any;
    /**
      * @description
      * 수수료
      * 
      * 정산유형이 수수료형(P)일 경우 사용하는 수수료 정보
      * 
      * 
      */ 
    commission: any;
    /**
      * @description
      * 정산주기
      * 
      * 공급사에 정산을 얼마나 자주할 것인지 설정할 수 있음.
      * 
      * 0 : 선택안함
      * C : 일일정산
      * B : 주간정산
      * A : 월간정산
      * 
      * 
      */ 
    payment_period: any;
    /**
      * @description
      * 거래상품 유형
      * 
      * 공급사와 거래하는 상품의 유형 정보.
      * 
      * 최대글자수 : [255자]
      */ 
    business_item: any;
    /**
      * @description
      * 정산유형
      * 
      * 공급사에 지불할 금액을 어떤 유형으로 정산할 것인지 설정할 수 있음.
      * 수수료형 : 상품의 판매가격에 수수료를 책정하여 수수료 금액을 반영하여 정산함
      * 매입형 : 상품 등록시 입력한 공급가격을 기준으로 정산함
      * 
      * P : 수수료형
      * D : 매입형
      * 
      * 
      */ 
    payment_type: any;
    /**
      * @description
      * 공급사구조
      * 
      * 공급사의 영업 형태.
      * 
      * 도매업체 : 최종 고객에게는 판매하지 않고 소매업체에 판매하는 업체
      * 사입업체 : 도매업체로부터 물건을 구입해서 소매업체에 판매하는 업체
      * 입점업체 : 쇼핑몰에 입점하여 판매중인 업체
      * 
      * WS : 도매업체
      * SF : 사입업체
      * BS : 입점업체
      * ET : 기타
      * 
      * 
      */ 
    supplier_type: any;
    /**
      * @description
      * 사용여부
      * 
      * 해당 공급사를 사용하는지 여부 표시
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_supplier: any;
    /**
      * @description
      * 등록일
      * 
      * 공급사 정보가 등록된 날짜
      * 
      * 
      */ 
    created_date: any;
    /**
      * @description
      * 수정일
      * 
      * 공급사 정보가 수정된 날짜
      * 
      * 
      */ 
    updated_date: any;
    /**
      * @description
      * 사업장 주소 국가 코드
      * 
      * 
      */ 
    country_code: any;
    /**
      * @description
      * 우편번호
      * 
      * 공급사의 사업장 주소 우편번호.
      * 
      * 최대글자수 : [10자]
      */ 
    zipcode: any;
    /**
      * @description
      * 기본 주소
      * 
      * 공급사의 사업장 주소(시/군/구 단위 표기).
      * 
      * 최대글자수 : [255자]
      */ 
    address1: any;
    /**
      * @description
      * 상세 주소
      * 
      * 공급사의 사업장 주소(상세 주소 표기).
      * 
      * 최대글자수 : [255자]
      */ 
    address2: any;
    /**
      * @description
      * 담당자
      * 
      * 공급사의 담당자 연락처 정보. 담당자는 세명까지 지정 가능하다.
      * 
      * 
      */ 
    manager_information: any;
    /**
      * @description
      * 정산시작 요일
      * 
      * 정산주기가 주간정산(B)일 경우 아래 요일에 따라 정산이 진행됨.
      * 0 : 일요일마다 정산 진행
      * 1 : 월요일마다 정산 진행
      * 2 : 화요일마다 정산 진행
      * 3 : 수요일마다 정산 진행
      * 4 : 목요일마다 정산 진행
      * 5 : 금요일마다 정산 진행
      * 6 : 토요일마다 정산 진행
      * 
      * 0 : 일요일
      * 1 : 월요일
      * 2 : 화요일
      * 3 : 수요일
      * 4 : 목요일
      * 5 : 금요일
      * 6 : 토요일
      * 
      * 최소: [0]~최대: [6]
      */ 
    payment_start_day: any;
    /**
      * @description
      * 정산종료 요일
      * 
      * 정산주기가 주간정산(B)일 경우 아래 요일에 따라 정산이 진행됨.
      * 0 : 일요일마다 정산 진행
      * 1 : 월요일마다 정산 진행
      * 2 : 화요일마다 정산 진행
      * 3 : 수요일마다 정산 진행
      * 4 : 목요일마다 정산 진행
      * 5 : 금요일마다 정산 진행
      * 6 : 토요일마다 정산 진행
      * 
      * 0 : 일요일
      * 1 : 월요일
      * 2 : 화요일
      * 3 : 수요일
      * 4 : 목요일
      * 5 : 금요일
      * 6 : 토요일
      * 
      * 최소: [0]~최대: [6]
      */ 
    payment_end_day: any;
    /**
      * @description
      * 정산시작 일
      * 
      * 정산주기가 월간정산(A)일 경우 해당 일자를 정산시작 일로 정함.
      * 
      * 최소: [1]~최대: [31]
      */ 
    payment_start_date: any;
    /**
      * @description
      * 정산종료 일
      * 
      * 정산주기가 월간정산(A)일 경우 해당 일자를 정산종료 일로 정함.
      * 
      * 최소: [1]~최대: [31]
      */ 
    payment_end_date: any;
    /**
      * @description
      * 공급사유형
      * 
      * 상품이 공급사에서 배송되는 형태.
      * 
      * 사입 : 상품을 판매자가 구입하여 구매자에게 배송함.
      * 직배송 : 상품에 주문이 들어오면 공급사가 구매자에게 바로 배송함.
      * 
      * D : 사입
      * C : 직배송
      * 
      * 
      */ 
    trading_type: any;
    /**
      * @description
      * 은행코드
      * 
      * 공급사 정산시 사용하는 계좌의 입금은행 코드
      * 
      * bank_code 
      * 
      * 최대글자수 : [50자]
      */ 
    bank_code: any;
    /**
      * @description
      * 계좌번호
      * 
      * 공급사 정산시 사용하는 계좌의 계좌 번호
      * 
      * 
      */ 
    bank_account_no: any;
    /**
      * @description
      * 예금주
      * 
      * 공급사 정산시 사용하는 계좌의 예금주 명
      * 
      * 
      */ 
    bank_account_name: any;
    /**
      * @description
      * 대표자명
      * 
      * 사업자 등록시 공급사에서 등록한 대표자명
      * 
      * 
      */ 
    president_name: any;
    /**
      * @description
      * 사업자등록번호
      * 
      * 해당 공급사의 사업자 등록 번호. 국가에 따라 해당 사업자의 등록 고유 번호가 발급되는 경우 표시한다.
      * 
      * 최대글자수 : [12자]
      */ 
    company_registration_no: any;
    /**
      * @description
      * 상호명
      * 
      * 사업자 등록시 공급사에서 등록한 상호명
      * 
      * 
      */ 
    company_name: any;
    /**
      * @description
      * 업태
      * 
      * 사업자 등록시 공급사에서 등록한 업태
      * 
      * 
      */ 
    company_condition: any;
    /**
      * @description
      * 종목
      * 
      * 사업자 등록시 공급사에서 등록한 종목
      * 
      * 
      */ 
    company_line: any;
    /**
      * @description
      * 전화번호
      * 
      * 공급사의 사업장 전화번호.
      * 
      * 최대글자수 : [20자]
      */ 
    phone: any;
    /**
      * @description
      * 팩스번호
      * 
      * 공급사의 사업장 팩스번호.
      * 
      * 최대글자수 : [20자]
      */ 
    fax: any;
    /**
      * @description
      * 정산시기
      * 
      * 정산이 되는 기준 시점.
      * 10 : 결제완료
      * 30 : 배송시작
      * 40 : 배송완료
      * 
      * 10 : 결제완료
      * 30 : 배송시작
      * 40 : 배송완료
      * 
      * 
      */ 
    payment_method: any;
    /**
      * @description
      * 시장 주소 국가 코드
      * 
      * 
      */ 
    market_country_code: any;
    /**
      * @description
      * 시장주소 우편번호
      * 
      * 최대글자수 : [10자]
      */ 
    market_zipcode: any;
    /**
      * @description
      * 시장 기본 주소
      * 
      * 
      */ 
    market_address1: any;
    /**
      * @description
      * 시장 상세 주소
      * 
      * 
      */ 
    market_address2: any;
    /**
      * @description
      * 반품 주소 국가 코드
      * 
      * 
      */ 
    exchange_country_code: any;
    /**
      * @description
      * 반품주소 우편번호
      * 
      * 최대글자수 : [10자]
      */ 
    exchange_zipcode: any;
    /**
      * @description
      * 반품 기본 주소
      * 
      * 최대글자수 : [255자]
      */ 
    exchange_address1: any;
    /**
      * @description
      * 반품 상세 주소
      * 
      * 최대글자수 : [255자]
      */ 
    exchange_address2: any;
    /**
      * @description
      * 홈페이지 주소
      * 
      * 최대글자수 : [100자]
      */ 
    homepage_url: any;
    /**
      * @description
      * 쇼핑몰 주소
      * 
      * 최대글자수 : [100자]
      */ 
    mall_url: any;
    /**
      * @description
      * 거래개시일
      * 
      * 최대글자수 : [10자]
      */ 
    account_start_date: any;
    /**
      * @description
      * 거래중지일
      * 
      * 최대글자수 : [10자]
      */ 
    account_stop_date: any;
    /**
      * @description
      * 공급사정보 표시
      * 
      * SP : 전화번호
      * SM : 사업장주소
      * MA : 시장주소
      * EA : 반품주소
      * MN : 담당자명
      * MI : 담당자연락처
      * 
      * 최대글자수 : [100자]
      */ 
    show_supplier_info: any;
    /**
      * @description
      * 메모
      * 
      * 해당 공급사에 대한 관리용 메모
      * 
      * 최대글자수 : [255자]
      */ 
    memo: any;
    /**
      * @description
      * 회사소개
      * 
      * 공급사에 대한 간략한 소개 표시. 쇼핑몰의 회사 소개 화면에 표시된다.
      * 
      * 
      */ 
    company_introduction: any;
  }

  export interface RetrieveAListOfSuppliersInput {
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
    shop_no?: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 시스템이 부여한 공급사의 코드. 해당 쇼핑몰 내에서 공급사 코드는 중복되지 않는다.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplier_code?: any;
    /**
      * @description
      * 공급사명
      * 
      * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplier_name?: any;
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
      * 조회하고자 하는 최대 건수를 지정할 수 있음.
      * 예) 10 입력시 10건만 표시함.
      * 
      * @default 10
      * 
      * 최소: [1]~최대: [100]
      */ 
    limit?: any;
  }

  export interface RetrieveAListOfSuppliersOutput {
    suppliers: { 
    shop_no: number;
    supplier_code: string;
    supplier_name: string;
    status: Cafe24Enum;
    commission: string;
    payment_period: Cafe24Enum;
    business_item: string;
    payment_type: Cafe24Enum;
    supplier_type: string;
    use_supplier: Cafe24Enum;
    created_date: string;
    updated_date: Cafe24Datetime;
    country_code: string;
    zipcode: Cafe24Datetime;
    address1: string;
    address2: string;
    manager_information: { 
    no: number;
    name: string;
    phone: string;
    email: string;
    use_sms: Cafe24Enum;
    }[];
    payment_start_day: any;
    payment_end_day: any;
    payment_start_date: number;
    payment_end_date: number;
    trading_type: Cafe24Enum;
    bank_code: string;
    bank_account_no: string;
    bank_account_name: string;
    company_registration_no: string;
    president_name: string;
    company_name: string;
    company_condition: string;
    company_line: string;
    phone: string;
    fax: string;
    }[];
  }
  export interface RetrieveACountOfSuppliersInput {
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
    shop_no?: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 시스템이 부여한 공급사의 코드. 해당 쇼핑몰 내에서 공급사 코드는 중복되지 않는다.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplier_code?: any;
    /**
      * @description
      * 공급사명
      * 
      * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplier_name?: any;
  }

  export interface RetrieveACountOfSuppliersOutput {
    count: number;
  }
  export interface RetrieveASupplierInput {
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
    shop_no?: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 시스템이 부여한 공급사의 코드. 해당 쇼핑몰 내에서 공급사 코드는 중복되지 않는다.
      * 
      * @required
      */ 
    supplier_code: any;
  }

  export interface RetrieveASupplierOutput {
    supplier: { 
    shop_no: number;
    supplier_name: string;
    supplier_code: string;
    use_supplier: Cafe24Enum;
    trading_type: Cafe24Enum;
    supplier_type: string;
    status: Cafe24Enum;
    business_item: string;
    payment_type: Cafe24Enum;
    commission: string;
    payment_period: Cafe24Enum;
    payment_method: number;
    payment_start_day: any;
    payment_end_day: any;
    payment_start_date: number;
    payment_end_date: number;
    bank_code: string;
    bank_account_no: string;
    bank_account_name: string;
    phone: string;
    fax: string;
    country_code: string;
    zipcode: Cafe24Datetime;
    address1: string;
    address2: string;
    market_country_code: string;
    market_zipcode: Cafe24Datetime;
    market_address1: string;
    market_address2: string;
    exchange_country_code: string;
    exchange_zipcode: Cafe24Datetime;
    exchange_address1: string;
    exchange_address2: string;
    homepage_url: string;
    mall_url: string;
    manager_information: { 
    no: number;
    name: string;
    phone: string;
    email: string;
    use_sms: Cafe24Enum;
    }[];
    account_start_date: Cafe24Date;
    account_stop_date: Cafe24Date;
    show_supplier_info: string;
    memo: string;
    company_registration_no: string;
    company_name: string;
    president_name: string;
    company_condition: string;
    company_line: string;
    company_introduction: string;
    };
  }
  export interface CreateASupplierInput {
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
    shop_no?: any;
    /**
      * @description
      * 공급사명
      * 
      * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
      * 
      * @required
      * 
      * 최대글자수 : [50자]
      */ 
    supplier_name: any;
    /**
      * @description
      * 담당자
      * 
      * 담당자는 최대 세명까지 입력할 수 있다.
      * 
      * 배열 최대사이즈: [3]
      */ 
    manager_information?: { 
    /**
      * @description
      * 담당자 일련번호
      * 
      * 
      */ 
    no: any;
    /**
      * @description
      * 담당자 이름
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 담당자 연락처
      * 
      * 
      */ 
    phone?: any;
    /**
      * @description
      * 담당자 이메일
      * 
      * 
      */ 
    email?: any;
    };
    /**
      * @description
      * 사용여부
      * 
      * 해당 공급사를 사용하는지 여부 표시
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default T
      * 
      * 
      */ 
    use_supplier?: any;
    /**
      * @description
      * 공급사유형
      * 
      * 상품이 공급사에서 배송되는 형태.
      * 
      * 사입 : 상품을 판매자가 구입하여 구매자에게 배송함.
      * 직배송 : 상품에 주문이 들어오면 공급사가 구매자에게 바로 배송함.
      * 
      * D : 사입
      * C : 직배송
      * 
      * @default D
      * 
      * 
      */ 
    trading_type?: any;
    /**
      * @description
      * 공급사구조
      * 
      * 공급사의 영업 형태.
      * 
      * 도매업체 : 최종 고객에게는 판매하지 않고 소매업체에 판매하는 업체
      * 사입업체 : 도매업체로부터 물건을 구입해서 소매업체에 판매하는 업체
      * 입점업체 : 쇼핑몰에 입점하여 판매중인 업체
      * 
      * WS : 도매업체
      * SF : 사입업체
      * BS : 입점업체
      * ET : 기타
      * 
      * @default WS
      * 
      * 
      */ 
    supplier_type?: any;
    /**
      * @description
      * 상태
      * 
      * 해당 공급사와의 거래 현황 정보.
      * 
      * A : 거래중
      * P : 거래중지
      * N : 거래해지
      * 
      * @default A
      * 
      * 
      */ 
    status?: any;
    /**
      * @description
      * 거래상품 유형
      * 
      * 공급사와 거래하는 상품의 유형 정보.
      * 
      * 최대글자수 : [255자]
      */ 
    business_item?: any;
    /**
      * @description
      * 정산유형
      * 
      * 공급사에 지불할 금액을 어떤 유형으로 정산할 것인지 설정할 수 있음.
      * 수수료형 : 상품의 판매가격에 수수료를 책정하여 수수료 금액을 반영하여 정산함
      * 매입형 : 상품 등록시 입력한 공급가격을 기준으로 정산함
      * 
      * P : 수수료형
      * D : 매입형
      * 
      * @default P
      * 
      * 
      */ 
    payment_type?: any;
    /**
      * @description
      * 정산주기
      * 
      * 공급사에 정산을 얼마나 자주할 것인지 설정할 수 있음.
      * 
      * 0 : 선택안함
      * C : 일일정산
      * B : 주간정산
      * A : 월간정산
      * 
      * @default 0
      * 
      * 
      */ 
    payment_period?: any;
    /**
      * @description
      * 정산시기
      * 
      * 정산이 되는 기준 시점.
      * 10 : 결제완료
      * 30 : 배송시작
      * 40 : 배송완료
      * 
      * 10 : 결제완료
      * 30 : 배송시작
      * 40 : 배송완료
      * 
      * 
      */ 
    payment_method?: any;
    /**
      * @description
      * 정산시작 요일
      * 
      * 정산주기가 주간정산(B)일 경우 아래 요일에 따라 정산이 진행됨.
      * 0 : 일요일마다 정산 진행
      * 1 : 월요일마다 정산 진행
      * 2 : 화요일마다 정산 진행
      * 3 : 수요일마다 정산 진행
      * 4 : 목요일마다 정산 진행
      * 5 : 금요일마다 정산 진행
      * 6 : 토요일마다 정산 진행
      * 
      * 0 : 일요일
      * 1 : 월요일
      * 2 : 화요일
      * 3 : 수요일
      * 4 : 목요일
      * 5 : 금요일
      * 6 : 토요일
      * 
      * 최소: [0]~최대: [6]
      */ 
    payment_start_day?: any;
    /**
      * @description
      * 정산종료 요일
      * 
      * 정산주기가 주간정산(B)일 경우 아래 요일에 따라 정산이 진행됨.
      * 0 : 일요일마다 정산 진행
      * 1 : 월요일마다 정산 진행
      * 2 : 화요일마다 정산 진행
      * 3 : 수요일마다 정산 진행
      * 4 : 목요일마다 정산 진행
      * 5 : 금요일마다 정산 진행
      * 6 : 토요일마다 정산 진행
      * 
      * 0 : 일요일
      * 1 : 월요일
      * 2 : 화요일
      * 3 : 수요일
      * 4 : 목요일
      * 5 : 금요일
      * 6 : 토요일
      * 
      * 최소: [0]~최대: [6]
      */ 
    payment_end_day?: any;
    /**
      * @description
      * 정산시작 일
      * 
      * 정산주기가 월간정산(A)일 경우 해당 일자를 정산시작 일로 정함.
      * 
      * 최소: [1]~최대: [31]
      */ 
    payment_start_date?: any;
    /**
      * @description
      * 정산종료 일
      * 
      * 정산주기가 월간정산(A)일 경우 해당 일자를 정산종료 일로 정함.
      * 
      * 최소: [1]~최대: [31]
      */ 
    payment_end_date?: any;
    /**
      * @description
      * 수수료율
      * 
      * 정산유형이 수수료형(P)일 경우 사용하는 수수료 정보
      * 
      * @default 10
      * 
      * 
      */ 
    commission?: any;
    /**
      * @description
      * 전화번호
      * 
      * 공급사의 사업장 전화번호.
      * 
      * 최대글자수 : [20자]
      * 전화번호
      */ 
    phone?: any;
    /**
      * @description
      * 팩스번호
      * 
      * 공급사의 사업장 팩스번호.
      * 
      * 최대글자수 : [20자]
      * 전화번호
      */ 
    fax?: any;
    /**
      * @description
      * 사업장 주소 국가 코드
      * 
      * 
      */ 
    country_code?: any;
    /**
      * @description
      * 우편번호
      * 
      * 공급사의 사업장 주소 우편번호.
      * 
      * 최대글자수 : [10자]
      */ 
    zipcode?: any;
    /**
      * @description
      * 기본 주소
      * 
      * 공급사의 사업장 주소(시/군/구 단위 표기).
      * 
      * 최대글자수 : [255자]
      */ 
    address1?: any;
    /**
      * @description
      * 상세 주소
      * 
      * 공급사의 사업장 주소(상세 주소 표기).
      * 
      * 최대글자수 : [255자]
      */ 
    address2?: any;
    /**
      * @description
      * 시장 주소 국가 코드
      * 
      * 
      */ 
    market_country_code?: any;
    /**
      * @description
      * 시장주소 우편번호
      * 
      * 최대글자수 : [10자]
      */ 
    market_zipcode?: any;
    /**
      * @description
      * 시장 기본 주소
      * 
      * 
      */ 
    market_address1?: any;
    /**
      * @description
      * 시장 상세 주소
      * 
      * 
      */ 
    market_address2?: any;
    /**
      * @description
      * 반품 주소 국가 코드
      * 
      * 
      */ 
    exchange_country_code?: any;
    /**
      * @description
      * 반품주소 우편번호
      * 
      * 최대글자수 : [10자]
      */ 
    exchange_zipcode?: any;
    /**
      * @description
      * 반품 기본 주소
      * 
      * 최대글자수 : [255자]
      */ 
    exchange_address1?: any;
    /**
      * @description
      * 반품 상세 주소
      * 
      * 최대글자수 : [255자]
      */ 
    exchange_address2?: any;
    /**
      * @description
      * 홈페이지 주소
      * 
      * 최대글자수 : [100자]
      */ 
    homepage_url?: any;
    /**
      * @description
      * 쇼핑몰 주소
      * 
      * 최대글자수 : [100자]
      */ 
    mall_url?: any;
    /**
      * @description
      * 거래개시일
      * 
      * 최대글자수 : [10자]
      * 날짜
      */ 
    account_start_date?: any;
    /**
      * @description
      * 거래중지일
      * 
      * 최대글자수 : [10자]
      * 날짜
      */ 
    account_stop_date?: any;
    /**
      * @description
      * 메모
      * 
      * 해당 공급사에 대한 관리용 메모
      * 
      * 최대글자수 : [255자]
      */ 
    memo?: any;
    /**
      * @description
      * 사업자등록번호
      * 
      * 해당 공급사의 사업자 등록 번호. 국가에 따라 해당 사업자의 등록 고유 번호가 발급되는 경우 표시한다.
      * 
      * 최대글자수 : [12자]
      * 사업자번호
      */ 
    company_registration_no?: any;
    /**
      * @description
      * 상호명
      * 
      * 사업자 등록시 공급사에서 등록한 상호명
      * 
      * 최대글자수 : [30자]
      */ 
    company_name?: any;
    /**
      * @description
      * 대표자명
      * 
      * 사업자 등록시 공급사에서 등록한 대표자명
      * 
      * 최대글자수 : [20자]
      */ 
    president_name?: any;
    /**
      * @description
      * 업태
      * 
      * 사업자 등록시 공급사에서 등록한 업태
      * 
      * 최대글자수 : [20자]
      */ 
    company_condition?: any;
    /**
      * @description
      * 종목
      * 
      * 사업자 등록시 공급사에서 등록한 종목
      * 
      * 최대글자수 : [20자]
      */ 
    company_line?: any;
    /**
      * @description
      * 회사소개
      * 
      * 공급사에 대한 간략한 소개 표시. 쇼핑몰의 회사 소개 화면에 표시된다.
      * 
      * 
      */ 
    company_introduction?: any;
  }

  export interface CreateASupplierOutput {
    supplier: { 
    shop_no: number;
    supplier_name: string;
    supplier_code: string;
    use_supplier: Cafe24Enum;
    trading_type: Cafe24Enum;
    supplier_type: string;
    status: Cafe24Enum;
    business_item: string;
    payment_type: Cafe24Enum;
    commission: string;
    payment_period: Cafe24Enum;
    payment_method: string;
    payment_start_date: number;
    payment_end_date: number;
    payment_start_day: any;
    payment_end_day: any;
    bank_code: any;
    bank_account_no: string;
    bank_account_name: string;
    phone: string;
    fax: string;
    country_code: string;
    zipcode: Cafe24Datetime;
    address1: string;
    address2: string;
    market_country_code: string;
    market_zipcode: Cafe24Datetime;
    market_address1: string;
    market_address2: string;
    exchange_country_code: string;
    exchange_zipcode: Cafe24Datetime;
    exchange_address1: string;
    exchange_address2: string;
    homepage_url: string;
    mall_url: string;
    manager_information: { 
    no: number;
    name: string;
    phone: string;
    email: string;
    use_sms: any;
    }[];
    account_start_date: Cafe24Date;
    account_stop_date: Cafe24Date;
    show_supplier_info: string;
    memo: string;
    company_registration_no: string;
    company_name: string;
    president_name: string;
    company_condition: string;
    company_line: string;
    company_introduction: string;
    };
  }
  export interface UpdateASupplierInput {
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
    shop_no?: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 시스템이 부여한 공급사의 코드. 해당 쇼핑몰 내에서 공급사 코드는 중복되지 않는다.
      * 
      * @required
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    supplier_code: any;
    /**
      * @description
      * 공급사명
      * 
      * 공급사의 이름. 공급사명은 쇼핑몰 관리자 화면에서 공급사를 구분할 수 있는 기본적인 정보이다.
      * 
      * 최대글자수 : [50자]
      */ 
    supplier_name?: any;
    /**
      * @description
      * 사용여부
      * 
      * 해당 공급사를 사용하는지 여부 표시
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_supplier?: any;
    /**
      * @description
      * 공급사유형
      * 
      * 상품이 공급사에서 배송되는 형태.
      * 
      * 사입 : 상품을 판매자가 구입하여 구매자에게 배송함.
      * 직배송 : 상품에 주문이 들어오면 공급사가 구매자에게 바로 배송함.
      * 
      * D : 사입
      * C : 직배송
      * 
      * 
      */ 
    trading_type?: any;
    /**
      * @description
      * 공급사구조
      * 
      * 공급사의 영업 형태.
      * 
      * 도매업체 : 최종 고객에게는 판매하지 않고 소매업체에 판매하는 업체
      * 사입업체 : 도매업체로부터 물건을 구입해서 소매업체에 판매하는 업체
      * 입점업체 : 쇼핑몰에 입점하여 판매중인 업체
      * 
      * WS : 도매업체
      * SF : 사입업체
      * BS : 입점업체
      * ET : 기타
      * 
      * 
      */ 
    supplier_type?: any;
    /**
      * @description
      * 상태
      * 
      * 해당 공급사와의 거래 현황 정보.
      * 
      * A : 거래중
      * P : 거래중지
      * N : 거래해지
      * 
      * 
      */ 
    status?: any;
    /**
      * @description
      * 정산유형
      * 
      * 공급사에 지불할 금액을 어떤 유형으로 정산할 것인지 설정할 수 있음.
      * 수수료형 : 상품의 판매가격에 수수료를 책정하여 수수료 금액을 반영하여 정산함
      * 매입형 : 상품 등록시 입력한 공급가격을 기준으로 정산함
      * 
      * P : 수수료형
      * D : 매입형
      * 
      * 
      */ 
    payment_type?: any;
    /**
      * @description
      * 정산주기
      * 
      * 공급사에 정산을 얼마나 자주할 것인지 설정할 수 있음.
      * 
      * 0 : 선택안함
      * C : 일일정산
      * B : 주간정산
      * A : 월간정산
      * 
      * 
      */ 
    payment_period?: any;
    /**
      * @description
      * 수수료율
      * 
      * 정산유형이 수수료형(P)일 경우 사용하는 수수료 정보
      * 
      * 
      */ 
    commission?: any;
    /**
      * @description
      * 담당자
      * 
      * 담당자는 세명까지 지정할 수 있으며, &#34;no&#34;를 통해 특정 담당자를 지정하여 정보를 수정할 수 있다.
      * 
      * 배열 최대사이즈: [3]
      */ 
    manager_information?: { 
    /**
      * @description
      * 담당자 일련번호
      * 
      * 
      */ 
    no: any;
    /**
      * @description
      * 담당자 이름
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 담당자 연락처
      * 
      * 
      */ 
    phone?: any;
    /**
      * @description
      * 담당자 이메일
      * 
      * 
      */ 
    email?: any;
    /**
      * @description
      * SMS 수신여부
      * T : 수신
      * F : 수신안함
      * 
      * 
      */ 
    use_sms?: any;
    };
    /**
      * @description
      * 거래상품 유형
      * 
      * 공급사와 거래하는 상품의 유형 정보.
      * 
      * 최대글자수 : [255자]
      */ 
    business_item?: any;
    /**
      * @description
      * 정산시기
      * 
      * 정산이 되는 기준 시점.
      * 10 : 결제완료
      * 30 : 배송시작
      * 40 : 배송완료
      * 
      * 10 : 결제완료
      * 30 : 배송시작
      * 40 : 배송완료
      * 
      * 
      */ 
    payment_method?: any;
    /**
      * @description
      * 정산시작 요일
      * 
      * 정산주기가 주간정산(B)일 경우 아래 요일에 따라 정산이 진행됨.
      * 0 : 일요일마다 정산 진행
      * 1 : 월요일마다 정산 진행
      * 2 : 화요일마다 정산 진행
      * 3 : 수요일마다 정산 진행
      * 4 : 목요일마다 정산 진행
      * 5 : 금요일마다 정산 진행
      * 6 : 토요일마다 정산 진행
      * 
      * 0 : 일요일
      * 1 : 월요일
      * 2 : 화요일
      * 3 : 수요일
      * 4 : 목요일
      * 5 : 금요일
      * 6 : 토요일
      * 
      * 최소: [0]~최대: [6]
      */ 
    payment_start_day?: any;
    /**
      * @description
      * 정산종료 요일
      * 
      * 정산주기가 주간정산(B)일 경우 아래 요일에 따라 정산이 진행됨.
      * 0 : 일요일마다 정산 진행
      * 1 : 월요일마다 정산 진행
      * 2 : 화요일마다 정산 진행
      * 3 : 수요일마다 정산 진행
      * 4 : 목요일마다 정산 진행
      * 5 : 금요일마다 정산 진행
      * 6 : 토요일마다 정산 진행
      * 
      * 0 : 일요일
      * 1 : 월요일
      * 2 : 화요일
      * 3 : 수요일
      * 4 : 목요일
      * 5 : 금요일
      * 6 : 토요일
      * 
      * 최소: [0]~최대: [6]
      */ 
    payment_end_day?: any;
    /**
      * @description
      * 정산시작 일
      * 
      * 정산주기가 월간정산(A)일 경우 해당 일자를 정산시작 일로 정함.
      * 
      * 최소: [1]~최대: [31]
      */ 
    payment_start_date?: any;
    /**
      * @description
      * 정산종료 일
      * 
      * 정산주기가 월간정산(A)일 경우 해당 일자를 정산종료 일로 정함.
      * 
      * 최소: [1]~최대: [31]
      */ 
    payment_end_date?: any;
    /**
      * @description
      * 전화번호
      * 
      * 공급사의 사업장 전화번호.
      * 
      * 최대글자수 : [20자]
      * 전화번호
      */ 
    phone?: any;
    /**
      * @description
      * 팩스번호
      * 
      * 공급사의 사업장 팩스번호.
      * 
      * 최대글자수 : [20자]
      * 전화번호
      */ 
    fax?: any;
    /**
      * @description
      * 사업장 주소 국가 코드
      * 
      * 
      */ 
    country_code?: any;
    /**
      * @description
      * 우편번호
      * 
      * 공급사의 사업장 주소 우편번호.
      * 
      * 최대글자수 : [10자]
      */ 
    zipcode?: any;
    /**
      * @description
      * 기본 주소
      * 
      * 공급사의 사업장 주소(시/군/구 단위 표기).
      * 
      * 최대글자수 : [255자]
      */ 
    address1?: any;
    /**
      * @description
      * 상세 주소
      * 
      * 공급사의 사업장 주소(상세 주소 표기).
      * 
      * 최대글자수 : [255자]
      */ 
    address2?: any;
    /**
      * @description
      * 시장 주소 국가 코드
      * 
      * 
      */ 
    market_country_code?: any;
    /**
      * @description
      * 시장주소 우편번호
      * 
      * 최대글자수 : [10자]
      */ 
    market_zipcode?: any;
    /**
      * @description
      * 시장 기본 주소
      * 
      * 
      */ 
    market_address1?: any;
    /**
      * @description
      * 시장 상세 주소
      * 
      * 
      */ 
    market_address2?: any;
    /**
      * @description
      * 반품 주소 국가 코드
      * 
      * 
      */ 
    exchange_country_code?: any;
    /**
      * @description
      * 반품주소 우편번호
      * 
      * 최대글자수 : [10자]
      */ 
    exchange_zipcode?: any;
    /**
      * @description
      * 반품 기본 주소
      * 
      * 최대글자수 : [255자]
      */ 
    exchange_address1?: any;
    /**
      * @description
      * 반품 상세 주소
      * 
      * 최대글자수 : [255자]
      */ 
    exchange_address2?: any;
    /**
      * @description
      * 홈페이지 주소
      * 
      * 최대글자수 : [100자]
      */ 
    homepage_url?: any;
    /**
      * @description
      * 쇼핑몰 주소
      * 
      * 최대글자수 : [100자]
      */ 
    mall_url?: any;
    /**
      * @description
      * 거래개시일
      * 
      * 최대글자수 : [10자]
      * 날짜
      */ 
    account_start_date?: any;
    /**
      * @description
      * 거래중지일
      * 
      * 최대글자수 : [10자]
      * 날짜
      */ 
    account_stop_date?: any;
    /**
      * @description
      * 메모
      * 
      * 해당 공급사에 대한 관리용 메모
      * 
      * 최대글자수 : [255자]
      */ 
    memo?: any;
    /**
      * @description
      * 사업자등록번호
      * 
      * 해당 공급사의 사업자 등록 번호. 국가에 따라 해당 사업자의 등록 고유 번호가 발급되는 경우 표시한다.
      * 
      * 최대글자수 : [12자]
      * 사업자번호
      */ 
    company_registration_no?: any;
    /**
      * @description
      * 상호명
      * 
      * 사업자 등록시 공급사에서 등록한 상호명
      * 
      * 최대글자수 : [30자]
      */ 
    company_name?: any;
    /**
      * @description
      * 대표자명
      * 
      * 사업자 등록시 공급사에서 등록한 대표자명
      * 
      * 최대글자수 : [20자]
      */ 
    president_name?: any;
    /**
      * @description
      * 업태
      * 
      * 사업자 등록시 공급사에서 등록한 업태
      * 
      * 최대글자수 : [20자]
      */ 
    company_condition?: any;
    /**
      * @description
      * 종목
      * 
      * 사업자 등록시 공급사에서 등록한 종목
      * 
      * 최대글자수 : [20자]
      */ 
    company_line?: any;
    /**
      * @description
      * 회사소개
      * 
      * 공급사에 대한 간략한 소개 표시. 쇼핑몰의 회사 소개 화면에 표시된다.
      * 
      * 
      */ 
    company_introduction?: any;
  }

  export interface UpdateASupplierOutput {
    supplier: { 
    shop_no: number;
    supplier_name: string;
    supplier_code: string;
    use_supplier: Cafe24Enum;
    trading_type: Cafe24Enum;
    supplier_type: string;
    status: Cafe24Enum;
    business_item: string;
    payment_type: Cafe24Enum;
    commission: string;
    payment_period: Cafe24Enum;
    payment_method: number;
    payment_start_date: number;
    payment_end_date: number;
    payment_start_day: any;
    payment_end_day: any;
    bank_code: string;
    bank_account_no: string;
    bank_account_name: string;
    phone: string;
    fax: string;
    country_code: string;
    zipcode: Cafe24Datetime;
    address1: string;
    address2: string;
    market_country_code: string;
    market_zipcode: Cafe24Datetime;
    market_address1: string;
    market_address2: string;
    exchange_country_code: string;
    exchange_zipcode: Cafe24Datetime;
    exchange_address1: string;
    exchange_address2: string;
    homepage_url: string;
    mall_url: string;
    manager_information: { 
    no: number;
    name: string;
    phone: string;
    email: string;
    use_sms: Cafe24Enum;
    }[];
    account_start_date: Cafe24Date;
    account_stop_date: Cafe24Date;
    show_supplier_info: string;
    memo: string;
    company_registration_no: string;
    company_name: string;
    president_name: string;
    company_condition: string;
    company_line: string;
    company_introduction: string;
    };
  }
  export interface DeleteASupplierInput {
    /**
      * @description
      * 공급사 코드
      * 
      * @required
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    supplier_code: any;
  }

  export interface DeleteASupplierOutput {
    supplier: { 
    supplier_code: string;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 등록된 공급사들을 목록으로 조회할 수 있습니다.
     * 공급사 코드, 공급사명, 수수료 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-suppliers
     *
     * @example 응답 예시
     * ```json
     * {
     *     "suppliers": [
     *         {
     *             "shop_no": 1,
     *             "supplier_code": "S0000000",
     *             "supplier_name": "Supply Name",
     *             "status": "A",
     *             "commission": "0.00",
     *             "payment_period": "A",
     *             "business_item": "Online Shop",
     *             "payment_type": "D",
     *             "supplier_type": "WS",
     *             "use_supplier": "T",
     *             "created_date": "",
     *             "updated_date": "2018-09-04T13:42:04+09:00",
     *             "country_code": "KOR",
     *             "zipcode": "07071",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "manager_information": [
     *                 {
     *                     "no": 1,
     *                     "name": "John Doe",
     *                     "phone": "010-0000-0001",
     *                     "email": "sample@sample.com",
     *                     "use_sms": "F"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "name": "Jane Doe",
     *                     "phone": "010-0000-0002",
     *                     "email": "sample@sample.com",
     *                     "use_sms": "F"
     *                 }
     *             ],
     *             "payment_start_day": null,
     *             "payment_end_day": null,
     *             "payment_start_date": 1,
     *             "payment_end_date": 2,
     *             "trading_type": "D",
     *             "bank_code": "bank_04",
     *             "bank_account_no": "000-0000-00000",
     *             "bank_account_name": "Acoount Name",
     *             "company_registration_no": "118-81-20586",
     *             "president_name": "Representative name",
     *             "company_name": "Company Name",
     *             "company_condition": "Industry",
     *             "company_line": "Online",
     *             "phone": "010-0000-0000",
     *             "fax": "02-0000-0000"
     *         },
     *         {
     *             "shop_no": 1,
     *             "supplier_code": "S000000A",
     *             "supplier_name": "Supply Name",
     *             "status": "A",
     *             "commission": "10.00",
     *             "payment_period": "0",
     *             "business_item": "Online Shop",
     *             "payment_type": "P",
     *             "supplier_type": "WS",
     *             "use_supplier": "T",
     *             "created_date": "2018-09-04T13:42:04+09:00",
     *             "updated_date": "",
     *             "country_code": "KOR",
     *             "zipcode": "07071",
     *             "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *             "address2": "Professional Construction Hall",
     *             "manager_information": [
     *                 {
     *                     "no": 1,
     *                     "name": "John Doe",
     *                     "phone": "010-0000-0001",
     *                     "email": "sample@sample.com",
     *                     "use_sms": "F"
     *                 },
     *                 {
     *                     "no": 2,
     *                     "name": "Jane Doe",
     *                     "phone": "010-0000-0002",
     *                     "email": "sample@sample.com",
     *                     "use_sms": "F"
     *                 }
     *             ],
     *             "payment_start_day": null,
     *             "payment_end_day": null,
     *             "payment_start_date": 9,
     *             "payment_end_date": 30,
     *             "trading_type": "C",
     *             "bank_code": "bank_05",
     *             "bank_account_no": "000-0000-00001",
     *             "bank_account_name": "Acoount Name",
     *             "company_registration_no": "118-81-20586",
     *             "president_name": "Representative name",
     *             "company_name": "Company Name",
     *             "company_condition": "Industry",
     *             "company_line": "Online",
     *             "phone": "010-0000-0000",
     *             "fax": "02-0000-0000"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfSuppliers(
      input: RetrieveAListOfSuppliersInput,
      options?: RequestOptions<RetrieveAListOfSuppliersOutput['suppliers'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfSuppliersOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 전체 공급사의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-suppliers
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 3
     * }
     * ```
     */
    retrieveACountOfSuppliers(
      input: RetrieveACountOfSuppliersInput,
      options?: RequestOptions<RetrieveACountOfSuppliersOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfSuppliersOutput>>;
    /**
     * @description
     * 특정 공급사의 정보를 조회할 수 있습니다.
     * 공급사명, 수수료, 정산주기 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-supplier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "supplier": {
     *         "shop_no": 1,
     *         "supplier_name": "Default Supplier",
     *         "supplier_code": "S0000000",
     *         "use_supplier": "T",
     *         "trading_type": "D",
     *         "supplier_type": "WS",
     *         "status": "A",
     *         "business_item": "Default Product Type",
     *         "payment_type": "D",
     *         "commission": "0.00",
     *         "payment_period": "A",
     *         "payment_method": 30,
     *         "payment_start_day": null,
     *         "payment_end_day": null,
     *         "payment_start_date": 9,
     *         "payment_end_date": 30,
     *         "bank_code": "bank_04",
     *         "bank_account_no": "000-0000-00000",
     *         "bank_account_name": "Acoount Name",
     *         "phone": "010-0000-0000",
     *         "fax": "02-0000-0000",
     *         "country_code": "KOR",
     *         "zipcode": "07071",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "market_country_code": "KOR",
     *         "market_zipcode": "07071",
     *         "market_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "market_address2": "Professional Construction Hall",
     *         "exchange_country_code": "KOR",
     *         "exchange_zipcode": "07071",
     *         "exchange_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "exchange_address2": "Professional Construction Hall",
     *         "homepage_url": "sample.sample.com",
     *         "mall_url": "sample.sample.com",
     *         "manager_information": [
     *             {
     *                 "no": 1,
     *                 "name": "John Doe",
     *                 "phone": "010-0000-0001",
     *                 "email": "sample@sample.com",
     *                 "use_sms": "F"
     *             },
     *             {
     *                 "no": 2,
     *                 "name": "Jane Doe",
     *                 "phone": "010-0000-0002",
     *                 "email": "sample@sample.com",
     *                 "use_sms": "F"
     *             },
     *             {
     *                 "no": 3,
     *                 "name": "Jane Doe",
     *                 "phone": "010-0000-0003",
     *                 "email": "sample@sample.com",
     *                 "use_sms": "F"
     *             }
     *         ],
     *         "account_start_date": "2018-01-01",
     *         "account_stop_date": "2018-01-02",
     *         "show_supplier_info": "SP,SM",
     *         "memo": "Memo Description",
     *         "company_registration_no": "118-81-20586",
     *         "company_name": "Company Name",
     *         "president_name": "Representative name",
     *         "company_condition": "Industry",
     *         "company_line": "Online",
     *         "company_introduction": "About company."
     *     }
     * }
     * ```
     */
    retrieveASupplier(
      input: RetrieveASupplierInput,
      options?: RequestOptions<RetrieveASupplierOutput['supplier']>,
    ): Promise<AxiosResponse<RetrieveASupplierOutput>>;
    /**
     * @description
     * 쇼핑몰에 공급사를 신규로 생성할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-supplier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "supplier": {
     *         "shop_no": 1,
     *         "supplier_name": "Default Supplier",
     *         "supplier_code": "S000000J",
     *         "use_supplier": "T",
     *         "trading_type": "D",
     *         "supplier_type": "WS",
     *         "status": "A",
     *         "business_item": "Default Product Type",
     *         "payment_type": "D",
     *         "commission": "0.00",
     *         "payment_period": "A",
     *         "payment_method": "30",
     *         "payment_start_date": 9,
     *         "payment_end_date": 30,
     *         "payment_start_day": null,
     *         "payment_end_day": null,
     *         "bank_code": null,
     *         "bank_account_no": "",
     *         "bank_account_name": "",
     *         "phone": "010-0000-0000",
     *         "fax": "02-0000-0000",
     *         "country_code": "KOR",
     *         "zipcode": "07071",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "market_country_code": "KOR",
     *         "market_zipcode": "07071",
     *         "market_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "market_address2": "Professional Construction Hall",
     *         "exchange_country_code": "KOR",
     *         "exchange_zipcode": "07071",
     *         "exchange_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "exchange_address2": "Professional Construction Hall",
     *         "homepage_url": "sample.sample.com",
     *         "mall_url": "sample.sample.com",
     *         "manager_information": [
     *             {
     *                 "no": 1,
     *                 "name": "John Doe",
     *                 "phone": "010-0000-0001",
     *                 "email": "sample@sample.com",
     *                 "use_sms": null
     *             },
     *             {
     *                 "no": 2,
     *                 "name": "Jane Doe",
     *                 "phone": "010-0000-0002",
     *                 "email": "sample@sample.com",
     *                 "use_sms": null
     *             },
     *             {
     *                 "no": 3,
     *                 "name": "Jane Doe",
     *                 "phone": "010-0000-0003",
     *                 "email": "sample@sample.com",
     *                 "use_sms": null
     *             }
     *         ],
     *         "account_start_date": "2018-01-01",
     *         "account_stop_date": "2018-01-02",
     *         "show_supplier_info": "SP,SM",
     *         "memo": "Memo Description",
     *         "company_registration_no": "118-81-20586",
     *         "company_name": "Company Name",
     *         "president_name": "Representative name",
     *         "company_condition": "Industry",
     *         "company_line": "Online",
     *         "company_introduction": "About company."
     *     }
     * }
     * ```
     */
    createASupplier(
      input: CreateASupplierInput,
      options?: RequestOptions<CreateASupplierOutput['supplier']>,
    ): Promise<AxiosResponse<CreateASupplierOutput>>;
    /**
     * @description
     * 특정 공급사의 정보를 수정할 수 있습니다.
     * 공급사명, 공급사유형 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-supplier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "supplier": {
     *         "shop_no": 1,
     *         "supplier_name": "Default Supplier",
     *         "supplier_code": "S000000J",
     *         "use_supplier": "T",
     *         "trading_type": "D",
     *         "supplier_type": "WS",
     *         "status": "A",
     *         "business_item": "Default Product Type",
     *         "payment_type": "D",
     *         "commission": "0.00",
     *         "payment_period": "A",
     *         "payment_method": 30,
     *         "payment_start_date": 9,
     *         "payment_end_date": 30,
     *         "payment_start_day": null,
     *         "payment_end_day": null,
     *         "bank_code": "bank_04",
     *         "bank_account_no": "000-0000-00000",
     *         "bank_account_name": "Acoount Name",
     *         "phone": "010-0000-0000",
     *         "fax": "02-0000-0000",
     *         "country_code": "KOR",
     *         "zipcode": "07071",
     *         "address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "address2": "Professional Construction Hall",
     *         "market_country_code": "KOR",
     *         "market_zipcode": "07071",
     *         "market_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "market_address2": "Professional Construction Hall",
     *         "exchange_country_code": "KOR",
     *         "exchange_zipcode": "07071",
     *         "exchange_address1": "Sindaebang dong Dongjak-gu, Seoul, Republic of Korea",
     *         "exchange_address2": "Professional Construction Hall",
     *         "homepage_url": "sample.sample.com",
     *         "mall_url": "sample.sample.com",
     *         "manager_information": [
     *             {
     *                 "no": 1,
     *                 "name": "John Doe",
     *                 "phone": "010-0000-0001",
     *                 "email": "sample@sample.com",
     *                 "use_sms": "F"
     *             },
     *             {
     *                 "no": 2,
     *                 "name": "Jane Doe",
     *                 "phone": "010-0000-0002",
     *                 "email": "sample@sample.com",
     *                 "use_sms": "F"
     *             },
     *             {
     *                 "no": 3,
     *                 "name": "Jane Doe",
     *                 "phone": "010-0000-0003",
     *                 "email": "sample@sample.com",
     *                 "use_sms": "F"
     *             }
     *         ],
     *         "account_start_date": "2018-01-01",
     *         "account_stop_date": "2018-01-02",
     *         "show_supplier_info": "SP,SM",
     *         "memo": "Memo Description",
     *         "company_registration_no": "118-81-20586",
     *         "company_name": "Company Name",
     *         "president_name": "Representative name",
     *         "company_condition": "Industry",
     *         "company_line": "Online",
     *         "company_introduction": "About company."
     *     }
     * }
     * ```
     */
    updateASupplier(
      input: UpdateASupplierInput,
      options?: RequestOptions<UpdateASupplierOutput['supplier']>,
    ): Promise<AxiosResponse<UpdateASupplierOutput>>;
    /**
     * @description
     * 쇼핑몰에 생성된 공급사를 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-supplier
     *
     * @example 응답 예시
     * ```json
     * {
     *     "supplier": {
     *         "supplier_code": "S000000J"
     *     }
     * }
     * ```
     */
    deleteASupplier(
      input: DeleteASupplierInput,
      options?: RequestOptions<DeleteASupplierOutput['supplier']>,
    ): Promise<AxiosResponse<DeleteASupplierOutput>>;
  }
}
