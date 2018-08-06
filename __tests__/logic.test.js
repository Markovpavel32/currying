import { If, True, False } from '../logic';

test('Boolean', () => {
  expect(If(True)('fo')('bar')).toBe('fo');
  expect(If(False)('foo')('ba')).toBe('ba');
  expect(True()()).toBeUndefined();
  expect(False()()).toBeUndefined();
});
