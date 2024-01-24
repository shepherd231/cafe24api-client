import { AxiosResponse } from 'axios';
import { Endpoint, RequestOptions, Cafe24Datetime } from 'cafe24api-client';

declare const endpoint: Endpoint;
export = endpoint;

declare module 'cafe24api-client' {

  /**
   * @description
   * 
   * 
   * 세트상품(Bunldeproducts)은 여러 개의 상품을 묶어서 판매하는 상품을 의미합니다.
   * 세트 상품은 상품을 각각 주문하는 것보다 더 싸게 구입할 수 있도록 추가 할인을 설정할 수 있습니다.
   * 세트상품 주문시에는 하나의 상품처럼 주문을 관리할 수 있습니다.
   * 세트상품 리소스에서는 세트상품만 조회하거나, 세트상품 등록/수정/삭제를 진행할 수 있습니다.
   */
  export interface Bundleproducts {
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
      * 상품번호
      * 
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * 
      */ 
    product_no: any;
    /**
      * @description
      * 상품코드
      * 
      * 시스템이 상품에 부여한 코드. 해당 쇼핑몰 내에서 상품코드는 중복되지 않음.
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    product_code: any;
    /**
      * @description
      * 세트상품의 구성상품 정보
      * 
      * 
      */ 
    bundle_product_components: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * 사용자가 상품에 부여 가능한 코드. 재고 관리등의 이유로 자체적으로 상품을 관리 하고 있는 경우 사용함.
      * 
      * 최대글자수 : [40자]
      */ 
    custom_product_code: any;
    /**
      * @description
      * 상품명
      * 
      * 상품의 이름. 상품명은 상품을 구분하는 가장 기초적인 정보이며 검색 정보가 된다. HTML을 사용하여 입력이 가능하다.
      * 
      * 최대글자수 : [250자]
      */ 
    product_name: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 상품의 영문 이름. 해외 배송 등에 사용 가능함.
      * 
      * 최대글자수 : [250자]
      */ 
    eng_product_name: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 공급사에서 등록한 상품의 이름. 공급사에서 상품의 구분을 위해 임의로 입력할 수 있으며 상품명에는 영향을 미치지 않는다.
      * 
      * 최대글자수 : [250자]
      */ 
    supply_product_name: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * 최대글자수 : [50자]
      */ 
    internal_product_name: any;
    /**
      * @description
      * 모델명
      * 
      * 상품의 모델명.
      * 
      * 최대글자수 : [100자]
      */ 
    model_name: any;
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
    product_condition: any;
    /**
      * @description
      * 중고상품 사용 개월
      * 
      * 최대값: [2147483647]
      */ 
    product_used_month: any;
    /**
      * @description
      * 상품요약설명
      * 
      * 상품에 대한 요약 정보. 상품 진열 화면에서 노출 가능한 설명. HTML을 사용하여 입력이 가능하다.
      * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 노출되도록 설정 가능하다.
      * 
      * 최대글자수 : [255자]
      */ 
    summary_description: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 검색 또는 분류를 위하여 상품에 입력하는 검색어 정보(해시태그)
      * 
      * 
      */ 
    product_tag: any;
    /**
      * @description
      * 판매가 대체문구
      * 
      * 상품의 가격 대신 표시되는 문구. 품절이나 상품이 일시적으로 판매 불가할 때 사용.
      * 
      * 최대글자수 : [20자]
      */ 
    price_content: any;
    /**
      * @description
      * 구매제한 개별 설정여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    buy_limit_by_product: any;
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
    buy_limit_type: any;
    /**
      * @description
      * 구매가능 회원 등급
      * 
      * 
      */ 
    buy_group_list: any;
    /**
      * @description
      * 구매가능 회원아이디
      * 
      * 
      */ 
    buy_member_id_list: any;
    /**
      * @description
      * 재구매 제한
      * 
      * T : 재구매 불가
      * F : 제한안함
      * 
      * 
      */ 
    repurchase_restriction: any;
    /**
      * @description
      * 단독구매 제한
      * 
      * T : 단독구매 불가
      * F : 제한안함
      * 
      * 
      */ 
    single_purchase_restriction: any;
    /**
      * @description
      * 적립금 개별설정 사용여부
      * 
      * F : 기본설정 사용
      * T : 개별설정
      * 
      * 
      */ 
    points_by_product: any;
    /**
      * @description
      * 결제방식별 적립금 설정 여부
      * 
      * B : 기본 적립금설정 사용
      * C : 결제방식에 따른 적립
      * 
      * 
      */ 
    points_setting_by_payment: any;
    /**
      * @description
      * 적립금 설정 정보
      * 
      * 
      */ 
    points_amount: any;
    /**
      * @description
      * 회원등급 추가 적립 제외
      * 
      * T : 회원등급 추가 적립 제외 설정함
      * F : 회원등급 추가 적립 제외 설정안함
      * 
      * 
      */ 
    except_member_points: any;
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
    adult_certification: any;
    /**
      * @description
      * 상세이미지
      * 
      * 상품 상세 화면에 표시되는 상품 이미지.
      * 
      * 
      */ 
    detail_image: any;
    /**
      * @description
      * 목록이미지
      * 
      * 상품 분류 화면, 메인 화면, 상품 검색 화면에 표시되는 상품의 목록 이미지.
      * 
      * 
      */ 
    list_image: any;
    /**
      * @description
      * 작은목록이미지
      * 
      * 최근 본 상품 영역에 표시되는 상품의 목록 이미지.
      * 
      * 
      */ 
    tiny_image: any;
    /**
      * @description
      * 축소이미지
      * 
      * 상품 상세 화면 하단에 표시되는 상품 목록 이미지.
      * 
      * 
      */ 
    small_image: any;
    /**
      * @description
      * 네이버페이 사용여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    use_naverpay: any;
    /**
      * @description
      * 네이버페이 판매타입
      * 
      * C : 네이버페이 + 쇼핑몰 동시판매 상품
      * O : 네이버페이 전용상품
      * 
      * 
      */ 
    naverpay_type: any;
    /**
      * @description
      * 아이콘 노출 기간
      * 
      * 상품에 설정한 아이콘이 노출되는 기간.
      * 
      * 
      */ 
    icon_show_period: any;
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
    product_weight: any;
    /**
      * @description
      * 상품소재
      * 
      * 상품의 소재. 복합 소재일 경우 상품의 소재와 함유랑을 함께 입력해야함. (예 : 면 80%, 레이온 20%)
      * 
      * 
      */ 
    product_material: any;
    /**
      * @description
      * 생성일
      * 
      * 상품이 생성된 일시.
      * 
      * 
      */ 
    created_date: any;
    /**
      * @description
      * 수정일
      * 
      * 상품이 수정된 일시.
      * 
      * 
      */ 
    updated_date: any;
    /**
      * @description
      * 영문 상품 소재
      * 
      * 상품의 소재의 영어 표기. 해외 배송사를 이용할 경우 의류의 소재를 통관시 요구하는 경우가 있음.
      * 
      * 
      */ 
    english_product_material: any;
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
    cloth_fabric: any;
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
    list_icon: any;
    /**
      * @description
      * 품절여부
      * 
      * T : 품절
      * F : 품절아님
      * 
      * 
      */ 
    sold_out: any;
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
      * 추가 이미지 리소스
      * 
      * 배열 최대사이즈: [20]
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
    exposure_limit_type: any;
    /**
      * @description
      * 표시대상 회원 등급
      * 
      * 
      */ 
    exposure_group_list: any;
    /**
      * @description
      * 세트할인 정보
      * 
      * 
      */ 
    bundle_product_sales: any;
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
    project_no: any;
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
    mobile_description: any;
    /**
      * @description
      * 모바일 별도 등록
      * 
      * T : 직접등록
      * F : 상품 상세설명 동일
      * 
      * 
      */ 
    separated_mobile_description: any;
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
    additional_image: any;
    /**
      * @description
      * 상품결제안내
      * 
      * 상품의 결제 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    payment_info: any;
    /**
      * @description
      * 상품배송안내
      * 
      * 상품의 배송 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    shipping_info: any;
    /**
      * @description
      * 교환/반품안내
      * 
      * 상품의 교환/반품 방법에 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    exchange_info: any;
    /**
      * @description
      * 서비스문의/안내
      * 
      * 제품의 사후 고객 서비스 방법 대한 안내 문구. HTML을 사용하여 입력이 가능하다.
      * 
      * 
      */ 
    service_info: any;
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
    country_hscode: any;
    /**
      * @description
      * 상품 간략 설명
      * 
      * 상품에 대한 간략한 정보. 상품 진열 화면에서 노출 가능한 설명. HTML을 사용하여 입력이 가능하다.
      * [쇼핑몰 설정 &gt; 상품 설정 &gt; &#39;상품 보기 설정 &gt; 상품 정보 표시 설정&#39;]에서 노출되도록 설정 가능하다.
      * 
      * 
      */ 
    simple_description: any;
    /**
      * @description
      * 배송 계산 유형
      * 
      * A : 자동 계산
      * M : 수동 계산
      * 
      * 
      */ 
    shipping_calculation: any;
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
    shipping_fee_by_product: any;
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
    shipping_method: any;
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
    prepaid_shipping_fee: any;
    /**
      * @description
      * 배송기간
      * 
      * (개별배송비를 사용할 경우) 상품 배송시 평균적으로 소요되는 배송 기간.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * 
      */ 
    shipping_period: any;
    /**
      * @description
      * 배송정보
      * 
      * 국내에만 배송이 가능한 상품인지 해외에도 배송이 가능한 상품인지 표시.
      * [쇼핑몰 설정 &gt; 배송 설정 &gt; &#39;배송 정책 설정 &gt; 배송비 설정 &gt; 개별배송비 설정&#39;] 에서 상품별 개별 배송료 설정이 사용안함인 경우 설정 불가.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * A : 국내배송
      * C : 해외배송
      * B : 국내/해외배송
      * 
      * 
      */ 
    shipping_scope: any;
    /**
      * @description
      * 배송지역
      * 
      * (개별배송비를 사용할 경우) 상품을 배송할 수 있는 지역.
      * shipping_calculation이 A(자동계산)일 경우 null로 반환.
      * 
      * 최대글자수 : [255자]
      */ 
    shipping_area: any;
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
    shipping_fee_type: any;
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
    shipping_rates: any;
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
    clearance_category_eng: any;
    /**
      * @description
      * 해외통관용 상품구분 국문명
      * 
      * 해외 통관시 통관용 상품 구분 정보로 사용하는 정보. 자동으로 영문으로 번역되어 해외송장 상품명 정보에 포함하여 전송.
      * 
      * 
      */ 
    clearance_category_kor: any;
    /**
      * @description
      * 해외통관코드
      * 
      * 형식 : [A-Z0-9]
      * 글자수 최소: [8자]~최대: [8자]
      */ 
    clearance_category_code: any;
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
    additional_information: any;
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
    image_upload_type: any;
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
      * 관련상품
      * 
      * 해당 상품과 비슷한 상품 혹은 대체 가능한 상품. 관련 상품 등록시 해당 상품의 상세페이지 하단에 노출된다.
      * 
      * 배열 최대사이즈: [200]
      */ 
    relational_product: any;
    /**
      * @description
      * 메모 리소스
      * 
      * 
      */ 
    memos: any;
    /**
      * @description
      * 상품 조회수 리소스
      * 
      * 
      */ 
    hits: any;
    /**
      * @description
      * 상품 Seo 리소스
      * 
      * 
      */ 
    seo: any;
    /**
      * @description
      * 상품 태그 리소스
      * 
      * 
      */ 
    tags: any;
  }

