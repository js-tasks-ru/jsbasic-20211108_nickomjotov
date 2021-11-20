function getMinMax(inputData) {
  let a = inputData.split(" ")
    .filter(el => +el)
    .map(el=>+el)
  return {
    min: Math.min(...a),
    max: Math.max(...a)
  }
}
