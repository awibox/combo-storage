<div align="center">

![combo-storage](https://repository-images.githubusercontent.com/228675568/0c2f3900-2426-11ea-91c3-ce97fdf2164c)

[![Version](https://img.shields.io/npm/v/combo-storage)](https://www.npmjs.com/package/combo-storage)
[![Build](https://img.shields.io/github/workflow/status/awibox/combo-storage/Release)](https://github.com/awibox/combo-storage/actions)
[![Coverage](https://coveralls.io/repos/github/awibox/combo-storage/badge.svg?branch=master)](https://coveralls.io/github/awibox/combo-storage?branch=master)
[![Minified size](https://img.shields.io/bundlephobia/min/combo-storage)](https://github.com/awibox/combo-storage/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/combo-storage)](https://www.npmjs.com/package/combo-storage)
[![Tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

</div>

## Table of contents
* [Installation](#installation)
* [Getting started](#gettingstarted)
* [Methods for LocalStorage and SessionStorage](#basemetnods)
* [Cookie methods](#cookie)
* [Contributing](#contributing)

<a name="installation"></a>
## Installation
You need to install package.
```bash
npm install combo-storage
```

<a name="gettingstarted"></a>
## Getting started
You should import the required storage to use the package
```js
import { LocalStorage, SeessionStorage, Cookie } from 'combo-storage'
```
Then use the methods of storage. For example:
```js
LocalStorage.set('user', 'awibox');
```

<a name="basemetnods"></a>
## Base methods for LocalStorage and SessionStorage
|Method|LocalStorage|SessionStorage
|------|------------|--------------|
|**set**|```LocalStorage.set(key, value)```|```SessionStorage.set(key, value)```|
|**get**|```LocalStorage.get(key)```|```SessionStorage.get(key)```|
|**remove**|```LocalStorage.remove(key)```|```SessionStorage.remove(key)```|
|**сlear**|```LocalStorage.clear()```|```SessionStorage.clear()```|

**Note:** get and set methods are available for working with objects and arrays.


<a name="cookie"></a>
## Cookie methods
|Method|Example|
|------|------------|
|**set**|```Cookie.set(name, value, days);```|
|**get**|```Cookie.get(name)```|
|**remove**|```Cookie.remove(name)```|

<a name="contributing"></a>
## Contributing
Please read through our [CONTRIBUTING.md](/.github/CONTRIBUTING.md).
