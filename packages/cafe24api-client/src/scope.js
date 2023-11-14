export const Scope = {
  // Available scopes
  READ_CATEGORY: 'mall.read_category',
  WRITE_CATEGORY: 'mall.write_category',
  READ_PRODUCT: 'mall.read_product',
  WRITE_PRODUCT: 'mall.write_product',
  READ_COLLECTION: 'mall.read_collection',
  WRITE_COLLECTION: 'mall.write_collection',
  READ_SUPPLY: 'mall.read_supply',
  WRITE_SUPPLY: 'mall.write_supply',
  READ_PERSONAL: 'mall.read_personal',
  WRITE_PERSONAL: 'mall.write_personal',
  READ_ORDER: 'mall.read_order',
  WRITE_ORDER: 'mall.write_order',
  READ_COMMUNITY: 'mall.read_community',
  WRITE_COMMUNITY: 'mall.write_community',
  READ_CUSTOMER: 'mall.read_customer',
  WRITE_CUSTOMER: 'mall.write_customer',
  READ_NOTIFICATION: 'mall.read_notification',
  WRITE_NOTIFICATION: 'mall.write_notification',
  READ_STORE: 'mall.read_store',
  WRITE_STORE: 'mall.write_store',
  READ_PROMOTION: 'mall.read_promotion',
  WRITE_PROMOTION: 'mall.write_promotion',
  READ_DESIGN: 'mall.read_design',
  WRITE_DESIGN: 'mall.write_design',
  READ_APPLICATION: 'mall.read_application',
  WRITE_APPLICATION: 'mall.write_application',
  READ_SALESREPORT: 'mall.read_salesreport',
  WRITE_SALESREPORT: 'mall.write_salesreport',
  READ_PRIVACY: 'mall.read_privacy',
  WRITE_PRIVACY: 'mall.write_privacy',
  READ_MILEAGE: 'mall.read_mileage',
  WRITE_MILEAGE: 'mall.write_mileage',
  READ_SHIPPING: 'mall.read_shipping',
  WRITE_SHIPPING: 'mall.write_shipping',
  READ_CUSTOMER_IDENTIFIER: 'mall.read_customer_Identifier',

  // Scope management

  /**
   * @param {string} scope
   * @returns {string[]}
   */
  fromString: (scope) => {
    const scopes = scope.split(',');
    const allScopes = Scope.getScopes();
    scopes.forEach((scope) => {
      if (!allScopes.includes(scope)) {
        throw new Error(`Unknown scope: ${scope}`);
      }
    });
    return scopes;
  },
  /**
   * @param {string[]} scopes
   * @returns {string}
   */
  toString: (scopes) => scopes.join(','),
  /**
   * @param {string} value
   * @returns {boolean}
   */
  isScope: (value) => {
    return Scope.getScopes().includes(value);
  },
  getScopes: () => {
    return Object.entries(Scope)
      .filter(
        ([key]) =>
          !['fromString', 'toString', 'isScope', 'getScopes'].includes(key),
      )
      .map(([, value]) => value);
  },
};
