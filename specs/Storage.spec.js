import Storage from '../src/components/Storage';

const testString = 'testString';
const testObject = {
  name: 'object',
  count: 33,
};
const testArray = [1, 2, 3, 4, 5, 6];
let mockStorage = {};
const localStorage = {
  setItem: (key, value) => {
    mockStorage[key] = value;
  },
  getItem: (key) => mockStorage[key],
  removeItem: (key) => {
    mockStorage[key] = null;
  },
  clear: () => {
    mockStorage = {};
  },
};

describe('Storage', () => {
  it('Entry of the value in the storage', () => {
    const component = new Storage(localStorage);
    component.set('string', testString);
    expect(component.get('string')).toEqual(testString);
  });
  it('Entry of the object in the storage', () => {
    const component = new Storage(localStorage);
    component.set('object', testObject);
    expect(component.get('object')).toEqual(testObject);
  });
  it('Entry of the array in the storage', () => {
    const component = new Storage(localStorage);
    component.set('array', testArray);
    expect(component.get('array')).toEqual(testArray);
  });
  it('Deletion of the value from the storage', () => {
    const component = new Storage(localStorage);
    component.set('string', testString);
    component.remove('string');
    expect(component.get('string')).toEqual(null);
  });
  it('Clearing storage', () => {
    const component = new Storage(localStorage);
    component.set('string', testString);
    component.set('object', testObject);
    component.set('array', testArray);
    component.clear();
    expect(component.get('string')).toEqual(null);
    expect(component.get('object')).toEqual(null);
    expect(component.get('array')).toEqual(null);
  });
  it('getObject and setObject backward compatibility', () => {
    const component = new Storage(localStorage);
    component.setObject('object', testObject);
    expect(component.getObject('object')).toEqual(testObject);
  });
  it('getObject for empty key', () => {
    const component = new Storage(localStorage);
    expect(component.getObject('objectTest')).toEqual({});
  });
});
