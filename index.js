(function(){
    function set(key, value) {
        localStorage.setItem(key, value);
    }
    function get(key) {
        localStorage.getItem(key);
    }
    function setObject(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    function getObject(key) {
        JSON.parse(localStorage.getItem(key));
    }
    function remove(key) {
        localStorage.removeItem(key);
    }
})();
