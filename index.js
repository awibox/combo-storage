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
        }
    }
};

module.exports = Storager;
