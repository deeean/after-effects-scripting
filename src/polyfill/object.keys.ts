function keys(o: object): string[] {
  if (o !== Object(o)) {
    throw TypeError('Object.keys called on non-object');
  }

  var ret = [],
    p;
  for (p in o) {
    if (Object.prototype.hasOwnProperty.call(o, p)) {
      ret.push(p);
    }
  }

  return ret;
}

Object.keys = keys;
