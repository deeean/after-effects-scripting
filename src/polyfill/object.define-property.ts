Object.defineProperty = <T>(
  o: T,
  propertyKey: PropertyKey,
  descriptor: PropertyDescriptor & ThisType<any>,
): T => {
  if (Object.prototype['__defineGetter__'] && 'get' in descriptor) {
    Object.prototype['__defineGetter__'].call(o, propertyKey, descriptor.get);
  }

  if (Object.prototype['__defineSetter__'] && 'set' in descriptor) {
    Object.prototype['__defineSetter__'].call(o, propertyKey, descriptor.set);
  }

  if ('value' in descriptor) {
    o[propertyKey] = descriptor.value;
  }

  return o;
};
