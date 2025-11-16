declare global {
  interface Array<T> {
    myFilter(
      callbackFn: (value: T, index: number, array: Array<T>) => boolean,
      thisArg: any
    ): Array<T>;
  }
}

if (!Array.prototype.myFilter)
  Array.prototype.myFilter = function (callbackFn, thisArg) {
    const arr = this;
    const length = arr.length;
    const result = [];

    for (let i = 0; i < length; i++) {
      let element = arr[i];
      if (Object.hasOwn(arr, i) && callbackFn.call(thisArg, element, i, arr))
        result.push(element);
    }

    return result;
  };
