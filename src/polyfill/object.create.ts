function create(
  o: object | null,
  properties?: PropertyDescriptorMap & ThisType<any>,
): any {
  if (typeof o !== 'object') {
    throw TypeError();
  }

  function Constructor() {}
  Constructor.prototype = o;

  var instance = new Constructor();

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
}

Object.create = create;
