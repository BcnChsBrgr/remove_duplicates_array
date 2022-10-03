<p>
    <h3 align="center">remove_duplicates_array</h3>
    <br>
    <a href="https://github.com/BcnChsBrgr/remove_duplicates_array/issues/new?labels=bug">Report bug</a> |
    <a href="https://github.com/BcnChsBrgr/remove_duplicates_array/issues/new"> New feature</a> | <a href="https://github.com/BcnChsBrgr/remove_duplicates_array/blob/main/CHANGELOG.md">Change Log</a>
</p>

[![NPM](https://nodei.co/npm/@hinng/remove_duplicates_array.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@hinng/remove_duplicates_array)

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/BcnChsBrgr/remove_duplicates_array.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/BcnChsBrgr/remove_duplicates_array/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/BcnChsBrgr/remove_duplicates_array.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/BcnChsBrgr/remove_duplicates_array/alerts/)
[![Build Status](https://app.travis-ci.com/BcnChsBrgr/remove_duplicates_array.svg?branch=main)](https://app.travis-ci.com/BcnChsBrgr/remove_duplicates_array)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/BcnChsBrgr/remove_duplicates_array/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/BcnChsBrgr/remove_duplicates_array/tree/main)

This is the array that handle duplicate item, either objects are inside the array, or number inside the array.

To test this code you can see the test case in `test/array.test.js`,
and use the `npm test` for trigger the jest

`toArray()`
will make the inputs returning as a array

`toString()`
will return the array as string, like A,B,C,D

```javascript
const removeArrayDuplicate = require("@hinng/remove_duplicates_array");

const array = [1234, 234, 123, 1234];
let test = new removeArrayDuplicate(array);
console.log(test.removeDuplicate()); // return [1234, 234, 123]
```

```javascript
const removeArrayDuplicate = require("@hinng/remove_duplicates_array");

const array = ["AA", "AB", "AC", "AD", "AA"];
let test = new removeArrayDuplicate(array);
console.log(test.removeDuplicate()); // return ['AA', 'AB', 'AC', 'AD']
```

```javascript
const removeArrayDuplicate = require("@hinng/remove_duplicates_array");

const array = [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 1 }];
let test = new removeArrayDuplicate(array);
console.log(test.removeDuplicate()); // return [{a: 1}, {b: 2}, {c: 3}]
```
