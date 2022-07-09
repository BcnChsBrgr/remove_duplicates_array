<p>
    <h3 align="center">remove_duplicates_array</h3>
    <br>
    <a href="https://github.com/BcnChsBrgr/remove_duplicates_array/issues">Report bug</a> |
    <a href="https://github.com/BcnChsBrgr/remove_duplicates_array/issues/new"> New feature</a>
</p>

[![NPM](https://nodei.co/npm/@hinng/remove_duplicates_array.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@hinng/remove_duplicates_array)

[![Code Quality: Javascript][lgtm-badge]][lgtm-badge-url]

[![Total alerts][lgtm-alerts]][lgtm-alerts-url]

This is the array that handle duplicate item, either objects are inside the array, or number inside the array.

```javascript
const removeArrayDuplicate = require("@hinng/remove_duplicates_array");

const array = [1234, 234, 123, 1234];
let test = new removeArrayDuplicate(array);
console.log(test.removeDuplicate());
```
