function isOutOfBounds(index, array) {
  if (index < 0 || index >= array.length) {
    return true;
  }
  return false;
}

module.exports = isOutOfBounds;
