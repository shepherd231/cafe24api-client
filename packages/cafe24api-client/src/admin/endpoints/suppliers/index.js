
export default (cls) => {
  cls.prototype.retrieveAListOfSuppliers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/suppliers`,
      {
        shop_no: input['shop_no'],
        supplier_code: input['supplier_code'],
        supplier_name: input['supplier_name'],
        offset: input['offset'],
        limit: input['limit'],
      },
      options,
    );
  };

  cls.prototype.retrieveACountOfSuppliers = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/suppliers/count`,
      {
        shop_no: input['shop_no'],
        supplier_code: input['supplier_code'],
        supplier_name: input['supplier_name'],
      },
      options,
    );
  };

  cls.prototype.retrieveASupplier = async function (input, options) {
    return this.createRequest(
      'GET',
      `/api/v2/admin/suppliers/${input['supplier_code']}`,
      {
        shop_no: input['shop_no'],
        supplier_code: input['supplier_code'],
      },
      options,
    );
  };

  cls.prototype.createASupplier = async function (input, options) {
    return this.createRequest(
      'POST',
      `/api/v2/admin/suppliers`,
      {
        shop_no: input['shop_no'],
        supplier_name: input['supplier_name'],
        manager_information: input['manager_information'],
        use_supplier: input['use_supplier'],
        trading_type: input['trading_type'],
        supplier_type: input['supplier_type'],
        status: input['status'],
        business_item: input['business_item'],
        payment_type: input['payment_type'],
        payment_period: input['payment_period'],
        payment_method: input['payment_method'],
        payment_start_day: input['payment_start_day'],
        payment_end_day: input['payment_end_day'],
        payment_start_date: input['payment_start_date'],
        payment_end_date: input['payment_end_date'],
        commission: input['commission'],
        phone: input['phone'],
        fax: input['fax'],
        country_code: input['country_code'],
        zipcode: input['zipcode'],
        address1: input['address1'],
        address2: input['address2'],
        market_country_code: input['market_country_code'],
        market_zipcode: input['market_zipcode'],
        market_address1: input['market_address1'],
        market_address2: input['market_address2'],
        exchange_country_code: input['exchange_country_code'],
        exchange_zipcode: input['exchange_zipcode'],
        exchange_address1: input['exchange_address1'],
        exchange_address2: input['exchange_address2'],
        homepage_url: input['homepage_url'],
        mall_url: input['mall_url'],
        account_start_date: input['account_start_date'],
        account_stop_date: input['account_stop_date'],
        memo: input['memo'],
        company_registration_no: input['company_registration_no'],
        company_name: input['company_name'],
        president_name: input['president_name'],
        company_condition: input['company_condition'],
        company_line: input['company_line'],
        company_introduction: input['company_introduction'],
      },
      options,
    );
  };

  cls.prototype.updateASupplier = async function (input, options) {
    return this.createRequest(
      'PUT',
      `/api/v2/admin/suppliers/${input['supplier_code']}`,
      {
        shop_no: input['shop_no'],
        supplier_code: input['supplier_code'],
        supplier_name: input['supplier_name'],
        use_supplier: input['use_supplier'],
        trading_type: input['trading_type'],
        supplier_type: input['supplier_type'],
        status: input['status'],
        payment_type: input['payment_type'],
        payment_period: input['payment_period'],
        commission: input['commission'],
        manager_information: input['manager_information'],
        business_item: input['business_item'],
        payment_method: input['payment_method'],
        payment_start_day: input['payment_start_day'],
        payment_end_day: input['payment_end_day'],
        payment_start_date: input['payment_start_date'],
        payment_end_date: input['payment_end_date'],
        phone: input['phone'],
        fax: input['fax'],
        country_code: input['country_code'],
        zipcode: input['zipcode'],
        address1: input['address1'],
        address2: input['address2'],
        market_country_code: input['market_country_code'],
        market_zipcode: input['market_zipcode'],
        market_address1: input['market_address1'],
        market_address2: input['market_address2'],
        exchange_country_code: input['exchange_country_code'],
        exchange_zipcode: input['exchange_zipcode'],
        exchange_address1: input['exchange_address1'],
        exchange_address2: input['exchange_address2'],
        homepage_url: input['homepage_url'],
        mall_url: input['mall_url'],
        account_start_date: input['account_start_date'],
        account_stop_date: input['account_stop_date'],
        memo: input['memo'],
        company_registration_no: input['company_registration_no'],
        company_name: input['company_name'],
        president_name: input['president_name'],
        company_condition: input['company_condition'],
        company_line: input['company_line'],
        company_introduction: input['company_introduction'],
      },
      options,
    );
  };

  cls.prototype.deleteASupplier = async function (input, options) {
    return this.createRequest(
      'DELETE',
      `/api/v2/admin/suppliers/${input['supplier_code']}`,
      {
        supplier_code: input['supplier_code'],
      },
      options,
    );
  };

};
