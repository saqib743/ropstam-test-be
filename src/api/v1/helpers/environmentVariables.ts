const getSalt = (): string => {
  return typeof process.env.SALT === "string"
    ? process.env.SALT
    : "encriptionSalt";
};

const getSecretKey = (): string => {
  return typeof process.env.JWT_KEY === "string" ? process.env.JWT_KEY : "key";
};

export { getSalt, getSecretKey };
