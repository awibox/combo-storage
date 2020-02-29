export default class Cookie {
  constructor(cookie) {
    this.cookie = cookie;
  }

  get(name) {
    const matches = this.cookie.match(new RegExp(
      `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`,
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  set(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    this.cookie = `${name}=${value};${expires};path=/`;
  }

  remove(name) {
    this.set(name, '', -1);
  }
}
