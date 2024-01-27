import { Cafe24Scope, isCafe24Scope } from '../src/scope';

describe('Scope', () => {
  describe('isCafe24Scope', () => {
    it('should return true if given value is scope', () => {
      expect(isCafe24Scope(Cafe24Scope.READ_PRODUCT)).toEqual(true);
    });

    it('should return false if given value is not scope', () => {
      expect(isCafe24Scope('mall.read_unknown')).toEqual(false);
    });
  });
});
