function defineProperty<T>(
  o: T,
  p: PropertyKey,
  descriptor: PropertyDescriptor & ThisType<any>,
): T {
  if (Object.prototype['__defineGetter__'] && 'get' in descriptor) {
    Object.prototype['__defineGetter__'].call(o, p, descriptor.get);
  }

  if (Object.prototype['__defineSetter__'] && 'set' in descriptor) {
    Object.prototype['__defineSetter__'].call(o, p, descriptor.set);
  }

  if ('value' in descriptor) {
    o[p] = descriptor.value;
  }

  return o;
}

Object.defineProperty = defineProperty;
