const objectValidator = async (obj: any, keys: string[]) => {
  for (const key of keys) {
    if (!obj[`${key}`]) {
      console.log("key", key);
      return false;
    }
  }
  return true;
};

export { objectValidator };
