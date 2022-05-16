Object.keys = (o: object): string[] => {
  const keys = [];
  for (const property in o) {
    if (Object.prototype.hasOwnProperty.call(o, property)) {
      keys.push(property);
    }
  }

  return keys;
};