  export interface RetrieveAListOfBundlesInput {
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
      * 상품번호
      * 
      * 조회하고자 하는 상품의 번호
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    product_no?: any;
    /**
      * @description
      * 진열상태
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
      * 상품코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    product_code?: any;
    /**
      * @description
      * 상품 검색어
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    product_tag?: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    custom_product_code?: any;
    /**
      * @description
      * 상품명
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    product_name?: any;
    /**
      * @description
      * 영문 상품명
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    eng_product_name?: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    supply_product_name?: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    internal_product_name?: any;
    /**
      * @description
      * 모델명
      * 
      * ,(콤마)로 여러 건을 검색할 수 있다.
      * 
      * 
      */ 
    model_name?: any;
    /**
      * @description
      * 상품 판매가 검색 최소값
      * 
      * 
      */ 
    price_min?: any;
    /**
      * @description
      * 상품 판매가 검색 최대값
      * 
      * 
      */ 
    price_max?: any;
    /**
      * @description
      * 상품 등록일 검색 시작일
      * 
      * 
      */ 
    created_start_date?: any;
    /**
      * @description
      * 상품 등록일 검색 종료일
      * 
      * 
      */ 
    created_end_date?: any;
    /**
      * @description
      * 상품 수정일 검색 시작일
      * 
      * 
      */ 
    updated_start_date?: any;
    /**
      * @description
      * 상품 수정일 검색 종료일
      * 
      * 
      */ 
    updated_end_date?: any;
    /**
      * @description
      * 분류 번호
      * 
      * 
      */ 
    category?: any;
    /**
      * @description
      * 미적용 분류 검색
      * 
      * T: 미적용 분류 검색
      * 
      * 
      */ 
    category_unapplied?: any;
    /**
      * @description
      * 하위분류 포함 검색
      * 
      * T: 포함
      * 
      * 
      */ 
    include_sub_category?: any;
    /**
      * @description
      * 상품 중량
      * 
      * 
      */ 
    product_weight?: any;
    /**
      * @description
      * 추가항목 검색조건 키
      * 
      * 
      */ 
    additional_information_key?: any;
    /**
      * @description
      * 추가항목 검색조건 값
      * 
      * 
      */ 
    additional_information_value?: any;
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

