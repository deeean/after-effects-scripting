Array.prototype.forEach = function <T>(
  callbackfn: (value: T, index: number, array: T[]) => void,
  thisArg?: any,
): void {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    callbackfn.call(thisArg, this[i], i, this);
  }
};
