Object.create = <T>(
  o: object | null,
  properties?: PropertyDescriptorMap & ThisType<any>,
): any => {
  if (typeof o !== 'object') {
    throw TypeError();
  }

  function constructor() {}
  constructor.prototype = o;

  const instance = new constructor();

  if (o) {
    o.constructor = instance;
  }

  if (properties !== undefined) {
    if (properties !== Object(properties)) {
      throw TypeError();
    }

    Object.defineProperties(o, properties);
  }

  return o;
};