  export interface RetrieveAListOfBundlesOutput {
    bundleproducts: { 
    shop_no: number;
    product_no: number;
    product_code: string;
    bundle_product_components: { 
    product_no: number;
    product_name: string;
    product_code: string;
    product_price: Cafe24Datetime;
    purchase_quantity: number;
    }[];
    custom_product_code: string;
    product_name: string;
    eng_product_name: string;
    supply_product_name: string;
    internal_product_name: string;
    model_name: string;
    display: Cafe24Enum;
    selling: Cafe24Enum;
    product_condition: Cafe24Enum;
    product_used_month: number;
    summary_description: string;
    product_tag: string[];
    price_content: any;
    buy_limit_by_product: Cafe24Enum;
    buy_limit_type: Cafe24Enum;
    buy_group_list: number[];
    buy_member_id_list: string[];
    repurchase_restriction: Cafe24Enum;
    single_purchase_restriction: Cafe24Enum;
    points_by_product: Cafe24Enum;
    points_setting_by_payment: Cafe24Enum;
    points_amount: { 
    payment_method: string;
    points_rate: string;
    }[];
    except_member_points: Cafe24Enum;
    adult_certification: Cafe24Enum;
    detail_image: string;
    list_image: string;
    tiny_image: string;
    small_image: string;
    use_naverpay: any;
    naverpay_type: any;
    icon_show_period: { 
    start_date: Cafe24Datetime;
    end_date: Cafe24Datetime;
    };
    icon: string[];
    hscode: Cafe24Datetime;
    product_weight: string;
    product_material: string;
    created_date: Cafe24Datetime;
    updated_date: Cafe24Datetime;
    english_product_material: any;
    cloth_fabric: any;
    list_icon: { 
    soldout_icon: boolean;
    recommend_icon: boolean;
    new_icon: boolean;
    };
    sold_out: Cafe24Enum;
    exposure_limit_type: Cafe24Enum;
    exposure_group_list: number[];
    }[];
  }
  export interface RetrieveABundleInput {
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
      * 상품번호
      * 
      * 조회하고자 하는 상품의 번호
      * 
      * @required
      */ 
    product_no: any;
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
      * 메모 리소스
      * 
      * @embed
      */ 
    memos?: any;
    /**
      * @description
      * 상품 조회수 리소스
      * 
      * @embed
      */ 
    hits?: any;
    /**
      * @description
      * 상품 Seo 리소스
      * 
      * @embed
      */ 
    seo?: any;
    /**
      * @description
      * 상품 태그 리소스
      * 
      * @embed
      */ 
    tags?: any;
    /**
      * @description
      * 추가 이미지 리소스
      * 
      * @embed
      */ 
    additionalimages?: any;
  }

