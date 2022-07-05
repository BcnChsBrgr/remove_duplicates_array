module.exports = class removeArrayDuplicates {
    arr = [];

    constructor(array) {
        if (Array.isArray(array)) {
            this.arr = array;
        }
    }

    removeDuplicate() {
        let _arr = [];
        this.arr.forEach((item) => {
            if(!_arr.some((_item)=> this.equals(_item, item))) {
                _arr.push(item)
            }
        });
        return _arr;
    }

    toString() {
        return ''+this.arr
    }

    toArray() {
        return this.arr
    }

    equals(a, b) {
        if(a instanceof Object && b instanceof Object) {
            const aKeys = Object.keys(a).sort(), bKeys = Object.keys(b).sort()
            if(aKeys.length !== bKeys.length || JSON.stringify(aKeys) !== JSON.stringify(bKeys)) {
                return false
            }
            for(let key of aKeys) {
                if (a[key] !== b[key]) {
                    return false
                }
            }
            return true
        } else {
            return a === b;
        }
    }

}
