
exports.min = function min(array) {
  return (array == undefined || array.length == 0) ? 0 : array.reduce((a, c) => (a > c) ? c : a);
}

exports.max = function max(array) {
  return (array == undefined || array.length == 0) ? 0 : array.reduce((a, c) => (a < c) ? c : a);
}

exports.avg = function avg(array) {
  return (array == undefined || array.length == 0) ? 0 : array.reduce((a, c) => a + c) / array.length;
}
