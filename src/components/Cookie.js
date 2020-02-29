export default class Cookie {
  get(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
  set(name, value, options = {}) {
    const optionsData = Object.assign({
      path: '/',
    }, options);

    if (optionsData.expires) {
      optionsData.expires = optionsData.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (const optionKey in optionsData) {
      updatedCookie += "; " + optionKey;
      let optionValue = optionsData[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
    document.cookie = updatedCookie;
  };
  remove(name) {
    this.set(name, "", {
      'max-age': -1
    })
  };
}
