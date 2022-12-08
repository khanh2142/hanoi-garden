export const random = (min: any, max: any) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