  export interface RetrieveABundleOutput {
    bundleproduct: { 
    shop_no: number;
    product_no: number;
    bundle_product_components: { 
    product_no: number;
    product_name: string;
    product_code: string;
    product_price: Cafe24Datetime;
    purchase_quantity: number;
    }[];
    bundle_product_sales: { 
    set_product_price: Cafe24Datetime;
    discount_value: string;
    discount_type: Cafe24Enum;
    discount_round_unit: Cafe24Enum;
    discount_round_type: Cafe24Enum;
    };
    category: { 
    category_no: number;
    recommend: Cafe24Enum;
    new: Cafe24Enum;
    }[];
    project_no: number[];
    product_code: string;
    custom_product_code: string;
    product_name: string;
    eng_product_name: string;
    supply_product_name: string;
    internal_product_name: string;
    model_name: string;
    display: Cafe24Enum;
    selling: Cafe24Enum;
    product_condition: Cafe24Enum;
    product_used_month: number;
    price_content: string;
    buy_limit_by_product: Cafe24Enum;
    buy_limit_type: Cafe24Enum;
    buy_group_list: number[];
    buy_member_id_list: string[];
    repurchase_restriction: Cafe24Enum;
    single_purchase_restriction: Cafe24Enum;
    points_by_product: Cafe24Enum;
    points_setting_by_payment: Cafe24Enum;
    points_amount: { 
    payment_method: string;
    points_rate: string;
    }[];
    except_member_points: Cafe24Enum;
    adult_certification: Cafe24Enum;
    description: string;
    mobile_description: string;
    separated_mobile_description: Cafe24Enum;
    simple_description: string;
    summary_description: string;
    payment_info: string;
    shipping_info: string;
    exchange_info: string;
    service_info: string;
    country_hscode: { 
    JPN: Cafe24Datetime;
    CHN: Cafe24Datetime;
    };
    product_tag: string[];
    use_naverpay: any;
    naverpay_type: any;
    icon_show_period: { 
    start_date: Cafe24Datetime;
    end_date: Cafe24Datetime;
    };
    icon: string[];
    hscode: Cafe24Datetime;
    shipping_calculation: Cafe24Enum;
    shipping_fee_by_product: Cafe24Enum;
    shipping_method: Cafe24Datetime;
    shipping_period: { 
    minimum: number;
    maximum: number;
    };
    shipping_scope: Cafe24Enum;
    shipping_area: string;
    shipping_fee_type: Cafe24Enum;
    shipping_rates: { 
    shipping_rates_min: Cafe24Datetime;
    shipping_rates_max: Cafe24Datetime;
    shipping_fee: Cafe24Datetime;
    }[];
    updated_date: Cafe24Datetime;
    clearance_category_eng: string;
    clearance_category_kor: string;
    prepaid_shipping_fee: Cafe24Enum;
    clearance_category_code: string;
    list_icon: { 
    soldout_icon: boolean;
    recommend_icon: boolean;
    new_icon: boolean;
    };
    additional_information: { 
    key: string;
    name: string;
    value: string;
    }[];
    image_upload_type: Cafe24Enum;
    detail_image: string;
    list_image: string;
    tiny_image: string;
    small_image: string;
    product_weight: string;
    main: number[];
    relational_product: { 
    product_no: number;
    interrelated: Cafe24Enum;
    }[];
    product_material: string;
    english_product_material: string;
    cloth_fabric: string;
    created_date: Cafe24Datetime;
    additional_image: { 
    big: string;
    medium: string;
    small: string;
    }[];
    exposure_limit_type: Cafe24Enum;
    exposure_group_list: number[];
    };
  }
  export interface CreateABundleInput {
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
      * 상품명
      * 
      * @required
      * 
      * 최대글자수 : [250자]
      */ 
    product_name: any;
    /**
      * @description
      * 세트상품의 구성상품 정보
      * 
      * @required
      */ 
    bundle_product_components: { 
    /**
      * @description
      * 세트상품의 구성상품 번호
      * 
      * 
      */ 
    product_no: any;
    /**
      * @description
      * 세트상품 구매개수
      * 
      * 
      */ 
    purchase_quantity: any;
    };
    /**
      * @description
      * 세트할인 정보
      * 
      * @required
      */ 
    bundle_product_sales: { 
    /**
      * @description
      * 세트상품 할인가
      * 
      * 
      */ 
    discount_value: any;
    /**
      * @description
      * 세트상품 할인타입
      * P : 퍼센트
      * V : 정액
      * 
      * 
      */ 
    discount_type: any;
    /**
      * @description
      * 세트상품 할인 절사 단위
      * F : 절사안함
      * -2 : 0.01단위
      * -1 : 0.1단위
      * 0 : 1단위
      * 1 : 10단위
      * 2 : 100단위
      * 3 : 1000단위
      * 
      * 
      */ 
    discount_round_unit?: any;
    /**
      * @description
      * 세트상품 할인 절사 방식
      * F : 내림
      * R : 반올림
      * C : 올림
      * 
      * 
      */ 
    discount_round_type?: any;
    };
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
      * 추가 분류 번호
      * 
      * 분류 번호를 사용하여 진열을 원하는 카테고리에 상품 등록
      * 
      * 
      */ 
    add_category_no?: { 
    /**
      * @description
      * 분류 번호
      * 
      * 
      */ 
    category_no: any;
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
    custom_product_code?: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    eng_product_name?: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    supply_product_name?: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * 최대글자수 : [50자]
      */ 
    internal_product_name?: any;
    /**
      * @description
      * 모델명
      * 
      * 최대글자수 : [100자]
      */ 
    model_name?: any;
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
    use_naverpay?: any;
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
    naverpay_type?: any;
    /**
      * @description
      * 상품 중량
      * 
      * 최소: [0]~최대: [999999.99]
      */ 
    product_weight?: any;
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
    mobile_description?: any;
    /**
      * @description
      * 상품요약설명
      * 
      * 최대글자수 : [255자]
      */ 
    summary_description?: any;
    /**
      * @description
      * 상품 간략 설명
      * 
      * 
      */ 
    simple_description?: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 배열 최대사이즈: [50]
      */ 
    product_tag?: any;
    /**
      * @description
      * 상품결제안내
      * 
      * 
      */ 
    payment_info?: any;
    /**
      * @description
      * 상품배송안내
      * 
      * 
      */ 
    shipping_info?: any;
    /**
      * @description
      * 교환/반품안내
      * 
      * 
      */ 
    exchange_info?: any;
    /**
      * @description
      * 서비스문의/안내
      * 
      * 
      */ 
    service_info?: any;
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
      * 배송정보
      * 
      * 국내에만 배송이 가능한 상품인지 해외에도 배송이 가능한 상품인지 표시.
      * [쇼핑몰 설정 &gt; 배송 설정 &gt; &#39;배송 정책 설정 &gt; 배송비 설정 &gt; 개별배송비 설정&#39;] 에서 상품별 개별 배송료 설정이 사용안함인 경우 설정 불가.
      * 
      * ※ 쇼핑몰이 EC Global 쇼핑몰일 경우 &#34;C&#34;를 필수로 입력해야한다.
      * 
      * EC 베트남, 필리핀 버전에서는 사용할 수 없음.
      * 
      * A : 국내배송
      * C : 해외배송
      * B : 국내/해외배송
      * 
      * @default A
      * 
      * 
      */ 
    shipping_scope?: any;
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
      * @default 01
      * 
      * 
      */ 
    shipping_method?: any;
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
    shipping_fee_by_product?: any;
    /**
      * @description
      * 배송지역
      * 
      * 최대글자수 : [255자]
      */ 
    shipping_area?: any;
    /**
      * @description
      * 배송기간
      * 
      * 배열 최대사이즈: [2]
      */ 
    shipping_period?: { 
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
      * @default T
      * 
      * 
      */ 
    shipping_fee_type?: any;
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
    shipping_rates?: any;
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
      * @default B
      * 
      * 
      */ 
    prepaid_shipping_fee?: any;
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
    clearance_category_code?: any;
    /**
      * @description
      * 상세이미지
      * 
      * 
      */ 
    detail_image?: any;
    /**
      * @description
      * 목록이미지
      * 
      * 
      */ 
    list_image?: any;
    /**
      * @description
      * 작은목록이미지
      * 
      * 
      */ 
    tiny_image?: any;
    /**
      * @description
      * 축소이미지
      * 
      * 
      */ 
    small_image?: any;
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
    image_upload_type?: any;
    /**
      * @description
      * 추가항목
      * 
      * 
      */ 
    additional_information?: { 
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
    price_content?: any;
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
    buy_limit_by_product?: any;
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
    buy_limit_type?: any;
    /**
      * @description
      * 구매가능 회원 등급
      * 
      * 
      */ 
    buy_group_list?: any;
    /**
      * @description
      * 구매가능 회원아이디
      * 
      * 
      */ 
    buy_member_id_list?: any;
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
    repurchase_restriction?: any;
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
    single_purchase_restriction?: any;
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
    points_by_product?: any;
    /**
      * @description
      * 결제방식별 적립금 설정 여부
      * 
      * B : 기본 적립금설정 사용
      * C : 결제방식에 따른 적립
      * 
      * 
      */ 
    points_setting_by_payment?: any;
    /**
      * @description
      * 적립금 설정 정보
      * 
      * 
      */ 
    points_amount?: any;
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
    except_member_points?: any;
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
    relational_product?: { 
    /**
      * @description
      * 상품번호
      * 
      * 
      */ 
    product_no: any;
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
    product_material?: any;
    /**
      * @description
      * 영문 상품 소재
      * 
      * 상품의 소재의 영어 표기. 해외 배송사를 이용할 경우 의류의 소재를 통관시 요구하는 경우가 있음.
      * 
      * 
      */ 
    english_product_material?: any;
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
    cloth_fabric?: any;
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
    additional_image?: any;
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
    adult_certification?: any;
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
    exposure_limit_type?: any;
    /**
      * @description
      * 표시대상 회원 등급
      * 
      * 
      */ 
    exposure_group_list?: any;
  }

  export interface CreateABundleOutput {
    bundleproduct: { 
    shop_no: number;
    product_no: number;
    bundle_product_components: { 
    product_no: number;
    product_name: string;
    product_code: string;
    product_price: Cafe24Datetime;
    purchase_quantity: number;
    }[];
    bundle_product_sales: { 
    set_product_price: Cafe24Datetime;
    discount_value: string;
    discount_type: Cafe24Enum;
    discount_round_unit: Cafe24Enum;
    discount_round_type: Cafe24Enum;
    };
    category: { 
    category_no: number;
    recommend: Cafe24Enum;
    new: Cafe24Enum;
    }[];
    product_code: string;
    custom_product_code: string;
    product_name: string;
    eng_product_name: string;
    supply_product_name: string;
    internal_product_name: string;
    model_name: string;
    display: Cafe24Enum;
    price_content: string;
    buy_limit_by_product: Cafe24Enum;
    buy_limit_type: Cafe24Enum;
    buy_group_list: number[];
    buy_member_id_list: string[];
    repurchase_restriction: Cafe24Enum;
    single_purchase_restriction: Cafe24Enum;
    points_by_product: Cafe24Enum;
    points_setting_by_payment: Cafe24Enum;
    points_amount: { 
    payment_method: string;
    points_rate: string;
    }[];
    adult_certification: Cafe24Enum;
    description: string;
    mobile_description: string;
    simple_description: string;
    summary_description: string;
    payment_info: string;
    shipping_info: string;
    exchange_info: string;
    service_info: string;
    product_tag: string[];
    use_naverpay: any;
    naverpay_type: any;
    icon: string[];
    hscode: Cafe24Datetime;
    shipping_calculation: Cafe24Enum;
    shipping_fee_by_product: Cafe24Enum;
    shipping_method: Cafe24Datetime;
    shipping_period: { 
    minimum: number;
    maximum: number;
    };
    shipping_scope: Cafe24Enum;
    shipping_area: string;
    shipping_fee_type: Cafe24Enum;
    shipping_rates: { 
    shipping_rates_min: Cafe24Datetime;
    shipping_rates_max: Cafe24Datetime;
    shipping_fee: Cafe24Datetime;
    }[];
    prepaid_shipping_fee: Cafe24Enum;
    clearance_category_code: string;
    image_upload_type: Cafe24Enum;
    detail_image: string;
    product_weight: string;
    relational_product: { 
    product_no: number;
    interrelated: Cafe24Enum;
    }[];
    product_material: string;
    english_product_material: string;
    cloth_fabric: string;
    created_date: Cafe24Datetime;
    additional_image: { 
    big: string;
    medium: string;
    small: string;
    }[];
    additional_information: { 
    key: string;
    name: string;
    value: Cafe24Datetime;
    }[];
    exposure_limit_type: Cafe24Enum;
    exposure_group_list: number[];
    };
  }
  export interface UpdateABundleInput {
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
      * 상품번호
      * 
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * @required
      */ 
    product_no: any;
    /**
      * @description
      * 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    product_name?: any;
    /**
      * @description
      * 세트상품의 구성상품 정보
      * 
      * 
      */ 
    bundle_product_components?: { 
    /**
      * @description
      * 세트상품의 구성상품 번호
      * 
      * 
      */ 
    product_no: any;
    /**
      * @description
      * 세트상품 구매개수
      * 
      * 
      */ 
    purchase_quantity: any;
    };
    /**
      * @description
      * 세트할인 정보
      * 
      * 
      */ 
    bundle_product_sales?: { 
    /**
      * @description
      * 세트상품 할인가
      * 
      * 
      */ 
    discount_value: any;
    /**
      * @description
      * 세트상품 할인타입
      * P : 퍼센트
      * V : 정액
      * 
      * 
      */ 
    discount_type: any;
    /**
      * @description
      * 세트상품 할인 절사 단위
      * F : 절사안함
      * -2 : 0.01단위
      * -1 : 0.1단위
      * 0 : 1단위
      * 1 : 10단위
      * 2 : 100단위
      * 3 : 1000단위
      * 
      * 
      */ 
    discount_round_unit?: any;
    /**
      * @description
      * 세트상품 할인 절사 방식
      * F : 내림
      * R : 반올림
      * C : 올림
      * 
      * 
      */ 
    discount_round_type?: any;
    };
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
    product_condition?: any;
    /**
      * @description
      * 중고상품 사용 개월
      * 
      * 상품 상태(product_condition)가 중고 상품일 경우 중고 상품의 사용 개월 수
      * 
      * 최대값: [2147483647]
      */ 
    product_used_month?: any;
    /**
      * @description
      * 추가 분류 번호
      * 
      * 상품분류 번호를 입력하여 해당 상품에 특정 상품분류를 추가 등록
      * 
      * 
      */ 
    add_category_no?: { 
    /**
      * @description
      * 분류 번호
      * 
      * 
      */ 
    category_no: any;
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
    delete_category_no?: any;
    /**
      * @description
      * 자체상품 코드
      * 
      * 사용자가 상품에 부여 가능한 코드. 재고 관리등의 이유로 자체적으로 상품을 관리 하고 있는 경우 사용함.
      * 
      * 최대글자수 : [40자]
      */ 
    custom_product_code?: any;
    /**
      * @description
      * 영문 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    eng_product_name?: any;
    /**
      * @description
      * 공급사 상품명
      * 
      * 최대글자수 : [250자]
      */ 
    supply_product_name?: any;
    /**
      * @description
      * 상품명(관리용)
      * 
      * 최대글자수 : [50자]
      */ 
    internal_product_name?: any;
    /**
      * @description
      * 모델명
      * 
      * 최대글자수 : [100자]
      */ 
    model_name?: any;
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
    use_naverpay?: any;
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
    naverpay_type?: any;
    /**
      * @description
      * 상품 중량
      * 
      * 최소: [0]~최대: [999999.99]
      */ 
    product_weight?: any;
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
    mobile_description?: any;
    /**
      * @description
      * 상품요약설명
      * 
      * 최대글자수 : [255자]
      */ 
    summary_description?: any;
    /**
      * @description
      * 상품 간략 설명
      * 
      * 
      */ 
    simple_description?: any;
    /**
      * @description
      * 상품 검색어
      * 
      * 배열 최대사이즈: [50]
      */ 
    product_tag?: any;
    /**
      * @description
      * 상품결제안내
      * 
      * 
      */ 
    payment_info?: any;
    /**
      * @description
      * 상품배송안내
      * 
      * 
      */ 
    shipping_info?: any;
    /**
      * @description
      * 교환/반품안내
      * 
      * 
      */ 
    exchange_info?: any;
    /**
      * @description
      * 서비스문의/안내
      * 
      * 
      */ 
    service_info?: any;
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
    use_icon_exposure_term?: any;
    /**
      * @description
      * 표시기간 시작 일자
      * 
      * 
      */ 
    icon_exposure_begin_datetime?: any;
    /**
      * @description
      * 표시기간 종료 일자
      * 
      * 
      */ 
    icon_exposure_end_datetime?: any;
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
    shipping_scope?: any;
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
    prepaid_shipping_fee?: any;
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
    shipping_method?: any;
    /**
      * @description
      * 개별배송여부
      * 
      * T : 개별배송
      * F : 기본배송
      * 
      * 
      */ 
    shipping_fee_by_product?: any;
    /**
      * @description
      * 배송지역
      * 
      * 최대글자수 : [255자]
      */ 
    shipping_area?: any;
    /**
      * @description
      * 배송기간
      * 
      * 배열 최대사이즈: [2]
      */ 
    shipping_period?: { 
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
    shipping_fee_type?: any;
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
      * 
      */ 
    shipping_rates?: any;
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
    clearance_category_code?: any;
    /**
      * @description
      * 상세이미지
      * 
      * 
      */ 
    detail_image?: any;
    /**
      * @description
      * 목록이미지
      * 
      * 
      */ 
    list_image?: any;
    /**
      * @description
      * 작은목록이미지
      * 
      * 
      */ 
    tiny_image?: any;
    /**
      * @description
      * 축소이미지
      * 
      * 
      */ 
    small_image?: any;
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
    image_upload_type?: any;
    /**
      * @description
      * 추가항목
      * 
      * 
      */ 
    additional_information?: { 
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
    price_content?: any;
    /**
      * @description
      * 구매제한 개별 설정여부
      * 
      * T : 사용함
      * F : 사용안함
      * 
      * 
      */ 
    buy_limit_by_product?: any;
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
    buy_limit_type?: any;
    /**
      * @description
      * 구매가능 회원 등급
      * 
      * 
      */ 
    buy_group_list?: any;
    /**
      * @description
      * 구매가능 회원아이디
      * 
      * 
      */ 
    buy_member_id_list?: any;
    /**
      * @description
      * 재구매 제한
      * 
      * T : 재구매 불가
      * F : 제한안함
      * 
      * 
      */ 
    repurchase_restriction?: any;
    /**
      * @description
      * 단독구매 제한
      * 
      * T : 단독구매 불가
      * F : 제한안함
      * 
      * 
      */ 
    single_purchase_restriction?: any;
    /**
      * @description
      * 적립금 개별설정 사용여부
      * 
      * F : 기본설정 사용
      * T : 개별설정
      * 
      * 
      */ 
    points_by_product?: any;
    /**
      * @description
      * 결제방식별 적립금 설정 여부
      * 
      * B : 기본 적립금설정 사용
      * C : 결제방식에 따른 적립
      * 
      * 
      */ 
    points_setting_by_payment?: any;
    /**
      * @description
      * 적립금 설정 정보
      * 
      * 
      */ 
    points_amount?: any;
    /**
      * @description
      * 회원등급 추가 적립 제외
      * 
      * T : 회원등급 추가 적립 제외 설정함
      * F : 회원등급 추가 적립 제외 설정안함
      * 
      * 
      */ 
    except_member_points?: any;
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
    relational_product?: { 
    /**
      * @description
      * 상품번호
      * 
      * 
      */ 
    product_no?: any;
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
    product_material?: any;
    /**
      * @description
      * 영문 상품 소재
      * 
      * 상품의 소재의 영어 표기. 해외 배송사를 이용할 경우 의류의 소재를 통관시 요구하는 경우가 있음.
      * 
      * 
      */ 
    english_product_material?: any;
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
    cloth_fabric?: any;
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
    additional_image?: any;
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
    adult_certification?: any;
    /**
      * @description
      * 표시제한 범위
      * 
      * A : 모두에게 표시
      * M : 회원에게만 표시
      * 
      * 
      */ 
    exposure_limit_type?: any;
    /**
      * @description
      * 표시대상 회원 등급
      * 
      * 
      */ 
    exposure_group_list?: any;
  }

  export interface UpdateABundleOutput {
    bundleproduct: { 
    shop_no: number;
    product_no: number;
    bundle_product_components: { 
    product_no: number;
    product_name: string;
    product_code: string;
    product_price: Cafe24Datetime;
    purchase_quantity: number;
    }[];
    bundle_product_sales: { 
    set_product_price: Cafe24Datetime;
    discount_value: string;
    discount_type: Cafe24Enum;
    discount_round_unit: Cafe24Enum;
    discount_round_type: Cafe24Enum;
    };
    category: { 
    category_no: number;
    recommend: Cafe24Enum;
    new: Cafe24Enum;
    }[];
    product_code: string;
    custom_product_code: string;
    product_name: string;
    eng_product_name: string;
    supply_product_name: string;
    internal_product_name: string;
    model_name: string;
    display: Cafe24Enum;
    product_condition: Cafe24Enum;
    product_used_month: number;
    price_content: string;
    buy_limit_by_product: Cafe24Enum;
    buy_limit_type: Cafe24Enum;
    buy_group_list: number[];
    buy_member_id_list: string[];
    repurchase_restriction: Cafe24Enum;
    single_purchase_restriction: Cafe24Enum;
    points_by_product: Cafe24Enum;
    points_setting_by_payment: Cafe24Enum;
    points_amount: { 
    payment_method: string;
    points_rate: string;
    }[];
    except_member_points: Cafe24Enum;
    adult_certification: Cafe24Enum;
    description: string;
    mobile_description: string;
    simple_description: string;
    summary_description: string;
    payment_info: string;
    shipping_info: string;
    exchange_info: string;
    service_info: string;
    product_tag: string[];
    use_naverpay: any;
    naverpay_type: any;
    icon: string[];
    hscode: Cafe24Datetime;
    shipping_calculation: Cafe24Enum;
    shipping_fee_by_product: Cafe24Enum;
    shipping_method: Cafe24Datetime;
    shipping_period: { 
    minimum: number;
    maximum: number;
    };
    shipping_scope: Cafe24Enum;
    shipping_area: string;
    shipping_fee_type: Cafe24Enum;
    shipping_rates: { 
    shipping_rates_min: Cafe24Datetime;
    shipping_rates_max: Cafe24Datetime;
    shipping_fee: Cafe24Datetime;
    }[];
    prepaid_shipping_fee: Cafe24Enum;
    clearance_category_code: string;
    image_upload_type: Cafe24Enum;
    detail_image: string;
    product_weight: string;
    relational_product: { 
    product_no: number;
    interrelated: Cafe24Enum;
    }[];
    product_material: string;
    english_product_material: string;
    cloth_fabric: string;
    updated_date: Cafe24Datetime;
    additional_image: { 
    big: string;
    medium: string;
    small: string;
    }[];
    additional_information: { 
    key: string;
    name: string;
    value: Cafe24Datetime;
    }[];
    exposure_limit_type: Cafe24Enum;
    exposure_group_list: number[];
    };
  }
  export interface DeleteABundleInput {
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
      * 상품번호
      * 
      * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
      * 
      * @required
      */ 
    product_no: any;
  }

  export interface DeleteABundleOutput {
    bundleproduct: { 
    product_no: number;
    };
  }

  interface Cafe24AdminAPIClient {
    /**
     * @description
     * 세트상품을 목록을 통해 조회할 수 있습니다.
     * 상품코드, 자체상품 코드, 상품명 등을 조회할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-list-of-bundles
     *
     * @example 응답 예시
     * ```json
     * {
     *     "bundleproducts": [
     *         {
     *             "shop_no": 1,
     *             "product_no": 24,
     *             "product_code": "P000000X",
     *             "bundle_product_components": [
     *                 {
     *                     "product_no": 11,
     *                     "product_name": "iPhone XS",
     *                     "product_code": "P0000BTN",
     *                     "product_price": "2000.00",
     *                     "purchase_quantity": 1
     *                 },
     *                 {
     *                     "product_no": 12,
     *                     "product_name": "iPad Pro",
     *                     "product_code": "P0000BTH",
     *                     "product_price": "2000.00",
     *                     "purchase_quantity": 1
     *                 }
     *             ],
     *             "custom_product_code": "",
     *             "product_name": "iPhone X",
     *             "eng_product_name": "iPhone Ten",
     *             "supply_product_name": "iphone A1865 fdd lte",
     *             "internal_product_name": "Sample Internal product name",
     *             "model_name": "A1865",
     *             "display": "T",
     *             "selling": "F",
     *             "product_condition": "U",
     *             "product_used_month": 2,
     *             "summary_description": "This is Product Summary.",
     *             "product_tag": [
     *                 "edu",
     *                 "test",
     *                 "sample"
     *             ],
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
     *             "points_by_product": "T",
     *             "points_setting_by_payment": "C",
     *             "points_amount": [
     *                 {
     *                     "payment_method": "cash",
     *                     "points_rate": "10.00%"
     *                 },
     *                 {
     *                     "payment_method": "mileage",
     *                     "points_rate": "10.00%"
     *                 }
     *             ],
     *             "except_member_points": "F",
     *             "adult_certification": "F",
     *             "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *             "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *             "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *             "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *             "use_naverpay": null,
     *             "naverpay_type": null,
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
     *             "sold_out": "F",
     *             "exposure_limit_type": "M",
     *             "exposure_group_list": [
     *                 8,
     *                 9
     *             ]
     *         },
     *         {
     *             "shop_no": 1,
     *             "product_no": 23,
     *             "product_code": "P000000W",
     *             "bundle_product_components": [
     *                 {
     *                     "product_no": 11,
     *                     "product_name": "iPhone XS",
     *                     "product_code": "P0000BTN",
     *                     "product_price": "2000.00",
     *                     "purchase_quantity": 1
     *                 },
     *                 {
     *                     "product_no": 12,
     *                     "product_name": "iPad Pro",
     *                     "product_code": "P0000BTH",
     *                     "product_price": "2000.00",
     *                     "purchase_quantity": 1
     *                 }
     *             ],
     *             "custom_product_code": "",
     *             "product_name": "iPhone X",
     *             "eng_product_name": "iPhone Ten",
     *             "supply_product_name": "iphone A1865 fdd lte",
     *             "internal_product_name": "Sample Internal product name",
     *             "model_name": "A1865",
     *             "display": "T",
     *             "selling": "F",
     *             "product_condition": "U",
     *             "product_used_month": 2,
     *             "summary_description": "This is Product Summary.",
     *             "product_tag": [
     *                 "edu",
     *                 "test",
     *                 "sample"
     *             ],
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
     *             "points_by_product": "T",
     *             "points_setting_by_payment": "C",
     *             "points_amount": [
     *                 {
     *                     "payment_method": "cash",
     *                     "points_rate": "10.00%"
     *                 },
     *                 {
     *                     "payment_method": "mileage",
     *                     "points_rate": "10.00%"
     *                 }
     *             ],
     *             "except_member_points": "F",
     *             "adult_certification": "F",
     *             "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
     *             "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *             "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *             "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *             "use_naverpay": null,
     *             "naverpay_type": null,
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
     *             "sold_out": "F",
     *             "exposure_limit_type": "M",
     *             "exposure_group_list": [
     *                 8,
     *                 9
     *             ]
     *         }
     *     ]
     * }
     * ```
     */
    retrieveAListOfBundles(
      input: RetrieveAListOfBundlesInput,
      options?: RequestOptions<RetrieveAListOfBundlesOutput['bundleproducts'][number]>,
    ): Promise<AxiosResponse<RetrieveAListOfBundlesOutput>>;
    /**
     * @description
     * 특정 세트상품을 상세조회할 수 있습니다.
     * 세트할인 정보와 같은 상세 정보를 추가로 확인할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#retrieve-a-bundle
     *
     * @example 응답 예시
     * ```json
     * {
     *     "bundleproduct": {
     *         "shop_no": 1,
     *         "product_no": 28,
     *         "bundle_product_components": [
     *             {
     *                 "product_no": 11,
     *                 "product_name": "iPhone XS",
     *                 "product_code": "P0000BTN",
     *                 "product_price": "2000.00",
     *                 "purchase_quantity": 1
     *             },
     *             {
     *                 "product_no": 12,
     *                 "product_name": "iPad Pro",
     *                 "product_code": "P0000BTH",
     *                 "product_price": "2000.00",
     *                 "purchase_quantity": 1
     *             }
     *         ],
     *         "bundle_product_sales": {
     *             "set_product_price": "2800.00",
     *             "discount_value": "30.00",
     *             "discount_type": "P",
     *             "discount_round_unit": "F",
     *             "discount_round_type": "F"
     *         },
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
     *         "product_code": "P00000BB",
     *         "custom_product_code": "",
     *         "product_name": "iPhone X",
     *         "eng_product_name": "iPhone Ten",
     *         "supply_product_name": "iphone A1865 fdd lte",
     *         "internal_product_name": "Sample Internal product name",
     *         "model_name": "A1865",
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
     *         "points_by_product": "T",
     *         "points_setting_by_payment": "C",
     *         "points_amount": [
     *             {
     *                 "payment_method": "cash",
     *                 "points_rate": "10.00%"
     *             },
     *             {
     *                 "payment_method": "mileage",
     *                 "points_rate": "10.00%"
     *             }
     *         ],
     *         "except_member_points": "F",
     *         "adult_certification": "F",
     *         "description": "Sample Description.",
     *         "mobile_description": "Sample Mobile Description.",
     *         "separated_mobile_description": "T",
     *         "simple_description": "This is Product Description.",
     *         "summary_description": "This is Product Summary.",
     *         "payment_info": "Sample payment info. You have to Pay.",
     *         "shipping_info": "Sample shipping info. You have to ship.",
     *         "exchange_info": "Sample exchange info. You have to exchange.",
     *         "service_info": "Sample service info. You have to service.",
     *         "country_hscode": {
     *             "JPN": "430310011",
     *             "CHN": "43031020"
     *         },
     *         "product_tag": [
     *             "edu",
     *             "test",
     *             "sample"
     *         ],
     *         "use_naverpay": null,
     *         "naverpay_type": null,
     *         "icon_show_period": {
     *             "start_date": "2017-10-30T09:00:00+09:00",
     *             "end_date": "2017-11-02T16:00:00+09:00"
     *         },
     *         "icon": [
     *             "icon_01_01",
     *             "icon_02_01"
     *         ],
     *         "hscode": "4303101990",
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
     *         "updated_date": "2018-01-19T11:19:27+09:00",
     *         "clearance_category_eng": "Necklaces",
     *         "clearance_category_kor": "주얼리 > 목걸이",
     *         "prepaid_shipping_fee": "P",
     *         "clearance_category_code": "ACAB0000",
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
     *         "detail_image": "https://{domain}/web/product/big/201511/30_shop1_638611.jpg",
     *         "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
     *         "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
     *         "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
     *         "product_weight": "1.00",
     *         "main": [
     *             3,
     *             2
     *         ],
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
    retrieveABundle(
      input: RetrieveABundleInput,
      options?: RequestOptions<RetrieveABundleOutput['bundleproduct']>,
    ): Promise<AxiosResponse<RetrieveABundleOutput>>;
    /**
     * @description
     * 세트상품을 생성할 수 있습니다.
     * 구성상품을 묶은 가격에 대해 추가로 세트상품 할인을 적용할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#create-a-bundle
     *
     * @example 응답 예시
     * ```json
     * {
     *     "bundleproduct": {
     *         "shop_no": 1,
     *         "product_no": 28,
     *         "bundle_product_components": [
     *             {
     *                 "product_no": 11,
     *                 "product_name": "iPhone XS",
     *                 "product_code": "P0000BTN",
     *                 "product_price": "2000.00",
     *                 "purchase_quantity": 1
     *             },
     *             {
     *                 "product_no": 12,
     *                 "product_name": "iPad Pro",
     *                 "product_code": "P0000BTH",
     *                 "product_price": "2000.00",
     *                 "purchase_quantity": 1
     *             }
     *         ],
     *         "bundle_product_sales": {
     *             "set_product_price": "2800.00",
     *             "discount_value": "30.00",
     *             "discount_type": "P",
     *             "discount_round_unit": "F",
     *             "discount_round_type": "F"
     *         },
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
     *         "supply_product_name": "iphone A1865 fdd lte",
     *         "internal_product_name": "Sample Internal product name",
     *         "model_name": "A1865",
     *         "display": "T",
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
     *         "points_by_product": "T",
     *         "points_setting_by_payment": "C",
     *         "points_amount": [
     *             {
     *                 "payment_method": "cash",
     *                 "points_rate": "10.00%"
     *             },
     *             {
     *                 "payment_method": "mileage",
     *                 "points_rate": "10.00%"
     *             }
     *         ],
     *         "adult_certification": "F",
     *         "description": "Sample Description.",
     *         "mobile_description": "Sample Mobile Description.",
     *         "simple_description": "This is Product Description.",
     *         "summary_description": "This is Product Summary.",
     *         "payment_info": "Sample payment info. You have to Pay.",
     *         "shipping_info": "Sample shipping info. You have to ship.",
     *         "exchange_info": "Sample exchange info. You have to exchange.",
     *         "service_info": "Sample service info. You have to service.",
     *         "product_tag": [
     *             "edu",
     *             "test",
     *             "sample"
     *         ],
     *         "use_naverpay": null,
     *         "naverpay_type": null,
     *         "icon": [
     *             "icon_01_01",
     *             "icon_02_01"
     *         ],
     *         "hscode": "4303101990",
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
     *         "product_weight": "1.00",
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
    createABundle(
      input: CreateABundleInput,
      options?: RequestOptions<CreateABundleOutput['bundleproduct']>,
    ): Promise<AxiosResponse<CreateABundleOutput>>;
    /**
     * @description
     * 특정 세트상품의 정보를 수정할 수 있습니다.
     * 상품명, 세트상품의 구성상품 정보, 세트할인 정보 등을 수정할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#update-a-bundle
     *
     * @example 응답 예시
     * ```json
     * {
     *     "bundleproduct": {
     *         "shop_no": 1,
     *         "product_no": 28,
     *         "bundle_product_components": [
     *             {
     *                 "product_no": 11,
     *                 "product_name": "iPhone XS",
     *                 "product_code": "P0000BTN",
     *                 "product_price": "2000.00",
     *                 "purchase_quantity": 1
     *             },
     *             {
     *                 "product_no": 12,
     *                 "product_name": "iPad Pro",
     *                 "product_code": "P0000BTH",
     *                 "product_price": "2000.00",
     *                 "purchase_quantity": 1
     *             }
     *         ],
     *         "bundle_product_sales": {
     *             "set_product_price": "2800.00",
     *             "discount_value": "30.00",
     *             "discount_type": "P",
     *             "discount_round_unit": "F",
     *             "discount_round_type": "F"
     *         },
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
     *         "supply_product_name": "iphone A1865 fdd lte",
     *         "internal_product_name": "Sample Internal product name",
     *         "model_name": "A1865",
     *         "display": "T",
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
     *         "points_by_product": "T",
     *         "points_setting_by_payment": "C",
     *         "points_amount": [
     *             {
     *                 "payment_method": "cash",
     *                 "points_rate": "10.00%"
     *             },
     *             {
     *                 "payment_method": "mileage",
     *                 "points_rate": "10.00%"
     *             }
     *         ],
     *         "except_member_points": "F",
     *         "adult_certification": "F",
     *         "description": "Sample Description.",
     *         "mobile_description": "Sample Mobile Description.",
     *         "simple_description": "This is Product Description.",
     *         "summary_description": "This is Product Summary.",
     *         "payment_info": "Sample payment info. You have to Pay.",
     *         "shipping_info": "Sample shipping info. You have to ship.",
     *         "exchange_info": "Sample exchange info. You have to exchange.",
     *         "service_info": "Sample service info. You have to service.",
     *         "product_tag": [
     *             "edu",
     *             "test",
     *             "sample"
     *         ],
     *         "use_naverpay": null,
     *         "naverpay_type": null,
     *         "icon": [
     *             "icon_01_01",
     *             "icon_02_01"
     *         ],
     *         "hscode": "4303101990",
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
     *         "product_weight": "1.00",
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
     *         "updated_date": "2018-05-29T14:23:51+09:00",
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
    updateABundle(
      input: UpdateABundleInput,
      options?: RequestOptions<UpdateABundleOutput['bundleproduct']>,
    ): Promise<AxiosResponse<UpdateABundleOutput>>;
    /**
     * @description
     * 특정 세트상품을 삭제할 수 있습니다.
     *
     * @see https://developers.cafe24.com/docs/api/admin/#delete-a-bundle
     *
     * @example 응답 예시
     * ```json
     * {
     *     "bundleproduct": {
     *         "product_no": 28
     *     }
     * }
     * ```
     */
    deleteABundle(
      input: DeleteABundleInput,
      options?: RequestOptions<DeleteABundleOutput['bundleproduct']>,
    ): Promise<AxiosResponse<DeleteABundleOutput>>;
  }
}
