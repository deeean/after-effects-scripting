Object.getOwnPropertyNames = (o: any): string[] => {
  const propertyNames = [];
  for (const name in o) {
    if (Object.prototype.hasOwnProperty.call(o, name)) {
      propertyNames.push(name);
    }
  }

  return propertyNames;
};
