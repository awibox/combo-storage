![combo-storage](https://repository-images.githubusercontent.com/228675568/0c2f3900-2426-11ea-91c3-ce97fdf2164c)

## Table of contents
* [Installation](#installation)
* [Getting started](#gettingstarted)
* [Base methods for LocalStorage and SessionStorage](#basemetnods)
* [Additional methods for LocalStorage and SessionStorage](#additionalmetnods)
* [Cookie methods](#cookie)

<a name="installation"></a>
## Installation
You need to install package.
```bash
npm install combo-storage
```

<a name="gettingstarted"></a>
## Getting started
You should import the required storages to use the package
```js
import { LocalStorage, SeessionStorage, Cookie } from 'combo-storage'
```
Then use the methods of storage. For example:
```js
LocalStorage.set('user', 'awibox');
```

<a name="basemetnods"></a>
## Base methods for LocalStorage and SessionStorage
#### set
```js
LocalStorage.set(key, value);
SessionStorage.set(key, value);
```
#### get
```js
LocalStorage.get(key);
SessionStorage.get(key);
```
#### remove
```js
LocalStorage.remove(key);
SessionStorage.remove(key);
```
#### сlear
```js
LocalStorage.clear();
SessionStorage.clear();
```
<a name="additionalmetnods"></a>
## Additional methods for LocalStorage and SessionStorage
You can now save objects and arrays
#### setObject
```js
var object = {
    id: 1,
    value: 'object'
};
LocalStorage.setObject(key, object);
SessionStorage.setObject(key, object);
```
#### getObject
```js
LocalStorage.getObject(key);
SessionStorage.getObject(key);
```
<a name="cookie"></a>
## Cookie methods
#### set
```js
// Options for example
var options = {
    path: '/',
    expires: Date(),
    'max-age': 3600,
    secure: true,
    domain: 'domain.com'
};
Cookie.set(name, value, options);
```
#### get
```js
Cookie.get(name)
```
### remove
```js
Cookie.remove(name)
```
