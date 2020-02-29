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

  set(name, value, options = {}) {
    const optionsData = { path: '/', ...options };

    if (optionsData.expires) {
      optionsData.expires = optionsData.expires.toUTCString();
    }
    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    for (const optionKey in optionsData) {
      if ({}.hasOwnProperty.call(optionsData, optionKey)) {
        updatedCookie += `; ${optionKey}`;
        const optionValue = optionsData[optionKey];
        if (optionValue !== true) {
          updatedCookie += `=${optionValue}`;
        }
      }
    }
    this.cookie = updatedCookie;
  }

  remove(name) {
    this.set(name, '', {
      'max-age': -1,
    });
  }
}
