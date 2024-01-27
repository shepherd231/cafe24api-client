import { Cafe24DisplayCode, isCafe24DisplayCode } from '../src';

describe('DisplayCode', () => {
  describe('isCafe24DisplayCode', () => {
    it('should return true if given value is display code', () => {
      expect(isCafe24DisplayCode(Cafe24DisplayCode.ATTEND_COMMENT)).toEqual(
        true,
      );
    });

    it('should return false if given value is not display code', () => {
      expect(isCafe24DisplayCode('unknown')).toEqual(false);
    });
  });
});
