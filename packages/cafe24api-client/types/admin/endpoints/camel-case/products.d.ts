import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 상품(Products)은 쇼핑몰에서 거래되는 제품의 기본 단위입니다.
   * 컬러, 사이즈 같은 옵션이 있을 경우 각각의 옵션이 상품 하위의 품목으로 생성될 수 있습니다.
   * 상품은 상품명, 공급가, 판매가, 재고정보 등의 정보를 포함하고 있습니다.
   * 상품은 품목, 상품 메모, SEO 등 여러 하위 리소스들을 갖고 있습니다.
   */
  export interface Products {
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
      * 상품번호
      * 
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * 
      */ 
    productNo: any;
    /**
      * @description
      * 상품코드
      * 
      * 시스템이 상품에 부여한 코드. 해당 쇼핑몰 내에서 상품코드는 중복되지 않음.
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    productCode: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * 사용자가 상품에 부여 가능한 코드. 재고 관리등의 이유로 자체적으로 상품을 관리 하고 있는 경우 사용함.
      * 
      * 최대글자수 : [40자]
      */ 
    customProductCode: any;
    /**
      * @description
      * 상품명
      * 
      * 상품의 이름. 상품명은 상품을 구분하는 가장 기초적인 정보이며 검색 정보가 된다. HTML을 사용하여 입력이 가능하다.
      * 
      * 최대글자수 : [250자]
      */ 
    productName: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 상품의 영문 이름. 해외 배송 등에 사용 가능함.
      * 
      * 최대글자수 : [250자]
      */ 
    engProductName: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 공급사에서 등록한 상품의 이름. 공급사에서 상품의 구분을 위해 임의로 입력할 수 있으며 상품명에는 영향을 미치지 않는다.
      * 
      * 최대글자수 : [250자]
      */ 
    supplyProductName: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * 최대글자수 : [50자]
      */ 
    internalProductName: any;
    /**
      * @description
      * 모델명
      * 
      * 상품의 모델명.
      * 
      * 최대글자수 : [100자]
      */ 
    modelName: any;
    /**
      * @description
      * 상품가(세금 제외)
      * 
      * 
      */ 
    priceExcludingTax: any;
    /**
      * @description
      * 상품 판매가
      * 
      * 상품의 판매 가격. 쿠폰 및 혜택을 적용하기 전의 가격.
      * 상품 등록시엔 모든 멀티 쇼핑몰에 동일한 가격으로 등록하며, 멀티쇼핑몰별로 다른 가격을 입력하고자 할 경우 상품 수정을 통해 가격을 다르게 입력할 수 있다.
      * ※ 판매가 = [ 공급가 + (공급가 * 마진율) + 추가금액 ]
      * 
      * 
      */ 
    price: any;
    /**
      * @description
      * 상품 소비자가
      * 
      * 시중에 판매되는 소비자 가격. 쇼핑몰의 가격을 강조하기 위한 비교 목적으로 사용함.
      * 
      * 
      */ 
    retailPrice: any;
    /**
      * @description
      * 상품 공급가
      * 
      * 상품의 원가. 공급가에 마진율을 더하여 판매가를 계산할 수 있음. API에서는 공급가는 참조 목적으로만 사용한다.
      * 
      * 
      */ 
    supplyPrice: any;
    /**
      * @description
      * 진열상태
      * 
      * 상품을 쇼핑몰에 진열할지 여부. 상품을 쇼핑몰에 진열할 경우 설정한 상품분류와 메인화면에 표시된다. 상품이 쇼핑몰에 진열되어 있지 않으면 쇼핑몰 화면에 표시되지 않아 접근할 수 없으며 상품을 구매할 수 없다.
      * 
      * T : 진열함
      * F : 진열안함
      * 
      * 
      */ 
    display: any;
    /**
      * @description
      * 판매상태
      * 
      * 상품을 쇼핑몰에 판매할지 여부. 상품을 진열한 상태로 판매를 중지할 경우 상품은 쇼핑몰에 표시되지만 &#34;품절&#34;로 표시되어 상품을 구매할 수 없다. 상품이 &#34;진열안함&#34;일 경우 &#34;판매함&#34; 상태여도 상품에 접근할 수 없기 때문에 구매할 수 없다.
      * 
      * T : 판매함
      * F : 판매안함
      * 
      * 
      */ 
    selling: any;
    /**
      * @description
      * 상품 상태
      * 
      * 판매하는 상품의 상태 표시.
      * 
      * N : 신상품
      * B : 반품상품
      * R : 재고상품
      * U : 중고상품
      * E : 전시상품
      * F : 리퍼상품
      * S : 스크래치 상품
      * 
      * 
      */ 
    productCondition: any;
    /**
      * @description
      * 중고상품 사용 개월
      * 
      * 최대값: [2147483647]
      */ 
    productUsedMonth: any;
    /**
      * @description
      * 상품요약설명
      * 
      * 상품에 대한 요약 정보. 상품 진열 화면에서 노출 가능한 설명. HTML을 사용하여 입력이 가능하다.
      * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 노출되도록 설정 가능하다.
      * 
      * 최대글자수 : [255자]
      */ 
    summaryDescription: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 검색 또는 분류를 위하여 상품에 입력하는 검색어 정보(해시태그)
      * 
      * 배열 최대사이즈: [50]
      */ 
    productTag: any;
    /**
      * @description
      * 마진률
      * 
      * 상품의 원가에 더하여 판매가 계산을 위한 마진율. Api에서는 해당 값은 참고용으로만 사용된다.
      * tax_calculation이 A(자동계산)일 경우 null로 반환됨.
      * 
      * 최소: [-999.99]~최대: [999.99]
      */ 
    marginRate: any;
    /**
      * @description
      * 세금 계산 유형
      * 
      * A : 자동 계산
      * M : 수동 계산
      * 
      * 
      */ 
    taxCalculation: any;
    /**
      * @description
      * 과세 구분
      * 
      * 해당 상품의 과세 정보.
      * 
      * 해당 상품의 부가세 포함 유형.
      * 과세상품 = 세금이 부과된 상품.
      * 면세상품 = 세금이 면제되는 상품. 가공되지 않은 농/수/축산물, 연탄, 도서류, 보험, 여성용품 등의 상품이 이에 해당하며, 과세사업자로 등록해야 함
      * 영세상품 = 부가세가 0%로 적용되는 수출용 외화 획득 상품
      * 
      * tax_calculation이 A(자동계산)이면서, C(영세상품) 일 경우 &#39;A(과세상품)&#39;으로 반환.
      * 
      * A : 과세상품
      * B : 면세 상품
      * C : 영세상품
      * 
      * 
      */ 
    taxType: any;
    /**
      * @description
      * 과세율
      * 
      * 최소: [0]~최대: [100]
      */ 
    taxRate: any;
    /**
      * @description
      * 판매가 대체문구
      * 
      * 상품의 가격 대신 표시되는 문구. 품절이나 상품이 일시적으로 판매 불가할 때 사용.
      * 
      * 최대글자수 : [20자]
      */ 
    priceContent: any;
    /**
      * @description
      * 구매제한 개별 설정여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    buyLimitByProduct: any;
    /**
      * @description
      * 구매제한
      * 
      * 해당 상품을 구매할 수 있는 회원 정보 표시.
      * 
      * N : 회원만 구매하며
      * 구매버튼 감추기
      * M : 회원만 구매하며
      * 구매버튼 보이기
      * F : 구매제한 안함
      * O : 지정된 회원만 구매하며 구매버튼 감추기
      * D : 지정된 회원만 구매하며 구매버튼 보이기
      * 
      * 
      */ 
    buyLimitType: any;
    /**
      * @description
      * 구매가능 회원 등급
      * 
      * 
      */ 
    buyGroupList: any;
    /**
      * @description
      * 구매가능 회원아이디
      * 
      * 
      */ 
    buyMemberIdList: any;
    /**
      * @description
      * 재구매 제한
      * 
      * T : 재구매 불가
      * F : 제한안함
      * 
      * 
      */ 
    repurchaseRestriction: any;
    /**
      * @description
      * 단독구매 제한
      * 
      * T : 단독구매 불가
      * F : 제한안함
      * 
      * 
      */ 
    singlePurchaseRestriction: any;
    /**
      * @description
      * 구매단위 타입
      * 
      * 해당 상품의 구매 단위를 1개 이상으로 설정한 경우 해당 구매 단위를 품목 단위로 할 것인지, 상품 단위로 할 것인지에 대한 설정
      * 
      * P : 상품 기준
      * O : 품목 기준
      * 
      * 
      */ 
    buyUnitType: any;
    /**
      * @description
      * 구매단위
      * 
      * 구매할 수 있는 최소한의 단위 표시.
      * 예) 구매 주문단위가 세 개일 경우, 3개, 6개, 9개 단위로 구매 가능함.
      * 
      * 
      */ 
    buyUnit: any;
    /**
      * @description
      * 주문수량 제한 기준
      * 
      * 해당 상품의 주문 수량 제한시 제한 기준을 품목 단위로 할 것인지, 상품 단위로 할 것인지에 대한 설정
      * 
      * P : 상품 기준
      * O : 품목 기준
      * 
      * 
      */ 
    orderQuantityLimitType: any;
    /**
      * @description
      * 최소 주문수량
      * 
      * 주문 가능한 최소한의 주문 수량. 주문 수량 미만으로 구매 할 수 없음.
      * 
      * 최대값: [2147483647]
      */ 
    minimumQuantity: any;
    /**
      * @description
      * 최대 주문수량
      * 
      * 주문 가능한 최대한의 주문 수량. 주문 수량을 초과하여 구매 할 수 없음.
      * 
      * 최대 주문수량이 &#34;제한없음&#34;일 경우 &#34;0&#34;으로 표시된다.
      * 
      * 최대값: [2147483647]
      */ 
    maximumQuantity: any;
    /**
      * @description
      * 적립금 개별설정 사용여부
      * 
      * F : 기본설정 사용
      * T : 개별설정
      * 
      * 
      */ 
    pointsByProduct: any;
    /**
      * @description
      * 결제방식별 적립금 설정 여부
      * 
      * B : 기본 적립금설정 사용
      * C : 결제방식에 따른 적립
      * 
      * 
      */ 
    pointsSettingByPayment: any;
    /**
      * @description
      * 적립금 설정 정보
      * 
      * 
      */ 
    pointsAmount: any;
    /**
      * @description
      * 회원등급 추가 적립 제외
      * 
      * T : 회원등급 추가 적립 제외 설정함
      * F : 회원등급 추가 적립 제외 설정안함
      * 
      * 
      */ 
    exceptMemberPoints: any;
    /**
      * @description
      * 상품 부피 정보
      * 
      * 
      */ 
    productVolume: any;
    /**
      * @description
      * 성인인증
      * 
      * 성인인증이 필요한 상품인지 여부. 성인인증이 필요한 상품인 구매를 위해서는 본인인증을 거쳐야함.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    adultCertification: any;
    /**
      * @description
      * 상세이미지
      * 
      * 상품 상세 화면에 표시되는 상품 이미지.
      * 
      * 
      */ 
    detailImage: any;
    /**
      * @description
      * 목록이미지
      * 
      * 상품 분류 화면, 메인 화면, 상품 검색 화면에 표시되는 상품의 목록 이미지.
      * 
      * 
      */ 
    listImage: any;
    /**
      * @description
      * 작은목록이미지
      * 
      * 최근 본 상품 영역에 표시되는 상품의 목록 이미지.
      * 
      * 
      */ 
    tinyImage: any;
    /**
      * @description
      * 축소이미지
      * 
      * 상품 상세 화면 하단에 표시되는 상품 목록 이미지.
      * 
      * 
      */ 
    smallImage: any;
    /**
      * @description
      * 네이버페이 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useNaverpay: any;
    /**
      * @description
      * 네이버페이 판매타입
      * 
      * C : 네이버페이 + 쇼핑몰 동시판매 상품
      * O : 네이버페이 전용상품
      * 
      * 
      */ 
    naverpayType: any;
    /**
      * @description
      * 제조사 코드
      * 
      * 제조사를 등록하면 자동으로 생성되는 코드로 상품에 특정 제조사를 지정할 때 사용.
      * 
      * 미입력시 자체제작(M0000000) 사용
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    manufacturerCode: any;
    /**
      * @description
      * 트렌드 코드
      * 
      * 트렌드를 등록하면 자동으로 생성되는 코드로 상품에 특정 트렌드를 지정할 때 사용.
      * 
      * 미입력시 기본트렌드(T0000000) 사용
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    trendCode: any;
    /**
      * @description
      * 브랜드 코드
      * 
      * 브랜드를 등록하면 자동으로 생성되는 코드로 상품에 특정 브랜드를 지정할 때 사용.
      * 
      * 미입력시 자체브랜드(B0000000) 사용
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    brandCode: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 공급사를 등록하면 자동으로 생성되는 코드로 상품에 특정 공급사를 지정할 때 사용.
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    supplierCode: any;
    /**
      * @description
      * 제조일자
      * 
      * 상품을 제조한 제조일자.
      * 
      * 
      */ 
    madeDate: any;
    /**
      * @description
      * 출시일자
      * 
      * 상품이 시장에 출시된 일자.
      * 
      * 
      */ 
    releaseDate: any;
    /**
      * @description
      * 유효기간
      * 
      * 상품을 정상적으로 사용할 수 있는 기간. 상품권이나 티켓 같은 무형 상품, 식품이나 화장품 같은 유형 상품의 유효기간을 표시.
      * 
      * 주로 상품권이나 티켓 같은 무형 상품에 사용되며, 해당 무형 상품의 유효기간을 표시.
      * 
      * 배열 최대사이즈: [2]
      */ 
    expirationDate: any;
    /**
      * @description
      * 원산지 국내/국외/기타
      * 
      * F : 국내
      * T : 국외
      * E : 기타
      * 
      * 
      */ 
    originClassification: any;
    /**
      * @description
      * 원산지 번호
      * 
      * 원산지 번호를 List all Origin API를 통해 원산지를 조회하여 입력
      * origin_classification이 F(국내)인 경우, 해외 여부(foreign)가 &#34;F&#34;인 원산지만 입력 가능함.
      * origin_classification이 T(해외)인 경우, 해외 여부(foreign)가 &#34;T&#34;인 원산지만 입력 가능함.
      * 
      * 
      */ 
    originPlaceNo: any;
    /**
      * @description
      * 원산지기타정보
      * 
      * 원산지가 &#34;기타(1800)&#34;일 경우 원산지로 입력 가능한 정보.
      * 
      * 최대글자수 : [30자]
      */ 
    originPlaceValue: any;
    /**
      * @description
      * 원산지 국가코드
      * 
      * 
      */ 
    madeInCode: any;
    /**
      * @description
      * 아이콘 노출 기간
      * 
      * 상품에 설정한 아이콘이 노출되는 기간.
      * 
      * 
      */ 
    iconShowPeriod: any;
    /**
      * @description
      * 아이콘
      * 
      * 상품에 표시되는 아이콘. 상품 판매를 강조하기 위한 목적으로 사용이 가능함.
      * 
      * 배열 최대사이즈: [5]
      */ 
    icon: any;
    /**
      * @description
      * HS코드
      * 
      * 해외 배송시 관세 부과를 위해 사용하는 HS코드. 국제 배송시 통관을 위해 반드시 정확한 번호를 입력해야 함.
      * 
      * ※ HS코드 : 세계무역기구(WTO) 및 세계관세기구(WCO)가 무역통계 및 관세분류의 목적상 수출입 상품을 숫자 코드로 분류화 한 것으로, 수입 시 세금부과와 수출품의 통제 및 통계를 위한 분류법
      * 
      * 
      */ 
    hscode: any;
    /**
      * @description
      * 상품 중량
      * 
      * 상품의 전체 중량(kg). 배송을 위해 상품 자체의 무게와 박스 무게, 포장무게를 모두 포함한 중량 기재가 필요하다.
      * 
      * 
      */ 
    productWeight: any;
    /**
      * @description
      * 상품소재
      * 
      * 상품의 소재. 복합 소재일 경우 상품의 소재와 함유랑을 함께 입력해야함. (예 : 면 80%, 레이온 20%)
      * 
      * 
      */ 
    productMaterial: any;
    /**
      * @description
      * 생성일
      * 
      * 상품이 생성된 일시.
      * 
      * 
      */ 
    createdDate: any;
    /**
      * @description
      * 수정일
      * 
      * 상품이 수정된 일시.
      * 
      * 
      */ 
    updatedDate: any;
    /**
      * @description
      * 영문 상품 소재
      * 
      * 상품의 소재의 영어 표기. 해외 배송사를 이용할 경우 의류의 소재를 통관시 요구하는 경우가 있음.
      * 
      * 
      */ 
    englishProductMaterial: any;
    /**
      * @description
      * 옷감
      * 
      * 상품이 의류인 경우, 옷감. 일본 택배사를 이용할 경우, 택배사에 따라 의류 통관시 옷감 정보를 입력 받는 경우가 있음.
      * 
      * woven : 직물(woven)
      * knit : 편물(knit)
      * 
      * 
      */ 
    clothFabric: any;
    /**
      * @description
      * 추천 / 품절 / 신상품 아이콘 노출 여부
      * 
      * 추천, 품절, 신상품 아이콘을 목록에서 표시하는지 여부
      * 
      * ※ 품절 아이콘
      * 
      * ● 상품이 품절 상태임을 알려주는 아이콘
      * ● 재고관리 및 품절 기능을 사용하는 상품에 대해 재고가 없을 경우 표시
      * 
      * ※ 추천, 신상품 아이콘
      * 
      * ● 상품분류나 메인화면의 추천상품, 신상품 영역에 진열된 상품인 경우, 설정에 따라 해당 아이콘을 표시함
      * 
      * ※ 아이콘 노출 여부 설정위치 : [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 정책 설정 &gt; 상품 관련 설정 &gt; 상품 아이콘 설정&#39;]
      * 
      * 
      */ 
    listIcon: any;
    /**
      * @description
      * 승인요청 결과
      * 
      * N : 승인요청 (신규상품)
      * E : 승인요청 (상품수정)
      * C : 승인완료
      * R : 승인거절
      * I : 검수진행중
      * Empty Value : 요청된적 없음
      * 
      * 
      */ 
    approveStatus: any;
    /**
      * @description
      * 자체분류 코드
      * 
      * 자체분류를 등록하면 자동으로 생성되는 코드로 상품에 특정 자체분류를 지정할 때 사용.
      * 
      * 미입력시 기본자체분류(C000000A) 사용
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    classificationCode: any;
    /**
      * @description
      * 품절여부
      * 
      * T : 품절
      * F : 품절아님
      * 
      * 
      */ 
    soldOut: any;
    /**
      * @description
      * 판매가 추가금액
      * 
      * 
      */ 
    additionalPrice: any;
    /**
      * @description
      * 상품 할인판매가 리소스
      * 
      * 
      */ 
    discountprice: any;
    /**
      * @description
      * 꾸미기 이미지 리소스
      * 
      * 
      */ 
    decorationimages: any;
    /**
      * @description
      * 혜택 리소스
      * 
      * 
      */ 
    benefits: any;
    /**
      * @description
      * 상품 옵션 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * 
      */ 
    options: any;
    /**
      * @description
      * 품목 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * 
      */ 
    variants: any;
    /**
      * @description
      * 해외통관용 상품구분 영문명
      * 
      * 해외 통관시 통관용 상품 구분 정보로 사용하는 정보. 국문명 입력시 입력한 구분명이 자동으로 번역된 항목.
      * 
      * 번역된 영문명이 해외송장 상품명에 포함되어 전송됨.
      * 
      * 
      */ 
    clearanceCategoryEng: any;
    /**
      * @description
      * 해외통관용 상품구분 국문명
      * 
      * 해외 통관시 통관용 상품 구분 정보로 사용하는 정보. 자동으로 영문으로 번역되어 해외송장 상품명 정보에 포함하여 전송.
      * 
      * 
      */ 
    clearanceCategoryKor: any;
    /**
      * @description
      * 해외통관코드
      * 
      * clearance_category_code 
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    clearanceCategoryCode: any;
    /**
      * @description
      * 추가 이미지 리소스
      * 
      * 
      */ 
    additionalimages: any;
    /**
      * @description
      * 표시제한 범위
      * 
      * A : 모두에게 표시
      * M : 회원에게만 표시
      * 
      * 
      */ 
    exposureLimitType: any;
    /**
      * @description
      * 표시대상 회원 등급
      * 
      * 
      */ 
    exposureGroupList: any;
    /**
      * @description
      * 세트상품 타입
      * 
      * C : 일반세트
      * S : 분리세트
      * 
      * 
      */ 
    setProductType: any;
    /**
      * @description
      * 카카오페이 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useKakaopay: any;
    /**
      * @description
      * 개별배송여부
      * 
      * 상품에 배송비를 개별적으로 부과할 것인지 공통 배송비를 부과할 것인지에 대한 설정.
      * 개별 배송비를 사용하지 않을 경우 공통 배송비를 사용함.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    shippingFeeByProduct: any;
    /**
      * @description
      * 배송비 타입
      * 
      * (개별배송비를 사용할 경우) 상품의 배송비 타입.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * T : 배송비 무료
      * R : 고정배송비 사용
      * M : 구매 금액에 따른 부과
      * D : 구매 금액별 차등 배송료 사용
      * W : 상품 무게별 차등 배송료 사용
      * C : 상품 수량별 차등 배송료 사용
      * N : 상품 수량에 비례하여 배송료 부과
      * 
      * 
      */ 
    shippingFeeType: any;
    /**
      * @description
      * 메인진열
      * 
      * 상품을 &#34;추천상품&#34;, &#34;신상품&#34;과 같은 메인진열에 진열할 경우, 메인 진열 번호를 표시한다.
      * 
      * 
      */ 
    main: any;
    /**
      * @description
      * 상품 할인판매가 리소스
      * 
      * 
      */ 
    channeldiscountprices: any;
    /**
      * @description
      * 마켓 연동 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    marketSync: any;
    /**
      * @description
      * 메모 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * 
      */ 
    memos: any;
    /**
      * @description
      * 상품 조회수 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * 
      */ 
    hits: any;
    /**
      * @description
      * 상품 Seo 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * 
      */ 
    seo: any;
    /**
      * @description
      * 분류 번호
      * 
      * 해당 상품이 진열되어있는 상품 분류.
      * 
      * 
      */ 
    category: any;
    /**
      * @description
      * 기획전 번호
      * 
      * 
      */ 
    projectNo: any;
    /**
      * @description
      * 상품상세설명
      * 
      * 상품에 보다 상세한 정보가 포함되어있는 설명. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    description: any;
    /**
      * @description
      * 모바일 상품 상세설명
      * 
      * 입력시 모바일 쇼핑몰에서 상품상세설명 대신 모바일 상품 상세 설명을 대신 표시함.
      * 
      * 
      */ 
    mobileDescription: any;
    /**
      * @description
      * 모바일 별도 등록
      * 
      * T : 직접등록
      * F : 상품 상세설명 동일
      * 
      * 
      */ 
    separatedMobileDescription: any;
    /**
      * @description
      * 상품상세설명 번역정보
      * 
      * 
      */ 
    translatedDescription: any;
    /**
      * @description
      * 상품결제안내
      * 
      * 상품의 결제 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    paymentInfo: any;
    /**
      * @description
      * 상품배송안내
      * 
      * 상품의 배송 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    shippingInfo: any;
    /**
      * @description
      * 교환/반품안내
      * 
      * 상품의 교환/반품 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    exchangeInfo: any;
    /**
      * @description
      * 서비스문의/안내
      * 
      * 제품의 사후 고객 서비스 방법 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    serviceInfo: any;
    /**
      * @description
      * 부가세 표시 문구
      * 
      * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정 &gt; 추가설정 &gt; 판매가 부가세 표시문구&#39;]에서 설정한 문구 표시
      * tax_calculation이 A(자동계산)일 경우 null로 반환됨.
      * 
      * 
      */ 
    productTaxTypeText: any;
    /**
      * @description
      * 국가별 HS 코드
      * 
      * 해외 배송시 관세 부과를 위해 사용하는 HS코드. 국제 배송시 통관을 위해 반드시 정확한 번호를 입력해야 함.
      * 
      * 국가별로 HS 코드의 표준이 다르기 때문에 해당 국가에 맞는 코드 입력이 필요함.
      * 
      * 
      */ 
    countryHscode: any;
    /**
      * @description
      * 상품 간략 설명
      * 
      * 상품에 대한 간략한 정보. 상품 진열 화면에서 노출 가능한 설명. HTML을 사용하여 입력이 가능하다.
      * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 노출되도록 설정 가능하다.
      * 
      * 
      */ 
    simpleDescription: any;
    /**
      * @description
      * 상품 태그 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * 
      */ 
    tags: any;
    /**
      * @description
      * 옵션 사용여부
      * 
      * 해당 상품이 옵션을 갖고 있는지에 대한 여부. 옵션을 갖고 있는 상품은 사이즈나 색상과 같은 다양한 선택지를 제공한다.
      * 
      * T : 옵션사용함
      * F : 옵션 사용안함
      * 
      * 
      */ 
    hasOption: any;
    /**
      * @description
      * 옵션 구성방식
      * 
      * 옵션을 사용할 경우, 옵션의 유형 표시
      * 
      * ● 조합 일체선택형 : 하나의 셀렉스박스(버튼 이나 라디오버튼)에 모든 옵션이 조합되어 표시됨
      * ● 조합 분리선택형 : 옵션을 각각의 셀렉스박스(버튼 이나 라디오버튼)로 선택할 수 있으며 옵션명을 기준으로 옵션값을 조합할 수 있음
      * ● 상품 연동형 : 옵션표시방식은 조합형과 유사하지만 필수옵션과 선택옵션을 선택할 수 있음. 옵션의 조합을 제한 없이 생성할 수 있음.
      * ● 독립 선택형 : 독립적인 조건 여러개를 각각 선택할 수 있는 옵션으로 옵션 값이 조합되지 않고 각각의 품목으로 생성됨.
      * 
      * C : 조합 일체선택형
      * S : 조합 분리선택형
      * E : 상품 연동형
      * F : 독립 선택형
      * 
      * 
      */ 
    optionType: any;
    /**
      * @description
      * 배송 계산 유형
      * 
      * A : 자동 계산
      * M : 수동 계산
      * 
      * 
      */ 
    shippingCalculation: any;
    /**
      * @description
      * 배송방법
      * 
      * (개별배송비를 사용할 경우) 배송 수단 및 방법
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * 01 : 택배
      * 02 : 빠른등기
      * 03 : 일반등기
      * 04 : 직접배송
      * 05 : 퀵배송
      * 06 : 기타
      * 07 : 화물배송
      * 08 : 매장직접수령
      * 09 : 배송필요 없음
      * 
      * 
      */ 
    shippingMethod: any;
    /**
      * @description
      * 배송비 선결제 설정
      * 
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * C : 착불
      * P : 선결제
      * B : 선결제/착불
      * 
      * 
      */ 
    prepaidShippingFee: any;
    /**
      * @description
      * 배송기간
      * 
      * (개별배송비를 사용할 경우) 상품 배송시 평균적으로 소요되는 배송 기간.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * 
      */ 
    shippingPeriod: any;
    /**
      * @description
      * 배송정보
      * 
      * 국내에만 배송이 가능한 상품인지 해외에도 배송이 가능한 상품인지 표시. [쇼핑몰 설정 &gt; 배송 설정 &gt; &#39;배송 정책 설정 &gt; 배송비 설정 &gt; 개별배송비 설정&#39;] 에서 상품별 개별배송료 설정이 사용안함인 경우 설정 불가.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * A : 국내배송
      * C : 해외배송
      * B : 국내/해외배송
      * 
      * 
      */ 
    shippingScope: any;
    /**
      * @description
      * 배송지역
      * 
      * (개별배송비를 사용할 경우) 상품을 배송할 수 있는 지역.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * 최대글자수 : [255자]
      */ 
    shippingArea: any;
    /**
      * @description
      * 구간별 배송비
      * 
      * 개별배송비를 사용할 경우 상품의 개별 배송비.
      * 
      * shipping_fee_type이 R, N일 경우 배열 안에 shipping_fee를 정의하여 배송비를 설정할 수 있다.
      * 
      * shipping_fee_type이 M, D, W, C일 경우 배열 안에 다음과 같이 정의하여 배송비 구간을 설정할 수 있다.
      * shipping_rates_min : 배송비 구간 시작 기준
      * shipping_rates_max : 배송비 구간 종료 기준
      * shipping_fee : 배송비
      * 
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * 
      */ 
    shippingRates: any;
    /**
      * @description
      * 원산지 코드
      * 
      * 상품의 원산지 코드.
      * 
      * 
      */ 
    originPlaceCode: any;
    /**
      * @description
      * 추가항목
      * 
      * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 추가한 추가항목.
      * 
      * 기본적인 상품 정보 외에 추가로 표시항 항목이 있을 때 추가하여 사용함.
      * 
      * 
      */ 
    additionalInformation: any;
    /**
      * @description
      * 이미지 업로드 타입
      * 
      * 이미지 업로드시 이미지 업로드 타입.
      * &#34;대표이미지 등록&#34;시 상세이미지를 리사이징하여 목록이미지, 작은목록이미지, 축소이미지에 업로드
      * &#34;개별이미지 등록&#34;시 상세이미지, 목록이미지, 작은목록이미지, 축소이미지를 각각 따로 업로드
      * 
      * ※ EC Global은 FTP를 지원하지 않으므로 C는 사용할 수 없음
      * 
      * A : 대표이미지등록
      * B : 개별이미지등록
      * C : 웹FTP 등록
      * 
      * 
      */ 
    imageUploadType: any;
    /**
      * @description
      * 관련상품
      * 
      * 해당 상품과 비슷한 상품 혹은 대체 가능한 상품. 관련 상품 등록시 해당 상품의 상세페이지 하단에 노출된다.
      * 
      * 배열 최대사이즈: [200]
      */ 
    relationalProduct: any;
    /**
      * @description
      * 옵션별로 한 개씩 선택 (독립형 옵션)
      * 
      * 독립형 옵션을 사용할 경우, 하나의 옵션을 여러개 중복하여 선택할 수 없고 한개씩만 선택 가능함.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    selectOneByOption: any;
    /**
      * @description
      * 상품 추가설명 번역정보
      * 
      * 
      */ 
    translatedAdditionalDescription: any;
    /**
      * @description
      * 추가이미지
      * 
      * 상품 상세 화면 하단에 표시되는 상품의 추가 이미지. 축소 이미지와 비슷한 위치에 표시되며 PC 쇼핑몰에서는 마우스 오버시, 모바일 쇼핑몰에서는 이미지 스와이프(Swipe)시 추가 이미지를 확인할 수 있다.
      * 
      * 특정 상품 상세 조회 API에서만 확인 가능하다.
      * 
      * 배열 최대사이즈: [20]
      */ 
    additionalImage: any;
  }

  export interface RetrieveAListOfProductsInput {
    /**
      * @description
      * 상품 할인판매가 리소스
      * 
      * @embed
      */ 
    channeldiscountprices?: any;
    /**
      * @description
      * 상품 할인판매가 리소스
      * 
      * @embed
      */ 
    discountprice?: any;
    /**
      * @description
      * 꾸미기 이미지 리소스
      * 
      * @embed
      */ 
    decorationimages?: any;
    /**
      * @description
      * 혜택 리소스
      * 
      * @embed
      */ 
    benefits?: any;
    /**
      * @description
      * 상품 옵션 리소스
      * 
      * @embed
      */ 
    options?: any;
    /**
      * @description
      * 품목 리소스
      * 
      * 상품당 품목정보를 100개까지 조회할 수 있음.
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    variants?: any;
    /**
      * @description
      * 추가 이미지 리소스
      * 
      * @embed
      */ 
    additionalimages?: any;
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
      * 조회하고자 하는 상품의 번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productNo?: any;
    /**
      * @description
      * 진열상태
      * 
      * 진열 혹은 미진열 되어있는 상품 검색.
      * 
      * 
      */ 
    display?: any;
    /**
      * @description
      * 판매상태
      * 
      * 판매중이거나 판매안함 상태의 상품 검색.
      * 
      * 
      */ 
    selling?: any;
    /**
      * @description
      * 상품명
      * 
      * 검색어를 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productName?: any;
    /**
      * @description
      * 상품코드
      * 
      * 검색어를 상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productCode?: any;
    /**
      * @description
      * 브랜드 코드
      * 
      * 브랜드 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    brandCode?: any;
    /**
      * @description
      * 제조사 코드
      * 
      * 제조사 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    manufacturerCode?: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 공급사 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplierCode?: any;
    /**
      * @description
      * 트렌드 코드
      * 
      * 트렌드 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    trendCode?: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 검색어를 상품 검색어 또는 태그에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productTag?: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * 검색어를 자체상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    customProductCode?: any;
    /**
      * @description
      * 자체 품목 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    customVariantCode?: any;
    /**
      * @description
      * 상품 판매가 검색 최소값
      * 
      * 판매가가 해당 범위 이상인 상품 검색
      * 
      * 
      */ 
    priceMin?: any;
    /**
      * @description
      * 상품 판매가 검색 최대값
      * 
      * 판매가가 해당 범위 이하인 상품 검색
      * 
      * 
      */ 
    priceMax?: any;
    /**
      * @description
      * 상품 소비자가 검색 최소값
      * 
      * 소비자가가 해당 범위 이상인 상품 검색
      * 
      * 최소값: [0]
      * 최대값: [2147483647]
      */ 
    retailPriceMin?: any;
    /**
      * @description
      * 상품 소비자가 검색 최대값
      * 
      * 소비자가가 해당 범위 이하인 상품 검색
      * 
      * 최소값: [0]
      * 최대값: [2147483647]
      */ 
    retailPriceMax?: any;
    /**
      * @description
      * 상품 공급가 검색 최소값
      * 
      * 공급가가 해당 범위 이하인 상품 검색
      * 
      * 
      */ 
    supplyPriceMin?: any;
    /**
      * @description
      * 상품 공급가 검색 최대값
      * 
      * 공급가가 해당 범위 이상인 상품 검색
      * 
      * 
      */ 
    supplyPriceMax?: any;
    /**
      * @description
      * 상품 등록일 검색 시작일
      * 
      * 상품 등록일이 해당 날짜 이후인 상품 검색.
      * 
      * 등록일 검색 종료일과 같이 사용해야함.
      * 
      * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
      * 
      * 
      */ 
    createdStartDate?: any;
    /**
      * @description
      * 상품 등록일 검색 종료일
      * 
      * 상품 등록일이 해당 날짜 이전인 상품 검색.
      * 
      * 등록일 검색 시작일과 같이 사용해야함.
      * 
      * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
      * 
      * 
      */ 
    createdEndDate?: any;
    /**
      * @description
      * 상품 수정일 검색 시작일
      * 
      * 상품 수정일이 해당 날짜 이후인 상품 검색.
      * 
      * 수정일 검색 종료일과 같이 사용해야함.
      * 
      * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
      * 
      * 
      */ 
    updatedStartDate?: any;
    /**
      * @description
      * 상품 수정일 검색 종료일
      * 
      * 상품 수정일이 해당 날짜 이전인 상품 검색.
      * 
      * 수정일 검색 시작일과 같이 사용해야함.
      * 
      * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
      * 
      * 
      */ 
    updatedEndDate?: any;
    /**
      * @description
      * 분류 번호
      * 
      * 특정 분류에 진열된 상품 검색.
      * 
      * 
      */ 
    category?: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 검색어를 영문 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    engProductName?: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 검색어를 공급사 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplyProductName?: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    internalProductName?: any;
    /**
      * @description
      * 모델명
      * 
      * 검색어를 모델명에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    modelName?: any;
    /**
      * @description
      * 상품 상태
      * 
      * 특정 상품 상태 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productCondition?: any;
    /**
      * @description
      * 원산지정보
      * 
      * 원산지가 &#34;기타(1800)&#34;일 경우 원산지로 입력 가능한 정보.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    originPlaceValue?: any;
    /**
      * @description
      * 재고수량 검색 최대값
      * 
      * 재고가 해당 값 이하로 남아있는 상품 검색.
      * 
      * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
      * 
      * 
      */ 
    stockQuantityMax?: any;
    /**
      * @description
      * 재고수량 검색 최소값
      * 
      * 재고가 해당 값 이상 남아있는 상품 검색.
      * 
      * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
      * 
      * 
      */ 
    stockQuantityMin?: any;
    /**
      * @description
      * 안전재고수량 검색 최대값
      * 
      * 
      */ 
    stockSafetyMax?: any;
    /**
      * @description
      * 안전재고수량 검색 최소값
      * 
      * 
      */ 
    stockSafetyMin?: any;
    /**
      * @description
      * 상품 중량
      * 
      * 해당 중량의 상품 검색.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productWeight?: any;
    /**
      * @description
      * 자체분류
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    classificationCode?: any;
    /**
      * @description
      * 재고 사용여부
      * 
      * 해당 상품 품목이 재고를 사용하고 있는지 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useInventory?: any;
    /**
      * @description
      * 미적용 분류 검색
      * 
      * 분류가 등록되지 않은 상품에 대하여 검색함.
      * 
      * T: 미적용 분류 검색
      * 
      * 
      */ 
    categoryUnapplied?: any;
    /**
      * @description
      * 하위분류 포함 검색
      * 
      * 하위분류에 등록된 상품을 포함하여 검색함.
      * 
      * T: 포함
      * 
      * 
      */ 
    includeSubCategory?: any;
    /**
      * @description
      * 추가항목 검색조건 키
      * 
      * 추가항목에 대하여 검색하기 위한 키. 검색을 위해선 key 와 value 모두 필요함.
      * 
      * 
      */ 
    additionalInformationKey?: any;
    /**
      * @description
      * 추가항목 검색조건 값
      * 
      * 추가항목에 대하여 검색하기 위한 키의 값. 검색을 위해선 key 와 value 모두 필요함.
      * 
      * 
      */ 
    additionalInformationValue?: any;
    /**
      * @description
      * 승인상태 검색
      * 
      * N : 승인요청 (신규상품) 상태값
      * E : 승인요청 (상품수정) 상태값
      * C : 승인완료 상태값
      * R : 승인거절 상태값
      * I : 검수진행중 상태값
      * 
      * 
      */ 
    approveStatus?: any;
    /**
      * @description
      * 해당 상품번호 이후 검색
      * 
      * 특정 상품번호 이후의 상품들을 검색. 해당 검색조건 사용시 offset과 관계 없이 모든 상품을 검색할 수 있다.
      * 
      * ※ 해당 검색 조건 사용시 다음 파라메터로는 사용할 수 없다.
      * 
      * product_no
      * sort
      * order
      * offset
      * 
      * 최소값: [0]
      * 최대값: [2147483647]
      */ 
    sinceProductNo?: any;
    /**
      * @description
      * 세트상품 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    productBundle?: any;
    /**
      * @description
      * 옵션 구성방식
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * C : 조합 일체선택형
      * S : 조합 분리선택형
      * E : 상품 연동형
      * F : 독립 선택형
      * 
      * 
      */ 
    optionType?: any;
    /**
      * @description
      * 마켓 연동 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    marketSync?: any;
    /**
      * @description
      * 정렬 순서 값
      * 
      * created_date : 등록일
      * updated_date : 수정일
      * product_name : 상품명
      * 
      * 
      */ 
    sort?: any;
    /**
      * @description
      * 정렬 순서
      * 
      * asc : 순차정렬
      * desc : 역순 정렬
      * 
      * 
      */ 
    order?: any;
    /**
      * @description
      * 조회결과 시작위치
      * 
      * 조회결과 시작위치
      * 
      * @default 0
      * 
      * 최대값: [5000]
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

  export interface RetrieveAListOfProductsOutput {
    products: { 
    shopNo: number;
    productNo: number;
    productCode: string;
    customProductCode: string;
    productName: string;
    engProductName: string;
    supplyProductName: string;
    internalProductName: string;
    modelName: string;
    priceExcludingTax: Cafe24Datetime;
    price: Cafe24Datetime;
    retailPrice: string;
    supplyPrice: Cafe24Datetime;
    display: Cafe24Enum;
    selling: Cafe24Enum;
    productCondition: Cafe24Enum;
    productUsedMonth: number;
    summaryDescription: string;
    marginRate: string;
    taxCalculation: Cafe24Enum;
    taxType: Cafe24Enum;
    taxRate: number;
    priceContent: any;
    buyLimitByProduct: Cafe24Enum;
    buyLimitType: Cafe24Enum;
    buyGroupList: number[];
    buyMemberIdList: string[];
    repurchaseRestriction: Cafe24Enum;
    singlePurchaseRestriction: Cafe24Enum;
    buyUnitType: Cafe24Enum;
    buyUnit: number;
    orderQuantityLimitType: Cafe24Enum;
    minimumQuantity: number;
    maximumQuantity: number;
    pointsByProduct: Cafe24Enum;
    pointsSettingByPayment: Cafe24Enum;
    pointsAmount: { 
    paymentMethod: string;
    pointsRate: string;
    }[];
    exceptMemberPoints: Cafe24Enum;
    productVolume: { 
    useProductVolume: Cafe24Enum;
    productWidth: string;
    productHeight: string;
    productLength: string;
    };
    adultCertification: Cafe24Enum;
    detailImage: string;
    listImage: string;
    tinyImage: string;
    smallImage: string;
    useNaverpay: Cafe24Enum;
    naverpayType: Cafe24Enum;
    useKakaopay: Cafe24Enum;
    manufacturerCode: string;
    trendCode: string;
    brandCode: string;
    supplierCode: string;
    madeDate: string;
    releaseDate: string;
    expirationDate: { 
    startDate: Cafe24Date;
    endDate: Cafe24Date;
    };
    originClassification: Cafe24Enum;
    originPlaceNo: number;
    originPlaceValue: string;
    madeInCode: string;
    iconShowPeriod: { 
    startDate: Cafe24Datetime;
    endDate: Cafe24Datetime;
    };
    icon: string[];
    hscode: Cafe24Datetime;
    productWeight: string;
    productMaterial: string;
    createdDate: Cafe24Datetime;
    updatedDate: Cafe24Datetime;
    englishProductMaterial: any;
    clothFabric: any;
    listIcon: { 
    soldoutIcon: boolean;
    recommendIcon: boolean;
    newIcon: boolean;
    };
    approveStatus: string;
    classificationCode: string;
    soldOut: Cafe24Enum;
    additionalPrice: string;
    clearanceCategoryEng: string;
    clearanceCategoryKor: string;
    clearanceCategoryCode: string;
    exposureLimitType: Cafe24Enum;
    exposureGroupList: number[];
    setProductType: any;
    shippingFeeByProduct: Cafe24Enum;
    shippingFeeType: Cafe24Enum;
    main: number[];
    marketSync: Cafe24Enum;
    }[];
  }
  export interface RetrieveACountOfProductsInput {
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
      * 조회하고자 하는 상품의 번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productNo?: any;
    /**
      * @description
      * 진열상태
      * 
      * 진열 혹은 미진열 되어있는 상품 검색.
      * 
      * 
      */ 
    display?: any;
    /**
      * @description
      * 판매상태
      * 
      * 판매중이거나 판매안함 상태의 상품 검색.
      * 
      * 
      */ 
    selling?: any;
    /**
      * @description
      * 상품명
      * 
      * 검색어를 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productName?: any;
    /**
      * @description
      * 상품코드
      * 
      * 상품 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productCode?: any;
    /**
      * @description
      * 브랜드 코드
      * 
      * 브랜드 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    brandCode?: any;
    /**
      * @description
      * 제조사 코드
      * 
      * 제조사 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    manufacturerCode?: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 공급사 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplierCode?: any;
    /**
      * @description
      * 트렌드 코드
      * 
      * 트렌드 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    trendCode?: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 검색어를 상품 검색어 또는 태그에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productTag?: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * 검색어를 자체상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    customProductCode?: any;
    /**
      * @description
      * 자체 품목 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    customVariantCode?: any;
    /**
      * @description
      * 상품 판매가 검색 최소값
      * 
      * 판매가가 해당 범위 이상인 상품 검색
      * 
      * 
      */ 
    priceMin?: any;
    /**
      * @description
      * 상품 판매가 검색 최대값
      * 
      * 판매가가 해당 범위 이하인 상품 검색
      * 
      * 
      */ 
    priceMax?: any;
    /**
      * @description
      * 상품 소비자가 검색 최소값
      * 
      * 소비자가가 해당 범위 이상인 상품 검색
      * 
      * 최소값: [0]
      * 최대값: [2147483647]
      */ 
    retailPriceMin?: any;
    /**
      * @description
      * 상품 소비자가 검색 최대값
      * 
      * 소비자가가 해당 범위 이하인 상품 검색
      * 
      * 최소값: [0]
      * 최대값: [2147483647]
      */ 
    retailPriceMax?: any;
    /**
      * @description
      * 상품 공급가 검색 최소값
      * 
      * 공급가가 해당 범위 이하인 상품 검색
      * 
      * 
      */ 
    supplyPriceMin?: any;
    /**
      * @description
      * 상품 공급가 검색 최대값
      * 
      * 공급가가 해당 범위 이상인 상품 검색
      * 
      * 
      */ 
    supplyPriceMax?: any;
    /**
      * @description
      * 상품 등록일 검색 시작일
      * 
      * 상품 등록일이 해당 날짜 이후인 상품 검색.
      * 
      * 등록일 검색 종료일과 같이 사용해야함.
      * 
      * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
      * 
      * 
      */ 
    createdStartDate?: any;
    /**
      * @description
      * 상품 등록일 검색 종료일
      * 
      * 상품 등록일이 해당 날짜 이전인 상품 검색.
      * 
      * 등록일 검색 시작일과 같이 사용해야함.
      * 
      * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
      * 
      * 
      */ 
    createdEndDate?: any;
    /**
      * @description
      * 상품 수정일 검색 시작일
      * 
      * 상품 수정일이 해당 날짜 이후인 상품 검색.
      * 
      * 수정일 검색 종료일과 같이 사용해야함.
      * 
      * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
      * 
      * 
      */ 
    updatedStartDate?: any;
    /**
      * @description
      * 상품 수정일 검색 종료일
      * 
      * 상품 수정일이 해당 날짜 이전인 상품 검색.
      * 
      * 수정일 검색 시작일과 같이 사용해야함.
      * 
      * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
      * 
      * 
      */ 
    updatedEndDate?: any;
    /**
      * @description
      * 분류 번호
      * 
      * 특정 분류에 진열된 상품 검색.
      * 
      * 
      */ 
    category?: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 검색어를 영문 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    engProductName?: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 검색어를 공급사 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supplyProductName?: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    internalProductName?: any;
    /**
      * @description
      * 모델명
      * 
      * 검색어를 모델명에 포함하고 있는 상품 검색(대소문자 구분 없음)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    modelName?: any;
    /**
      * @description
      * 상품 상태
      * 
      * 특정 상품 상태 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productCondition?: any;
    /**
      * @description
      * 원산지정보
      * 
      * 원산지가 &#34;기타(1800)&#34;일 경우 원산지로 입력 가능한 정보.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    originPlaceValue?: any;
    /**
      * @description
      * 재고수량 검색 최대값
      * 
      * 재고가 해당 값 이하로 남아있는 상품 검색.
      * 
      * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
      * 
      * 
      */ 
    stockQuantityMax?: any;
    /**
      * @description
      * 재고수량 검색 최소값
      * 
      * 재고가 해당 값 이상 남아있는 상품 검색.
      * 
      * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
      * 
      * 
      */ 
    stockQuantityMin?: any;
    /**
      * @description
      * 안전재고수량 검색 최대값
      * 
      * 
      */ 
    stockSafetyMax?: any;
    /**
      * @description
      * 안전재고수량 검색 최소값
      * 
      * 
      */ 
    stockSafetyMin?: any;
    /**
      * @description
      * 상품 중량
      * 
      * 해당 중량의 상품 검색.
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    productWeight?: any;
    /**
      * @description
      * 자체분류
      * 
      * 자체분류 코드가 일치하는 상품 검색
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    classificationCode?: any;
    /**
      * @description
      * 재고 사용여부
      * 
      * 해당 상품 품목이 재고를 사용하고 있는지 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useInventory?: any;
    /**
      * @description
      * 미적용 분류 검색
      * 
      * 분류가 등록되지 않은 상품에 대하여 검색함.
      * 
      * T: 미적용 분류 검색
      * 
      * 
      */ 
    categoryUnapplied?: any;
    /**
      * @description
      * 하위분류 포함 검색
      * 
      * 하위분류에 등록된 상품을 포함하여 검색함.
      * 
      * T: 포함
      * 
      * 
      */ 
    includeSubCategory?: any;
    /**
      * @description
      * 추가항목 검색조건 키
      * 
      * 추가항목에 대하여 검색하기 위한 키. 검색을 위해선 key 와 value 모두 필요함.
      * 
      * 
      */ 
    additionalInformationKey?: any;
    /**
      * @description
      * 추가항목 검색조건 값
      * 
      * 추가항목에 대하여 검색하기 위한 키의 값. 검색을 위해선 key 와 value 모두 필요함.
      * 
      * 
      */ 
    additionalInformationValue?: any;
    /**
      * @description
      * 승인상태 검색
      * 
      * N : 승인요청 (신규상품) 상태값
      * E : 승인요청 (상품수정) 상태값
      * C : 승인완료 상태값
      * R : 승인거절 상태값
      * I : 검수진행중 상태값
      * 
      * 
      */ 
    approveStatus?: any;
    /**
      * @description
      * 해당 상품번호 이후 검색
      * 
      * 특정 상품번호 이후의 상품들을 검색. 해당 검색조건 사용시 offset과 관계 없이 모든 상품을 검색할 수 있다.
      * 
      * ※ 해당 검색 조건 사용시 다음 파라메터로는 사용할 수 없다.
      * 
      * product_no
      * sort
      * order
      * offset
      * 
      * 최소값: [0]
      * 최대값: [2147483647]
      */ 
    sinceProductNo?: any;
    /**
      * @description
      * 세트상품 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    productBundle?: any;
    /**
      * @description
      * 옵션 구성방식
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * C : 조합 일체선택형
      * S : 조합 분리선택형
      * E : 상품 연동형
      * F : 독립 선택형
      * 
      * 
      */ 
    optionType?: any;
    /**
      * @description
      * 마켓 연동 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    marketSync?: any;
  }

  export interface RetrieveACountOfProductsOutput {
    count: number;
  }
  export interface RetrieveAProductResourceInput {
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
      * 조회하고자 하는 상품의 번호
      * 
      * @required
      */ 
    productNo: any;
    /**
      * @description
      * 품목 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    variants?: any;
    /**
      * @description
      * 메모 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    memos?: any;
    /**
      * @description
      * 상품 조회수 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    hits?: any;
    /**
      * @description
      * 상품 Seo 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    seo?: any;
    /**
      * @description
      * 상품 태그 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    tags?: any;
    /**
      * @description
      * 상품 옵션 리소스
      * 
      * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
      * 
      * @embed
      */ 
    options?: any;
    /**
      * @description
      * 상품 할인판매가 리소스
      * 
      * @embed
      */ 
    discountprice?: any;
    /**
      * @description
      * 꾸미기 이미지 리소스
      * 
      * @embed
      */ 
    decorationimages?: any;
    /**
      * @description
      * 혜택 리소스
      * 
      * @embed
      */ 
    benefits?: any;
    /**
      * @description
      * 추가 이미지 리소스
      * 
      * @embed
      */ 
    additionalimages?: any;
  }

  export interface RetrieveAProductResourceOutput {
    product: { 
    shopNo: number;
    productNo: number;
    category: { 
    categoryNo: number;
    recommend: Cafe24Enum;
    new: Cafe24Enum;
    }[];
    projectNo: number[];
    productCode: string;
    customProductCode: string;
    productName: string;
    engProductName: string;
    supplyProductName: string;
    internalProductName: string;
    modelName: string;
    priceExcludingTax: Cafe24Datetime;
    price: Cafe24Datetime;
    retailPrice: string;
    supplyPrice: string;
    display: Cafe24Enum;
    description: string;
    mobileDescription: string;
    separatedMobileDescription: Cafe24Enum;
    paymentInfo: string;
    shippingInfo: string;
    exchangeInfo: string;
    serviceInfo: string;
    productTaxTypeText: any;
    setProductType: any;
    countryHscode: { 
    jpn: Cafe24Datetime;
    chn: Cafe24Datetime;
    };
    selling: Cafe24Enum;
    productCondition: Cafe24Enum;
    productUsedMonth: number;
    simpleDescription: string;
    summaryDescription: string;
    productTag: string[];
    marginRate: string;
    taxCalculation: Cafe24Enum;
    taxType: Cafe24Enum;
    taxRate: number;
    priceContent: any;
    buyLimitByProduct: Cafe24Enum;
    buyLimitType: Cafe24Enum;
    repurchaseRestriction: Cafe24Enum;
    buyGroupList: number[];
    buyMemberIdList: string[];
    singlePurchaseRestriction: Cafe24Enum;
    buyUnitType: Cafe24Enum;
    buyUnit: number;
    orderQuantityLimitType: Cafe24Enum;
    minimumQuantity: number;
    maximumQuantity: number;
    pointsByProduct: Cafe24Enum;
    pointsSettingByPayment: Cafe24Enum;
    pointsAmount: { 
    paymentMethod: string;
    pointsRate: string;
    }[];
    exceptMemberPoints: Cafe24Enum;
    productVolume: { 
    useProductVolume: Cafe24Enum;
    productWidth: string;
    productHeight: string;
    productLength: string;
    };
    adultCertification: Cafe24Enum;
    detailImage: string;
    listImage: string;
    tinyImage: string;
    smallImage: string;
    hasOption: Cafe24Enum;
    optionType: Cafe24Enum;
    useNaverpay: Cafe24Enum;
    naverpayType: Cafe24Enum;
    useKakaopay: Cafe24Enum;
    manufacturerCode: string;
    trendCode: string;
    brandCode: string;
    supplierCode: string;
    madeDate: string;
    releaseDate: string;
    expirationDate: { 
    startDate: Cafe24Date;
    endDate: Cafe24Date;
    };
    originClassification: Cafe24Enum;
    originPlaceNo: number;
    originPlaceValue: string;
    madeInCode: string;
    iconShowPeriod: { 
    startDate: Cafe24Datetime;
    endDate: Cafe24Datetime;
    };
    icon: any;
    hscode: Cafe24Datetime;
    productWeight: string;
    productMaterial: string;
    shippingCalculation: Cafe24Enum;
    shippingFeeByProduct: Cafe24Enum;
    shippingMethod: Cafe24Datetime;
    prepaidShippingFee: Cafe24Enum;
    shippingPeriod: { 
    minimum: number;
    maximum: number;
    };
    shippingScope: Cafe24Enum;
    shippingArea: string;
    shippingFeeType: Cafe24Enum;
    shippingRates: { 
    shippingRatesMin: string;
    shippingRatesMax: string;
    shippingFee: string;
    }[];
    createdDate: Cafe24Datetime;
    updatedDate: Cafe24Datetime;
    englishProductMaterial: any;
    clearanceCategoryEng: string;
    clearanceCategoryKor: string;
    clearanceCategoryCode: string;
    clothFabric: any;
    originPlaceCode: number;
    listIcon: { 
    soldoutIcon: boolean;
    recommendIcon: boolean;
    newIcon: boolean;
    };
    additionalInformation: { 
    key: string;
    name: string;
    value: string;
    }[];
    imageUploadType: Cafe24Enum;
    classificationCode: string;
    main: number[];
    relationalProduct: { 
    productNo: number;
    interrelated: Cafe24Enum;
    }[];
    selectOneByOption: Cafe24Enum;
    approveStatus: Cafe24Enum;
    soldOut: Cafe24Enum;
    additionalPrice: string;
    translatedAdditionalDescription: string;
    translatedDescription: string;
    exposureLimitType: Cafe24Enum;
    exposureGroupList: number[];
    marketSync: Cafe24Enum;
    };
  }
  export interface CreateAProductInput {
    /**
      * @description
      * 진열상태
      * 
      * T : 진열함
      * F : 진열안함
      * 
      * @default F
      * 
      * 
      */ 
    display?: any;
    /**
      * @description
      * 판매상태
      * 
      * T : 판매함
      * F : 판매안함
      * 
      * @default F
      * 
      * 
      */ 
    selling?: any;
    /**
      * @description
      * 상품 상태
      * 
      * N : 신상품
      * B : 반품상품
      * R : 재고상품
      * U : 중고상품
      * E : 전시상품
      * F : 리퍼상품
      * S : 스크래치 상품
      * 
      * @default N
      * 
      * 
      */ 
    productCondition?: any;
    /**
      * @description
      * 중고상품 사용 개월
      * 
      * 상품 상태(product_condition)가 중고 상품일 경우 중고 상품의 사용 개월 수
      * 
      * 최대값: [2147483647]
      */ 
    productUsedMonth?: any;
    /**
      * @description
      * 추가 분류 번호
      * 
      * 분류 번호를 사용하여 진열을 원하는 카테고리에 상품 등록
      * 
      * 
      */ 
    addCategoryNo?: { 
    /**
      * @description
      * 분류 번호
      * 
      * 
      */ 
    categoryNo: any;
    /**
      * @description
      * 추천상품 분류 등록 여부
      * T : 추천상품 등록
      * F : 추천상품 등록안함
      * @default F
      * 
      * 
      */ 
    recommend?: any;
    /**
      * @description
      * 신상품 분류 등록 여부
      * T : 신상품 등록
      * F : 신상품 등록안함
      * @default F
      * 
      * 
      */ 
    new?: any;
    };
    /**
      * @description
      * 자체상품 코드
      * 
      * 사용자가 상품에 부여 가능한 코드. 재고 관리등의 이유로 자체적으로 상품을 관리 하고 있는 경우 사용함.
      * 
      * 최대글자수 : [40자]
      */ 
    customProductCode?: any;
    /**
      * @description
      * 상품명
      * 
      * @required
      * 
      * 최대글자수 : [250자]
      */ 
    productName: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    engProductName?: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    supplyProductName?: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * 최대글자수 : [50자]
      */ 
    internalProductName?: any;
    /**
      * @description
      * 모델명
      * 
      * 최대글자수 : [100자]
      */ 
    modelName?: any;
    /**
      * @description
      * 상품가(세금 제외)
      * 
      * 상품설정조회 상품설정조회 Docs 바로가기 에서
      * &#34;판매가 계산 기준(calculate_price_based_on)&#34;이 &#34;B(상품가)&#34;일 경우 &#34;price&#34; 대신 필수 입력 필요.
      * 
      * 최소: [0]~최대: [2147483647]
      */ 
    priceExcludingTax?: any;
    /**
      * @description
      * 상품 판매가
      * 
      * 필수 입력
      * 
      * 단, 상품설정조회 상품설정조회 Docs 바로가기 에서
      * &#34;판매가 계산 기준(calculate_price_based_on)&#34;이 &#34;B(상품가)&#34;일 경우 &#34;price_excludig_tax&#34;를 사용해야함.
      * 
      * 최소: [0]~최대: [2147483647]
      */ 
    price?: any;
    /**
      * @description
      * 상품 소비자가
      * 
      * 최소: [0]~최대: [2147483647]
      */ 
    retailPrice?: any;
    /**
      * @description
      * 상품 공급가
      * 
      * 상품의 원가. 공급가에 마진율을 더하여 판매가를 계산할 수 있음. API에서는 공급가는 참조 목적으로만 사용한다.
      * 
      * @required
      * 
      * 최소: [0]~최대: [2147483647]
      */ 
    supplyPrice: any;
    /**
      * @description
      * 옵션 사용여부
      * 
      * T : 옵션사용함
      * F : 옵션 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    hasOption?: any;
    /**
      * @description
      * 옵션
      * 
      * 
      */ 
    options?: { 
    /**
      * @description
      * 옵션명
      * 
      * 
      */ 
    name: any;
    /**
      * @description
      * 옵션값
      * 
      * 
      */ 
    value: any;
    };
    /**
      * @description
      * 네이버페이 사용여부
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useNaverpay?: any;
    /**
      * @description
      * 네이버페이 판매타입
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * C : 네이버페이 + 쇼핑몰 동시판매 상품
      * O : 네이버페이 전용상품
      * 
      * 
      */ 
    naverpayType?: any;
    /**
      * @description
      * 제조사 코드
      * 
      * @default M0000000
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    manufacturerCode?: any;
    /**
      * @description
      * 트렌드 코드
      * 
      * @default T0000000
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    trendCode?: any;
    /**
      * @description
      * 브랜드 코드
      * 
      * @default B0000000
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    brandCode?: any;
    /**
      * @description
      * 공급사 코드
      * 
      * @default S0000000
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    supplierCode?: any;
    /**
      * @description
      * 상품 중량
      * 
      * 최소: [0]~최대: [999999.99]
      */ 
    productWeight?: any;
    /**
      * @description
      * 제조일자
      * 
      * 
      */ 
    madeDate?: any;
    /**
      * @description
      * 출시일자
      * 
      * 
      */ 
    releaseDate?: any;
    /**
      * @description
      * 유효기간
      * 
      * 배열 최대사이즈: [2]
      */ 
    expirationDate?: { 
    /**
      * @description
      * 유효기간 시작일
      * 
      * 
      */ 
    startDate?: any;
    /**
      * @description
      * 유효기간 종료일
      * 
      * 
      */ 
    endDate?: any;
    };
    /**
      * @description
      * 상품상세설명
      * 
      * 
      */ 
    description?: any;
    /**
      * @description
      * 모바일 상품 상세설명
      * 
      * 입력시 모바일 쇼핑몰에서 상품상세설명 대신 모바일 상품 상세 설명을 대신 표시함.
      * 
      * 
      */ 
    mobileDescription?: any;
    /**
      * @description
      * 상품요약설명
      * 
      * 최대글자수 : [255자]
      */ 
    summaryDescription?: any;
    /**
      * @description
      * 상품 간략 설명
      * 
      * 
      */ 
    simpleDescription?: any;
    /**
      * @description
      * 상품상세설명 번역정보
      * 
      * 
      */ 
    translatedDescription?: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 배열 최대사이즈: [50]
      */ 
    productTag?: any;
    /**
      * @description
      * 상품결제안내
      * 
      * 
      */ 
    paymentInfo?: any;
    /**
      * @description
      * 상품배송안내
      * 
      * 
      */ 
    shippingInfo?: any;
    /**
      * @description
      * 교환/반품안내
      * 
      * 
      */ 
    exchangeInfo?: any;
    /**
      * @description
      * 서비스문의/안내
      * 
      * 
      */ 
    serviceInfo?: any;
    /**
      * @description
      * 아이콘
      * 
      * 배열 최대사이즈: [5]
      */ 
    icon?: any;
    /**
      * @description
      * HS코드
      * 
      * 배송정보(shipping_scope)가 C(해외배송)일 경우 필수 입력
      * shipping_calculation이 A(자동계산)일 경우 필수 입력 아님
      * 
      * 최대글자수 : [20자]
      */ 
    hscode?: any;
    /**
      * @description
      * 국가별 HS 코드
      * 
      * 배열 최대사이즈: [29]
      */ 
    countryHscode?: any;
    /**
      * @description
      * 배송정보
      * 
      * 국내에만 배송이 가능한 상품인지 해외에도 배송이 가능한 상품인지 표시. [쇼핑몰 설정 &gt; 배송 설정 &gt; &#39;배송 정책 설정 &gt; 배송비 설정 &gt; 개별배송비 설정&#39;] 에서 상품별 개별배송료 설정이 사용안함인 경우 설정 불가.
      * 
      * ※ 쇼핑몰이 EC Global 쇼핑몰일 경우 &#34;C&#34;를 필수로 입력해야한다.
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * A : 국내배송
      * C : 해외배송
      * B : 국내/해외배송
      * 
      * 
      */ 
    shippingScope?: any;
    /**
      * @description
      * 배송방법
      * 
      * 01 : 택배
      * 02 : 빠른등기
      * 03 : 일반등기
      * 04 : 직접배송
      * 05 : 퀵배송
      * 06 : 기타
      * 07 : 화물배송
      * 08 : 매장직접수령
      * 09 : 배송필요 없음
      * 
      * 
      */ 
    shippingMethod?: any;
    /**
      * @description
      * 개별배송여부
      * 
      * T : 개별배송
      * F : 기본배송
      * 
      * @default F
      * 
      * 
      */ 
    shippingFeeByProduct?: any;
    /**
      * @description
      * 배송지역
      * 
      * 최대글자수 : [255자]
      */ 
    shippingArea?: any;
    /**
      * @description
      * 배송기간
      * 
      * 배열 최대사이즈: [2]
      */ 
    shippingPeriod?: { 
    /**
      * @description
      * 최소 기간
      * @default 1
      * 
      * 
      */ 
    minimum?: any;
    /**
      * @description
      * 최대 기간
      * @default 7
      * 
      * 
      */ 
    maximum?: any;
    };
    /**
      * @description
      * 배송비 타입
      * 
      * 개별배송비를 사용할 경우 상품의 배송비 타입.
      * 
      * T : 배송비 무료
      * R : 고정배송비 사용
      * M : 구매 금액에 따른 부과
      * D : 구매 금액별 차등 배송료 사용
      * W : 상품 무게별 차등 배송료 사용
      * C : 상품 수량별 차등 배송료 사용
      * N : 상품 수량에 비례하여 배송료 부과
      * 
      * 
      */ 
    shippingFeeType?: any;
    /**
      * @description
      * 배송비 금액
      * 
      * 개별배송비를 사용할 경우 상품의 개별 배송비.
      * 
      * shipping_fee_type이 R, N일 경우 배열 안에 shipping_fee를 정의하여 배송비를 설정할 수 있다.
      * 
      * shipping_fee_type이 M, D, W, C일 경우 배열 안에 다음과 같이 정의하여 배송비 구간을 설정할 수 있다.
      * shipping_rates_min : 배송비 구간 시작 기준
      * shipping_rates_max : 배송비 구간 종료 기준
      * shipping_fee : 배송비
      * 
      * 배열 최대사이즈: [200]
      */ 
    shippingRates?: { 
    /**
      * @description
      * 배송비 구간 시작 기준
      * 
      * 
      */ 
    shippingRatesMin?: any;
    /**
      * @description
      * 배송비 구간 종료 기준
      * 
      * 
      */ 
    shippingRatesMax?: any;
    /**
      * @description
      * 배송비
      * 
      * 
      */ 
    shippingFee?: any;
    };
    /**
      * @description
      * 배송비 선결제 설정
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * C : 착불
      * P : 선결제
      * B : 선결제/착불
      * 
      * 
      */ 
    prepaidShippingFee?: any;
    /**
      * @description
      * 해외통관코드
      * 
      * 배송정보(shipping_scope)가 C(해외배송)일 경우 필수 입력
      * shipping_calculation이 A(자동계산)일 경우 필수 입력 아님
      * clearance_category_code 
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    clearanceCategoryCode?: any;
    /**
      * @description
      * 상세이미지
      * 
      * 
      */ 
    detailImage?: any;
    /**
      * @description
      * 목록이미지
      * 
      * 
      */ 
    listImage?: any;
    /**
      * @description
      * 작은목록이미지
      * 
      * 
      */ 
    tinyImage?: any;
    /**
      * @description
      * 축소이미지
      * 
      * 
      */ 
    smallImage?: any;
    /**
      * @description
      * 이미지 업로드 타입
      * 
      * 이미지 업로드시 이미지 업로드 타입.
      * &#34;대표이미지 등록&#34;시 상세이미지를 리사이징하여 목록이미지, 작은목록이미지, 축소이미지에 업로드
      * &#34;개별이미지 등록&#34;시 상세이미지, 목록이미지, 작은목록이미지, 축소이미지를 각각 따로 업로드
      * 
      * ※ EC Global은 FTP를 지원하지 않으므로 C는 사용할 수 없음
      * 
      * A : 대표이미지등록
      * B : 개별이미지등록
      * C : 웹FTP 등록
      * 
      * @default A
      * 
      * 
      */ 
    imageUploadType?: any;
    /**
      * @description
      * 추가항목
      * 
      * 
      */ 
    additionalInformation?: { 
    /**
      * @description
      * 추가항목 키
      * 
      * 
      */ 
    key: any;
    /**
      * @description
      * 추가항목 값
      * 
      * 
      */ 
    value?: any;
    };
    /**
      * @description
      * 판매가 대체문구
      * 
      * 최대글자수 : [20자]
      */ 
    priceContent?: any;
    /**
      * @description
      * 구매제한 개별 설정여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    buyLimitByProduct?: any;
    /**
      * @description
      * 구매제한
      * 
      * N : 회원만 구매하며
      * 구매버튼 감추기
      * M : 회원만 구매하며
      * 구매버튼 보이기
      * F : 구매제한 안함
      * O : 지정된 회원만 구매하며 구매버튼 감추기
      * D : 지정된 회원만 구매하며 구매버튼 보이기
      * 
      * @default F
      * 
      * 
      */ 
    buyLimitType?: any;
    /**
      * @description
      * 구매가능 회원 등급
      * 
      * 
      */ 
    buyGroupList?: any;
    /**
      * @description
      * 구매가능 회원아이디
      * 
      * 
      */ 
    buyMemberIdList?: any;
    /**
      * @description
      * 재구매 제한
      * 
      * T : 재구매 불가
      * F : 제한안함
      * 
      * @default F
      * 
      * 
      */ 
    repurchaseRestriction?: any;
    /**
      * @description
      * 단독구매 제한
      * 
      * T : 단독구매 불가
      * F : 제한안함
      * 
      * @default F
      * 
      * 
      */ 
    singlePurchaseRestriction?: any;
    /**
      * @description
      * 구매단위 타입
      * 
      * 해당 상품의 구매 단위를 1개 이상으로 설정한 경우 해당 구매 단위를 품목 단위로 할 것인지, 상품 단위로 할 것인지에 대한 설정
      * 
      * P : 상품 기준
      * O : 품목 기준
      * 
      * @default O
      * 
      * 
      */ 
    buyUnitType?: any;
    /**
      * @description
      * 구매단위
      * 
      * @default 1
      * 
      * 최대값: [2147483647]
      */ 
    buyUnit?: any;
    /**
      * @description
      * 주문수량 제한 기준
      * 
      * 해당 상품의 주문 수량 제한시 제한 기준을 품목 단위로 할 것인지, 상품 단위로 할 것인지에 대한 설정
      * 
      * P : 상품 기준
      * O : 품목 기준
      * 
      * @default O
      * 
      * 
      */ 
    orderQuantityLimitType?: any;
    /**
      * @description
      * 최소 주문수량
      * 
      * 주문 가능한 최소한의 주문 수량. 주문 수량 미만으로 구매 할 수 없음.
      * 
      * @default 1
      * 
      * 최대값: [2147483647]
      */ 
    minimumQuantity?: any;
    /**
      * @description
      * 최대 주문수량
      * 
      * 주문 가능한 최대한의 주문 수량. 주문 수량을 초과하여 구매 할 수 없음.
      * 
      * 최대 주문수량을 &#34;제한없음&#34;으로 입력하려면 0을 입력
      * 
      * @default 0
      * 
      * 최대값: [2147483647]
      */ 
    maximumQuantity?: any;
    /**
      * @description
      * 적립금 개별설정 사용여부
      * 
      * F : 기본설정 사용
      * T : 개별설정
      * 
      * @default F
      * 
      * 
      */ 
    pointsByProduct?: any;
    /**
      * @description
      * 결제방식별 적립금 설정 여부
      * 
      * B : 기본 적립금설정 사용
      * C : 결제방식에 따른 적립
      * 
      * 
      */ 
    pointsSettingByPayment?: any;
    /**
      * @description
      * 적립금 설정 정보
      * 
      * 
      */ 
    pointsAmount?: { 
    /**
      * @description
      * 적립금 결제방법
      * naverpay : 네이버페이
      * smilepay : 스마일페이
      * kakaopay : 카카오페이
      * payco : 페이코
      * paynow : 페이나우
      * kpay : 케이페이
      * icash : 가상계좌 결제
      * deposit : 예치금 결제
      * tcash : 실시간 계좌이체
      * cell : 휴대폰 결제
      * card : 카드 결제
      * mileage : 적립금 결제
      * cash : 무통장 입금
      * 
      * 
      */ 
    paymentMethod?: any;
    /**
      * @description
      * 적립율
      * 
      * 
      */ 
    pointsRate?: any;
    /**
      * @description
      * 결제방법별 적립금 단위
      * P : 퍼센트 단위
      * W : 원단위
      * 
      * 
      */ 
    pointsUnitByPayment?: any;
    };
    /**
      * @description
      * 회원등급 추가 적립 제외
      * 
      * T : 회원등급 추가 적립 제외 설정함
      * F : 회원등급 추가 적립 제외 설정안함
      * 
      * @default F
      * 
      * 
      */ 
    exceptMemberPoints?: any;
    /**
      * @description
      * 상품 부피 정보
      * 
      * 
      */ 
    productVolume?: { 
    /**
      * @description
      * 상품부피 사용여부
      * 
      * 
      */ 
    useProductVolume?: any;
    /**
      * @description
      * 가로
      * 
      * 
      */ 
    productWidth?: any;
    /**
      * @description
      * 세로
      * 
      * 
      */ 
    productHeight?: any;
    /**
      * @description
      * 높이
      * 
      * 
      */ 
    productLength?: any;
    };
    /**
      * @description
      * 원산지 국내/국외/기타
      * 
      * F : 국내
      * T : 국외
      * E : 기타
      * 
      * 
      */ 
    originClassification?: any;
    /**
      * @description
      * 원산지 번호
      * 
      * 원산지 번호를 Retrieve a list of origins API를 통해 원산지를 조회하여 입력
      * origin_classification이 F(국내)인 경우, 해외 여부(foreign)가 &#34;F&#34;인 원산지만 입력 가능함.
      * origin_classification이 T(해외)인 경우, 해외 여부(foreign)가 &#34;T&#34;인 원산지만 입력 가능함.
      * 
      * 
      */ 
    originPlaceNo?: any;
    /**
      * @description
      * 원산지기타정보
      * 
      * 원산지가 &#34;기타(1800)&#34;일 경우 원산지로 입력 가능한 정보.
      * 
      * 최대글자수 : [30자]
      */ 
    originPlaceValue?: any;
    /**
      * @description
      * 원산지 국가코드
      * 
      * 원산지 국가를 두자리 국가코드로 입력
      * 
      * 원산지를 국가 단위로만 입력하는 경우 원산지 번호(origin_place_no)와 원산지 구분(origin_classification) 대신 사용 가능하다.
      * 
      * 
      */ 
    madeInCode?: any;
    /**
      * @description
      * 메인진열
      * 
      * 상품을 &#34;추천상품&#34;, &#34;신상품&#34;과 같은 메인진열에 진열할 경우, 메인 진열 번호를 표시한다.
      * 
      * 
      */ 
    main?: any;
    /**
      * @description
      * 관련상품
      * 
      * 해당 상품과 비슷한 상품 혹은 대체 가능한 상품. 관련 상품 등록시 해당 상품의 상세페이지 하단에 노출된다.
      * 
      * 배열 최대사이즈: [200]
      */ 
    relationalProduct?: { 
    /**
      * @description
      * 상품번호
      * 
      * 
      */ 
    productNo: any;
    /**
      * @description
      * 관련상품 상호등록 여부
      * T : 상호등록
      * F : 일방등록
      * 
      * 
      */ 
    interrelated: any;
    };
    /**
      * @description
      * 상품소재
      * 
      * 상품의 소재. 복합 소재일 경우 상품의 소재와 함유랑을 함께 입력해야함. (예 : 면 80%, 레이온 20%)
      * 
      * 
      */ 
    productMaterial?: any;
    /**
      * @description
      * 영문 상품 소재
      * 
      * 상품의 소재의 영어 표기. 해외 배송사를 이용할 경우 의류의 소재를 통관시 요구하는 경우가 있음.
      * 
      * 
      */ 
    englishProductMaterial?: any;
    /**
      * @description
      * 옷감
      * 
      * 상품이 의류인 경우, 옷감. 일본 택배사를 이용할 경우, 택배사에 따라 의류 통관시 옷감 정보를 입력 받는 경우가 있음.
      * 
      * woven : 직물(woven)
      * knit : 편물(knit)
      * 
      * 
      */ 
    clothFabric?: any;
    /**
      * @description
      * 자체분류
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    classificationCode?: any;
    /**
      * @description
      * 판매가 추가금액
      * 
      * 판매가 계산시 상품의 원가와 마진율에 더하여 추가로 계산되는 금액. API에서 해당 금액은 참고 목적으로만 사용된다.
      * 
      * 최대값: [2147483647]
      */ 
    additionalPrice?: any;
    /**
      * @description
      * 마진률
      * 
      * 상품의 원가에 더하여 판매가 계산을 위한 마진율. Api에서는 해당 값은 참고용으로만 사용된다.
      * 
      * 최소: [-999.99]~최대: [999.99]
      */ 
    marginRate?: any;
    /**
      * @description
      * 과세 구분
      * 
      * 해당 상품의 과세 정보.
      * 
      * 해당 상품의 부가세 포함 유형.
      * 과세상품 = 세금이 부과된 상품.
      * 면세상품 = 세금이 면제되는 상품. 가공되지 않은 농/수/축산물, 연탄, 도서류, 보험, 여성용품 등의 상품이 이에 해당하며, 과세사업자로 등록해야 함
      * 영세상품 = 부가세가 0%로 적용되는 수출용 외화 획득 상품
      * 
      * A : 과세상품
      * B : 면세 상품
      * C : 영세상품
      * 
      * 
      */ 
    taxType?: any;
    /**
      * @description
      * 과세율
      * 
      * 최소: [0]~최대: [100]
      */ 
    taxRate?: any;
    /**
      * @description
      * 추가이미지
      * 
      * 상품 상세 화면 하단에 표시되는 상품의 추가 이미지. 축소 이미지와 비슷한 위치에 표시되며 PC 쇼핑몰에서는 마우스 오버시, 모바일 쇼핑몰에서는 이미지 스와이프(Swipe)시 추가 이미지를 확인할 수 있다.
      * 
      * 추가이미지는 최대 20개까지 등록 가능하다.
      * 
      * 
      */ 
    additionalImage?: any;
    /**
      * @description
      * 성인인증
      * 
      * 성인인증이 필요한 상품인지 여부. 성인인증이 필요한 상품인 구매를 위해서는 본인인증을 거쳐야함.
      * 
      * [쇼핑몰 설정 &gt; 고객 설정 &gt; &#39;회원 정책 설정 &gt; 회원 관련 설정 &gt; 회원가입 및 본인인증 설정&#39;] 에서 성인인증 사용 시 구매차단 설정이 사용함이어야 성인인증이 적용된다.
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * @default F
      * 
      * 
      */ 
    adultCertification?: any;
    /**
      * @description
      * 표시제한 범위
      * 
      * A : 모두에게 표시
      * M : 회원에게만 표시
      * 
      * @default A
      * 
      * 
      */ 
    exposureLimitType?: any;
    /**
      * @description
      * 표시대상 회원 등급
      * 
      * 
      */ 
    exposureGroupList?: any;
    /**
      * @description
      * 카카오페이 사용여부
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useKakaopay?: any;
  }

  export interface CreateAProductOutput {
    product: { 
    shopNo: number;
    productNo: number;
    category: { 
    categoryNo: number;
    recommend: Cafe24Enum;
    new: Cafe24Enum;
    }[];
    productCode: string;
    customProductCode: string;
    productName: string;
    engProductName: string;
    internalProductName: string;
    modelName: string;
    priceExcludingTax: Cafe24Datetime;
    price: Cafe24Datetime;
    retailPrice: string;
    supplyPrice: Cafe24Datetime;
    display: Cafe24Enum;
    selling: Cafe24Enum;
    productCondition: Cafe24Enum;
    productUsedMonth: number;
    priceContent: string;
    buyLimitByProduct: Cafe24Enum;
    buyLimitType: Cafe24Enum;
    buyGroupList: number[];
    buyMemberIdList: string[];
    repurchaseRestriction: Cafe24Enum;
    singlePurchaseRestriction: Cafe24Enum;
    buyUnitType: Cafe24Enum;
    buyUnit: number;
    orderQuantityLimitType: Cafe24Enum;
    minimumQuantity: number;
    maximumQuantity: number;
    pointsByProduct: Cafe24Enum;
    pointsSettingByPayment: Cafe24Enum;
    pointsAmount: { 
    paymentMethod: string;
    pointsRate: string;
    }[];
    exceptMemberPoints: Cafe24Enum;
    productVolume: { 
    useProductVolume: Cafe24Enum;
    productWidth: string;
    productHeight: string;
    productLength: string;
    };
    adultCertification: Cafe24Enum;
    description: string;
    mobileDescription: string;
    translatedDescription: string;
    paymentInfo: string;
    shippingInfo: string;
    exchangeInfo: string;
    serviceInfo: string;
    simpleDescription: string;
    summaryDescription: string;
    detailImage: string;
    hasOption: Cafe24Enum;
    useNaverpay: Cafe24Enum;
    naverpayType: Cafe24Enum;
    useKakaopay: Cafe24Enum;
    manufacturerCode: string;
    supplierCode: string;
    brandCode: string;
    trendCode: string;
    productWeight: string;
    expirationDate: { 
    startDate: Cafe24Date;
    endDate: Cafe24Date;
    };
    icon: string[];
    hscode: Cafe24Datetime;
    countryHscode: { 
    jpn: Cafe24Datetime;
    chn: Cafe24Datetime;
    };
    shippingCalculation: Cafe24Enum;
    shippingFeeByProduct: Cafe24Enum;
    shippingMethod: Cafe24Datetime;
    shippingPeriod: { 
    minimum: number;
    maximum: number;
    };
    shippingScope: Cafe24Enum;
    shippingArea: string;
    shippingFeeType: Cafe24Enum;
    shippingRates: { 
    shippingRatesMin: Cafe24Datetime;
    shippingRatesMax: Cafe24Datetime;
    shippingFee: Cafe24Datetime;
    }[];
    prepaidShippingFee: Cafe24Enum;
    clearanceCategoryCode: string;
    imageUploadType: Cafe24Enum;
    relationalProduct: { 
    productNo: number;
    interrelated: Cafe24Enum;
    }[];
    productMaterial: string;
    englishProductMaterial: string;
    clothFabric: string;
    classificationCode: string;
    additionalPrice: Cafe24Datetime;
    marginRate: string;
    taxCalculation: Cafe24Enum;
    taxType: Cafe24Enum;
    taxRate: number;
    originClassification: Cafe24Enum;
    originPlaceNo: number;
    madeInCode: string;
    createdDate: Cafe24Datetime;
    additionalImage: { 
    big: string;
    medium: string;
    small: string;
    }[];
    exposureLimitType: Cafe24Enum;
    exposureGroupList: number[];
    };
  }
  export interface UpdateAProductInput {
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
      * @required
      */ 
    productNo: any;
    /**
      * @description
      * 진열상태
      * 
      * 상품을 쇼핑몰에 진열할지 여부 변경.
      * 
      * T : 진열함
      * F : 진열안함
      * 
      * 
      */ 
    display?: any;
    /**
      * @description
      * 판매상태
      * 
      * T : 판매함
      * F : 판매안함
      * 
      * 
      */ 
    selling?: any;
    /**
      * @description
      * 상품 상태
      * 
      * N : 신상품
      * B : 반품상품
      * R : 재고상품
      * U : 중고상품
      * E : 전시상품
      * F : 리퍼상품
      * S : 스크래치 상품
      * 
      * 
      */ 
    productCondition?: any;
    /**
      * @description
      * 중고상품 사용 개월
      * 
      * 상품 상태(product_condition)가 중고 상품일 경우 중고 상품의 사용 개월 수
      * 
      * 최대값: [2147483647]
      */ 
    productUsedMonth?: any;
    /**
      * @description
      * 추가 분류 번호
      * 
      * 상품분류 번호를 입력하여 해당 상품에 특정 상품분류를 추가 등록
      * 
      * 
      */ 
    addCategoryNo?: { 
    /**
      * @description
      * 분류 번호
      * 
      * 
      */ 
    categoryNo: any;
    /**
      * @description
      * 추천상품 분류 등록 여부
      * T : 추천상품 등록
      * F : 추천상품 등록안함
      * @default F
      * 
      * 
      */ 
    recommend?: any;
    /**
      * @description
      * 신상품 분류 등록 여부
      * T : 신상품 등록
      * F : 신상품 등록안함
      * @default F
      * 
      * 
      */ 
    new?: any;
    };
    /**
      * @description
      * 삭제 분류 번호
      * 
      * 상품분류 번호를 입력하여 해당 상품에 특정 상품분류 삭제
      * 
      * 
      */ 
    deleteCategoryNo?: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * 사용자가 상품에 부여 가능한 코드. 재고 관리등의 이유로 자체적으로 상품을 관리 하고 있는 경우 사용함.
      * 
      * 최대글자수 : [40자]
      */ 
    customProductCode?: any;
    /**
      * @description
      * 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    productName?: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    engProductName?: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    supplyProductName?: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * 최대글자수 : [50자]
      */ 
    internalProductName?: any;
    /**
      * @description
      * 모델명
      * 
      * 최대글자수 : [100자]
      */ 
    modelName?: any;
    /**
      * @description
      * 상품가(세금 제외)
      * 
      * 상품설정조회(GET:/products/setting) 에서 &#34;판매가 계산 기준(calculate_price_based_on)&#34;이 &#34;B(상품가)&#34;일 경우 Price가 아니라 price_excluding_tax를 입력해야한다.
      * 
      * 최소: [0]~최대: [2147483647]
      */ 
    priceExcludingTax?: any;
    /**
      * @description
      * 상품 판매가
      * 
      * tax_calculation이 A(자동계산)일 경우,
      * 상품설정조회(GET:/products/setting)의 &#34;판매가 계산 기준(calculate_price_based_on)&#34; 값과 상관없이
      * price로만 입력해야 한다.
      * 
      * 최소: [0]~최대: [2147483647]
      */ 
    price?: any;
    /**
      * @description
      * 상품 소비자가
      * 
      * 최소: [0]~최대: [2147483647]
      */ 
    retailPrice?: any;
    /**
      * @description
      * 상품 공급가
      * 
      * 상품의 원가. 공급가에 마진율을 더하여 판매가를 계산할 수 있음. API에서는 공급가는 참조 목적으로만 사용한다.
      * 
      * 최소: [0]~최대: [2147483647]
      */ 
    supplyPrice?: any;
    /**
      * @description
      * 네이버페이 사용여부
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useNaverpay?: any;
    /**
      * @description
      * 네이버페이 판매타입
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * C : 네이버페이 + 쇼핑몰 동시판매 상품
      * O : 네이버페이 전용상품
      * 
      * 
      */ 
    naverpayType?: any;
    /**
      * @description
      * 제조사 코드
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    manufacturerCode?: any;
    /**
      * @description
      * 트렌드 코드
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    trendCode?: any;
    /**
      * @description
      * 브랜드 코드
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    brandCode?: any;
    /**
      * @description
      * 공급사 코드
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    supplierCode?: any;
    /**
      * @description
      * 상품 중량
      * 
      * 최소: [0]~최대: [999999.99]
      */ 
    productWeight?: any;
    /**
      * @description
      * 제조일자
      * 
      * 
      */ 
    madeDate?: any;
    /**
      * @description
      * 출시일자
      * 
      * 
      */ 
    releaseDate?: any;
    /**
      * @description
      * 유효기간
      * 
      * 배열 최대사이즈: [2]
      */ 
    expirationDate?: { 
    /**
      * @description
      * 유효기간 시작일
      * 
      * 
      */ 
    startDate?: any;
    /**
      * @description
      * 유효기간 종료일
      * 
      * 
      */ 
    endDate?: any;
    };
    /**
      * @description
      * 상품상세설명
      * 
      * 
      */ 
    description?: any;
    /**
      * @description
      * 모바일 상품 상세설명
      * 
      * 입력시 모바일 쇼핑몰에서 상품상세설명 대신 모바일 상품 상세 설명을 대신 표시함.
      * 
      * 
      */ 
    mobileDescription?: any;
    /**
      * @description
      * 상품상세설명 번역정보
      * 
      * 
      */ 
    translatedDescription?: any;
    /**
      * @description
      * 상품 추가설명 번역정보
      * 
      * 
      */ 
    translatedAdditionalDescription?: any;
    /**
      * @description
      * 상품요약설명
      * 
      * 최대글자수 : [255자]
      */ 
    summaryDescription?: any;
    /**
      * @description
      * 상품 간략 설명
      * 
      * 
      */ 
    simpleDescription?: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 배열 최대사이즈: [50]
      */ 
    productTag?: any;
    /**
      * @description
      * 상품결제안내
      * 
      * 
      */ 
    paymentInfo?: any;
    /**
      * @description
      * 상품배송안내
      * 
      * 
      */ 
    shippingInfo?: any;
    /**
      * @description
      * 교환/반품안내
      * 
      * 
      */ 
    exchangeInfo?: any;
    /**
      * @description
      * 서비스문의/안내
      * 
      * 
      */ 
    serviceInfo?: any;
    /**
      * @description
      * 아이콘
      * 
      * 배열 최대사이즈: [5]
      */ 
    icon?: any;
    /**
      * @description
      * 표시기간 사용 여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useIconExposureTerm?: any;
    /**
      * @description
      * 표시기간 시작 일자
      * 
      * 
      */ 
    iconExposureBeginDatetime?: any;
    /**
      * @description
      * 표시기간 종료 일자
      * 
      * 
      */ 
    iconExposureEndDatetime?: any;
    /**
      * @description
      * HS코드
      * 
      * 배송정보(shipping_scope)가 C(해외배송)일 경우 필수 입력
      * shipping_calculation이 A(자동계산)일 경우 필수 입력 아님
      * 
      * 최대글자수 : [20자]
      */ 
    hscode?: any;
    /**
      * @description
      * 국가별 HS 코드
      * 
      * 배열 최대사이즈: [29]
      */ 
    countryHscode?: any;
    /**
      * @description
      * 배송정보
      * 
      * 국내에만 배송이 가능한 상품인지 해외에도 배송이 가능한 상품인지 표시. [쇼핑몰 설정 &gt; 배송 설정 &gt; &#39;배송 정책 설정 &gt; 배송비 설정 &gt; 개별배송비 설정&#39;] 에서 상품별 개별배송료 설정이 사용안함인 경우 설정 불가.
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * A : 국내배송
      * C : 해외배송
      * B : 국내/해외배송
      * 
      * 
      */ 
    shippingScope?: any;
    /**
      * @description
      * 배송방법
      * 
      * 01 : 택배
      * 02 : 빠른등기
      * 03 : 일반등기
      * 04 : 직접배송
      * 05 : 퀵배송
      * 06 : 기타
      * 07 : 화물배송
      * 08 : 매장직접수령
      * 09 : 배송필요 없음
      * 
      * 
      */ 
    shippingMethod?: any;
    /**
      * @description
      * 개별배송여부
      * 
      * T : 개별배송
      * F : 기본배송
      * 
      * 
      */ 
    shippingFeeByProduct?: any;
    /**
      * @description
      * 배송지역
      * 
      * 최대글자수 : [255자]
      */ 
    shippingArea?: any;
    /**
      * @description
      * 배송기간
      * 
      * 
      */ 
    shippingPeriod?: { 
    /**
      * @description
      * 최소 기간
      * @default 1
      * 
      * 
      */ 
    minimum?: any;
    /**
      * @description
      * 최대 기간
      * @default 7
      * 
      * 
      */ 
    maximum?: any;
    };
    /**
      * @description
      * 배송비 타입
      * 
      * 개별배송비를 사용할 경우 상품의 배송비 타입.
      * 
      * T : 배송비 무료
      * R : 고정배송비 사용
      * M : 구매 금액에 따른 부과
      * D : 구매 금액별 차등 배송료 사용
      * W : 상품 무게별 차등 배송료 사용
      * C : 상품 수량별 차등 배송료 사용
      * N : 상품 수량에 비례하여 배송료 부과
      * 
      * 
      */ 
    shippingFeeType?: any;
    /**
      * @description
      * 배송비 금액
      * 
      * 개별배송비를 사용할 경우 상품의 개별 배송비.
      * 
      * shipping_fee_type이 R, N일 경우 배열 안에 shipping_fee를 정의하여 배송비를 설정할 수 있다.
      * 
      * shipping_fee_type이 M, D, W, C일 경우 배열 안에 다음과 같이 정의하여 배송비 구간을 설정할 수 있다.
      * shipping_rates_min : 배송비 구간 시작 기준
      * shipping_rates_max : 배송비 구간 종료 기준
      * shipping_fee : 배송비
      * 
      * 배열 최대사이즈: [200]
      */ 
    shippingRates?: { 
    /**
      * @description
      * 배송비 구간 시작 기준
      * 
      * 
      */ 
    shippingRatesMin?: any;
    /**
      * @description
      * 배송비 구간 종료 기준
      * 
      * 
      */ 
    shippingRatesMax?: any;
    /**
      * @description
      * 배송비
      * 
      * 
      */ 
    shippingFee?: any;
    };
    /**
      * @description
      * 배송비 선결제 설정
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * C : 착불
      * P : 선결제
      * B : 선결제/착불
      * 
      * 
      */ 
    prepaidShippingFee?: any;
    /**
      * @description
      * 해외통관코드
      * 
      * 배송정보(shipping_scope)가 C(해외배송)일 경우 필수 입력
      * shipping_calculation이 A(자동계산)일 경우 필수 입력 아님
      * clearance_category_code 
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    clearanceCategoryCode?: any;
    /**
      * @description
      * 상세이미지
      * 
      * 
      */ 
    detailImage?: any;
    /**
      * @description
      * 목록이미지
      * 
      * 
      */ 
    listImage?: any;
    /**
      * @description
      * 작은목록이미지
      * 
      * 
      */ 
    tinyImage?: any;
    /**
      * @description
      * 축소이미지
      * 
      * 
      */ 
    smallImage?: any;
    /**
      * @description
      * 이미지 업로드 타입
      * 
      * 이미지 업로드시 이미지 업로드 타입.
      * &#34;대표이미지 등록&#34;시 상세이미지를 리사이징하여 목록이미지, 작은목록이미지, 축소이미지에 업로드
      * &#34;개별이미지 등록&#34;시 상세이미지, 목록이미지, 작은목록이미지, 축소이미지를 각각 따로 업로드
      * 
      * ※ EC Global은 FTP를 지원하지 않으므로 C는 사용할 수 없음
      * 
      * A : 대표이미지등록
      * B : 개별이미지등록
      * C : 웹FTP 등록
      * 
      * 
      */ 
    imageUploadType?: any;
    /**
      * @description
      * 추가항목
      * 
      * 
      */ 
    additionalInformation?: { 
    /**
      * @description
      * 추가항목 키
      * 
      * 
      */ 
    key: any;
    /**
      * @description
      * 추가항목 값
      * 
      * 
      */ 
    value?: any;
    };
    /**
      * @description
      * 판매가 대체문구
      * 
      * 최대글자수 : [20자]
      */ 
    priceContent?: any;
    /**
      * @description
      * 구매제한 개별 설정여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    buyLimitByProduct?: any;
    /**
      * @description
      * 구매제한
      * 
      * N : 회원만 구매하며
      * 구매버튼 감추기
      * M : 회원만 구매하며
      * 구매버튼 보이기
      * F : 구매제한 안함
      * O : 지정된 회원만 구매하며 구매버튼 감추기
      * D : 지정된 회원만 구매하며 구매버튼 보이기
      * 
      * 
      */ 
    buyLimitType?: any;
    /**
      * @description
      * 구매가능 회원 등급
      * 
      * 
      */ 
    buyGroupList?: any;
    /**
      * @description
      * 구매가능 회원아이디
      * 
      * 
      */ 
    buyMemberIdList?: any;
    /**
      * @description
      * 재구매 제한
      * 
      * T : 재구매 불가
      * F : 제한안함
      * 
      * 
      */ 
    repurchaseRestriction?: any;
    /**
      * @description
      * 단독구매 제한
      * 
      * T : 단독구매 불가
      * F : 제한안함
      * 
      * 
      */ 
    singlePurchaseRestriction?: any;
    /**
      * @description
      * 구매단위 타입
      * 
      * 해당 상품의 구매 단위를 1개 이상으로 설정한 경우 해당 구매 단위를 품목 단위로 할 것인지, 상품 단위로 할 것인지에 대한 설정
      * 
      * P : 상품 기준
      * O : 품목 기준
      * 
      * 
      */ 
    buyUnitType?: any;
    /**
      * @description
      * 구매단위
      * 
      * 최대값: [2147483647]
      */ 
    buyUnit?: any;
    /**
      * @description
      * 주문수량 제한 기준
      * 
      * 해당 상품의 주문 수량 제한시 제한 기준을 품목 단위로 할 것인지, 상품 단위로 할 것인지에 대한 설정
      * 
      * P : 상품 기준
      * O : 품목 기준
      * 
      * 
      */ 
    orderQuantityLimitType?: any;
    /**
      * @description
      * 최소 주문수량
      * 
      * 최대값: [2147483647]
      */ 
    minimumQuantity?: any;
    /**
      * @description
      * 최대 주문수량
      * 
      * 주문 가능한 최대한의 주문 수량. 주문 수량을 초과하여 구매 할 수 없음.
      * 
      * 최대 주문수량을 &#34;제한없음&#34;으로 입력하려면 0을 입력
      * 
      * 최소주문수량 수정시 최대주문수량을 같이 수정해야한다.
      * 
      * 최대값: [2147483647]
      */ 
    maximumQuantity?: any;
    /**
      * @description
      * 적립금 개별설정 사용여부
      * 
      * F : 기본설정 사용
      * T : 개별설정
      * 
      * 
      */ 
    pointsByProduct?: any;
    /**
      * @description
      * 결제방식별 적립금 설정 여부
      * 
      * B : 기본 적립금설정 사용
      * C : 결제방식에 따른 적립
      * 
      * 
      */ 
    pointsSettingByPayment?: any;
    /**
      * @description
      * 적립금 설정 정보
      * 
      * 
      */ 
    pointsAmount?: { 
    /**
      * @description
      * 적립금 결제방법
      * naverpay : 네이버페이
      * smilepay : 스마일페이
      * kakaopay : 카카오페이
      * payco : 페이코
      * paynow : 페이나우
      * kpay : 케이페이
      * icash : 가상계좌 결제
      * deposit : 예치금 결제
      * tcash : 실시간 계좌이체
      * cell : 휴대폰 결제
      * card : 카드 결제
      * mileage : 적립금 결제
      * cash : 무통장 입금
      * 
      * 
      */ 
    paymentMethod?: any;
    /**
      * @description
      * 적립율
      * 
      * 
      */ 
    pointsRate?: any;
    /**
      * @description
      * 결제방법별 적립금 단위
      * P : 퍼센트 단위
      * W : 원단위
      * 
      * 
      */ 
    pointsUnitByPayment?: any;
    };
    /**
      * @description
      * 회원등급 추가 적립 제외
      * 
      * T : 회원등급 추가 적립 제외 설정함
      * F : 회원등급 추가 적립 제외 설정안함
      * 
      * 
      */ 
    exceptMemberPoints?: any;
    /**
      * @description
      * 상품 부피 정보
      * 
      * 
      */ 
    productVolume?: { 
    /**
      * @description
      * 상품부피 사용여부
      * 
      * 
      */ 
    useProductVolume?: any;
    /**
      * @description
      * 가로
      * 
      * 
      */ 
    productWidth?: any;
    /**
      * @description
      * 세로
      * 
      * 
      */ 
    productHeight?: any;
    /**
      * @description
      * 높이
      * 
      * 
      */ 
    productLength?: any;
    };
    /**
      * @description
      * 원산지 국내/국외/기타
      * 
      * F : 국내
      * T : 국외
      * E : 기타
      * 
      * 
      */ 
    originClassification?: any;
    /**
      * @description
      * 원산지 번호
      * 
      * 원산지 번호를 List all Origin API를 통해 원산지를 조회하여 입력
      * origin_classification이 F(국내)인 경우, 해외 여부(foreign)가 &#34;F&#34;인 원산지만 입력 가능함.
      * origin_classification이 T(해외)인 경우, 해외 여부(foreign)가 &#34;T&#34;인 원산지만 입력 가능함.
      * 
      * 
      */ 
    originPlaceNo?: any;
    /**
      * @description
      * 원산지기타정보
      * 
      * 원산지가 &#34;기타(1800)&#34;일 경우 원산지로 입력 가능한 정보.
      * 
      * 최대글자수 : [30자]
      */ 
    originPlaceValue?: any;
    /**
      * @description
      * 원산지 국가코드
      * 
      * 원산지 국가를 두자리 국가코드로 입력
      * 
      * 원산지를 국가 단위로만 입력하는 경우 원산지 번호(origin_place_no)와 원산지 구분(origin_classification) 대신 사용 가능하다.
      * 
      * 
      */ 
    madeInCode?: any;
    /**
      * @description
      * 메인진열
      * 
      * 상품을 &#34;추천상품&#34;, &#34;신상품&#34;과 같은 메인진열에 진열할 경우, 메인 진열 번호를 표시한다.
      * 
      * 
      */ 
    main?: any;
    /**
      * @description
      * 관련상품
      * 
      * 해당 상품과 비슷한 상품 혹은 대체 가능한 상품. 관련 상품 등록시 해당 상품의 상세페이지 하단에 노출된다.
      * 
      * 배열 최대사이즈: [200]
      */ 
    relationalProduct?: { 
    /**
      * @description
      * 상품번호
      * 
      * 
      */ 
    productNo?: any;
    /**
      * @description
      * 관련상품 상호등록 여부
      * T : 상호등록
      * F : 일방등록
      * 
      * 
      */ 
    interrelated: any;
    };
    /**
      * @description
      * 상품소재
      * 
      * 상품의 소재. 복합 소재일 경우 상품의 소재와 함유랑을 함께 입력해야함. (예 : 면 80%, 레이온 20%)
      * 
      * 
      */ 
    productMaterial?: any;
    /**
      * @description
      * 영문 상품 소재
      * 
      * 상품의 소재의 영어 표기. 해외 배송사를 이용할 경우 의류의 소재를 통관시 요구하는 경우가 있음.
      * 
      * 
      */ 
    englishProductMaterial?: any;
    /**
      * @description
      * 옷감
      * 
      * 상품이 의류인 경우, 옷감. 일본 택배사를 이용할 경우, 택배사에 따라 의류 통관시 옷감 정보를 입력 받는 경우가 있음.
      * 
      * woven : 직물(woven)
      * knit : 편물(knit)
      * 
      * 
      */ 
    clothFabric?: any;
    /**
      * @description
      * 자체분류
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    classificationCode?: any;
    /**
      * @description
      * 판매가 추가금액
      * 
      * 판매가 계산시 상품의 원가와 마진율에 더하여 추가로 계산되는 금액. API에서 해당 금액은 참고 목적으로만 사용된다.
      * 
      * 최대값: [2147483647]
      */ 
    additionalPrice?: any;
    /**
      * @description
      * 마진률
      * 
      * 상품의 원가에 더하여 판매가 계산을 위한 마진율. Api에서는 해당 값은 참고용으로만 사용된다.
      * 
      * 최소: [-999.99]~최대: [999.99]
      */ 
    marginRate?: any;
    /**
      * @description
      * 과세 구분
      * 
      * 해당 상품의 과세 정보.
      * 
      * 해당 상품의 부가세 포함 유형.
      * 과세상품 = 세금이 부과된 상품.
      * 면세상품 = 세금이 면제되는 상품. 가공되지 않은 농/수/축산물, 연탄, 도서류, 보험, 여성용품 등의 상품이 이에 해당하며, 과세사업자로 등록해야 함
      * 영세상품 = 부가세가 0%로 적용되는 수출용 외화 획득 상품
      * 
      * A : 과세상품
      * B : 면세 상품
      * C : 영세상품
      * 
      * 
      */ 
    taxType?: any;
    /**
      * @description
      * 과세율
      * 
      * 최소: [0]~최대: [100]
      */ 
    taxRate?: any;
    /**
      * @description
      * 추가이미지
      * 
      * 상품 상세 화면 하단에 표시되는 상품의 추가 이미지. 축소 이미지와 비슷한 위치에 표시되며 PC 쇼핑몰에서는 마우스 오버시, 모바일 쇼핑몰에서는 이미지 스와이프(Swipe)시 추가 이미지를 확인할 수 있다.
      * 
      * 추가이미지는 최대 20개까지 등록 가능하다.
      * 
      * 
      */ 
    additionalImage?: any;
    /**
      * @description
      * 성인인증
      * 
      * 성인인증이 필요한 상품인지 여부. 성인인증이 필요한 상품인 구매를 위해서는 본인인증을 거쳐야함.
      * 
      * [쇼핑몰 설정 &gt; 고객 설정 &gt; &#39;회원 정책 설정 &gt; 회원 관련 설정 &gt; 회원가입 및 본인인증 설정&#39;] 에서 성인인증 사용 시 구매차단 설정이 사용함이어야 성인인증이 적용된다.
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    adultCertification?: any;
    /**
      * @description
      * 표시제한 범위
      * 
      * A : 모두에게 표시
      * M : 회원에게만 표시
      * 
      * 
      */ 
    exposureLimitType?: any;
    /**
      * @description
      * 표시대상 회원 등급
      * 
      * 
      */ 
    exposureGroupList?: any;
    /**
      * @description
      * 카카오페이 사용여부
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    useKakaopay?: any;
  }

  export interface UpdateAProductOutput {
    product: { 
    shopNo: number;
    productNo: number;
    category: { 
    categoryNo: number;
    recommend: Cafe24Enum;
    new: Cafe24Enum;
    }[];
    productCode: string;
    customProductCode: string;
    productName: string;
    engProductName: string;
    internalProductName: string;
    modelName: string;
    priceExcludingTax: Cafe24Datetime;
    price: Cafe24Datetime;
    retailPrice: string;
    supplyPrice: Cafe24Datetime;
    display: Cafe24Enum;
    selling: Cafe24Enum;
    productCondition: Cafe24Enum;
    productUsedMonth: number;
    priceContent: string;
    buyLimitByProduct: Cafe24Enum;
    buyLimitType: Cafe24Enum;
    buyGroupList: number[];
    buyMemberIdList: string[];
    repurchaseRestriction: Cafe24Enum;
    singlePurchaseRestriction: Cafe24Enum;
    buyUnitType: Cafe24Enum;
    buyUnit: number;
    orderQuantityLimitType: Cafe24Enum;
    minimumQuantity: number;
    maximumQuantity: number;
    pointsByProduct: Cafe24Enum;
    pointsSettingByPayment: Cafe24Enum;
    pointsAmount: { 
    paymentMethod: string;
    pointsRate: string;
    }[];
    exceptMemberPoints: Cafe24Enum;
    productVolume: { 
    useProductVolume: Cafe24Enum;
    productWidth: string;
    productHeight: string;
    productLength: string;
    };
    adultCertification: Cafe24Enum;
    description: string;
    mobileDescription: string;
    paymentInfo: string;
    shippingInfo: string;
    exchangeInfo: string;
    serviceInfo: string;
    simpleDescription: string;
    summaryDescription: string;
    useNaverpay: Cafe24Enum;
    naverpayType: Cafe24Enum;
    useKakaopay: Cafe24Enum;
    manufacturerCode: string;
    supplierCode: string;
    brandCode: string;
    trendCode: string;
    productWeight: string;
    expirationDate: { 
    startDate: Cafe24Date;
    endDate: Cafe24Date;
    };
    icon: string[];
    hscode: Cafe24Datetime;
    countryHscode: { 
    jpn: Cafe24Datetime;
    chn: Cafe24Datetime;
    };
    shippingCalculation: Cafe24Enum;
    shippingFeeByProduct: Cafe24Enum;
    shippingMethod: Cafe24Datetime;
    shippingPeriod: { 
    minimum: number;
    maximum: number;
    };
    shippingScope: Cafe24Enum;
    shippingArea: string;
    shippingFeeType: Cafe24Enum;
    shippingRates: { 
    shippingRatesMin: Cafe24Datetime;
    shippingRatesMax: Cafe24Datetime;
    shippingFee: Cafe24Datetime;
    }[];
    prepaidShippingFee: Cafe24Enum;
    clearanceCategoryCode: string;
    imageUploadType: Cafe24Enum;
    detailImage: string;
    relationalProduct: { 
    productNo: number;
    interrelated: Cafe24Enum;
    }[];
    productMaterial: string;
    englishProductMaterial: string;
    clothFabric: string;
    classificationCode: string;
    additionalPrice: Cafe24Datetime;
    marginRate: string;
    taxCalculation: Cafe24Enum;
    taxType: Cafe24Enum;
    taxRate: number;
    originClassification: Cafe24Enum;
    originPlaceNo: number;
    madeInCode: string;
    updatedDate: Cafe24Datetime;
    translatedAdditionalDescription: string;
    additionalImage: { 
    big: string;
    medium: string;
    small: string;
    }[];
    additionalInformation: { 
    key: string;
    name: string;
    value: Cafe24Datetime;
    }[];
    exposureLimitType: Cafe24Enum;
    exposureGroupList: number[];
    };
  }
  export interface DeleteAProductInput {
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
      * @required
      */ 
    productNo: any;
  }

  export interface DeleteAProductOutput {
    product: { 
    productNo: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 쇼핑몰에 생성되어 있는 상품을 목록으로 조회할 수 있습니다.
     * 상품코드, 상품명, 판매가 등을 조회할 수 있습니다.
     * 상품이 5,000개가 넘을 경우에는 offset 으로는 조회할 수 없으므로 since_product_no 파라메터를 활용해주시면 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-products
     *
     * @example 응답 예시
     * ```json
     * {
     *     "products": [
     *         {
     *             "shop_no": 1,
     *             "product_no": 24,
     *             "product_code": "P000000X",
     *             "custom_product_code": "",
     *             "product_name": "iPhone X",
     *             "eng_product_name": "iPhone Ten",
     *             "supply_product_name": "iphone A1865 fdd lte",
     *             "internal_product_name": "Sample Internal product name",
     *             "model_name": "A1865",
     *             "price_excluding_tax": "1000.00",
     *             "price": "1100.00",
     *             "retail_price": "0.00",
     *             "supply_price": "9000.00",
     *             "display": "T",
     *             "selling": "F",
     *             "product_condition": "U",
     *             "product_used_month": 2,
     *             "summary_description": "This is Product Summary.",
     *             "margin_rate": "10.00",
     *             "tax_calculation": "M",
     *             "tax_type": "A",
     *             "tax_rate": 10,
     *             "price_content": null,
     *             "buy_limit_by_product": "T",
     *             "buy_limit_type": "F",
     *             "buy_group_list": [
     *                 8,
     *                 9
     *             ],
     *             "buy_member_id_list": [
     *                 "sampleid",
     *                 "testid"
     *             ],
     *             "repurchase_restriction": "F",
     *             "single_purchase_restriction": "F",
     *             "buy_unit_type": "O",
     *             "buy_unit": 1,
     *             "order_quantity_limit_type": "O",
     *             "minimum_quantity": 1,
     *             "maximum_quantity": 0,
     *             "points_by_product": "T",
     *             "points_setting_by_payment": "C",
     *             "points_amount": [
     *                 {
     *                     "payment_method": "cash",
     *                     "points_rate": "0.00%"
     *                 },
     *                 {
     *                     "payment_method": "mileage",
     *                     "points_rate": "0.00%"
     *                 }
     *             ],
     *             "except_member_points": "F",
     *             "product_volume": {
     *                 "use_product_volume": "T",
     *                 "product_width": "3cm",
     *                 "product_height": "5.5cm",
     *                 "product_length": "7cm"
     *             },
     *             "adult_certification": "F",
     *             "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *             "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *             "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *             "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *             "use_naverpay": "T",
     *             "naverpay_type": "C",
     *             "use_kakaopay": "T",
     *             "manufacturer_code": "M0000000",
     *             "trend_code": "T0000000",
     *             "brand_code": "B0000000",
     *             "supplier_code": "S0000000",
     *             "made_date": "",
     *             "release_date": "",
     *             "expiration_date": {
     *                 "start_date": "2017-09-08",
     *                 "end_date": "2017-09-14"
     *             },
     *             "origin_classification": "F",
     *             "origin_place_no": 1798,
     *             "origin_place_value": "",
     *             "made_in_code": "KR",
     *             "icon_show_period": {
     *                 "start_date": "2017-10-30T09:00:00+09:00",
     *                 "end_date": "2017-11-02T16:00:00+09:00"
     *             },
     *             "icon": [
     *                 "icon_01_01",
     *                 "icon_02_01"
     *             ],
     *             "hscode": "4303101990",
     *             "product_weight": "1.00",
     *             "product_material": "",
     *             "created_date": "2018-01-18T11:19:27+09:00",
     *             "updated_date": "2018-01-19T11:19:27+09:00",
     *             "english_product_material": null,
     *             "cloth_fabric": null,
     *             "list_icon": {
     *                 "soldout_icon": true,
     *                 "recommend_icon": false,
     *                 "new_icon": false
     *             },
     *             "approve_status": "",
     *             "classification_code": "C000000A",
     *             "sold_out": "F",
     *             "additional_price": "0.00",
     *             "clearance_category_eng": "Necklaces",
     *             "clearance_category_kor": "주얼리 > 목걸이",
     *             "clearance_category_code": "ACAB0000",
     *             "exposure_limit_type": "M",
     *             "exposure_group_list": [
     *                 8,
     *                 9
     *             ],
     *             "set_product_type": null,
     *             "shipping_fee_by_product": "T",
     *             "shipping_fee_type": "W",
     *             "main": [
     *                 3,
     *                 2
     *             ],
     *             "market_sync": "F"
     *         },
     *         {
     *             "shop_no": 1,
     *             "product_no": 23,
     *             "product_code": "P000000W",
     *             "custom_product_code": "",
     *             "product_name": "iPhone X",
     *             "eng_product_name": "iPhone Ten",
     *             "supply_product_name": "iphone A1865 fdd lte",
     *             "internal_product_name": "Sample Internal product name",
     *             "model_name": "A1865",
     *             "price": 1000,
     *             "retail_price": 0,
     *             "supply_price": 0,
     *             "display": "T",
     *             "selling": "F",
     *             "product_condition": "U",
     *             "product_used_month": 2,
     *             "summary_description": "This is Product Summary.",
     *             "margin_rate": "10.00",
     *             "tax_calculation": "M",
     *             "tax_type": "A",
     *             "tax_rate": 10,
     *             "price_content": null,
     *             "buy_limit_by_product": "T",
     *             "buy_limit_type": "F",
     *             "buy_group_list": [
     *                 8,
     *                 9
     *             ],
     *             "buy_member_id_list": [
     *                 "sampleid",
     *                 "testid"
     *             ],
     *             "repurchase_restriction": "F",
     *             "single_purchase_restriction": "F",
     *             "buy_unit_type": "O",
     *             "buy_unit": 1,
     *             "order_quantity_limit_type": "O",
     *             "minimum_quantity": 1,
     *             "maximum_quantity": 0,
     *             "points_by_product": "T",
     *             "points_setting_by_payment": "C",
     *             "points_amount": [
     *                 {
     *                     "payment_method": "cash",
     *                     "points_rate": "0.00%"
     *                 },
     *                 {
     *                     "payment_method": "mileage",
     *                     "points_rate": "0.00%"
     *                 }
     *             ],
     *             "except_member_points": "F",
     *             "product_volume": {
     *                 "use_product_volume": "T",
     *                 "product_width": "3cm",
     *                 "product_height": "5.5cm",
     *                 "product_length": "7cm"
     *             },
     *             "adult_certification": "F",
     *             "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *             "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *             "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *             "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *             "use_naverpay": "T",
     *             "naverpay_type": "C",
     *             "use_kakaopay": "T",
     *             "manufacturer_code": "M0000000",
     *             "trend_code": "T0000000",
     *             "brand_code": "B0000000",
     *             "supplier_code": "S0000000",
     *             "made_date": "",
     *             "release_date": "",
     *             "expiration_date": {
     *                 "start_date": "2017-09-08",
     *                 "end_date": "2017-09-14"
     *             },
     *             "origin_classification": "F",
     *             "origin_place_no": 1798,
     *             "origin_place_value": "",
     *             "made_in_code": "KR",
     *             "icon_show_period": {
     *                 "start_date": "2017-10-30T09:00:00+09:00",
     *                 "end_date": "2017-11-02T16:00:00+09:00"
     *             },
     *             "icon": [
     *                 "icon_01_01",
     *                 "icon_02_01"
     *             ],
     *             "hscode": "4303101990",
     *             "product_weight": "1.00",
     *             "product_material": "",
     *             "created_date": "2018-01-18T11:19:27+09:00",
     *             "updated_date": "2018-01-19T11:19:27+09:00",
     *             "english_product_material": null,
     *             "cloth_fabric": null,
     *             "list_icon": {
     *                 "soldout_icon": true,
     *                 "recommend_icon": false,
     *                 "new_icon": false
     *             },
     *             "approve_status": "C",
     *             "classification_code": "C000000A",
     *             "sold_out": "F",
     *             "additional_price": "0.00",
     *             "clearance_category_eng": null,
     *             "clearance_category_kor": null,
     *             "clearance_category_code": null,
     *             "exposure_limit_type": "M",
     *             "exposure_group_list": [
     *                 8,
     *                 9
     *             ],
     *             "set_product_type": null,
     *             "shipping_fee_by_product": "F",
     *             "shipping_fee_type": "T",
     *             "main": [
     *                 3,
     *                 2
     *             ],
     *             "market_sync": "F"
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfProducts(
      input: RetrieveAListOfProductsInput,
      options?: RequestOptions<RetrieveAListOfProductsOutput['products'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfProductsOutput>>;
    /**
     * @description
     * 쇼핑몰에 등록된 전체 상품의 수를 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-count-of-products
     *
     * @example 응답 예시
     * ```json
     * {
     *     "count": 2
     * }
     * ```
     */
    retrieveACountOfProducts(
      input: RetrieveACountOfProductsInput,
      options?: RequestOptions<RetrieveACountOfProductsOutput['count']>,
    ): Promise<AxiosResponse<RetrieveACountOfProductsOutput>>;
    /**
     * @description
     * 쇼핑몰에 생성되어 있는 상품을 조회할 수 있습니다.
     * 상품코드, 자체상품 코드, 상품명, 상품 판매가 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-product-resource
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": 20,
     *         "category": [
     *             {
     *                 "category_no": 27,
     *                 "recommend": "F",
     *                 "new": "T"
     *             },
     *             {
     *                 "category_no": 28,
     *                 "recommend": "T",
     *                 "new": "F"
     *             }
     *         ],
     *         "project_no": [
     *             31,
     *             32
     *         ],
     *         "product_code": "P000000T",
     *         "custom_product_code": "",
     *         "product_name": "iPhone X",
     *         "eng_product_name": "iPhone Ten",
     *         "supply_product_name": "iphone A1865 fdd lte",
     *         "internal_product_name": "Sample Internal product name",
     *         "model_name": "A1865",
     *         "price_excluding_tax": "1000.00",
     *         "price": "1100.00",
     *         "retail_price": "0.00",
     *         "supply_price": "0.00",
     *         "display": "T",
     *         "description": "Sample Description.",
     *         "mobile_description": "Sample Mobile Description.",
     *         "separated_mobile_description": "T",
     *         "payment_info": "Sample payment info. You have to Pay.",
     *         "shipping_info": "Sample shipping info. You have to ship.",
     *         "exchange_info": "Sample exchange info. You have to exchange.",
     *         "service_info": "Sample service info. You have to service.",
     *         "product_tax_type_text": null,
     *         "set_product_type": null,
     *         "country_hscode": {
     *             "JPN": "430310011",
     *             "CHN": "43031020"
     *         },
     *         "selling": "F",
     *         "product_condition": "U",
     *         "product_used_month": 2,
     *         "simple_description": "This is Product Description.",
     *         "summary_description": "This is Product Summary.",
     *         "product_tag": [
     *             "edu",
     *             "sample"
     *         ],
     *         "margin_rate": "10.00",
     *         "tax_calculation": "M",
     *         "tax_type": "A",
     *         "tax_rate": 10,
     *         "price_content": null,
     *         "buy_limit_by_product": "T",
     *         "buy_limit_type": "F",
     *         "repurchase_restriction": "F",
     *         "buy_group_list": [
     *             8,
     *             9
     *         ],
     *         "buy_member_id_list": [
     *             "sampleid",
     *             "testid"
     *         ],
     *         "single_purchase_restriction": "F",
     *         "buy_unit_type": "O",
     *         "buy_unit": 1,
     *         "order_quantity_limit_type": "O",
     *         "minimum_quantity": 1,
     *         "maximum_quantity": 0,
     *         "points_by_product": "T",
     *         "points_setting_by_payment": "C",
     *         "points_amount": [
     *             {
     *                 "payment_method": "cash",
     *                 "points_rate": "0.00%"
     *             },
     *             {
     *                 "payment_method": "mileage",
     *                 "points_rate": "0.00%"
     *             }
     *         ],
     *         "except_member_points": "F",
     *         "product_volume": {
     *             "use_product_volume": "T",
     *             "product_width": "3cm",
     *             "product_height": "5.5cm",
     *             "product_length": "7cm"
     *         },
     *         "adult_certification": "F",
     *         "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *         "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *         "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *         "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *         "has_option": "F",
     *         "option_type": "T",
     *         "use_naverpay": "T",
     *         "naverpay_type": "C",
     *         "use_kakaopay": "T",
     *         "manufacturer_code": "M0000000",
     *         "trend_code": "T0000000",
     *         "brand_code": "B0000000",
     *         "supplier_code": "S000000A",
     *         "made_date": "",
     *         "release_date": "",
     *         "expiration_date": {
     *             "start_date": "2017-09-08",
     *             "end_date": "2017-09-14"
     *         },
     *         "origin_classification": "F",
     *         "origin_place_no": 1798,
     *         "origin_place_value": "",
     *         "made_in_code": "KR",
     *         "icon_show_period": {
     *             "start_date": "2017-10-30T09:00:00+09:00",
     *             "end_date": "2017-11-02T16:00:00+09:00"
     *         },
     *         "icon": null,
     *         "hscode": "4303101990",
     *         "product_weight": "1.00",
     *         "product_material": "",
     *         "shipping_calculation": "M",
     *         "shipping_fee_by_product": "T",
     *         "shipping_method": "01",
     *         "prepaid_shipping_fee": "B",
     *         "shipping_period": {
     *             "minimum": 3,
     *             "maximum": 7
     *         },
     *         "shipping_scope": "A",
     *         "shipping_area": "All around World",
     *         "shipping_fee_type": "W",
     *         "shipping_rates": [
     *             {
     *                 "shipping_rates_min": "0.00",
     *                 "shipping_rates_max": "1.00",
     *                 "shipping_fee": "100.00"
     *             },
     *             {
     *                 "shipping_rates_min": "1.00",
     *                 "shipping_rates_max": "2.00",
     *                 "shipping_fee": "200.00"
     *             }
     *         ],
     *         "created_date": "2018-01-18T11:19:27+09:00",
     *         "updated_date": "2018-01-19T11:19:27+09:00",
     *         "english_product_material": null,
     *         "clearance_category_eng": "Necklaces",
     *         "clearance_category_kor": "주얼리 > 목걸이",
     *         "clearance_category_code": "ACAB0000",
     *         "cloth_fabric": null,
     *         "origin_place_code": 1798,
     *         "list_icon": {
     *             "soldout_icon": true,
     *             "recommend_icon": true,
     *             "new_icon": true
     *         },
     *         "additional_information": [
     *             {
     *                 "key": "custom_option1",
     *                 "name": "gift option",
     *                 "value": "Yes"
     *             }
     *         ],
     *         "image_upload_type": "A",
     *         "classification_code": "C000000A",
     *         "main": [
     *             3,
     *             2
     *         ],
     *         "relational_product": [
     *             {
     *                 "product_no": 17,
     *                 "interrelated": "T"
     *             },
     *             {
     *                 "product_no": 19,
     *                 "interrelated": "F"
     *             }
     *         ],
     *         "select_one_by_option": "F",
     *         "approve_status": "C",
     *         "sold_out": "F",
     *         "additional_price": "0.00",
     *         "translated_additional_description": "This is a translated additional description of product.",
     *         "translated_description": "This is a translated description of product.",
     *         "exposure_limit_type": "M",
     *         "exposure_group_list": [
     *             8,
     *             9
     *         ],
     *         "market_sync": "F"
     *     }
     * }
     * ```
     */
    retrieveAProductResource(
      input: RetrieveAProductResourceInput,
      options?: RequestOptions<RetrieveAProductResourceOutput['product']>,
    ): Promise<AxiosResponse<RetrieveAProductResourceOutput>>;
    /**
     * @description
     * 쇼핑몰에 상품을 등록할 수 있습니다.
     * 상품을 등록하면서 옵션도 같이 등록할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-product
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": 28,
     *         "category": [
     *             {
     *                 "category_no": 27,
     *                 "recommend": "F",
     *                 "new": "T"
     *             },
     *             {
     *                 "category_no": 28,
     *                 "recommend": "T",
     *                 "new": "F"
     *             }
     *         ],
     *         "product_code": "P00000BB",
     *         "custom_product_code": "",
     *         "product_name": "iPhone X",
     *         "eng_product_name": "iPhone Ten",
     *         "internal_product_name": "Sample Internal product name",
     *         "model_name": "A1865",
     *         "price_excluding_tax": "10000.00",
     *         "price": "11000.00",
     *         "retail_price": "0.00",
     *         "supply_price": "9000.00",
     *         "display": "T",
     *         "selling": "T",
     *         "product_condition": "U",
     *         "product_used_month": 2,
     *         "price_content": "Sample Content",
     *         "buy_limit_by_product": "T",
     *         "buy_limit_type": "F",
     *         "buy_group_list": [
     *             8,
     *             9
     *         ],
     *         "buy_member_id_list": [
     *             "sampleid",
     *             "testid"
     *         ],
     *         "repurchase_restriction": "F",
     *         "single_purchase_restriction": "F",
     *         "buy_unit_type": "O",
     *         "buy_unit": 1,
     *         "order_quantity_limit_type": "O",
     *         "minimum_quantity": 1,
     *         "maximum_quantity": 0,
     *         "points_by_product": "T",
     *         "points_setting_by_payment": "C",
     *         "points_amount": [
     *             {
     *                 "payment_method": "cash",
     *                 "points_rate": "100.00"
     *             },
     *             {
     *                 "payment_method": "mileage",
     *                 "points_rate": "10.00%"
     *             }
     *         ],
     *         "except_member_points": "F",
     *         "product_volume": {
     *             "use_product_volume": "T",
     *             "product_width": "3cm",
     *             "product_height": "5.5cm",
     *             "product_length": "7cm"
     *         },
     *         "adult_certification": "F",
     *         "description": "Sample Description.",
     *         "mobile_description": "Sample Mobile Description.",
     *         "translated_description": "This is a translated description of product.",
     *         "payment_info": "Sample payment info. You have to Pay.",
     *         "shipping_info": "Sample shipping info. You have to ship.",
     *         "exchange_info": "Sample exchange info. You have to exchange.",
     *         "service_info": "Sample service info. You have to service.",
     *         "simple_description": "This is Product Description.",
     *         "summary_description": "This is Product Summary.",
     *         "detail_image": "https://{domain}/web/product/big/201511/30_shop1_638611.jpg",
     *         "has_option": "T",
     *         "use_naverpay": "T",
     *         "naverpay_type": "C",
     *         "use_kakaopay": "T",
     *         "manufacturer_code": "M0000000",
     *         "supplier_code": "S000000A",
     *         "brand_code": "B0000000",
     *         "trend_code": "T0000000",
     *         "product_weight": "1.00",
     *         "expiration_date": {
     *             "start_date": "2017-09-08",
     *             "end_date": "2017-09-14"
     *         },
     *         "icon": [
     *             "icon_01_01",
     *             "icon_02_01"
     *         ],
     *         "hscode": "4303101990",
     *         "country_hscode": {
     *             "JPN": "430310011",
     *             "CHN": "43031020"
     *         },
     *         "shipping_calculation": "M",
     *         "shipping_fee_by_product": "T",
     *         "shipping_method": "01",
     *         "shipping_period": {
     *             "minimum": 4,
     *             "maximum": 10
     *         },
     *         "shipping_scope": "A",
     *         "shipping_area": "All around world",
     *         "shipping_fee_type": "D",
     *         "shipping_rates": [
     *             {
     *                 "shipping_rates_min": "2000.00",
     *                 "shipping_rates_max": "4000.00",
     *                 "shipping_fee": "5000.00"
     *             },
     *             {
     *                 "shipping_rates_min": "4000.00",
     *                 "shipping_rates_max": "6000.00",
     *                 "shipping_fee": "2500.00"
     *             }
     *         ],
     *         "prepaid_shipping_fee": "P",
     *         "clearance_category_code": "ACAB0000",
     *         "image_upload_type": "A",
     *         "relational_product": [
     *             {
     *                 "product_no": 9,
     *                 "interrelated": "T"
     *             },
     *             {
     *                 "product_no": 10,
     *                 "interrelated": "F"
     *             }
     *         ],
     *         "product_material": "Aluminum",
     *         "english_product_material": "Aluminum",
     *         "cloth_fabric": "knit",
     *         "classification_code": "C000000A",
     *         "additional_price": "1100.00",
     *         "margin_rate": "10.00",
     *         "tax_calculation": "M",
     *         "tax_type": "A",
     *         "tax_rate": 10,
     *         "origin_classification": "F",
     *         "origin_place_no": 1798,
     *         "made_in_code": "KR",
     *         "created_date": "2018-05-29T14:23:51+09:00",
     *         "additional_image": [
     *             {
     *                 "big": "https://{domain}/web/product/extra/big/201810/a2803c44ee8299486ff19be239cef7d0.jpg",
     *                 "medium": "https://{domain}/web/product/extra/medium/201810/a2803c44ee8299486ff19be239cef7d0.jpg",
     *                 "small": "https://{domain}/web/product/extra/small/201810/a2803c44ee8299486ff19be239cef7d0.jpg"
     *             },
     *             {
     *                 "big": "https://{domain}/web/product/extra/big/201810/e1ab68969d69287a828438c7684b14c4.jpg",
     *                 "medium": "https://{domain}/web/product/extra/medium/201810/e1ab68969d69287a828438c7684b14c4.jpg",
     *                 "small": "https://{domain}/web/product/extra/small/201810/e1ab68969d69287a828438c7684b14c4.jpg"
     *             }
     *         ],
     *         "exposure_limit_type": "M",
     *         "exposure_group_list": [
     *             8,
     *             9
     *         ]
     *     }
     * }
     * ```
     */
    createAProduct(
      input: CreateAProductInput,
      options?: RequestOptions<CreateAProductOutput['product']>,
    ): Promise<AxiosResponse<CreateAProductOutput>>;
    /**
     * @description
     * 쇼핑몰에 생성되어 있는 상품을 수정할 수 있습니다.
     * 진열상태, 판매상태, 상품명 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-product
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "shop_no": 1,
     *         "product_no": 7,
     *         "category": [
     *             {
     *                 "category_no": 27,
     *                 "recommend": "F",
     *                 "new": "T"
     *             },
     *             {
     *                 "category_no": 28,
     *                 "recommend": "T",
     *                 "new": "F"
     *             }
     *         ],
     *         "product_code": "P000000R",
     *         "custom_product_code": "",
     *         "product_name": "edu center product",
     *         "eng_product_name": "education center product",
     *         "internal_product_name": "Sample Internal product name",
     *         "model_name": "sample model",
     *         "price_excluding_tax": "10000.00",
     *         "price": "11000.00",
     *         "retail_price": "0.00",
     *         "supply_price": "9000.00",
     *         "display": "T",
     *         "selling": "T",
     *         "product_condition": "U",
     *         "product_used_month": 2,
     *         "price_content": "Sample Content",
     *         "buy_limit_by_product": "T",
     *         "buy_limit_type": "F",
     *         "buy_group_list": [
     *             8,
     *             9
     *         ],
     *         "buy_member_id_list": [
     *             "sampleid",
     *             "testid"
     *         ],
     *         "repurchase_restriction": "F",
     *         "single_purchase_restriction": "F",
     *         "buy_unit_type": "O",
     *         "buy_unit": 1,
     *         "order_quantity_limit_type": "O",
     *         "minimum_quantity": 1,
     *         "maximum_quantity": 0,
     *         "points_by_product": "T",
     *         "points_setting_by_payment": "C",
     *         "points_amount": [
     *             {
     *                 "payment_method": "cash",
     *                 "points_rate": "100.00"
     *             },
     *             {
     *                 "payment_method": "mileage",
     *                 "points_rate": "10.00%"
     *             }
     *         ],
     *         "except_member_points": "F",
     *         "product_volume": {
     *             "use_product_volume": "T",
     *             "product_width": "3cm",
     *             "product_height": "5.5cm",
     *             "product_length": "7cm"
     *         },
     *         "adult_certification": "F",
     *         "description": "Sample Description.",
     *         "mobile_description": "Sample Mobile Description.",
     *         "payment_info": "Sample payment info. You have to Pay.",
     *         "shipping_info": "Sample shipping info. You have to ship.",
     *         "exchange_info": "Sample exchange info. You have to exchange.",
     *         "service_info": "Sample service info. You have to service.",
     *         "simple_description": "This is Product Description.",
     *         "summary_description": "This is Product Summary.",
     *         "use_naverpay": "T",
     *         "naverpay_type": "C",
     *         "use_kakaopay": "T",
     *         "manufacturer_code": "M0000000",
     *         "supplier_code": "S000000A",
     *         "brand_code": "B0000000",
     *         "trend_code": "T0000000",
     *         "product_weight": "1.00",
     *         "expiration_date": {
     *             "start_date": "2017-09-08",
     *             "end_date": "2017-09-14"
     *         },
     *         "icon": [
     *             "icon_01_01",
     *             "icon_02_01"
     *         ],
     *         "hscode": "4303101990",
     *         "country_hscode": {
     *             "JPN": "430310011",
     *             "CHN": "43031020"
     *         },
     *         "shipping_calculation": "M",
     *         "shipping_fee_by_product": "T",
     *         "shipping_method": "01",
     *         "shipping_period": {
     *             "minimum": 4,
     *             "maximum": 10
     *         },
     *         "shipping_scope": "A",
     *         "shipping_area": "All around world",
     *         "shipping_fee_type": "D",
     *         "shipping_rates": [
     *             {
     *                 "shipping_rates_min": "2000.00",
     *                 "shipping_rates_max": "4000.00",
     *                 "shipping_fee": "5000.00"
     *             },
     *             {
     *                 "shipping_rates_min": "4000.00",
     *                 "shipping_rates_max": "6000.00",
     *                 "shipping_fee": "2500.00"
     *             }
     *         ],
     *         "prepaid_shipping_fee": "P",
     *         "clearance_category_code": "ACAB0000",
     *         "image_upload_type": "A",
     *         "detail_image": "https://{domain}/web/product/big/201511/30_shop1_638611.jpg",
     *         "relational_product": [
     *             {
     *                 "product_no": 9,
     *                 "interrelated": "T"
     *             },
     *             {
     *                 "product_no": 10,
     *                 "interrelated": "F"
     *             }
     *         ],
     *         "product_material": "Aluminum",
     *         "english_product_material": "Aluminum",
     *         "cloth_fabric": "knit",
     *         "classification_code": "C000000A",
     *         "additional_price": "1100.00",
     *         "margin_rate": "10.00",
     *         "tax_calculation": "M",
     *         "tax_type": "A",
     *         "tax_rate": 10,
     *         "origin_classification": "F",
     *         "origin_place_no": 1798,
     *         "made_in_code": "KR",
     *         "updated_date": "2018-05-29T14:23:51+09:00",
     *         "translated_additional_description": "This is a translated additional description of product.",
     *         "additional_image": [
     *             {
     *                 "big": "https://{domain}/web/product/extra/big/201810/a2803c44ee8299486ff19be239cef7d0.jpg",
     *                 "medium": "https://{domain}/web/product/extra/medium/201810/a2803c44ee8299486ff19be239cef7d0.jpg",
     *                 "small": "https://{domain}/web/product/extra/small/201810/a2803c44ee8299486ff19be239cef7d0.jpg"
     *             },
     *             {
     *                 "big": "https://{domain}/web/product/extra/big/201810/e1ab68969d69287a828438c7684b14c4.jpg",
     *                 "medium": "https://{domain}/web/product/extra/medium/201810/e1ab68969d69287a828438c7684b14c4.jpg",
     *                 "small": "https://{domain}/web/product/extra/small/201810/e1ab68969d69287a828438c7684b14c4.jpg"
     *             }
     *         ],
     *         "additional_information": [
     *             {
     *                 "key": "custom_option1",
     *                 "name": "option1",
     *                 "value": "Additional Information 1"
     *             },
     *             {
     *                 "key": "custom_option2",
     *                 "name": "option2",
     *                 "value": "Additional Information 2"
     *             }
     *         ],
     *         "exposure_limit_type": "M",
     *         "exposure_group_list": [
     *             8,
     *             9
     *         ]
     *     }
     * }
     * ```
     */
    updateAProduct(
      input: UpdateAProductInput,
      options?: RequestOptions<UpdateAProductOutput['product']>,
    ): Promise<AxiosResponse<UpdateAProductOutput>>;
    /**
     * @description
     * 쇼핑몰에 생성되어 있는 상품을 삭제할 수 있습니다.
     * 상품 삭제 시에는 상품 하위에 옵션(품목)도 함께 삭제됩니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-product
     *
     * @example 응답 예시
     * ```json
     * {
     *     "product": {
     *         "product_no": 28
     *     }
     * }
     * ```
     */
    deleteAProduct(
      input: DeleteAProductInput,
      options?: RequestOptions<DeleteAProductOutput['product']>,
    ): Promise<AxiosResponse<DeleteAProductOutput>>;
  }
}
