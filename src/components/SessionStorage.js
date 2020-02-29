export default class SessionStorage {
  set(key, value) {
    sessionStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
  }
  get(key) {
    const value = sessionStorage.getItem(key);
    const valueType = value.indexOf('}') > value.indexOf('{') || value.indexOf(']') > value.indexOf('[') ? 'object' : 'string';
    return value ? valueType === 'string' ? value : JSON.parse(value) : null;
  }
  remove(key) {
    sessionStorage.removeItem(key);
  }
  clear() {
    sessionStorage.clear()
  }
  // These methods are for backward compatibility with version 1.1.3
  setObject(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  getObject(key) {
    return JSON.parse(sessionStorage.getItem(key)) ? JSON.parse(sessionStorage.getItem(key)) : {};
  }
}
