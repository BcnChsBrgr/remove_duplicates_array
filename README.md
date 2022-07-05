# remove_duplicates_array

[![NPM](https://nodei.co/npm/@hinng/remove_duplicates_array.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@hinng/remove_duplicates_array)

This is the array that handle duplicate item, either objects are inside the array, or number inside the array.

```javascript
const removeArrayDuplicate = require("@hinng/remove_duplicates_array");

const array = [1234, 234, 123, 1234];
let test = new removeArrayDuplicate(array);
console.log(test.removeDuplicate());
```
