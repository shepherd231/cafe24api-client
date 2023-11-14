import { Scope } from '../src/scope';

describe('Scope', () => {
  describe('fromString', () => {
    it('should return scopes in form of list of strings', () => {
      const scopes = Scope.fromString(
        `${Scope.READ_PRODUCT},${Scope.WRITE_PRODUCT},${Scope.READ_PERSONAL}`,
      );
      expect(scopes).toEqual([
        Scope.READ_PRODUCT,
        Scope.WRITE_PRODUCT,
        Scope.READ_PERSONAL,
      ]);
    });

    it('should throw error if unknown scope is given', () => {
      expect(() => Scope.fromString('mall.read_unknown')).toThrow(
        'Unknown scope: mall.read_unknown',
      );
    });
  });

  describe('toString', () => {
    it('should return scopes in form of comma separated string', () => {
      const scopes = Scope.toString([
        Scope.READ_PRODUCT,
        Scope.WRITE_PRODUCT,
        Scope.READ_PERSONAL,
      ]);
      expect(scopes).toEqual(
        `${Scope.READ_PRODUCT},${Scope.WRITE_PRODUCT},${Scope.READ_PERSONAL}`,
      );
    });
  });

  describe('isScope', () => {
    it('should return true if given value is scope', () => {
      expect(Scope.isScope(Scope.READ_PRODUCT)).toEqual(true);
    });

    it('should return false if given value is not scope', () => {
      expect(Scope.isScope('mall.read_unknown')).toEqual(false);
    });
  });

  describe('getScopes', () => {
    it('should return all scopes', () => {
      const allScopes = Scope.getScopes();
      allScopes.forEach((scope) => {
        expect(typeof scope).toEqual('string');
      });
    });
  });
});
