var Storager = {
    Cookie: {
        get: function(name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },
        set: function(name, value, options = {}) {
            var optionsData = Object.assign({
                path: '/',
            }, options);

            if (optionsData.expires) {
                optionsData.expires = optionsData.expires.toUTCString();
            }
            
            var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            for (var optionKey in optionsData) {
                updatedCookie += "; " + optionKey;
                var optionValue = optionsData[optionKey];
                if (optionValue !== true) {
                    updatedCookie += "=" + optionValue;
                }
            }
            document.cookie = updatedCookie;
        },
        remove: function(name) {
            this.set(name, "", {
                'max-age': -1
            })
        }
    },
    LocalStorage: {
        set: function(key, value) {
            localStorage.setItem(key, value)
        },
        get: function(key) {
            return localStorage.getItem(key);
        },
        setObject: function(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        getObject: function(key) {
            return JSON.parse(localStorage.getItem(key));
        },
        remove: function(key) {
            localStorage.removeItem(key);
        },
        clear: function() {
            localStorage.clear()
        }
    },
    SessionStorage: {
        set: function(key, value) {
            sessionStorage.setItem(key, value)
        },
        get: function(key) {
            return sessionStorage.getItem(key);
        },
        setObject: function(key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        getObject: function(key) {
            return JSON.parse(sessionStorage.getItem(key));
        },
        remove: function(key) {
            sessionStorage.removeItem(key);
        },
        clear: function() {
            sessionStorage.clear()
        }
    }
};

module.exports = Storager;
