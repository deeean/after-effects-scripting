Object.defineProperties = <T>(
  o: T,
  properties: PropertyDescriptorMap & ThisType<any>,
): T => {
  if (o !== Object(o)) {
    throw TypeError('Object.defineProperties called on non-object');
  }

  for (const name in properties) {
    if (Object.prototype.hasOwnProperty.call(properties, name)) {
      Object.defineProperty(o, name, properties[name]);
    }
  }

  return o;
};
