export default class LocalStorage {
  set(key, value) {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
  }
  get(key) {
    const value = localStorage.getItem(key);
    const valueType = value.indexOf('}') > value.indexOf('{') || value.indexOf(']') > value.indexOf('[') ? 'object' : 'string';
    return value ? valueType === 'string' ? value : JSON.parse(value) : null;
  }
  remove(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear()
  }
  // These methods are for backward compatibility with version 1.1.3
  setObject(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getObject(key) {
    return JSON.parse(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : {};
  }
}
