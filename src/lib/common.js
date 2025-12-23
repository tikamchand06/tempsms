export const simpleIdFromNumber = (number) => {
  return number.replace(/\+/g, "").replace(/\s+/g, "-");
};
