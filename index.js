var Storager = {
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
