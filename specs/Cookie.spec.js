import Cookie from '../src/components/Cookie';

const testKey = 'testCookie';

document.cookie = 'testKey=testCookie; path=/; max-age=3600; secure; domain=domain.com';

describe('Cookie', () => {
  it('Cookie flow', () => {
    const component = Cookie;
    component.set('testKey', testKey, 60);
    expect(component.get('testKey')).toEqual(testKey);
    component.remove('testKey');
  });
  it('Cookie undefined', () => {
    const component = Cookie;
    expect(component.get('undefinedKey')).toEqual(undefined);
  });
});
