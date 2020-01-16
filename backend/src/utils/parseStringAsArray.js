module.exports = function parseStringArray(arrayAsString) {
  return arrayAsString.split(",").map(item => item.trim());
};
