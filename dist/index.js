module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"get",value:function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object.assign({path:"/"},n);r.expires&&(r.expires=r.expires.toUTCString());var o=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var a in r){o+="; "+a;var i=r[a];!0!==i&&(o+="="+i)}document.cookie=o}},{key:"remove",value:function(e){this.set(e,"",{"max-age":-1})}}])&&r(t.prototype,n),o&&r(t,o),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"set",value:function(e,t){localStorage.setItem(e,"string"==typeof t?t:JSON.stringify(t))}},{key:"get",value:function(e){var t=localStorage.getItem(e),n=t.indexOf("}")>t.indexOf("{")||t.indexOf("]")>t.indexOf("[")?"object":"string";return t?"string"===n?t:JSON.parse(t):null}},{key:"remove",value:function(e){localStorage.removeItem(e)}},{key:"clear",value:function(){localStorage.clear()}},{key:"setObject",value:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},{key:"getObject",value:function(e){return JSON.parse(localStorage.getItem(e))?JSON.parse(localStorage.getItem(e)):{}}}])&&a(t.prototype,n),r&&a(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"set",value:function(e,t){sessionStorage.setItem(e,"string"==typeof t?t:JSON.stringify(t))}},{key:"get",value:function(e){var t=sessionStorage.getItem(e),n=t.indexOf("}")>t.indexOf("{")||t.indexOf("]")>t.indexOf("[")?"object":"string";return t?"string"===n?t:JSON.parse(t):null}},{key:"remove",value:function(e){sessionStorage.removeItem(e)}},{key:"clear",value:function(){sessionStorage.clear()}},{key:"setObject",value:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))}},{key:"getObject",value:function(e){return JSON.parse(sessionStorage.getItem(e))?JSON.parse(sessionStorage.getItem(e)):{}}}])&&u(t.prototype,n),r&&u(t,r),e}();n.d(t,"Cookie",(function(){return l})),n.d(t,"LocalStorage",(function(){return f})),n.d(t,"SessionStorage",(function(){return s}));var l=new o,f=new i,s=new c}]);