export default class Storage {
  constructor(storage) {
    this.storage = storage;
  }

  set(key, value) {
    this.storage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
  }

  get(key) {
    const value = this.storage.getItem(key);
    const condition = value ? value.indexOf('}') > value.indexOf('{') || value.indexOf(']') > value.indexOf('[') : false;
    const valueResult = condition ? JSON.parse(value) : value;
    return value ? valueResult : null;
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  // These methods are for backward compatibility with version 1.1.3
  setObject(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getObject(key) {
    return this.storage.getItem(key) ? JSON.parse(this.storage.getItem(key)) : {};
  }
}
